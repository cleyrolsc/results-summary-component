'strict';
fetch('data.json')
  .then((response) => response.json())
  .then((data) => {
    const scoreSenses = document.querySelectorAll('.score-sense');
    const scores = document.querySelectorAll('.score');
    const icons = document.querySelectorAll('.icon');

    data.forEach((obj, index) => {
      if (scoreSenses[index]) {
        scoreSenses[index].textContent = obj.category;
      }
      if (scores[index]) {
        scores[index].textContent = obj.score;
      }
      if (icons[index]) {
        icons[index].textContent = obj.icon;
      }
    });
  })
  .catch((error) => console.error('Error fetching JSON:', error));
