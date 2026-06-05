document.addEventListener("DOMContentLoaded", () => {
    const now = new Date();

    // [BARU] Tambahkan buffer waktu: 3 Hari (dalam milidetik)
    // 3 hari = 3 * 24 jam * 60 menit * 60 detik * 1000 milidetik
    const END_WEEKEND_BUFFER = 3 * 24 * 60 * 60 * 1000;

    const nextMotoGP = motogpSchedules
        .filter(race => {
            const raceStartTime = new Date(race.date + "T" + race.time).getTime();
            // Jadwal tidak akan hilang sampai 3 hari setelah waktu mulainya (hari Jumat)
            return (raceStartTime + END_WEEKEND_BUFFER) > now.getTime();
        })
        .sort((a, b) => {
            return new Date(a.date + "T" + a.time) - new Date(b.date + "T" + b.time);
        })[0];

    const nextF1 = f1Schedules
        .filter(race => {
            const raceStartTime = new Date(race.date + "T" + race.time).getTime();
            // Jadwal tidak akan hilang sampai 3 hari setelah waktu mulainya
            return (raceStartTime + END_WEEKEND_BUFFER) > now.getTime();
        })
        .sort((a, b) => {
            return new Date(a.date + "T" + a.time) - new Date(b.date + "T" + b.time);
        })[0];

    renderRace(
        nextMotoGP,
        "MotoGP",
        "next-motogp"
    );

    renderRace(
        nextF1,
        "Formula 1",
        "next-f1"
    );
});

function renderRace(race, category, containerId) {
    if (!race) return;

    const container = document.getElementById(containerId);

    let liveUrl = "live.html";
    if (category === "Formula 1") {
        liveUrl = "live.html?category=f1";
    }
    if (category === "MotoGP") {
        liveUrl = "live.html?category=motogp";
    }

    // Pastikan fungsi getSessionName ada di global.js atau definisikan di sini
    const currentSession = typeof getSessionName === "function" ? getSessionName(race.date) : "Weekend Session";
    
    container.innerHTML = `
        <div class="next-race-card">
            <img src="${race.img}" alt="${race.title}">
            
            <div class="race-info">
                <span class="race-series">${category}</span>
                <h3>${race.title}</h3>
                
                <div class="race-meta" style="color: #bdbdbd; font-size: 0.95rem; margin-bottom: 0.8rem; font-weight: 500;">
                    <span style="color: white;">Sesi Berlangsung:</span> ${currentSession}
                </div>

                <div class="countdown" id="countdown-${race.id}">
                    Loading...
                </div>
            </div>

            <div class="race-buttons">
                <a href="${liveUrl}" id="live-btn-${race.id}" class="live-btn">
                    ▶ Watch Live
                </a>
            </div>
        </div>
    `;

    const countdownEl = container.querySelector(".countdown");
    const raceTime = new Date(race.date + "T" + race.time).getTime();
    
    function updateCountdown() {
        const nowTime = new Date().getTime();
        const distance = raceTime - nowTime;
        const liveBtn = document.getElementById(`live-btn-${race.id}`);

        if (distance <= 0) {
            // Karena sekarang jadwalnya bertahan 3 hari, 
            // selama 3 hari itu tulisan ini akan terus muncul dan tombol Live akan aktif!
            countdownEl.innerHTML = "🏁 Race Weekend Started!";
            liveBtn.style.display = "inline-flex";
            return;
        }

        liveBtn.style.display = "none";

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        countdownEl.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    updateCountdown();
    // Menyimpan ID interval jika kamu mau membersihkannya nanti (praktik yang bagus)
    const intervalId = setInterval(updateCountdown, 1000);
}