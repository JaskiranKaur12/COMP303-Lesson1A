

//let myGlobalVariable=0;//can be accessed anywhere in the browser-public scope
//Sel-executing  Anonymous Function
//IIFE-Immediately Invoked Function Expression
"use strict";//avoid double declaration
(function(){
    let myFunctionVariable=0;//functional scope

    function Start()
    {
        let startvariable="My name is Jaskiran Kaur";//private scope
      console.log(`%cApp Started..${startvariable}`,"color: blue;font-size:60px");
      //console.info
      //console.error


    }
     window.addEventListener("load",Start);//Window-object in javascript
    //

})();

     //inline function
     //()=>
     //let Start=function()