const { Runner } = require("mocha")

// code your solution here
function superbowlWin(arr){


  var found =  arr.find((elem,index,arr)=>{
        if(elem.result === "W"){
            return elem
        }

    })
    console.log(found)
return JSON.parse(found).year;

}