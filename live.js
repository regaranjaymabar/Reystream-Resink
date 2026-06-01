document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('live-video');
    const tabBtns = document.querySelectorAll('.tab-btn');
    const raceTitle = document.getElementById('race-title');
    let hls = null;
    const player = new Plyr(video, {
        controls: [
            'play-large',
            'play',
            'progress',
            'current-time',
            'mute',
            'volume',
            'settings',
            'fullscreen'
        ],
        settings: ['quality', 'speed'],
        speed: {
            selected: 1,
            options: [0.5, 0.75, 1, 1.25, 1.5, 2]
        }
    });

    function destroyHls() {
        if (hls) {
            hls.destroy();
            hls = null;
        }
    }

    function loadStream(url) {
        destroyHls();
        if (Hls.isSupported()) {
            hls = new Hls({
                enableWorker: true,
                lowLatencyMode: true
            });
            hls.loadSource(url);
            hls.attachMedia(video);
            hls.on(Hls.Events.MANIFEST_PARSED, () => {
            video.play().catch(() => {});
            });
            hls.on(Hls.Events.MANIFEST_PARSED, (_, data) => {
                const qualities = data.levels.map(
                    level => level.height
                );
                player.source = {
                    type: 'video',
                    sources: [
                        {
                            src: url,
                            type: 'application/x-mpegURL'
                        }
                    ]
                };
                if (qualities.length) {
                    player.config.quality = {
                        default: qualities[qualities.length - 1],
                        options: qualities,
                        forced: true,
                        onChange: quality => {
                            hls.levels.forEach((level, index) => {
                                if (level.height === quality) {
                                    hls.currentLevel = index;
                                }
                            });
                        }
                    };
                }
            });
        } else if (
            video.canPlayType('application/vnd.apple.mpegurl')
        ) {
            video.src = url;
        }
    }

    function updateStream(category) {
        if (category === 'motogp') {
            raceTitle.textContent =
                'MotoGP Race Stream';
            loadStream(motogpLiveUrl);
        } else {
            raceTitle.textContent =
                'F1 Race Stream';
            loadStream(f1LiveUrl);
        }
    }

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b =>
                b.classList.remove('active')
            );
            btn.classList.add('active');
            updateStream(
                btn.dataset.category
            );
        });
    });
    updateStream('motogp');
});