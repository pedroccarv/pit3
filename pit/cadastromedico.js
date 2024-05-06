const form = document.querySelector('form');
const crnInput = document.getElementById('crn');
const nameInput = document.querySelector('#nome');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#telefone');
const passwordInput = document.querySelector('#senha');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (crnInput.value.trim() === '') {
    alert('Por favor, insira seu CRN.');
    return;
  }

  const crnRegex = /^\d{4}\.\d{3}\.\d{3}-\d{2}$/;
  if (!crnRegex.test(crnInput.value)) {
    alert('Por favor, insira um CRN válido.');
    return;
  }

  if (nameInput.value.trim() === '') {
    alert('Por favor, insira seu nome.');
    return;
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(emailInput.value)) {
    alert('Por favor, insira um endereço de email válido.');
    return;
  }

  const phoneRegex = /^\(\d{2}\) \d{5}-\d{4}$/;
  if (!phoneRegex.test(phoneInput.value)) {
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
  passwordInput.type = "text"; // Acessando diretamente a variável passwordInput
}

function hidePassword() {
  passwordInput.type = "password"; 
}

crnInput.addEventListener('input', () => {
    const crnValue = crnInput.value.replace(/\D/g, '');
    const crnLength = crnValue.length;
  
    if (crnLength < 4) {
      crnInput.value = crnValue;
    } else if (crnLength < 8) {
      crnInput.value = `${crnValue.slice(0, 4)}.${crnValue.slice(4)}`;
    } else {
      crnInput.value = `${crnValue.slice(0, 4)}.${crnValue.slice(4, 7)}.${crnValue.slice(7, 10)}-${crnValue.slice(10, 12)}`;
    }
  });
  
phoneInput.addEventListener('input', () => {
  const phoneValue = phoneInput.value.replace(/\D/g, '');
  const phoneLength = phoneValue.length;

  if (phoneLength < 2) {
    phoneInput.value = phoneValue;
  } else if (phoneLength < 8) {
    phoneInput.value = `(${phoneValue.slice(0, 2)}) ${phoneValue.slice(2)}`;
  } else {
    phoneInput.value = `(${phoneValue.slice(0, 2)}) ${phoneValue.slice(2, 7)}-${phoneValue.slice(7, 11)}`;
  }
});
