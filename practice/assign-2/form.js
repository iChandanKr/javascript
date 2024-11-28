const userNameErrP = document.querySelector("#username");
const userName = document.querySelector('input[type="text"]');
userName.addEventListener("input", () => {
  // console.log((/^[0-9A-Za-z]+$/.test(userName.value)))
  if (userName.value && !/^[0-9A-Za-z]+$/.test(userName.value)) {
    userNameErrP.removeAttribute("hidden");
  } else {
    userNameErrP.setAttribute("hidden", true);
  }
});

const emailErrP = document.querySelector("#verifyEmail");

const email = document.querySelector('input[type="email"]');
email.addEventListener("input", () => {
  // console.log((/^[0-9A-Za-z]+$/.test(userName.value)))
  console.log(email.value);

  const extendedEmailPattern =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (email.value && !extendedEmailPattern.test(email.value)) {
    emailErrP.removeAttribute("hidden");
  } else {
    emailErrP.setAttribute("hidden", true);
  }
});

const passswordP = document.querySelector("#verifyPassword");
const password = document.querySelector('input[type="password"]');

password.addEventListener("input", () => {
  console.log(typeof password.value);

  if (
      password.value &&
      (password.value.length < 8 ||
    !(/[0-9]/.test(password.value) && /[A-Z]/i.test(password.value)) )
  ) {
    passswordP.removeAttribute("hidden");
  } else {
    passswordP.setAttribute("hidden", true);
  }
});
console.log(userName.value);

// console.log(/[0-9]/.test("sytfytdr0ffd") && /[A-Z]/i.test("5"));

