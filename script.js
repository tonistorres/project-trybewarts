function isValidEmail() {
  const email = document.getElementById('email-input');
  return email.value === 'tryber@teste.com';
}

function isValidPassword() {
  const password = document.getElementById('password-input');
  return password.value === '123456';
}

function loginSuccess() {
  alert('Olá, Tryber!');
}

function loginFail() {
  alert('Email ou senha inválidos.');
}

function validateForm() {
  if (isValidEmail() && isValidPassword()) {
    loginSuccess();
  } else {
    loginFail();
  }
}

function addFormEvents() {
  const loginButton = document.getElementById('login-button');
  loginButton.addEventListener('click', () => {
    validateForm();
  });
}

function addAgreementEvent() {
  const agreement = document.getElementById('agreement');
  agreement.addEventListener('input', (evt) => {
    const submitButton = document.getElementById('submit-btn');
    submitButton.disabled = !evt.target.checked;
  });
}

function addCommentEvents() {
  const textarea = document.getElementById('textarea');
  const counter = document.getElementById('counter');
  // Lógica para contar, por Etienne Martin, encontrada em:
  // https://stackoverflow.com/questions/14086398/count-textarea-characters/43837521#43837521
  textarea.addEventListener('input', (evt) => {
    const target = evt.currentTarget;
    const maxLength = target.getAttribute('maxlength');
    const currentLength = target.value.length;
    counter.innerText = `${maxLength - currentLength}`;
  });
}

function replaceFullname() {
  const nameInput = document.getElementById('input-name');
  const lastnameInput = document.getElementById('input-lastname');
  const newParagraph = document.createElement('p');
  newParagraph.innerText = `Nome: ${nameInput.value} ${lastnameInput.value}`;
  return newParagraph;
}

function clearForm() {
  const form = document.getElementById('evaluation-form');
  form.innerHTML = '';
}

function appendToForm(argsList) {
  const form = document.getElementById('evaluation-form');
  for (let i = 0; i < argsList.length; i += 1) {
    form.appendChild(argsList[i]);
  }
}

function replaceForm() {
  const fullName = replaceFullname();
  clearForm();
  appendToForm([fullName]);
}

function addSubmitButtonEvents() {
  const submitButton = document.getElementById('submit-btn');
  submitButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    replaceForm();
  });
}

window.onload = () => {
  addFormEvents();
  addAgreementEvent();
  addCommentEvents();
  addSubmitButtonEvents();
};
