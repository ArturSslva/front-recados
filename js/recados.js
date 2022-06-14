async function getInfo(){
    const response = await fetch('http://localhost:8080/errands');
    const errands = await response.json();
    // console.log(errands);
    

    mostrarRecados(errands);
};

getInfo();

let usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));

if((localStorage.getItem('token') == null)){
    window.location.href = 'login.html';
}

function sair() {
    localStorage.removeItem('token');
    localStorage.removeItem('usuarioLogado');
    window.location.href = 'login.html';
}

const tableBody = document.getElementById('table-body');

async function addRecados() {
    const content = prompt("Digite o recado");

    const newItem = {
        content
    }

    await fetch('http://localhost:8080/errands', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newItem)
    });

    getInfo();
}

async function excluirRecados(id) {
    await fetch(`http://localhost:8080/errands${id}`, {
        method: "DELETE"
    });

    getInfo();
}

async function alterarRecados(id) {
    const content = prompt('Digite o recado');
    
    const newContent = {
        content
    };

    await fetch(`http://localhost:8080/errands${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newContent)
    });
    getInfo();
}

function mostrarRecados(errands) {
    tableBody.innerHTML = '';

    return errands.map((item) => {
        // console.log(item);

        const tr = document.createElement('tr');
        const th = document.createElement('th');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const containerButton = document.createElement('div');
        const alterarButton = document.createElement('div');
        const deletarButton = document.createElement('div');

        const position = errands.indexOf(item);

        th.setAttribute('scope', 'row');
        th.setAttribute('class', 'text-center');
        td1.setAttribute('class', 'text-center');
        td2.setAttribute('class', 'text-center d-flex align-items-center justify-content-center');
        containerButton.setAttribute('class', 'd-flex flex-row');
        alterarButton.setAttribute('class', 'button-table rounded-3 me-2');
        alterarButton.setAttribute('onclick', `alterarRecados(${item.id})`);
        alterarButton.setAttribute('style', `background-color:#8e909d`);

        deletarButton.setAttribute('class', 'button-table rounded-3');
        deletarButton.setAttribute('onclick', `excluirRecados(${item.id})`);
        deletarButton.setAttribute('style', `background-color:#9c775c`);

        tableBody.appendChild(tr);
        tr.appendChild(th);
        tr.appendChild(td1);
        tr.appendChild(td2);
        td2.appendChild(containerButton);
        containerButton.appendChild(alterarButton);
        containerButton.appendChild(deletarButton);

        th.innerText = position + 1;
        td1.innerText = item.content;
        alterarButton.innerText = 'Alterar';
        deletarButton.innerText = 'Deletar';
    });
}

getInfo();