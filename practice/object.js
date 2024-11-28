const arr = [
  {
    primary: true,
    name: "john",
    designation: "manager",
  },
  {
    primary: false,
    name: "cameron",
    designation: "developer",
  },
  {
    primary: true,
    name: "aron",
    designation: "testing",
  },
  {
    primary: false,
    name: "david",
    designation: "developer",
  },
  {
    primary: false,
    name: "david",
    designation: "accountant",
  },
];

// sort the above array on basis of all primary : true become first after that sort along name, after thar sort along designation

arr.sort((a, b) => {
  if (a.primary === b.primary) {
    if (a.name === b.name) {
      return a.designation.localeCompare(b.designation);
    } else {
      return a.name.localeCompare(b.name);
    }
  } else {
    return a.primary ? -1 : 1;
  }
});

console.log(arr);
