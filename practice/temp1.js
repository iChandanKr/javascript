function sortByAttribute(queryObject, attribute, order = "ASC") {
  const isArray = Array.isArray(queryObject[0][attribute]);

  if (isArray) {
    queryObject.forEach((object) => {
      object[attribute].sort();
    });
  }

  const customComparator = (objectFirst, objectSecond) => {
    const attributeOne = isArray
      ? objectFirst[attribute].join(",")
      : objectFirst[attribute];
    const attributeTwo = isArray
      ? objectSecond[attribute].join(",")
      : objectSecond[attribute];

    const type = isArray
      ? typeof queryObject[0][attribute][0]
      : typeof queryObject[0][attribute];

    const typeObject = {
      boolean: (x, y) => (x === y ? 0 : x ? 1 : -1),
      string: (x, y) => x.localeCompare(y),
    };

    return order === "ASC"
      ? typeObject[type](attributeOne, attributeTwo)
      : typeObject[type](attributeTwo, attributeOne);
  };

  return queryObject.sort(customComparator);
}
