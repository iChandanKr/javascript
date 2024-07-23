function multiplyByNum(num){
    return function (x){
        return x*num;
    }

}

const ans = multiplyByNum(4);
console.log(ans(5));
