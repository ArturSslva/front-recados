let button = document.querySelector('.fa-eye', 'verSenha');
let buttonConfirm = document.querySelector('#verConfirmSenha');

let nome = document.querySelector('#nome');
let labelNome = document.querySelector('#labelNome');
let validNome = false;

let usuario = document.querySelector('#usuario');
let labelUsuario = document.querySelector('#labelUsuario');
let validUsuario = false;

let senha = document.querySelector('#senha');
let labelSenha = document.querySelector('#labelSenha');
let validSenha = false;

let confirmSenha = document.querySelector('#confirmSenha');
let labelConfirmSenha = document.querySelector('#labelConfirmSenha');
let validConfirmSenha = false;

let msgErro = document.querySelector('#msgErro');
let msgSucesso = document.querySelector('#msgSucesso');

function cadastrar() {
    if(validNome && validUsuario && validSenha && validConfirmSenha) {
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]');

        listaUser.push(
            {
                nomeCad: nome.value,
                usuarioCad: usuario.value,
                senhaCad: senha.value
            }
        )

        localStorage.setItem('listaUser', JSON.stringify(listaUser));

        msgSucesso.setAttribute('style', 'display:block');
        msgSucesso.innerHTML = '<strong>Cadastrando usuário...</strong>';
        msgErro.setAttribute('style', 'display:none');

        setTimeout(()=> {
            window.location.href = 'login.html';
        }, 2000)

    } else {
        msgErro.setAttribute('style', 'display:block');
        msgErro.innerHTML = '<strong>Verifique os campos de cadastro novamente</strong>';
        msgSucesso.setAttribute('style', 'display:none');
    }
}

button.addEventListener('click', ()=> {
    let inputSenha = document.querySelector('#senha');

    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text');
    } else {
        inputSenha.setAttribute('type', 'password');
    }
})


buttonConfirm.addEventListener('click', ()=> {
    let inputConfirmSenha = document.querySelector('#confirmSenha')

    if(inputConfirmSenha.getAttribute('type') == 'password'){
        inputConfirmSenha.setAttribute('type', 'text');
    } else {
        inputConfirmSenha.setAttribute('type', 'password');
    }
})

nome.addEventListener('keyup', ()=> {
    if(nome.value.length < 3) {
        labelNome.setAttribute('style', 'color: red');
        nome.setAttribute('style', 'border-color: red');
        validNome = false;
    } else {
        labelNome.setAttribute('style', 'color: green');
        nome.setAttribute('style', 'border-color: green');
        validNome = true;
    }
})

usuario.addEventListener('keyup', ()=> {
    if(usuario.value.length < 3) {
        labelUsuario.setAttribute('style', 'color:red');
        usuario.setAttribute('style', 'border-color:red');
        validUsuario = false;
    } else {
        labelUsuario.setAttribute('style', 'color:green');
        usuario.setAttribute('style', 'border-color:green');
        validUsuario = true;
    }
})

senha.addEventListener('keyup', ()=> {
    if(senha.value.length < 4) {
        labelSenha.setAttribute('style', 'color:red');
        senha.setAttribute('style', 'border-color:red');
        validSenha = false;
    } else {
        labelSenha.setAttribute('style', 'color:green');
        senha.setAttribute('style', 'border-color:green');
        validSenha = true;
    }
})

confirmSenha.addEventListener('keyup', ()=> {
    if(senha.value != confirmSenha.value) {
        labelConfirmSenha.setAttribute('style', 'color:red');
        confirmSenha.setAttribute('style', 'border-color:red');
        validConfirmSenha = false;
    } else {
        labelConfirmSenha.setAttribute('style', 'color:green');
        confirmSenha.setAttribute('style', 'border-color:green');
        validConfirmSenha = true;
    }
})