

//let myGlobalVariable=0;//can be accessed anywhere in the browser-public scope
//Sel-executing  Anonymous Function
//IIFE-Immediately Invoked Function Expression
"use strict";//avoid double declaration
(function(){
    let myFunctionVariable=0;//functional scope

    function Start()
    {
        let startvariable=0;//private scope
      console.log(`%cApp Started..${startvariable}`,"font-size :20px,color: blue; font-size:15px;");
      //console.info
      //console.error


    }
     window.addEventListener("load".Start);//eindow-object in javascript
    //

})();

     //inline function
     //()=>
     //let Start=function()