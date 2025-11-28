document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('motogp-list');
    motogpSchedules.forEach(schedule => {
        const card = document.createElement('div');
        card.className = 'schedule-card';
        card.innerHTML = `
            <img src="${schedule.img}" alt="${schedule.title}">
            <div class="info">
                <h3>${schedule.title}</h3>
                <p>${schedule.date}</p>
                <p class="countdown" id="countdown-${schedule.id}">Loading...</p>
            </div>
        `;
        container.appendChild(card);

        const countdownEl = card.querySelector('.countdown');
        const raceTime = new Date(schedule.date + 'T' + schedule.time).getTime();

        function updateCountdown() {
            const now = new Date().getTime();
            const distance = raceTime - now;

            if (distance > 0) {
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);
                countdownEl.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
            } else {
                countdownEl.textContent = 'Race Started!';
            }
        }

        setInterval(updateCountdown, 1000);
        updateCountdown();
    });
});
