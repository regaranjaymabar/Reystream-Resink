document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('replay-list');
    const modal = document.getElementById('video-modal');
    const videoContainer = document.getElementById('video-container');
    const closeBtn = document.querySelector('.close-btn');

   f1Replays.forEach(replay => {
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
            if (replay.videoUrl.includes('youtube.com') || replay.videoUrl.includes('youtu.be')) {
                const videoId = getYouTubeVideoId(replay.videoUrl);
                videoContainer.innerHTML = `<iframe width="100%" height="400" src="https://www.youtube.com/embed/${videoId}?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
            } else {
                videoContainer.innerHTML = `<video controls autoplay><source src="${replay.videoUrl}" type="video/mp4">Your browser does not support the video tag.</video>`;
            }
            modal.classList.add('show');
        });
        container.appendChild(item);
    });

    closeBtn.addEventListener('click', () => {
        modal.classList.remove('show');
        videoContainer.innerHTML = '';
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
            videoContainer.innerHTML = '';
        }
    });

    function getYouTubeVideoId(url) {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length == 11) ? match[2] : null;
    }
});