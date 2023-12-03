// geo-location


let apiKey = "d52affad1e19e7b24d26b8b1e460d9fe";
const d = new Date();
let B = d.toString();
let arr = B.split(" ")[5];

let timeZone = arr;





function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
     lat = position.coords.latitude;
     long = position.coords.longitude;
   
    document.getElementById("googlemap").src = "https://maps.google.com/maps?q=" + lat + "," + long + "&z=15&output=embed";
    console.log(lat,long);
   
    document.getElementById("lat").innerHTML = `Lat: ${lat}`;
    document.getElementById("long").innerHTML = `Long: ${long}`;
    fetchWeth(lat,long);

}


function fetchWeth(lat,long){
    const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;
    fetch(api)
    .then(responce => responce.json())
    .then(data =>{
        showData(data);
    })
    .catch(err => {
        console.log(err)
    })
}

function showData(data){
    let location= document.getElementById("location");
    let wind= document.getElementById("wind");
    let humidity= document.getElementById("humidity");
    let time_zone= document.getElementById("time-zone");
    let presure= document.getElementById("presure");
    let wind_direction= document.getElementById("wind-direction");
    let uv_index= document.getElementById("uv-index");
    let feels_like= document.getElementById("feels-like");


    location.innerHTML=`location : ${data.name}`;
    wind.innerHTML=`Wind Speed : ${data.wind.speed} kmph`;
    humidity.innerHTML=`Humidity : ${data.main.humidity}`;
    time_zone.innerHTML=`Time Zone : ${timeZone}`;
    presure.innerHTML=`presure : ${data.main.pressure} mbar`;
    wind_direction.innerHTML=`Wind Direction :  North West`;
    uv_index.innerHTML=`UV index : 300`;
    feels_like.innerHTML=`Feels Like : ${data.main.feels_like}`;
    
    loder.classList.toggle("d-none");
    main.classList.toggle("d-none");
}

getLocation();

