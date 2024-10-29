// SIGN-UP

const formRegistr = document.querySelector("#sign-up");
const password = document.querySelector("input[name=password]");
const passwordRepeat = document.querySelector("Input[name=passwordRepeat]");
const mssgPass = document.querySelector(".msgg-form");
const firstName = document.querySelector("input[name=firstName]");
const modalForm = document.querySelector("#modal-window");
const passwordSucces = document.querySelector(".pass");

formRegistr.addEventListener("submit", (e) => {
  e.preventDefault();

  if (password.value === passwordRepeat.value) {
    modalForm.classList.add("is-hidden");
    console.log(modalForm.classList);
    alert(`Welcome ${firstName.value} your user is now created`);
    // mssgPass.innerHTML = `Welcome ${firstName.value} your user is now created`;
    // mssgPass.style.color = "blue";
    formRegistr.reset()
    passwordSucces.classList.remove("pass-success");
  } else {
    // mssgPass.innerHTML = "The passwords are not the same, please try again!";
    alert("The passwords are not the same, please try again!");
    mssgPass.style.color = "red";
  }
});

formRegistr.addEventListener("input", (e) => {
  const passwordSucces = document.querySelector(".pass");

  if (e.target.name === "password" || e.target.name === "passwordRepeat") {
    if (password.value === passwordRepeat.value && password.value.length > 2) {
      passwordSucces.classList.add("pass-success");
    } else {
      passwordSucces.classList.remove("pass-success");
    }
  }
})
