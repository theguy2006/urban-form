
const password = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');

togglePassword.addEventListener('click', () => {

    const isPassword = password.type === 'password';

    password.type = isPassword ? 'text' : 'password';

    togglePassword.textContent = isPassword
        ? 'OCULTAR'
        : 'MOSTRAR';

});
