function updateTime () {
    const now = new Date()
   let hours = now.getHours();
   let minutes = now.getMinutes();
   let seconds = now.getSeconds();



   //amit veubnebit rom 12 saatiani formatit knas magalitad tu ikneba
   // 15:03 daweros 03:03 pm an am es magas shveba 
   hours = hours % 12;
   hours = hours ? hours : 12 


   // amit veubnebit rom tu clock imneba 10ze kvemot 0 daematos win
   hours = hours  < 10 ? "0" + hours : hours 
   minutes = minutes < 10 ? "0" + minutes : minutes
   seconds = seconds < 10 ? "0" + seconds : seconds


   //shemogvakvs browsershi vatant text contentand chvens cvldabes
   document.getElementById ("hours").textContent = hours;
   document.getElementById ("Minutes").textContent = minutes;
   document.getElementById ("Seconds").textContent = seconds;
   

 
}
setInterval(updateTime, 1000)
updateTime();
