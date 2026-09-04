export function initSignup() {
  const signupModal = document.getElementById("signupModal");
  const closeSignup = document.getElementById("closeSignup");
  const signupLinks = document.querySelectorAll(".signup-link");

  const form = document.getElementById("signupForm");
  const name = document.getElementById("signupName");
  const nameError = document.getElementById("signupNameError");
  const email = document.getElementById("signupEmail");
  const emailError = document.getElementById("signupEmailError");
  const successMsg = document.getElementById("signupSuccess");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  signupLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      signupModal.showModal();
    });
  });

  closeSignup.addEventListener("click", () => {
    signupModal.close();
  });

  signupModal.addEventListener("click", (e) => {
    if (e.target === signupModal) {
      signupModal.close();
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const isNameValid = name.value.trim() !== "";
    const isEmailValid = emailRegex.test(email.value.trim());

    nameError.classList.toggle("hidden", isNameValid);
    emailError.classList.toggle("hidden", isEmailValid);

    if (isNameValid && isEmailValid) {
      successMsg.classList.remove("hidden");
      form.reset();
      setTimeout(() => {
        signupModal.close();
        successMsg.classList.add("hidden");
      }, 1500);
    }
  });
}
