function emailValidation() {
  const form = document.getElementById("form");
  const formContactLine = document.getElementsByClassName("contact_line");
  const parentElement = formContactLine[0].parentElement;
  const formEmailConfirm = document.getElementById("email_confirm");
  const validationFailMessage = document.createElement("p");

  validationFailMessage.setAttribute("id", "alert");
  validationFailMessage.classList.add("alert_color");
  const message = document.createTextNode("Eメールが一致しません");
  validationFailMessage.appendChild(message);

  formEmailConfirm.addEventListener("input", (e) => {
    let isEmailConfirmed = form.email.value === form.email_confirm.value
    if(!isEmailConfirmed && document.getElementById("alert")) {
      
    } else if (!isEmailConfirmed) {
      parentElement.insertBefore(validationFailMessage, parentElement.children[3]);
      formEmailConfirm.classList.add("alert_textarea");
    } else {
      parentElement.removeChild(validationFailMessage);
      formEmailConfirm.classList.remove("alert_textarea");
    }
  });
}

window.onload = emailValidation;
