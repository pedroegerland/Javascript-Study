var botaoAdicionar = document.querySelector("#buscar-pacientes");
var verificarSeEhReenvio = 0;

botaoAdicionar.addEventListener("click", function() {
    var xhr = new XMLHttpRequest();
    var verificarSeEhReenvio2 = document.querySelector("#reenvio-ajax");;

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function() {
        var erroAjax = document.querySelector("#erro-ajax");
        if(verificarSeEhReenvio > 0){
            verificarSeEhReenvio2.classList.remove("invisivel");
            console.log("Retirado");
            return;
        }

        if (xhr.status == 200) {
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);
            verificarSeEhReenvio++; 

            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente);
            });

            console.log(verificarSeEhReenvio);
        } else {
            erroAjax.classList.remove("invisivel");
        }
    
    });   

    xhr.send();
});


