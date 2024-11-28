// const outerFunction = function(){
//     const factor = Math.pow(10,5);
//    function innerFunction(n){
//     return factor*n;
//     }
//    return innerFunction
// }

// const res = outerFunction();
// console.log(res(5));
// const isGoogleUser=false
// const userDetails = {
//   email: "sdf",
//   firstName: "s",
//   lastName: "se",
//   profilePic: 9,
//   password: "sldf",
//   dob: "sldfkj",
//   gender: "sdl",
//   displayName:'dfsdf',
// };

// const {} = userDetails;

let email;
let firstName;
let lastName;
let displayName;
let profilePic;
let password;
let dob;
let gender;
let contactNumber;

if (isGoogleUser) {
  ({
    given_name: firstName,
    family_name: lastName,
    picture: profilePic,
    dob,
    gender,
    contactNumber,
  } = userDetails);
} else {
  ({ firstName, lastName, dob, profilePic, gender, contactNumber } =
    userDetails);
}


console.log(firstName)