function displayAnniversaryWish() {
    const annivDate = document.getElementById('annivDate').value;
    const resultElement = document.getElementById('result');
    const messageElement = document.getElementById('message');

    if (!annivDate) {
        resultElement.textContent = "Silakan pilih tanggal yang valid!";
        messageElement.textContent = "";
        return;
    }

    const today = new Date();
    const anniversary = new Date(annivDate);

    anniversary.setFullYear(today.getFullYear());

    if (anniversary < today) {
        anniversary.setFullYear(today.getFullYear() + 1);
    }

    const timeDifference = anniversary - today;
    const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    resultElement.textContent = `Hari tersisa hingga anniversary kalian: ${daysLeft} hari`;

    if (daysLeft === 0) {
        messageElement.innerHTML = `
            <strong>Selamat Anniversary, Sayang!</strong> <br> 
            Mamas mau banyak banyak terimakasih sama kamuuu sayangg, mas sadaaaarr banget kalo mas masih buaanyakk kurangnya buat kamu.
            Mas lagi berusaha buat ngubah hal yg bikin kamu badmood, walopun kita sering berantem, sering marahan, sama aku terus ya sayang.
            Aku minta maaf sama kamuu, kalo mas masih banyaaakk banget kurangnya buat ade. Tiap hubungan pasti banyak badainya, banyak ujian buat masing masing kita, tinggal gimana caranya kita ngadepin itu semua sampe jadi yg terbaik ya sayangg.
            I love you zahfaaa... ❤️
        `;
    } else {
        messageElement.textContent = "";
    }
}

function playVideo() {
    const videoContainer = document.getElementById('videoContainer');
    const video = document.getElementById('anniversaryVideo');

    // Tampilkan container video dan mulai putar video
    videoContainer.classList.remove('hidden');
    video.play();
}
