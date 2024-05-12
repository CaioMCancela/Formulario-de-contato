function analisar(){
    let nome = document.getElementById("Nome");
    let email = document.getElementById("Email");
    let mensagem = document.getElementById("Mensagem");
    let pnome = document.getElementById("pnome");
    let pemail = document.getElementById("pemail");
    let pmensagem =document.getElementById("pmensagem");
    
        if(nome.value == ""){
            pnome.innerHTML = "Campo não digitado";
            nome.classList.add ("nDigitado");
        }else{ 
            pnome.innerHTML = "";
            nome.classList.remove ("nDigitado");
        }

        if(email.value == ""){
            pemail.innerHTML = "Campo não digitado";
            email.classList.add ("nDigitado");
        }else{
            pemail.innerHTML = "";
            email.classList.remove ("nDigitado");
        }

        if(mensagem.value == ""){
            pmensagem.innerHTML = "Campo não digitado";
            mensagem.classList.add ("nDigitado");
        }else{
            pmensagem.innerHTML = "";
            mensagem.classList.remove ("nDigitado");
        }

        if(nome.value != "" && email.value != "" && mensagem.value != ""){
            nome.value = "";
            email.value = "";
            mensagem.value = "";
            alert("Mensagem enviada com sucesso!");
        }
}





 

