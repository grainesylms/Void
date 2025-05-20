document.addEventListener('DOMContentLoaded', function() {
  const versionButtons = document.querySelectorAll('.version-badge');
  let activeVersion = '1.12 WASM'; 
  let activeVersionPath = './versions/1.12WASM'; 
  
  versionButtons.forEach(button => {
    button.addEventListener('click', function() {
      versionButtons.forEach(btn => btn.classList.remove('active'));
      
      this.classList.add('active');
      
      activeVersion = this.dataset.version;
      activeVersionPath = this.dataset.path;
    });
  });
  
  const launchButton = document.getElementById('launch-button');
  
  launchButton.addEventListener('click', function() {
    showToast(`Launching Minecraft ${activeVersion}...`);
    
    setTimeout(() => {
      window.open(activeVersionPath, '_blank'); // Open in new tab
    }, 100);
    
    console.log(`Launching Minecraft version: ${activeVersion} at path: ${activeVersionPath}`);
  });
  
  function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
      toast.classList.add('show');
    }, 10);
    
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        document.body.removeChild(toast);
      }, 300);
    }, 3000);
  }
});
