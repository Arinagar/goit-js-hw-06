const formEl = document.querySelector('.login-form');

function submit(event) {
  const userData = {};
  event.preventDefault();

  if (!this.elements.email.value || !this.elements.password.value) {
    alert('All field must be fullfiled');
    return;
  }

  userData.email = this.elements.email.value;
  userData.password = this.elements.password.value;

  console.log(userData);

  this.reset();
}

formEl.addEventListener('submit', submit);
