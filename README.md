# CompleteDiscordQuest
Alat Otomatisasi Penyelesaian Misi Discord

## Descriptions

Alat ini mengotomatiskan penyelesaian misi Discord yang memerlukan streaming selama durasi tertentu. Dengan memalsukan data streaming yang diperlukan, alat ini memungkinkan pengguna untuk memenuhi persyaratan misi dengan mudah.

## Fitur

- Secara otomatis mendeteksi misi aktif
- Memalsukan data streaming yang diperlukan
- Melacak kemajuan penyelesaian misi
- Memberikan notifikasi tentang status dan penyelesaian misi
- Memastikan kompatibilitas dengan aplikasi desktop Discord

## Cara Penggunaan

1. **Pengaturan**:
    - Clone repository: `git clone https://github.com/imhunterand/DiscordQuestAutomation.git`
    - Navigasi ke direktori proyek: `cd DiscordQuestAutomation`

2. **Eksekusi**:
    - Buka Discord dan terima misi di bawah Pengaturan Pengguna -> Inventaris Hadiah.
    - Bergabunglah dengan saluran suara.
    - Bergabunglah dengan saluran suara yang sama dengan akun alternatif.
    - Streaming jendela apapun (misalnya Notepad).
    - Tekan `Ctrl+Shift+I` untuk membuka DevTools.
    - Pergi ke tab Console.
    - Tempelkan kode berikut dan tekan enter:
    ```javascript
    fetch('src/main.js').then(response => response.text()).then(code => eval(code));
    ```

3. **Penyelesaian**:
    - Skrip akan memberi notifikasi tentang status dan kemajuan misi.
    - Tetap di saluran suara sampai misi selesai.

## Catatan

- Skrip ini hanya berfungsi di aplikasi desktop Discord.
- Pastikan kamu memiliki setidaknya satu orang lain di saluran suara.

