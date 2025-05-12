  const popup = document.getElementById('announcementPopup');
  const allowedDomains = ['congenial-doodle-pjp5q9vrgvjhrvvq-5500.app.github.dev'];

  const currentDomain = window.location.hostname;
  const hasSeenPopup = localStorage.getItem('void_announcement_seen');

  const isAllowedDomain = allowedDomains.includes(currentDomain);

  if (!hasSeenPopup && isAllowedDomain) {
    popup.style.display = 'block';
  } else {
    popup.style.display = 'none';
  }

  function closeAnnouncement() {
    popup.style.display = 'none';
    localStorage.setItem('void_announcement_seen', 'true');
  }