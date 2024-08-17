//Task 1 - 14/08/2024 - 11:30
//Question - Create one cloth class and two sub classes tshirt and pant
//then create an array with the values and print clothes by type, color and size
class Cloth /* Always capital class name*/ {
    constructor(type, color) {
      this.type = type;
      this.color = color;
    }
  }
  //Class Tshirt
  class Tshirt extends /*for sub class*/ Cloth {
    constructor(size, length, color) {
      super(color, "Tshirt"); /*super to access main class*/
      this.size = size;
      this.length = length;
      this.color = color;
      this.type = "Tshirt";
    }
  }
  //Class Pant
  class Pant extends Cloth {
    constructor(size, length, color) {
      super(color, "Pant");
      this.length = length;
      this.size = size;
      this.color = color;
      this.type = "Pant";
    }
  }
  //Array
  const AObject = [
    new Pant("XL", 20, "Pink"),
    new Pant("L", 25, "Pink"),
    new Pant("L", 28, "Red"),
    new Pant("XXL", 29, "Green"),
    new Tshirt("L", 20, "Green"),
    new Tshirt("XL", 20, "Pink"),
    new Tshirt("XXL", 20, "Black"),
    new Tshirt("XXXL", 20, "White"),
  ];
  console.log(AObject);
  //Values Output
  function countByColor(clothesArray) {
    const colorCounts = clothesArray.reduce((counts, item) => {
      if (!counts[item.color]) {
        counts[item.color] = 0;
      }
      counts[item.color]++;
      return counts;
    }, {});
    console.log(colorCounts);
  }
  // console.log(colorcount(AObject))
  let acc = {};
  [
    new Pant(0, 0, "g"),
    new Pant(0, 0, "bl"),
    new Tshirt(0, 0, "g"),
    new Tshirt(0, 0, "p"),
    new Tshirt(0, 0, "p"),
  ].reduce(
    (acc, cuu) => ({ [cuu.type]: acc[cuu.type] ? ++acc[cuu.type] : 1, ...acc }),
    {}
  );
  console.log(acc);