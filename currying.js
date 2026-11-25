
// function handle normal currying case
function curr(a){

return function(b){

return function(c){
return a+b+c

}

}

}

//-------------- function handle both currying and normal function case
function curr(a,b){
    if(b!==undefined)
    {
        return a+b
    }

return function(b){


return a+b


}

}
// -------------------------------------
console.log(curr(4,4))

console.log(curr(2)(4)(2))