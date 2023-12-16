const container = document.querySelector(".container");
const plusIcon = document.querySelector(".plus-icon");
const minusIcon = document.querySelector(".minus-icon");

const faqs = document.querySelectorAll(".faq");
const answer = document.querySelector(".answer");
faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faqs.forEach((que) => {
      que.querySelector(".answer").classList.add("hidden");
      que.querySelector(".plus-icon").classList.remove("hidden");
      que.querySelector(".minus-icon").classList.add("hidden");
    });
    faq.querySelector(".answer").classList.toggle("hidden");
    faq.querySelector(".plus-icon").classList.toggle("hidden");
    faq.querySelector(".minus-icon").classList.toggle("hidden");
  });
});
