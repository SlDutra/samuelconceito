document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    // Obtendo os valores dos campos
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Aqui você pode validar o usuário e a senha
    if (username === 'Samuel Dutra de Matos' && password === 'Samuel2007.') { // Exemplo de validação
        // Redireciona para o dashboard.html
        window.location.href = 'dashboard.html';
    } else {
        alert('Usuário ou senha incorretos');
    }
});

