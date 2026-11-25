
//------- function handle normal currying case
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
// -------------infinte currying ------------------------
// note hamesha return function b krwana hai and usme if else condition rahegi hamesha aise he start krna hai infinite wala flow aur b param optional hai main function me 
function infinitecurrying(a,b){

    return function(b){
    if(b!==undefined){
    return infinitecurrying(a+b)

    }
    else{
        return a
    }
    }
}


// ----------------------
console.log(infinitecurrying(2)(4)(6)())



console.log(curr(4,4))

console.log(curr(2)(4)(2))