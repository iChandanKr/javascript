const isGoogleUser = true;

let userDetails;
if (isGoogleUser) {
  userDetails = {
    email: "sdf",
    given_name: "sgoogle",
    family_name: "segoogle",
    picture: 9,
    password: "sldf",
    dob: "sldfkj",
    gender: "sdl",
    displayName: "dfsdf",
    contactNumber: 95,
  };
} else {
  userDetails = {
    email: "sdf",
    firstName: "s",
    lastName: "se",
    profilePic: 9,
    password: "sldf",
    dob: "sldfkj",
    gender: "sdl",
    displayName: "dfsdf",
    contactNumber: 95,
  };
}
console.log(isGoogleUser);

const {
  [isGoogleUser ? "given_name" : "firstName"]: firstName,
  [isGoogleUser ? "family_name" : "lastName"]: lastName,
  [isGoogleUser ? "picture" : "profilePic"]: profilePic,
  dob,
  gender,
  contactNumber,
} = userDetails;

console.log(firstName, lastName, profilePic, gender, dob, contactNumber);
