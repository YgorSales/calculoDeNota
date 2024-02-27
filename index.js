const form = document.getElementById("frm");
const resp = document.getElementById("azul");
const resp2 = document.getElementById("vermelho");

form.addEventListener("submit", (e) => {

    const n1 = Number(form.nota1.value);
    const n2 = Number(form.nota2.value);

    const soma = ( n1 * 0.4 ) + ( n2 * 0.6);

    if( soma > 6.0 ){
        resp.innerText = ` voce foi APROVADO, sua nota é: ${soma} `
    }
    else if(soma < 6.0){
        resp2.innerText = ` voce foi REPROVADO, sua nota é: ${soma.toFixed(2)} `
    }

   e.preventDefault()

});