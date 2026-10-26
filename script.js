document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("beta-form");
  const modal = document.getElementById("success-modal");
  const closeModalBtn = document.querySelector(".close-modal");
  const scrollBtns = document.querySelectorAll(".scroll-to-cta");

  // Имитация отправки формы и вызов модалки
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    modal.classList.add("active");
    form.reset();
  });

  // Закрытие модального окна
  closeModalBtn.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  // Закрытие модалки при клике на оверлей
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });

  // Плавный скролл по кнопке
  scrollBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      document.getElementById("cta").scrollIntoView({ behavior: "smooth" });
    });
  });
});
