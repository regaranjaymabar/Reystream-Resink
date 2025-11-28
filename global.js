document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
});

const motogpLiveUrl = 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8';
const f1LiveUrl = 'https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8';

const motogpSchedules = [
    {
        id: 1,
        title: 'Chang International Circuit, Thailand',
        date: '2026-02-27',
        time: '14:00:00',
        img: 'https://media.gettyimages.com/id/693596866/photo/this-photo-taken-on-may-17-2017-shows-an-overview-of-the-chang-international-circuit-thailands.jpg?s=612x612&w=0&k=20&c=TmnGQxE6mty4x0XVUexKMffbqb_GK0YUav_K79JWArY='
    },
    {
        id: 2,
        title: 'Autodromo Internacional Aryton Senna, Brasil',
        date: '2026-03-20',
        time: '14:00:00',
        img: 'https://preview.redd.it/rtd-challenge-aut%C3%B3dromo-internacional-ayrton-senna-goi%C3%A2nia-v0-5vzvkf9wzgce1.jpeg?auto=webp&s=cc51cb5e666a590ca9ca7c87c9c148479fe6a44b'
    },
    {
        id: 3,
        title: 'Circuit of the Americas, Amerika Serikat',
        date: '2026-03-27',
        time: '14:00:00',
        img: 'https://media.gettyimages.com/id/2148631595/photo/austin-texas-motogp-riders-riding-into-turn-one-during-the-race-of-the-motogp-red-bull-grand.jpg?s=612x612&w=0&k=20&c=TwSA5FRHsJQPGey7PmZuAahsaqcOZDxOpwvuJNKpA8Q='
    },
    {
        id: 4,
        title: 'Lusail International Circuit, Qatar',
        date: '2026-04-10',
        time: '14:00:00',
        img: 'https://media.gettyimages.com/id/2018665626/photo/prima-pramac-racings-italian-rider-michele-pirro-is-silhouetted-against-the-setting-sun-as-he.jpg?s=612x612&w=0&k=20&c=8No0dvR8Thc9Q06gWSH_y2XXF8HNpTfBS6LEoPtYscY='
    },
    {
        id: 5,
        title: 'Circuito de Jerez-Angel Nieto, Spanyol',
        date: '2026-04-24',
        time: '14:00:00',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEOOblhQaWL4ixIMzBLHHLR_x8gYjGdE7K-A&s'
    },
    {
        id: 6,
        title: 'Le Mans Circuit, Prancis',
        date: '2026-05-08',
        time: '14:00:00',
        img: 'https://allalongtheracetrack.co.uk/wp-content/uploads/2021/06/diapositiva2-6.jpg?w=1024'
    },
    {
        id: 7,
        title: 'Circuit de Barcelona-Catalunya, Catalonia',
        date: '2026-05-15',
        time: '14:00:00',
        img: 'https://media.gettyimages.com/id/1401161392/photo/barcelona-spain-start-of-the-motogp-at-circuit-de-barcelona-catalunya-on-june-05-2022-in.jpg?s=612x612&w=0&k=20&c=cCgcOZCHHNQWrsOKMofD1HCgtd-gYRSkizrKBBVxp8A='
    },
    {
        id: 8,
        title: 'Autodromo Internazionale del Mugello, Italia',
        date: '2026-05-29',
        time: '14:00:00',
        img: 'https://media.gettyimages.com/id/1497673440/photo/scarperia-italy-motogp-riders-on-their-warmup-lap-during-the-race-of-the-motogp-gran-premio.jpg?s=612x612&w=0&k=20&c=As_dY4qwUbnvFVj6tu3DSnB4RlldjfoBjPMyLryBXDU='
    },
    {
        id: 9,
        title: 'Balaton Park, Hungaria',
        date: '2026-06-05',
        time: '14:00:00',
        img: 'https://media.gettyimages.com/id/2231037922/photo/riders-compete-during-the-start-of-the-motorcycle-hungarian-moto-gp-grand-prix-at-the-balaton.jpg?s=612x612&w=0&k=20&c=eLpf52wDG0iBuDTtymfFqUoF2_R-l50ccjcvA8-KiHA='
    },
    {
        id: 10,
        title: 'Automotodrom Brno, Republik Ceko',
        date: '2026-06-19',
        time: '14:00:00',
        img: 'https://www.automotodrombrno.cz/content/uploads/2018/08/Masarykuv-okruh-dron-e1535360964114.jpg'
    },
    {
        id: 11,
        title: 'TT Circuit Assen, Belanda',
        date: '2026-06-26',
        time: '14:00:00',
        img: 'https://media.gettyimages.com/id/1501750400/photo/assen-netherlands-race-start-motogp-riders-at-turn-one-during-the-race-of-the-motogp-motul-tt.jpg?s=612x612&w=0&k=20&c=IflkFZ8GpcTpdTHEUH578LAjCO_xwARhWqakojfpzzc='
    },
    {
        id: 12,
        title: 'Sachsenring Circuit, Jerman',
        date: '2026-07-10',
        time: '14:00:00',
        img: 'https://motorsportguides.com/wp-content/uploads/2019/01/sachsenring-aerial.jpg'
    },
    {
        id: 13,
        title: 'Silverstone Circuit, Britania Raya',
        date: '2026-08-07',
        time: '14:00:00',
        img: 'https://media.gettyimages.com/id/2165266975/photo/northampton-england-the-motogp-riders-start-from-the-grid-during-the-motogp-race-during-the.jpg?s=612x612&w=0&k=20&c=yP8lEGe2aS2LJYWOrpOoKWwXv_UMOY_kqQ908HACR0k='
    },
    {
        id: 14,
        title: 'MotorLand Aragon, Aragon',
        date: '2026-08-28',
        time: '14:00:00',
        img: 'https://media.gettyimages.com/id/1498138279/photo/alcaniz-spain-an-aerial-view-of-motorland-aragon-circuit-during-day-one-of-f1-academy-testing.jpg?s=612x612&w=0&k=20&c=J4KIbQVRzuC0uQfnfSeMSIGXRRmqGXXtbKtMQFuuf8A='
    },
    {
        id: 15,
        title: 'Misano World Circuit Marco Simoncelli, San Marino',
        date: '2026-09-11',
        time: '14:00:00',
        img: 'https://resources.motogp.pulselive.com/photo-resources/2023/03/30/ee7c8781-d86c-40aa-b20d-b513119fbc3b/rV6CtUhc.jpg?width=1440&height=810'
    },
    {
        id: 16,
        title: 'Red Bull Ring-Spielberg, Austria',
        date: '2026-09-18',
        time: '14:00:00',
        img: 'https://www.redbullring.com/en/wp-content/uploads/sites/1/fly-images/30207/MJ_230819_MOTOGP_0057-5-scaled-2880x9999.jpg'
    },
    {
        id: 17,
        title: 'Mobility Resort Motegi, Jepang',
        date: '2026-10-01',
        time: '14:00:00',
        img: 'https://cdn.antaranews.com/cache/1200x800/2018/10/sirkuit-motegi.jpg'
    },
    {
        id: 18,
        title: 'Pertamina Mandalika Circuit, Indonesia',
        date: '2026-10-09',
        time: '14:00:00',
        img: 'https://images.bisnis.com/thumb/posts/2022/02/11/1499393/sirkuit-mandalika-drone-1.jpg?w=450&h=237'
    },
    {
        id: 19,
        title: 'Philip Island, Australia',
        date: '2026-10-22',
        time: '14:00:00',
        img: 'https://media.gettyimages.com/id/77318643/photo/phillip-island-australia-a-general-view-of-the-phillip-island-race-track-during-the-2007.jpg?s=612x612&w=0&k=20&c=IpMtXrMK-45xXPZE5TMRdchPLN5ss625F6nrvemVlrY='
    },
    {
        id: 20,
        title: 'Petronas Sepang International Circuit, Malaysia',
        date: '2026-10-30',
        time: '14:00:00',
        img: 'https://resources.motogp.pulselive.com/photo-resources/2023/03/30/d51066bf-2452-49ab-87ce-c9cbcfb87a36/Gd0hAmxD.jpg?width=1440&height=810'
    },
    {
        id: 21,
        title: 'Autodromo Internacional do Algarve, Portugal',
        date: '2026-11-13',
        time: '14:00:00',
        img: 'https://www.promoracing.it/media/circuiti/Portimao-Aerial_1.jpg'
    },
    {
        id: 22,
        title: 'Circuit Ricardo Tormo, Valencia',
        date: '2026-11-20',
        time: '14:00:00',
        img: 'https://multimedia.comunitatvalenciana.com/E720E60289C44BCA95B59869B8E50F70/img/0FF26A747D9242DA9F5DC02C698D16F1/Circuit_Ricardo_Tormo_Foto_Aerea_Noviembre_2020.jpg?responsive'
    }
];

