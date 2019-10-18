var enlace = document.createElement('a');
 enlace.href = 'https://leanpub.com/javascript-inspirate';

 console.log("href:" ,enlace.href);
 console.log("protocol:", enlace.protocol);
 console.log("host:", enlace.host);
 console.log("hostname:", enlace.hostname);
 console.log("port:", enlace.port);
 console.log("pathname:", enlace.pathname);
 console.log("search:", enlace.search);
 console.log("hash:", enlace.hash);
 console.log("origin:", enlace.origin);

 //document.location.assign('https://leanpub.com/javascript-inspirate');  // método assign - carga una nueva página

 // Recarga
// document.location.reload(); // método reload

 // Recarga sin usar el cache
 //document.location.reload(true);


 // método Replace
 //document.location.replace('https://leanpub.com/javascript-inspirate'); // Recarga página nueva, sustituyendo la actual
