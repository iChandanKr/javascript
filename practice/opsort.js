function sortByAttribute(data, orderByField, orderByDir = "ASC") {
  const isArray = Array.isArray(data[0][orderByField]);

  const customComparator = (objectFirst, objectSecond) => {
    let attributeOne;
    let attributeTwo;
    let type;
    if (isArray) {
      attributeOne = objectFirst[orderByField].sort().join(",");
      attributeTwo = objectSecond[orderByField].sort().join(",");
      type = "string";
    } else {
      attributeOne = objectFirst[orderByField];
      attributeTwo = objectSecond[orderByField];
      type = typeof data[0][orderByField];
    }

    const typeObject = {
      boolean: (x, y) => (x === y ? 0 : x ? 1 : -1),
      string: (x, y) => (x.localeCompare(y)),
    };

    return orderByDir === "ASC"
      ? typeObject[type](attributeOne, attributeTwo)
      : typeObject[type](attributeTwo, attributeOne);
  };

  return data.sort(customComparator);
}

const input = [
  { role: ["tester", "manager"], name: "zx" },
  { role: ["tester", "manager", "asdf"], name: "x" },

  { role: ["manager", "dev"], name: "y" },
];

sortByAttribute(input, "name", "ASC");
console.log(input);
