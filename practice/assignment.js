const arr = ["A","B","C"];
// return an array [{"name":"A"}....];

const newArr = arr.map((ele)=>{
    return {"name":ele}
})
console.log(newArr)