const f1Schedules = [
    {
        id: 1,
        title: 'Australian Grand Prix',
        date: '2026-03-06',
        time: '15:00:00',
        img: 'https://media.gettyimages.com/id/2110187658/photo/melbourne-australia-max-verstappen-of-the-netherlands-driving-the-oracle-red-bull-racing-rb20.jpg?s=612x612&w=0&k=20&c=Fbata0cakpvklMmMmolm3_U5VHRod1lytswUsEDMq38='
    },
    {
        id: 2,
        title: 'Chinese Grand Prix',
        date: '2026-03-13',
        time: '15:00:00',
        img: 'https://media.gettyimages.com/id/2206352439/photo/shanghai-china-a-general-view-as-lewis-hamilton-of-great-britain-driving-the-scuderia-ferrari.jpg?s=612x612&w=0&k=20&c=Gmjh9bVtMQRqXCjdiFXL9CHdw75qbubAYLzm6G6G7Ls='
    },
    {
        id: 3,
        title: 'Japanese Grand Prix',
        date: '2026-03-27',
        time: '15:00:00',
        img: 'https://www.formula1.com/trackside-images/2024/F1_Grand_Prix_of_Japan/2145130256.jpg'
    }, 
    {
        id: 4,
        title: 'Bahrain Grand Prix',
        date: '2026-04-10',
        time: '15:00:00',
        img: 'https://media.gettyimages.com/id/2210094834/photo/bahrain-bahrain-oscar-piastri-of-australia-driving-the-mclaren-mcl39-mercedes-leads-george.jpg?s=612x612&w=0&k=20&c=JVeeLF4m5w11Nec3ortSfeeMPOSjYBV4mPVy6eeT9rI='
    },
    {
        id: 5,
        title: 'Saudi Arabian Grand Prix',
        date: '2026-04-17',
        time: '15:00:00',
        img: 'https://media.gettyimages.com/id/1388047790/photo/jeddah-saudi-arabia-fireworks-are-pictured-over-the-circuit-during-the-f1-grand-prix-of-saudi.jpg?s=612x612&w=0&k=20&c=yteWOO23nBIY0EyIejs8zNnyDRZHRTrjYJPtUbgrjeg='
    },
    {
        id: 6,
        title: 'Miami Grand Prix',
        date: '2026-05-01',
        time: '15:00:00',
        img: 'https://media.gettyimages.com/id/2213372290/photo/miami-florida-a-general-view-of-the-sprint-during-the-f1-grand-prix-of-miami-at-miami.jpg?s=612x612&w=0&k=20&c=IpbKc3EmJw2As9N_Cuw4SG6JVJ4cNdWZsbv_Qf2rt5g='
    },
    {
        id: 7,
        title: 'Canadian Grand Prix',
        date: '2026-05-22',
        time: '15:00:00',
        img: 'https://media.gettyimages.com/id/2156829362/photo/montreal-quebec-a-general-view-of-the-race-action-from-the-hairpin-turn-10-during-the-f1.jpg?s=612x612&w=0&k=20&c=yFvel0WF3QTz4NIdc3cTi-fcJ-PCor5n5yRMW5cZZqE='
    },
    {
        id: 8,
        title: 'Monaco Grand Prix',
        date: '2026-06-05',
        time: '15:00:00',
        img: 'https://media.gettyimages.com/id/2154736854/photo/monte-carlo-monaco-charles-leclerc-of-monaco-driving-the-ferrari-sf-24-leads-oscar-piastri-of.jpg?s=612x612&w=0&k=20&c=tQwAh5DkOj15-a-FrHCgHDloXigtyoG0cgvNHFciiU0='
    },
    {
        id: 9,
        title: 'Barcelona-Catalunya Grand Prix',
        date: '2026-06-12',
        time: '15:00:00',
        img: 'https://media.gettyimages.com/id/2218090972/photo/barcelona-spain-oscar-piastri-of-australia-driving-the-mclaren-mcl39-mercedes-leads-max.jpg?s=612x612&w=0&k=20&c=daq1Q6PmlTIrLs9zBZsejiJJNV5jzz9ccvSS_YdhLug='
    },
    {
        id: 10,
        title: 'Austrian Grand Prix',
        date: '2026-06-26',
        time: '15:00:00',
        img: 'https://resources.motogp.pulselive.com/photo-resources/2024/06/01/4259516b-7595-440a-a64a-fb87aba2d72a/_LGZ1847.jpg?width=1440&height=810'
    },
    {
        id: 11,
        title: 'British Grand Prix',
        date: '2026-07-03',
        time: '15:00:00',
        img: 'https://media.gettyimages.com/id/2161020140/photo/northampton-england-race-winner-lewis-hamilton-of-great-britain-and-mercedes-celebrates-in.jpg?s=612x612&w=0&k=20&c=TutVE50XaotG2fLSmXpp0EdNoFrkOLdyFsbjFDMdwC8='
    },
    {
        id: 12,
        title: 'Belgian Grand Prix',
        date: '2026-07-17',
        time: '15:00:00',
        img: 'https://media.gettyimages.com/id/2164045665/photo/spa-belgium-a-general-view-as-charles-leclerc-of-monaco-driving-the-ferrari-sf-24-leads-the.jpg?s=612x612&w=0&k=20&c=g4Hp5ZcCJC518xRN0E5zYXYe4UZ-At66xbVgAi1zWQc='
    },
    {
        id: 13,
        title: 'Hungarian Grand Prix',
        date: '2026-07-24',
        time: '15:00:00',
        img: 'https://media.gettyimages.com/id/2162890471/photo/budapest-hungary-max-verstappen-of-the-netherlands-driving-the-oracle-red-bull-racing-rb20.jpg?s=612x612&w=0&k=20&c=EEzeGeIaAZHSC9O_6CS-wy2PLrvw0ddA5rNcsuHVoyE='
    },
    {
        id: 14,
        title: 'Dutch Grand Prix',
        date: '2026-08-21',
        time: '15:00:00',
        img: 'https://media.formula1.com/image/upload/t_16by9South/c_lfill,w_3392/q_auto/v1740000000/trackside-images/2025/F1_Grand_Prix_of_Netherlands/2233001380.webp'
    },
    {
        id: 15,
        title: 'Italian Grand Prix',
        date: '2026-09-04',
        time: '15:00:00',
        img: 'https://media.gettyimages.com/id/2169744160/photo/monza-italy-race-winner-charles-leclerc-of-monaco-and-ferrari-poses-for-a-picture-on-the.jpg?s=612x612&w=0&k=20&c=SVKM4XoVAczi0EPjjCiWIN_c8IV7difZSIP650L3n4s='
    },
    {
        id: 16,
        title: 'Spanish Grand Prix',
        date: '2026-09-11',
        time: '15:00:00',
        img: 'https://www.news.gp/i/images/3128/madring-new-f1-circuit_f.jpg'
    },
    {
        id: 17,
        title: 'Azerbaijan Grand Prix',
        date: '2026-09-25',
        time: '15:00:00',
        img: 'https://cdn.williamsf1.tech/images/fnx611yr/production/381414a094cb085f0788649d1fad4b1448bd1a3f-3776x2124.jpg?w=1200&auto=format'
    },
    {
        id: 18,
        title: 'Singapore Grand Prix',
        date: '2026-10-09',
        time: '15:00:00',
        img: 'https://media.gettyimages.com/id/2239344812/photo/singapore-singapore-george-russell-of-great-britain-driving-the-mercedes-amg-petronas-f1-team.jpg?s=612x612&w=0&k=20&c=pH4s2LV5LQbpVpApk4ROLbNWfQKEi7p_7B3i2nrWjwc='
    },
    {
        id: 19,
        title: 'United States Grand Prix',
        date: '2026-10-23',
        time: '15:00:00',
        img: 'https://media.gettyimages.com/id/2242054649/photo/austin-texas-max-verstappen-of-the-netherlands-driving-the-oracle-red-bull-racing-rb21-leads.jpg?s=612x612&w=0&k=20&c=ZuO_qvKAdsis1pxbTS-oWKfk9CpcgqqFD6-ZyXKqav8='
    },
    {
        id: 20,
        title: 'Mexican Grand Prix',
        date: '2026-10-30',
        time: '15:00:00',
        img: 'https://www.blackbookmotorsport.com/wp-content/uploads/2023/11/f1-extends-mexico-city-grand-prix-contract-2025.jpg'
    },
    {
        id: 21,
        title: 'Brazilian Grand Prix',
        date: '2026-11-06',
        time: '15:00:00',
        img: 'https://media.gettyimages.com/id/2182679071/photo/sao-paulo-brazil-carlos-sainz-of-spain-driving-the-ferrari-sf-24-on-track-during-the-f1-grand.jpg?s=612x612&w=0&k=20&c=6ule0HRgfRnH1SfC3DeGHRAFcr9CChq0hf8KJ68owuk='
    },
    {
        id: 22,
        title: 'Las Vegas Grand Prix',
        date: '2026-11-19',
        time: '15:00:00',
        img: 'https://media.gettyimages.com/id/2247872341/photo/las-vegas-nevada-lando-norris-of-great-britain-driving-the-mclaren-mcl39-mercedes-on-track.jpg?s=612x612&w=0&k=20&c=W5CC0WN23cNcBc2VqZSRu0xujqMRpB2CKx3bPYXD7w8='
    },
    {
        id: 23,
        title: 'Qatar Grand Prix',
        date: '2026-11-27',
        time: '15:00:00',
        img: 'https://kms.nakhal.com/Images/675x352xo/STADIUM240705113007488~.jpg'
    },
    {
        id: 24,
        title: 'Abu Dhabi Grand Prix',
        date: '2026-12-04',
        time: '15:00:00',
        img: 'https://media.gettyimages.com/id/2188275031/photo/topshot-mclarens-british-driver-lando-norris-drives-during-the-abu-dhabi-formula-one-grand.jpg?s=612x612&w=0&k=20&c=Uq1DipKk8hczzY6vGbPgky13QAs0gtuXUmrLpBoU9g4='
    }
];

