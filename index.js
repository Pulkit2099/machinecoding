Array.prototype.myFilter=function(cb){
let res=[]
for(let i=0;i<this.length;i++)
{
if(cb(this[i]))
{

    res.push(this[i])
}


}
return res

}
let arr=[2,4,6,8,10]
let c=arr.myFilter((res)=>res>2)
console.log(c)
