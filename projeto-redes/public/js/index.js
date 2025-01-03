const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

// ---------- Login dos usuários ---------- //
document.addEventListener('DOMContentLoaded', () => {
  const emailInputLogin = document.getElementById('email-login');
  const passwordInputLogin = document.getElementById('password-login');
  const loginButton = document.getElementById('login-button');

  loginButton.addEventListener('click', async (event) => {
    event.preventDefault();

    const email = emailInputLogin.value;
    const password = passwordInputLogin.value;

    // Valida se os campos não estão vazios
    if (!email || !password) {
      alert('Os campos de e-mail e senha são obrigatórios!');
      return;
    }

    try {
      // Faz a requisição ao backend enviando o e-mail e a senha
      const response = await fetch('http://localhost:80/users/check-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
        credentials: 'include',
      });

      const data = await response.json();

      // Verifica o resultado do backend
      if (data.exists && data.validPassword) {
        window.location.href = '/home';
      } else if (data.exists && !data.validPassword) {
        alert('Senha incorreta! Tente novamente.');
      } else {
        alert('Usuário não encontrado! Verifique as informações.');
      }
    } catch (error) {
      console.error('Erro ao verificar usuário:', error);
      alert('Erro ao verificar o usuário. Tente novamente mais tarde.');
    }
  });
});

// ---------- Registro de usuários ---------- //
document.addEventListener('DOMContentLoaded', () => {
  const registerButton = document.getElementById('register-button');
  const userInputRegister = document.getElementById('user-register');
  const emailInputRegister = document.getElementById('email-register');
  const passwordInputRegister = document.getElementById('password-register');

  registerButton.addEventListener('click', async (event) => {
    event.preventDefault();

    const username = userInputRegister.value;
    const email = emailInputRegister.value;
    const password = passwordInputRegister.value;

    // Valida se os campos não estão vazios
    if (!username || !email || !password) {
      alert('Todos os campos são obrigatórios para registro!');
      return;
    }

    try {
      // Faz a requisição ao backend para registrar o usuário
      const response = await fetch('http://localhost:80/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();

      if (data.success) {
        alert('Usuário registrado com sucesso! Faça login.');
        window.location.href = '/'; // Redireciona para a página de login
      } else {
        alert('Erro ao registrar usuário: ' + data.error);
      }
    } catch (error) {
      console.error('Erro ao registrar usuário:', error);
      alert('Erro ao registrar o usuário. Tente novamente mais tarde.');
    }
  });
});