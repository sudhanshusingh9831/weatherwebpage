// const async = require("hbs/lib/async");

 let cityname=document.getElementById("cityname");
 let getcity=document.getElementById("getcity");
 let result=document.getElementById("result");
 let API='5ce49aaf3582d83faf073d051db7770a';
 getcity.addEventListener("click", async(event)=>{
        event.preventDefault();
     let cityvalue=cityname.value;
     if(cityvalue===""){
         result.innerHTML=`<p>Please enter City name</p>`;
     }
     else{
         let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityvalue}&appid=${API}`
         const response =await fetch(url);
        let data=await response.json();
        let arraydata=[data];
        
        let temp=arraydata[0].main.temp;
        let newtemp=Math.floor(temp-273.15);
        let country=arraydata[0].sys.country;
        let desc=arraydata[0].weather[0].description;
        console.log(arraydata);
        result.innerHTML=`<p>Temperature = ${newtemp}&degC</p><p>Country = ${country}</p><p>Description= ${desc}`;
        

        // let html =``;
     }
 })
 console.log("hi");