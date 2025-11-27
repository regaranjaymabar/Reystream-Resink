document.addEventListener('DOMContentLoaded', () => {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const container = document.getElementById('replay-list');
    let currentCategory = 'motogp';

    function populateGrid(category) {
        container.innerHTML = '';
        const data = category === 'motogp' ? motogpReplays : f1Replays;
        data.forEach(replay => {
            const item = document.createElement('div');
            item.className = 'replay-item';
            item.innerHTML = `
                <img src="${replay.thumbnail}" alt="${replay.title}">
                <div class="play-icon">▶</div>
                <div class="info">
                    <h3>${replay.title}</h3>
                    <p>${replay.duration} | ${replay.date}</p>
                </div>
            `;
            item.addEventListener('click', () => {
                alert(`Playing: ${replay.title}`);
            });
            container.appendChild(item);
        });
    }
    populateGrid(currentCategory);
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            populateGrid(currentCategory);
        });
    });
});