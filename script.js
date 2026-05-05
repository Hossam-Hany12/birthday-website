// 1. إعدادات الألوان والوقت للـ Confetti
var colors = ["#8b5642", "#6a696b"];
var end = Date.now() + 15000;

function frame() {
    confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
    });
    confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
    });

    if (Date.now() < end) {
        requestAnimationFrame(frame);
    }
}

// بدء الـ Confetti بعد 6 ثوانٍ
setTimeout(frame, 6000);

// 2. تغيير محتوى الـ Body بعد 8 ثوانٍ وتشغيل باقي الوظائف
setTimeout(function() {
    // حقن الـ HTML بالكامل
    document.body.innerHTML = `
    <div id="wrapper">
        <div class="flag__birthday">
            <img src="./images/1.png" alt="" width="350" class="flag__left">
            <img src="./images/1.png" alt="" width="350" class="flag__right">
        </div>
        <div class="content">
            <div class="left">
                <div class="title">
                    <h1 class="happy">
                        <span style="--t: 4s;    font-family: 'Luckiest Guy', cursive;">H</span><span style="--t: 4.2s;    font-family: 'Luckiest Guy', cursive;">a</span><span style="--t: 4.4s;    font-family: 'Luckiest Guy', cursive;">p</span><span style="--t: 4.6s;    font-family: 'Luckiest Guy', cursive;">p</span><span style="--t: 4.8s;    font-family: 'Luckiest Guy', cursive;">y</span>
                    </h1>
                    <h1 class="birthday">
                        <span style="--t: 5s;    font-family: 'Luckiest Guy', cursive;">B</span><span style="--t: 5.2s;    font-family: 'Luckiest Guy', cursive;">i</span><span style="--t: 5.4s;    font-family: 'Luckiest Guy', cursive;">r</span><span style="--t: 5.6s;    font-family: 'Luckiest Guy', cursive;">t</span><span style="--t: 5.8s;    font-family: 'Luckiest Guy', cursive;">h</span><span style="--t: 6s;    font-family: 'Luckiest Guy', cursive;">d</span><span style="--t: 6.2s;    font-family: 'Luckiest Guy', cursive;">a</span><span style="--t: 6.4s;    font-family: 'Luckiest Guy', cursive;">y</span>
                    </h1>
                    <div class="hat"><img src="./images/hat.png" alt="" width="130"></div>
                </div>
                <div class="date__of__birth"><span></span></div>
                <div class="btn">
                    <button id="btn__letter">
                        <div class="mail">Click Here Hams <i class="fa-regular fa-envelope"></i></div>
                    </button>
                </div>
            </div>
            <div class="right">
                <div class="box__account">
                    <div class="image"><img src="./images/unnamed.png" alt=""></div>
                    <div class="name"><i class="fa-solid fa-heart"></i><span>Dear Mehwish</span><i class="fa-solid fa-heart"></i></div>
                </div>
            </div>
        </div>
        <div class="boxMail">
            <i class="fa-solid fa-xmark"></i>
            <div class="boxMail-container">
                <div class="card1">
                    <div class="userImg"><img src="images/unnamed.png" alt=""></div>
                    <h4 class="username">To: Hams 💖<span class="underline"></span></h4>
                    <h3>Happy Birthday</h3>
                </div>
                <div class="card2">
                    <div class="card2-content">
                        <h3>To You!</h3>
                        <h2>"On this special day, I want you to know how much light you bring into the lives of everyone around you. You aren’t just a year older; you’re a year more incredible, a year wiser, and a year more loved. May your day be as beautiful, kind, and radiant as your soul. Happy Birthday!"</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>`;

    document.body.style.backgroundColor = '#ffffff';

    // إعداد متغيرات النصوص
    let datetxt = "7 March";
    let datatxtletter = "My love. You are a very special girl. I always silently thank you for coming into my life. Today, I wish you all the best, lots of health, and lots of joy. I always hope we will celebrate many more birthdays like this together. Happy birthday to you.💕";
    let titleLetter = "To you";
    
    let charArrDate = datetxt.split('');
    let charArrDateLetter = datatxtletter.split('');
    let currentIndex = 0;
    let currentIndexLetter = 0;

    // الحصول على العناصر بعد إنشائها
    let date__of__birth = document.querySelector(".date__of__birth span");
    let mailBoxBtn = document.querySelector('#btn__letter');
    let boxmail = document.querySelector('.boxMail');
    let closeBtn = document.querySelector('.fa-xmark');

    // تشغيل كتابة التاريخ بعد 4 ثوانٍ من ظهور الصفحة (إجمالي 12 ثانية)
    setTimeout(function () {
        let timeDatetxt = setInterval(function () {
            if (currentIndex < charArrDate.length) {
                date__of__birth.textContent += charArrDate[currentIndex];
                currentIndex++;
            } else {
                let i = document.createElement("i");
                i.className = "fa-solid fa-star";
                document.querySelector(".date__of__birth").prepend(i);
                document.querySelector(".date__of__birth").appendChild(i.cloneNode());
                clearInterval(timeDatetxt);
            }
        }, 100);
    }, 4000);

    // تفاعل الضغط على الرسالة
    if (mailBoxBtn) {
        mailBoxBtn.onclick = function () {
            boxmail.classList.add('active');
            // هنا يمكنك إضافة منطق الكتابة التلقائية داخل الرسالة إذا أردت
        };
    }

    if (closeBtn) {
        closeBtn.onclick = function () {
            boxmail.classList.remove('active');
        };
    }

}, 8000);
