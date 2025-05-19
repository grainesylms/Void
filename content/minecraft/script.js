
document.addEventListener('DOMContentLoaded', function() {
  // Version selector functionality
  const versionButtons = document.querySelectorAll('.version-badge');
  let activeVersion = '1.12 WASM'; // Default version
  let activeVersionPath = './versions/1.12WASM'; // Default path
  
  versionButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remove active class from all buttons
      versionButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      this.classList.add('active');
      
      // Update active version and path
      activeVersion = this.dataset.version;
      activeVersionPath = this.dataset.path;
    });
  });
  
  // Launch button functionality
  const launchButton = document.getElementById('launch-button');
  
  launchButton.addEventListener('click', function() {
    // Create and show toast notification
    showToast(`Launching Minecraft ${activeVersion}...`);
    
    // Navigate to the version-specific path
    setTimeout(() => {
      window.location.href = activeVersionPath;
    }, 1000);
    
    console.log(`Launching Minecraft version: ${activeVersion} at path: ${activeVersionPath}`);
  });
  
  // Toast notification function
  function showToast(message) {
    // Create toast element
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    
    // Append to body
    document.body.appendChild(toast);
    
    // Show toast with animation
    setTimeout(() => {
      toast.classList.add('show');
    }, 10);
    
    // Remove after 3 seconds
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        document.body.removeChild(toast);
      }, 300);
    }, 3000);
  }
});