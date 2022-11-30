const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();
  const formElenents = event.currentTarget.elements;

  if (!formElenents.email.value || !formElenents.password.value) {
    alert('Заповни свої дані!!!');
  }
  const email = formElenents.email.value;
  const password = formElenents.password.value;

  const formData = {
    email,
    password,
  };
  console.log(formData);
  formEl.reset();
}
