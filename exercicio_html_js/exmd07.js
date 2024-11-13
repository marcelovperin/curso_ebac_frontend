
const segundoNumero = document.getElementById('campob');

const primeiroNumero = document.getElementById('campoa').value;


function validarFormulario() {
    let valorA = document.getElementById("campoa");
    valorA = valorA.value;

    let valorB = document.getElementById("campob");
    valorB = valorB.value;
    
    valorA = parseFloat(valorA);
    valorB = parseFloat(valorB);

    document.body.classList.remove("valida");
    document.body.classList.remove("erro");
    document.body.classList.remove("certo");

        if (!isNaN(valorA) && !isNaN(valorB)) 
    {
        if (valorB > valorA) {
            
            document.body.classList.add("certo");
        } else {
            document.body.classList.add("erro");
        }
    } 
    else
    {
        document.body.classList.add("valida");
    }

}
