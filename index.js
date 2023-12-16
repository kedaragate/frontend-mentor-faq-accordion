const container = document.querySelector(".container");
const plusIcon = document.querySelector(".plus-icon");
const minusIcon = document.querySelector(".minus-icon");

const faqs = document.querySelectorAll(".faq");
const answer = document.querySelector(".answer");
faqs.forEach((faq) => {
  faq.addEventListener("click", (e) => {
    faq.querySelector(".answer").classList.toggle("hidden");
    faq.querySelector(".plus-icon").classList.toggle("hidden");
    faq.querySelector(".minus-icon").classList.toggle("hidden");
  });
});
