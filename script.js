// Отримуємо елементи
let resBtn = document.getElementById("reservation");  // Кнопка відкриття
let modal = document.getElementById("myModal");       // Модальне вікно
let overlay = document.getElementById("overlay");     // Затемнений фон
let closeBtn = document.querySelector(".close");      // Кнопка закриття

// Відкриття модального вікна
resBtn.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "block";
    overlay.style.display = "block";
});

// Закриття при натисканні на "X"
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    overlay.style.display = "none";
});

// Закриття при кліку на затемнений фон
overlay.addEventListener("click", () => {
    modal.style.display = "none";
    overlay.style.display = "none";
});


// // Плавний перехід до секцій
document.querySelectorAll('.nav-menu a').forEach(anchor => {
         anchor.addEventListener('click', function (e) {
        e.preventDefault();

         const targetId = this.getAttribute('href').substring(1); // Отримуємо id секції
         const targetSection = document.getElementById(targetId);

         targetSection.scrollIntoView({
             behavior: 'smooth'
        });
     });
 });





 // Обробка бронювання
 document.querySelector(".booking form").addEventListener("submit", function(event) {
    event.preventDefault(); // Зупиняє стандартну відправку форми

     const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
     const date = document.getElementById("date").value;
     const time = document.getElementById("time").value;

     if (name && phone && date && time) {
         alert("Бронювання успішно створено!");
         // Тут можна додати код для реальної обробки даних (відправка на сервер, збереження в базі даних і т.д.)
    } else {
         alert("Будь ласка, заповніть всі поля.");
     }
 });

 // Додавання нового відгуку
 document.querySelector(".review-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Зупиняє стандартну відправку форми

     const reviewText = document.getElementById("review-text").value;

     if (reviewText) {
                const reviewsList = document.querySelector(".reviews-list");

        const newReview = document.createElement("div");
         newReview.classList.add("review");

         const newReviewText = document.createElement("p");
        newReviewText.innerHTML = `<strong>Новий відгук:</strong> ${reviewText}`;

        newReview.appendChild(newReviewText);
        reviewsList.appendChild(newReview);

         document.getElementById("review-text").value = ""; // Очищає поле введення після відправки
        alert("Ваш відгук додано!");
    } else {
         alert("Будь ласка, введіть текст відгуку.");
    }
});
