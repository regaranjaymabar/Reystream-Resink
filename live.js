document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('live-video');
    const qualityBtn = document.getElementById('quality-btn');
    const volumeBtn = document.getElementById('volume-btn');
    const fullscreenBtn = document.getElementById('fullscreen-btn');
    const tabBtns = document.querySelectorAll('.tab-btn');
    const raceTitle = document.getElementById('race-title');
    const raceDetails = document.getElementById('race-details');

    let currentCategory = 'motogp';
    updateStream(currentCategory);

    function updateStream(category) {
        if (category === 'motogp') {
            video.src = motogpLiveUrl;
            raceTitle.textContent = 'MotoGP Race Stream';
        } else if (category === 'f1') {
            video.src = f1LiveUrl;
            raceTitle.textContent = 'F1 Race Stream';
        }
        video.load();
    }

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            updateStream(currentCategory);
        });
    });

    qualityBtn.addEventListener('click', () => {
        alert('Quality changed to HD');
    });

    volumeBtn.addEventListener('click', () => {
        video.muted = !video.muted;
        volumeBtn.textContent = video.muted ? '🔇' : '🔊';
    });

    fullscreenBtn.addEventListener('click', () => {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        }
    });
});