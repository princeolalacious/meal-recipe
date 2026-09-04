export function initFaq() {
  const faqModal = document.getElementById("faqModal");
  const closeFaq = document.getElementById("closeFaq");
  const faqLinks = document.querySelectorAll(".faq-link");
  const faqItems = document.querySelectorAll(".faq-item");

  faqLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      faqModal.showModal();
    });
  });

  closeFaq.addEventListener("click", () => {
    faqModal.close();
  });

  faqModal.addEventListener("click", (e) => {
    if (e.target === faqModal) {
      faqModal.close();
    }
  });

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    question.addEventListener("click", () => {
      item.classList.toggle("active");
    });
  });
}
