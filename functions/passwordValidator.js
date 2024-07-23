function passwordValidator(password, userName) {
  if (password.length < 8) {
    return false;
  } else if (password.split(" ").length > 1) {
    return false;
  } else if (password.includes(userName)) {
    return false;
  }
  return true;
}
// console.log(passwordValidator('89Fjjlnms','dogLuvr'));
console.log(passwordValidator("dogLuvr123!", "dogLuvr"));
