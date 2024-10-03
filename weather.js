let display= document.getElementById('display');
let btn= document.getElementById('btn');

let city= document.getElementById('city');

let temp= document.getElementById('temp');


let humidity= document.getElementById('humidity');
let wind= document.getElementById('wind');
let vis= document.getElementById('vis');
let feel= document.getElementById('feel');
let pass= document.getElementById('press');
console.log(pass);
let span=document.getElementById('span');
let uv= document.getElementById('uv');
console.log(uv);

btn.addEventListener('click', ()=>{

    setInterval(() => {
        
    
        req = new XMLHttpRequest();
        req.open('GET',`https://api.weatherapi.com/v1/current.json?key=02df5fa0471a46aaab7142802242309&q=${display.value}&aqi=no`);
        console.log(req);
        req.onload= function () {
        myReq=req.responseText;
        console.log(myReq);
        
        data=JSON.parse(myReq);
         console.log(data);
        

        city.innerHTML=data.location.name;

        temp.innerHTML=data.current.temp_c +'℃';

        humidity.innerHTML=data.current.humidity +'hm';

        join=data.current.wind_kph +'kph'+'/';
        joins=data.current.wind_mph +'mph';
        joint=join.concat(joins);
        wind.innerHTML=joint;

        visual=data.current.vis_km + 'km' +'/';
        vissible=data.current.vis_miles + 'm';
        viss=visual.concat(vissible);
        vis.innerHTML=viss

        feel.innerHTML=data.current.feelslike_c +'℃';
    
        span.innerHTML=data.current.pressure_mb +'mb';
        
        uv.innerHTML=data.current.uv +'uv';
        

        

        }
    
        req.send();
    },1000);
});


