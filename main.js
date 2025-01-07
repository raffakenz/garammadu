let lirikTimers = []; // Array untuk menyimpan timer ID
let isPlaying = false; // Flag untuk melacak status pemutaran

const audio = document.getElementById('lagu');

function lirikGaramMadu() {
    const lirikData = [
        { text: "Malam chaos ini ku terasa sepi", time: 700 },
        { text: "Ku tak mau sendiri, I need you here with me", time: 4200 },
        { text: "Aku pilih madu, manis kaya kamu", time: 8100 },
        { text: "Ji, ro, lu", time: 13100 },
        { text: "Wanna tell my friends 'bout you", time: 15800 },
        { text: "Tapi tunggu dulu, ku masih meragu", time: 17800 },
        { text: "Kamu menggebu", time: 21800 },
        { text: "Wanna be with you, but jalani dulu ooh", time: 23700 },
        { text: "Wanna be with you", time: 28600 },
        { text: "Sakit dadaku, ku mulai merindu", time: 29600 },
        { text: "Ku bayangkan jika kamu tidur di sampingku", time: 33100 },
        { text: "Di malam yang semu", time: 37100 },
        { text: "Pejamkan mataku", time: 38900 },
        { text: "Ku bayangkan tubuhmu jika di pelukanku", time: 40900 },
        { text: "Sakit dadaku, ku mulai merindu", time: 45800 },
        { text: "Ku bayangkan jika kamu tidur di sampingku", time: 49500 },
        { text: "Di malam yang semu dan kupejamkan mataku", time: 53300 },
        { text: "Ku bayangkan tubuhmu jika di pelukanku", time: 57200 },
    ];

    lirikData.forEach((lirik, index) => {
        const timer = setTimeout(() => {
            if (!isPlaying) return; // Cegah lirik berjalan saat pause
            document.getElementById(`lirik${index + 1}`).innerText = lirik.text;
        }, lirik.time);
        lirikTimers.push(timer);
    });
}

function clearLirikTimers() {
    // Hapus semua timer
    lirikTimers.forEach(clearTimeout);
    lirikTimers = [];
}

function letsPlay() {
    if (!isPlaying) {
        alert('NOTE: Refresh page untuk mengulang lagu. Jika lagu tidak pas, refresh saja. Klik OK untuk mulai.')
        isPlaying = true;
        audio.play();
        if (lirikTimers.length === 0) lirikGaramMadu(); // Jalankan lirik jika belum dimulai
    }
}
