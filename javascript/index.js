// // HashChangeEvent
// // fhfhfhh
// to Comment out all Single lines select all and ctrl / enter 
//call back function example /// fun that is passed to another fun as arugument is know as call back fun
/*function modify(array,callback)
{
    array.push(6)
    callback()
}
var array=[1,2,3,4,5]
console.log("Before array",array)
modify(array,function(){
    console.log("array has been",array)
})
.................................................................................*/
/*function stringreverse(str)
{
    return str.split("").reverse().join("") //inbuilt function use chesi
}
var str="sravani"
console.log(stringreverse(str))
....................................................................................*/
/*function stringreverse(str)
{
    var newstring=""
    for(let i=str.length-1;i>=0;i--)
    {
        newstring +=str[i]
    }
    return newstring

}
var str="sravani"
console.log(stringreverse(str))
.......................................................................................*/
/*function fizzbuzz(num)
{
    if(num%3==0 && num%5==0)
    {
        return "Fizzbuzz"
    }
    else if(num%3==0)
    return "fizz"
    else if(num%5==0)
    return "buzz"
    else return "sorry"
}
var num=+prompt("pleas eneter a number")
console.log(fizzbuzz(num))
.......................................................................................................*/
/*function checkanagram(str1,str2)
{
    str1=str1.toLowerCase()
    str2=str2.toLowerCase()
    if(str1.length===str2.length)
    {
        for(let i=0;i<str1.length;i++)
        {
            if(str2.includes(str1[i]))
            continue
            else return false
        }

    }
    else 
    {
        return false
    }
    return true
}
var str1=prompt("please enter string1")
var str2=prompt("please enter string2")
console.log(checkanagram(str1,str2))
.....................................................................................................................*/
/* (function f()
 {
     var a=b=5
})();
console.log(b)   //5
 is interpreted the following way:

var a = b;
b = 5;
But b is not declared anywhere in the function with var so it is set equal to 5 in the global scope.
..............................................................................................................*/
/*console.log(1);
setTimeout(function(){console.log(2);},1000)
setTimeout(function(){console.log(3);},0)
console.log(4); //output 1 4 3 2
..............................................................................................................*/

const { cachedDataVersionTag } = require("v8");

/*function x()
{
    setTimeout(function()
    {
        console.log(i);
    },1000)
    var i=1
}
x()
here we get the output 1,by the time  log comes , variable would be defined as js doesnt wait
...................................................................for multiple lines commenting shift-alt-a......................................................*/

