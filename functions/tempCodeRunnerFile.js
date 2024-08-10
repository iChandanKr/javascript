const obj1 = {
    name:'xyz',
    tech:{
        programming:{
            type:'dev',
            exp:5
        }
    }
};

const obj2 = obj1;
obj2.name = 'chandan';
obj2.tech.programming.type = 'prod';
console.log(obj1)
console.log(obj2)
