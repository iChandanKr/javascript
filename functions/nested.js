var data = {
    title: "title1",
    bar: "asdf",
    innerData: [
        {
            title: "inner-title1",
            foo: "asdf"
        },
        {
            title: "inner-title2",
            foo: "asdf"
        }
    ]
};

// const { title, bar, innerData } = data;

const { title, bar, innerData: [first, second] } = data;
const {title:title234,foo} = first;
console.log(title234);
console.log(title);
console.log(innerData);
console.log(first);
console.log(second);
