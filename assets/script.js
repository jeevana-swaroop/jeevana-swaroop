// Activate Bootstrap scrollspy
document.addEventListener('DOMContentLoaded', () => {
  const dataSpyList = [].slice.call(document.querySelectorAll('[data-bs-spy="scroll"]'));
  dataSpyList.forEach(function (dataSpyEl) {
    bootstrap.ScrollSpy.getOrCreateInstance(dataSpyEl);
  });

  // Update footer year
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
});
