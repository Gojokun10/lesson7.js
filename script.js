// function checkNum(){
//     const inpt = document.getElementById("input");
//     if (!inpt.checkValidity()){
//         document.getElementById("success").innerHTML = inpt.validationMessage;
//     }else{
//         document.getElementById("success").innerHTML = "Input was ok";
//     }
// }


// const msg = document.getElementById("success");

// function getLoc(){
//     if (navigator.geolocation){
//         navigator.geolocation.getCurrentPosition(showPosition);
//     }else{
//         msg.innerHTML = "Location Error";
//     }
// }


// function showPosition(position){
//     let pod = "Latitude: " + position.coords.latitude
//     + "<br>Longitude: " + position.coords.longitude;
//     localStorage.setItem("pod", pod);
    
// }


// localStorage.setItem("jh", "bhg");
// document.getElementById("str").innerHTML = localStorage.getItem("pod");


// fetch(url)
//     .then(response =>{  
//         console.log(response.status)})
//     .catch(error => {
//         console.log(error);
//     })




async function fetchText(){
    let response = await fetch('readme.txt');
    let data = response.text();
    console.log(data);
}