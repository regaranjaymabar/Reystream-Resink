document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('schedule-list');
    schedules.forEach(schedule => {
        const card = document.createElement('div');
        card.className = 'schedule-card';
        card.innerHTML = `
            <img src="${schedule.img}" alt="${schedule.title}">
            <h3>${schedule.title}</h3>
            <p>${schedule.date}</p>
            <p>Countdown: ${schedule.countdown}</p>
        `;
        container.appendChild(card);
    });
});