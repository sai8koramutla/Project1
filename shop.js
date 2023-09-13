 function time(){var a= document.createElement("h4");
   
    var parent= document.getElementById("main");
    a.style.float="right";
    a.style.margin="40px";
    a.style.color="white";
    parent.appendChild(a);
   
   setInterval(function(){
        var date = new Date();
    var mon=date.getMonth();
    var day=date.getDate();
    var year=date.getFullYear();
    var hr=date.getHours();
    var min=date.getMinutes();
    var sec=date.getSeconds();
    a.innerText=`${year} ${mon+1} ${day}  ⌚   ${hr}:${min}:${sec}`
    
    } ,1000)}

   
       
      
    
