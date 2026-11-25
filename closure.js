// simple function jisme andar variable define nhi hai sirf params se use kr rahe hai only 
function multiply(x){


return function(y)
{
return x*y;

}

}

const res=multiply(2)
console.log(res(3))