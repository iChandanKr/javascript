function sortByAttribute(data, orderByField, orderByDir = "ASC") {
  const firstElement = data[0][orderByField];
  const isArray = Array.isArray(firstElement);
  const elementsType = typeof (isArray ? firstElement[0] : firstElement);
  const comparisonFunction = {
    boolean: (x, y) => (x === y ? 0 : x ? 1 : -1),
    string: (x, y) => x.localeCompare(y),
    number: (x, y) => x - y,
  }[elementsType];
  const customComparator = (objectFirst, objectSecond) => {
    let attributeOne;
    let attributeTwo;
    // const attributeOne = isArray
    //   ? objectFirst[orderByField].sort().join(",")
    //   : objectFirst[orderByField];
    // const attributeTwo = isArray
    //   ? objectSecond[orderByField].sort().join(",")
    //   : objectSecond[orderByField];

    if (isArray) {
      attributeTwo = objectFirst[orderByField].sort().join(",");
      attributeTwo = objectSecond[orderByField].sort().join(",");
    } else {
      attributeTwo = objectFirst[orderByField];
      attributeTwo = objectSecond[orderByField];
    }
    return orderByDir === "ASC"
      ? comparisonFunction(attributeOne, attributeTwo)
      : comparisonFunction(attributeTwo, attributeOne);
  };
  return data.sort(customComparator);
}
const data = [
  { role: ["tester", "manager"], name: "x" },
  { role: ["manager", "dev"], name: "y" },
];
console.log(sortByAttribute(data, "role", "ASC"));
