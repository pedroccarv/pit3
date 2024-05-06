const form = document.querySelector('form');
const mySelect = document.getElementById('option');
const nameInput = document.querySelector('#nome');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#telefone');
const passwordInput = document.querySelector('#senha');

mySelect.addEventListener ('change', () => {
	const selectedOption = mySelect.options[mySelect.selectedIndex].value;
	if (selectedOption === '2') {
		window.location.href = 'cadastromedico.html';
	}
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (nameInput.value.trim() === '') {
    alert('Por favor, insira seu nome.');
    return;
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(emailInput.value)) {
    alert('Por favor, insira um endereço de email válido.');
    return;
  }

  const phoneRegex = /^\d{11}$/;
  if (!phoneRegex.test(phoneInput.value.replace(/\D/g, ''))) {
    alert('Por favor, insira um número de telefone válido.');
    return;
  }

  if (passwordInput.value.length < 8) {
    alert('Por favor, insira uma senha com no mínimo 8 caracteres.');
    return;
  }

  alert('Cadastro concluído com sucesso!');

  form.submit();
});

function showPassword() {
  var passwordInput = document.getElementById("senha");
  passwordInput.type = "text";
}

function hidePassword() {
  var passwordInput = document.getElementById("senha");
  passwordInput.type = "password";
}

phoneInput.addEventListener('input', () => {
  const phoneValue = phoneInput.value.replace(/\D/g, ''); 
  const phoneLength = phoneValue.length;

  if (phoneLength < 4) {
    phoneInput.value = phoneValue;
  } else if (phoneLength < 8) {
    phoneInput.value = `(${phoneValue.slice(0, 2)}) ${phoneValue.slice(2)}`;
  } else {
    phoneInput.value = `(${phoneValue.slice(0, 2)}) ${phoneValue.slice(2, 7)}-${phoneValue.slice(7, 11)}`;
  }
});