let form = document.querySelector('.signup-form');

const feedback = document.querySelector('.feedback');

const pattern = /^[a-zA-Z+!]{6,12}$/;
// const username = document.querySelector('#username');

form.addEventListener('submit', e => {
  e.preventDefault();
  // console.log(username.value);
  console.log(form.username.value);
  //validation
  const username = form.username.value;

  if (pattern.test(username)) {
    feedback.textContent = `${username} is a good username!`;
    feedback.style.color = 'green';
  } else {
    feedback.textContent = `Choose other username`;
    feedback.style.color = 'red';
  }
});
//live feedback
form.username.addEventListener('keydown', e => {
  // console.log(e.target.value);
  if (pattern.test(e.target.value)) {
    form.username.setAttribute('class', 'success');
  } else {
    form.username.setAttribute('class', 'error');
  }
});
