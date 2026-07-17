function updateDateTime(){

let now=new Date();

document.getElementById("date").innerHTML=
"📅 "+now.toLocaleDateString();

document.getElementById("time").innerHTML=
"🕒 "+now.toLocaleTimeString();

}

setInterval(updateDateTime,1000);

updateDateTime();
