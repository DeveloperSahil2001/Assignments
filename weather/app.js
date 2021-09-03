const box=document.getElementById('box');
const inp=document.getElementById('inp');
const btn=document.getElementById('btn');
const bgImg=document.getElementById('img');

//object with key value pairs containing image links for weather
const backgroundImg={
 'rain':'https://images.unsplash.com/photo-1574790989029-373ba6b885bb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHJhaW4lMjBjaXR5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=60',
 'clear':'https://images.unsplash.com/photo-1601297183305-6df142704ea2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xlYXIlMjBza3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=60',
 'cloudy':'https://images.unsplash.com/uploads/14122598319144c6eac10/5f8e7ade?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNsb3VkeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=60',
 'mist':'https://images.unsplash.com/photo-1541675154750-0444c7d51e8e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWlzdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=60',
 'snow':'https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25vd3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=60',
 'haze':'https://images.unsplash.com/photo-1532592950061-606f15b31037?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80',
 'smoke':'https://images.unsplash.com/photo-1483221186507-3cfe60ffb2ad?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c21va2UlMjB3ZWF0aGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
};

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const days=["Monday","Tuesday","Wednesday","Friday","Saturday","Sunday"];

//getting date
var currDate=new Date();
const date=currDate.getDate()+" "+monthNames[currDate.getMonth()]+" ("+days[currDate.getDay()]+"), "+currDate.getFullYear();
btn.addEventListener('click',()=>{
 if(inp.value)
  getWeatherData();
})


//checking if enter is pressed
inp.addEventListener('keypress',(key)=>{
 if(key.which===13&&inp.value){
  getWeatherData();
 }
})

//function to get weather data

function getWeatherData(){
  //clearing previous elements if any
    while (box.firstChild) {
        box.removeChild(box.firstChild);
    }


    const cityname=inp.value;
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=ba63508e95c28bb6fdcf20d81bbfb6f8`;
    fetch(url)
    .then((res)=>{
     return res.json();
    })
    .then((data)=>{

      //changing background image on weather change
      if(data.weather[0].description.includes('cloud')){
        bgImg.src=backgroundImg['cloudy'];
       }
       else if(data.weather[0].description.includes('clear')){
        bgImg.src=backgroundImg['clear'];
       }
       else if(data.weather[0].description.includes('rain')){
        bgImg.src=backgroundImg['rain'];
       }
       else if(data.weather[0].description.includes('mist')){
        bgImg.src=backgroundImg['mist'];
       }
       else if(data.weather[0].description.includes('snow')){
        bgImg.src=backgroundImg['snow'];
       }
       else if(data.weather[0].description.includes('haze')){
        bgImg.src=backgroundImg['haze'];
       }
       else if(data.weather[0].description.includes('smoke')){
        bgImg.src=backgroundImg['smoke'];
       }

     //creating data elements
     console.log(data);
     const para1=document.createElement('p');
     const cityName=document.createTextNode(data.name+", "+data.sys.country);
     para1.append(cityName);
     box.append(para1);
     const para2=document.createElement('p');
     const dateToday=document.createTextNode(date);
     para2.append(dateToday);
     box.append(para2);
     head1=document.createElement('h2');
     head1.setAttribute("class","temp");
     const temp=document.createTextNode(Math.floor(data.main.temp-273.15)+"°C");
     head1.append(temp);
     box.append(head1);
     const para3=document.createElement('p');
     const maxMinTemp=document.createTextNode(Math.floor(data.main.temp_min-273.15)+"°C (min) / "+Math.floor(data.main.temp_max-273.15)+"°C (max)");
     para3.append(maxMinTemp);
     box.append(para3);
     const para4=document.createElement('p');
     const humidityWind=document.createTextNode('Humidity:'+data.main.humidity+" / Wind:"+data.wind.speed+"Kmph");
     para4.append(humidityWind);
     box.append(para4);
     const para5=document.createElement('p');
     var weatherStatus=document.createTextNode(data.weather[0].description.toUpperCase());
     para5.append(weatherStatus);
     box.append(para5);
    })
    .catch((err)=>{
     alert('Enter Valid City Name');
    })

    //setting input box empty after search
    inp.value="";
}