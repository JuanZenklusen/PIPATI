//piedra = 1
//papel = 2
//tijera =3

let pcRes;
let usRes;
let eleccionPc;
let usuario;

PC = () => {
    let min = Math.ceil(1);
    let max = Math.floor(3);
    eleccionPc = Math.floor(Math.random() * (max - min + 1) + min);
    if (eleccionPc == 1) {
        pcRes = "La PC ha elegido PIEDRA.";
    } else {
        if (eleccionPc == 2) {
            pcRes = "La PC ha elegido PAPEL.";
        } else {
            pcRes = "La PC ha elegido TIJERA.";
        }
    }
    document.getElementById("printPc").innerHTML = pcRes;
}
pie = () => {
    usuario = 1
    usRes = "Has elegido PIEDRA."
    PC()
    seleccion()
    resultado()
}
pap = () => {
    usuario = 2
    usRes = "Has elegido PAPEL."
    PC()
    seleccion()
    resultado()
}
tij = () => {
    usuario = 3
    usRes = "Has elegido TIJERA"
    PC()
    seleccion()
    resultado()
}
seleccion = () => {
    PC();
    document.getElementById("printUs").innerHTML = usRes;
}

resultado = () => {
    if (eleccionPc == usuario) {
        document.getElementById("printResultado").innerHTML="EMPATE. Vuelve a elegir";
        document.getElementById("printResultado").style.color = "orange"
        document.getElementById("printResultado").style.font = "30px"
    } else {
        if (eleccionPc == 1 && usuario == 2) {
            document.getElementById("printResultado").innerHTML = "GANASTE";
            document.getElementById("printResultado").style.color = "green"
        }else{
            if( eleccionPc == 1 && usuario == 3) {
                document.getElementById("printResultado").innerHTML = "PERDISTE";
                document.getElementById("printResultado").style.color = "red"
            }else{
                if( eleccionPc == 2 && usuario == 1) {
                    document.getElementById("printResultado").innerHTML = "PERDISTE";
                    document.getElementById("printResultado").style.color = "red"
                }else{
                    if( eleccionPc == 2 && usuario == 3) {
                        document.getElementById("printResultado").innerHTML = "GANASTE";
                        document.getElementById("printResultado").style.color = "green"
                    }else{
                        if( eleccionPc == 3 && usuario == 1) {
                            document.getElementById("printResultado").innerHTML = "GANASTE";
                            document.getElementById("printResultado").style.color = "green"
                        }else{
                            document.getElementById("printResultado").innerHTML = "PERDISTE";
                            document.getElementById("printResultado").style.color = "red"
                        }
                    }
                }
            }
        }
    }
}
