document.querySelector("#login-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const form = event.currentTarget;
  const user = form.elements.name.value.trim();
  const email = form.elements.email.value.trim();

  //! check method trim() if work !
  // console.log("User input before trim:", form.elements.name.value);
  // console.log("User input after trim:", user);
  // console.log("Email input before trim:", form.elements.email.value);
  // console.log("Email input after trim:", email);

  const message = document.querySelector(".mesg");
  const heading = document.querySelector(".contact-title");

  if (user === "" || email === "") {
    alert("All form fields must be filled in");
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    // console.log("not valid email");
    message.innerHTML = "not valid email";
    return;
  }
  // console.log("valid email");

  message.innerHTML = "";
  form.classList.add("none");
  heading.innerHTML = "we will contact you";

  const formData = {
    name: user,
    email: email,
  };

  console.log(formData);
  form.reset();
});
