function openSmash() {
  
  var url = "smash-kart/";

  var win = window.open('about:blank', '_blank');
  
  if (!win) {
      alert("Pop-up blocked. Please allow pop-ups.");
      return; 
  }

  win.document.write('<html><head><title>New Window</title></head><body></body></html>');
  win.document.close(); 

  win.document.title = 'Google';
  var link = win.document.createElement('link');
  link.rel = 'icon';
  link.type = 'image/png';
  link.href = 'images/logo.png';  
  win.document.head.appendChild(link);

  var embed = win.document.createElement('embed');
  embed.style.width = "100vw";
  embed.style.height = "100vh";
  embed.style.margin = "0";
  embed.style.overflow = "hidden";
  embed.style.top = "0";
  embed.style.left = "0";
  embed.style.position = "absolute";
  embed.src = url;

  win.document.body.appendChild(embed);
}

 function openHyper3() {

  var urll = "https://smashkarts.io/";

  var win = window.open('about:blank', '_blank');
  
  if (!win) {
      alert("Pop-up blocked. Please allow pop-ups.");
      return; 
  }

  win.document.write('<html><head><title>New Window</title></head><body></body></html>');
  win.document.close(); 

  win.document.title = 'Google';
  var link = win.document.createElement('link');
  link.rel = 'icon';
  link.type = 'image/png';
  link.href = 'google.png';  
  win.document.head.appendChild(link);

  var embed = win.document.createElement('embed');
  embed.style.width = "100vw";
  embed.style.height = "100vh";
  embed.style.margin = "0";
  embed.style.overflow = "hidden";
  embed.style.top = "0";
  embed.style.left = "0";
  embed.style.position = "absolute";
  embed.src = urll;

  win.document.body.appendChild(embed);
}