const motogpReplays = [
    {
        title: 'MotoGP Full Race - Indonesian GP',
        duration: '1h 5min',
        date: 'Nov 20, 2022',
        thumbnail: 'https://media.gettyimages.com/id/1386639684/photo/lombok-indonesia-riders-compete-under-heavy-rain-during-the-motogp-grand-prix-of-indonesia-at.jpg?s=612x612&w=0&k=20&c=abF0ZwwzVLtvgNJem1Q3nofi2wrJsw3Hw6MF89SK3Kk=',
        videoUrl: 'https://www.youtube.com/live/fE_xxKiCHO0?si=mr5lkp4zGiRapxf9'
    },
    {
        title: 'MotoGP Full Race - Australian GP',
        duration: '1h 20min',
        date: 'Nov 18, 2022',
        thumbnail: 'https://media.gettyimages.com/id/1433732462/photo/phillip-island-australia-francesco-bagnaia-of-italy-and-ducati-lenovo-team-leads-the-race.jpg?s=612x612&w=0&k=20&c=iEBAMPfq_QNkq89wPP034A0xWVGHNmDCVLKkbxqRg8E=',
        videoUrl: 'https://www.youtube.com/live/BeVsG4e-WBk?si=C-dIhZY7IO_j3KCy'
    },
];

