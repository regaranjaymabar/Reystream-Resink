document.addEventListener("DOMContentLoaded", () => {

    const now = new Date();

    const nextMotoGP = motogpSchedules
        .filter(race => {
            return new Date(
                race.date + "T" + race.time
            ) > now;
        })
        .sort((a, b) => {
            return new Date(a.date + "T" + a.time) -
                   new Date(b.date + "T" + b.time);
        })[0];

    const nextF1 = f1Schedules
        .filter(race => {
            return new Date(
                race.date + "T" + race.time
            ) > now;
        })
        .sort((a, b) => {
            return new Date(a.date + "T" + a.time) -
                   new Date(b.date + "T" + b.time);
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

    const container =
        document.getElementById(containerId);

    let liveUrl = "live.html";
    if (category === "Formula 1") {
        liveUrl = "live.html?category=f1";
    }
    if (category === "MotoGP") {
        liveUrl = "live.html?category=motogp";
    }

const currentSession = getSessionName(race.date);
container.innerHTML = `
    <div class="next-race-card">
        <img src="${race.img}" alt="${race.title}">
        
        <div class="race-info">
            <span class="race-series">${category}</span>
            <h3>${race.title}</h3>
            
            <div class="race-meta" style="color: #bdbdbd; font-size: 0.95rem; margin-bottom: 0.8rem; font-weight: 500;">
                <span style="color: white;">Next Session:</span> ${currentSession}
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

    const countdownEl =
        container.querySelector(".countdown");

    const raceTime = new Date(
        race.date + "T" + race.time
    ).getTime();
    
    function updateCountdown() {

    const now = new Date().getTime();
    const distance = raceTime - now;

    const liveBtn =
        document.getElementById(
            `live-btn-${race.id}`
        );

    if (distance <= 999999999) {

        countdownEl.innerHTML =
            "🏁 Race Started!";

        liveBtn.style.display =
            "inline-flex";

        return;
    }

    liveBtn.style.display =
        "none";

    const days =
        Math.floor(
            distance /
            (1000 * 60 * 60 * 24)
        );

    const hours =
        Math.floor(
            (distance %
                (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        );

    const minutes =
        Math.floor(
            (distance %
                (1000 * 60 * 60)) /
            (1000 * 60)
        );

    const seconds =
        Math.floor(
            (distance %
                (1000 * 60)) /
            1000
        );
    countdownEl.innerHTML =
        `${days}d ${hours}h ${minutes}m ${seconds}s`;
}


    updateCountdown();
    setInterval(updateCountdown, 1000);
}