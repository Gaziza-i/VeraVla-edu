const summaryElements = document.querySelectorAll('summary');

summaryElements.forEach(summary => {
 summary.addEventListener('click', () => {
  summary.classList.add('open');

  const img = summary.querySelector('img');
  img.src = img.src === '/icons/closed-marker.svg' ? '/icons/opened\ marker.svg' : '/icons/closed-marker.svg';
 });
});