import { getQuest, spoofStream, trackProgress, notifyUser } from './utils.js';

let wpRequire;
window.webpackChunkdiscord_app.push([[Math.random()], {}, (req) => { wpRequire = req; }]);

let ApplicationStreamingStore = Object.values(wpRequire.c).find(x => x?.exports?.default?.getStreamerActiveStreamMetadata).exports.default;
let QuestsStore = Object.values(wpRequire.c).find(x => x?.exports?.default?.getQuest).exports.default;
let FluxDispatcher = Object.values(wpRequire.c).find(x => x?.exports?.default?.flushWaitQueue).exports.default;

let quest = getQuest(QuestsStore);
let isApp = navigator.userAgent.includes("Electron/");
if (!isApp) {
    notifyUser("Ini tidak lagi berfungsi di browser. Gunakan aplikasi desktop!");
} else if (!quest) {
    notifyUser("Kamu tidak memiliki misi yang belum selesai!");
} else {
    spoofStream(ApplicationStreamingStore, quest);
    trackProgress(FluxDispatcher, quest);
    notifyUser(`Streamingmu dipalsukan ke ${quest.config.applicationName}. Tetap di vc selama ${Math.ceil(quest.config.streamDurationRequirementMinutes - (quest.userStatus?.streamProgressSeconds ?? 0) / 60)} menit lagi.`);
    notifyUser("Ingat bahwa kamu perlu setidaknya 1 orang lain di vc!");
}
