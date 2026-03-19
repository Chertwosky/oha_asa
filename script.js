const voteButtons = document.querySelectorAll('.vote');
const voteStatus = document.querySelector('.vote-status');

voteButtons.forEach((button) => {
  button.addEventListener('click', () => {
    voteButtons.forEach((item) => item.classList.remove('is-active'));
    button.classList.add('is-active');
    voteStatus.textContent = `Отметка сохранена: ${button.dataset.vote}`;
  });
});
