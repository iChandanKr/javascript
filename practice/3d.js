/* This fn is used to sort an array of objects based on the object key(specified as orderByField) and the orderByDir.
    input: [ {role : [tester, manager], name: x}, {role : [manager, dev], name: y} ] orderByField: role */
function sortByAttribute(data, orderByField, orderByDir = "ASC") {
  const isArray = Array.isArray(data[0][orderByField]);

  /* Sorting attribute array elements based on given order
        The above input will be ordered as: [ {role : [manager, tester]} , {role : [dev, manager]} ] */
  if (isArray) {
    data.forEach((object) => {
      object[orderByField].sort();
    });
  }

  // Custom compare function based on type of attribute
  const customComparator = (objectFirst, objectSecond) => {
    /* join will do the following:
            [ {role : 'manager,tester'} , {role : 'dev,manager'} ] */
    const attributeOne = isArray
      ? objectFirst[orderByField].join(",")
      : objectFirst[orderByField];

    const attributeTwo = isArray
      ? objectSecond[orderByField].join(",")
      : objectSecond[orderByField];

    const type = isArray
      ? typeof data[0][orderByField][0]
      : typeof data[0][orderByField];

    const typeObject = {
      boolean: (x, y) => (x === y ? 0 : x ? 1 : -1),
      string: (x, y) => x.localeCompare(y),
    };

    return orderByDir === "ASC"
      ? typeObject[type](attributeOne, attributeTwo)
      : typeObject[type](attributeTwo, attributeOne);
  };

  /* The above input will be changed to:
        [ {role : 'devmanager', name: y} , {role : 'managertester', name: x} ] */
  return data.sort(customComparator);
}

const input = [
  { role: ["tester", "manager"], name: "x" },
  { role: ["manager", "dev"], name: "y" },
];

sortByAttribute(input, "role");
console.log(input);