const f1Replays = [
    {
        title: 'F1 Highlights - Hngarian GP',
        duration: '8min 15sec',
        date: 'Nov 15, 2025',
        thumbnail: 'https://media.gettyimages.com/id/2228337493/photo/budapest-hungary-race-winner-lando-norris-of-great-britain-and-mclaren-sprays-the-victory.jpg?s=612x612&w=0&k=20&c=Ci8YwCiKO3N548s1qZyCTWYrInL7wBBssWDSB9HPwzc=',
        videoUrl: 'https://youtu.be/hrPtK5D5yn4?si=oCI_kyO8fYDUjidS'
    },
    {
        title: 'F1 Highlight - Australian GP',
        duration: '13min',
        date: 'Nov 12, 2025',
        thumbnail: 'https://media.gettyimages.com/id/2204808610/photo/max-verstappen-of-the-netherlands-and-oracle-red-bull-racing-lando-norris-of-great-britain.jpg?s=612x612&w=0&k=20&c=en17MGSecApga4NjnslORSpj3lsVbfefZ4yxsY0whrM=',
        videoUrl: 'https://youtu.be/md9-jG4RzXs?si=AcCmNHvf4QCYqd5p'
    },
];

document.addEventListener('DOMContentLoaded', () => {
    rendermotogpSchedules();
    renderf1Schedules();
});


document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    if (themeToggle) {
        themeToggle.textContent = body.classList.contains('light-mode') ? '☀️' : '🌙';

        themeToggle.addEventListener('click', () => {
            body.classList.toggle('light-mode');
            themeToggle.textContent = body.classList.contains('light-mode') ? '☀️' : '🌙';
            localStorage.setItem('theme', body.classList.contains('light-mode') ? 'light' : 'dark');
        });

        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            body.classList.add('light-mode');
            themeToggle.textContent = '☀️';
        } else {
            body.classList.remove('light-mode');
            themeToggle.textContent = '🌙';
        }
    }
});
