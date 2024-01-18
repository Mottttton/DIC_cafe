function emailValidation() {
  const form = document.getElementById("form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (form.email.value !== form.email_confirm.value) {
      const validationFailMessage = document.createElement("p");
      const message = document.createTextNode("Eメールが一致しません");
      form.appendChild(validationFailMessage);
      validationFailMessage.appendChild(message);
      validationFailMessage.classList.add("alert");
      setTimeout(function () {
        form.removeChild(validationFailMessage);
      }, 3000);
    } else {
      form.submit();
    }
  });
}

window.onload = emailValidation;
