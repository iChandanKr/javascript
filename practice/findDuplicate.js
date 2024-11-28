const arr = [1,1,1,1,3,4,3,2,5,6,7,2];
const ans=[];
arr.reduce((acc,curr)=>{
if(acc[curr] && !ans.includes(curr)){
    ans.push(curr);
}else{
acc[curr] = 1;
}
return acc;
},{})
console.log(ans)