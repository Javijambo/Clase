
// HISTORY---
history.length
// Ir atrás
history.go(-1);
history.back();

// Ir adelante
history.go(1);
history.forward();

// NAVIGATOR ---
function conversorTiempo(segundos){
     var fecha = new Date(segundos * 1000);
     var hh = fecha.getUTCHours();
     var mm = fecha.getUTCMinutes();
     var ss = fecha.getSeconds();
    
     if (hh < 10) {hh = "0"+hh;}
     if (mm < 10) {mm = "0"+mm;}
     if (ss < 10) {ss = "0"+ss;}
    
     return hh+":"+mm+":"+ss;
     }
    
     function informacionSistema(){
     console.log("appCodeName:", window.navigator.appCodeName);
     console.log("appName:", window.navigator.appName);
     console.log("appVersion:", window.navigator.appVersion);

 console.log("platform:", window.navigator.platform);
 console.log("product:", window.navigator.product);
 console.log("userAgent:", window.navigator.userAgent);
 console.log("javaEnabled:", window.navigator.javaEnabled());
 console.log("language (used):", window.navigator.language);
 console.log("language (support):", window.navigator.languages);
 console.log("conectado a internet?", window.navigator.onLine);
 console.log("mimeTypes:",window.navigator.mimeTypes);
 console.log("Plugins:", navigator.plugins);

 navigator.getBattery().then(function(bateria){
 console.log("Batería cargando?", bateria.charging)

 if(bateria.charging){
 console.log("Tiempo de carga:", bateria.chargingTime)
 }
 console.log("Batería %:", bateria.level*100)
 console.log("Tiempo restante:", conversorTiempo(bateria.dischargingTime))
 });

 }