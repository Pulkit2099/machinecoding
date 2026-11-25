// simple function jisme andar variable define nhi hai sirf params se use kr rahe hai only 
function multiply(x){


return function(y)
{
return x*y;

}

}

const res=multiply(2)
console.log(res(3))

// ---inner variable wala case jisme hum koi params pass nhi karenge 
function counter()
{
// inner value pahle function me daali hai and second me increament print krdiya 
    let x=0
return function (){

    console.log(x++)
}



}

const res1=counter()
const res2=counter()

res1()
res2()

