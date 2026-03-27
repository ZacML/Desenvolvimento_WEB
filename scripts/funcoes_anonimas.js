const alert1 = function(){
    alert("Primeiro alerta")
}

const alert2 = function(){
    alert("Segundo alerta")
}

function registrar(){

    var vl = document.getElementById("txtVl").value;

    if(vl == 1){
        document.getElementById("btExecutar").onclick = alert1;
    }

    if(vl == 2 ){
        document.getElementById("btExecutar").onclick = alert2;
    }

}