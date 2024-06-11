export function getQuest(QuestsStore) {
    return [...QuestsStore.quests.values()].find(x => x.userStatus?.enrolledAt && !x.userStatus?.completedAt && new Date(x.config.expiresAt).getTime() > Date.now());
}

export function spoofStream(ApplicationStreamingStore, quest) {
    let pid = Math.floor(Math.random() * 30000) + 1000;
    ApplicationStreamingStore.getStreamerActiveStreamMetadata = () => ({
        id: quest.config.applicationId,
        pid,
        sourceName: null
    });
}

export function trackProgress(FluxDispatcher, quest) {
    let secondsNeeded = quest.config.streamDurationRequirementMinutes * 60;
    let fn = data => {
        let progress = data.userStatus.streamProgressSeconds;
        console.log(`Kemajuan misi: ${progress}/${secondsNeeded}`);

        if (progress >= secondsNeeded) {
            console.log("Misi selesai!");
            FluxDispatcher.unsubscribe("QUESTS_SEND_HEARTBEAT_SUCCESS", fn);
        }
    };
    FluxDispatcher.subscribe("QUESTS_SEND_HEARTBEAT_SUCCESS", fn);
}

export function notifyUser(message) {
    console.log(message);
}
