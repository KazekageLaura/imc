let calcular = document.querySelector("#calcular");

function calculo () {
    let nome = document.querySelector("#nome").value;
    let altura = document.querySelector("#altura").value;
    let peso = document.querySelector("#peso").value;
    let imc = (peso / (altura * altura)).toFixed(1);
    tabela.innerHTML += ` <tr class = "limpar"> <th>${nome}</th> <th>${peso}</th> <th>${altura}</th> <th>${imc}</th> <tr/> `

        document.querySelector("#nome").value;
        document.querySelector("#altura").value;
        document.querySelector("#peso").value;
}

    document.querySelector("#limpar").onclick = function(){
        location.reload();  
        }
