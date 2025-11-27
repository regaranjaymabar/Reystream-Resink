document.addEventListener('DOMContentLoaded', () => {
    const countdownEl = document.getElementById('countdown');
    const nextRaceTime = new Date('2023-12-01T14:00:00Z').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = nextRaceTime - now;

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