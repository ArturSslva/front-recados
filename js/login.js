function entrar() {
    let usuario = document.querySelector('#usuario');
    let userLabel = document.querySelector('#userLabel');

    let senha = document.querySelector('#senha');
    let senhaLabel = document.querySelector('#senhaLabel');

    let msgErroLogin = document.querySelector('#msgErroLogin');

    let listaUser = [];

    let userValid = {
        nome: '',
        usuario: '',
        senha: ''
    };

    listaUser = JSON.parse(localStorage.getItem('listaUser'));

    listaUser.forEach((item) => {
        if(usuario.value == item.usuarioCad && senha.value == item.senhaCad) {
            userValid = {
                nome: item.nomeCad,
                usuario: item.usuarioCad,
                senha: item.senhaCad
            }
        }
    })
    
    if(usuario.value == userValid.usuario && senha.value == userValid.senha) {
        window.location.href = 'recados.html';

        let token = Math.random().toString(16).substring(2);
        localStorage.setItem('token', token);

        localStorage.setItem('usuarioLogado', JSON.stringify(userValid));

    } else {
        userLabel.setAttribute('style', 'color:red');
        usuario.setAttribute('style', 'border-color:red');
        senhaLabel.setAttribute('style', 'color:red');
        senha.setAttribute('style', 'border-color:red');
        msgErroLogin.setAttribute('style', 'display:block');
        msgErroLogin.innerHTML = 'Usuario ou senha incorreta';
        usuario.focus();
    }
}

