document.addEventListener('DOMContentLoaded', () => {
    // KITA AMBIL BUNGKUS LUARNYA (Bukan videonya langsung)
    const videoContainer = document.querySelector('.video-container');
    const tabBtns = document.querySelectorAll('.tab-btn');
    const raceTitle = document.getElementById('race-title');
    
    let hls = null;
    let player = null;

    // 1. Ekstrak ID YouTube
    function getYouTubeID(url) {
        if (!url) return null;
        const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|live\/)([^#\&\?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    }

    // 2. FUNGSI SUPER AMAN: Hapus sampai akar, buat tag <video> baru yang fresh!
    function resetVideoElement() {
        if (player) {
            player.destroy();
            player = null;
        }
        if (hls) {
            hls.destroy();
            hls = null;
        }
        
        // Buang semua "sampah" sisa Plyr/YouTube, ganti dengan tag video suci dari nol
        videoContainer.innerHTML = '<video id="live-video" playsinline controls></video>';
        
        // Kembalikan elemen video yang baru ini ke sistem
        return document.getElementById('live-video');
    }

    // 3. PROSES LOAD STREAM
    function loadStream(url) {
        const video = resetVideoElement(); // Dapatkan tag video yang baru dan bersih

        // Jika link kosong
        if (!url || url.trim() === "") {
            player = new Plyr(video, { controls: ['play-large'] });
            return;
        }

        // JIKA YOUTUBE
        if (url.includes('youtube.com') || url.includes('youtu.be')) {
            const ytId = getYouTubeID(url);
            
            player = new Plyr(video, { 
                controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'settings', 'fullscreen'],
                settings: ['speed'] 
            });

            if (ytId) {
                player.source = { type: 'video', sources: [{ src: ytId, provider: 'youtube' }] };
            }
        } 
        
        // JIKA M3U8 (HLS)
        else {
            if (Hls.isSupported()) {
                hls = new Hls({ enableWorker: true, lowLatencyMode: true });
                hls.loadSource(url);
                hls.attachMedia(video); // Menempel ke tag video yang fresh!

                hls.on(Hls.Events.MANIFEST_PARSED, function (_, data) {
                    const qualities = data.levels.map(level => level.height);
                    
                    player = new Plyr(video, {
                        controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'settings', 'fullscreen'],
                        settings: ['quality', 'speed'],
                        quality: {
                            default: qualities[qualities.length - 1],
                            options: qualities,
                            forced: true,
                            onChange: (quality) => {
                                hls.levels.forEach((level, index) => {
                                    if (level.height === quality) hls.currentLevel = index;
                                });
                            }
                        }
                    });
                });

                hls.on(Hls.Events.ERROR, function (event, data) {
                    if (data.fatal && !player) {
                        player = new Plyr(video, { controls: ['play-large'] });
                    }
                });

            } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
                video.src = url;
                player = new Plyr(video);
            }
        }
    }

    // 4. UPDATE TAB STREAM
    function updateStream(category) {
        if (category === 'motogp') {
            raceTitle.textContent = 'MotoGP Race Stream';
            loadStream(typeof motogpLiveUrl !== 'undefined' ? motogpLiveUrl : ''); 
        } else {
            raceTitle.textContent = 'F1 Race Stream';
            loadStream(typeof f1LiveUrl !== 'undefined' ? f1LiveUrl : ''); 
        }
    }

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            
            btn.classList.add('active');
            const category = btn.dataset.category;
        
            updateStream(category);

            const newUrl = new URL(window.location);
            newUrl.searchParams.set('category', category);
            window.history.pushState({}, '', newUrl);
        });
    });

    const params = new URLSearchParams(window.location.search);
    const selectedCategory = params.get("category") || "motogp";
    updateStream(selectedCategory);

    tabBtns.forEach(btn => {
        btn.classList.toggle("active", btn.dataset.category === selectedCategory);
    });
});