function tomaDeDatos(){
    console.log("capturado");
    function Persona(nombre,edad){// esta function crea un objeto para posterior mente guardarlo en una Array
        this.nombre = nombre;
        this.edad = edad;
    }
    let nombreCapturar = document.getElementById("nombre").value;
    console.log(nombreCapturar);
    let edadCapturar = document.getElementById("edad").value;
    console.log(edadCapturar);

    nuevoSujeto = new Persona(nombreCapturar,edadCapturar);//% no se pone ni var ni let ni const para que se convierta en una variable global y no local
    //ingresa los datos en el objeto Persona
    console.log(nuevoSujeto);
    agregar();
    document.getElementById("nombre").value = ""; //para que los valores de los inputs se borren
    document.getElementById("edad").value = "";
}
let baseDatos = []; //base de datos de los nombre y edades.

function agregar(){ // function para ingresar los datos al Array base de datos
    baseDatos.push(nuevoSujeto);
    console.log(baseDatos);
    document.getElementById("table").innerHTML += '<tbody><td>'+ nuevoSujeto.nombre + '</td><td>'+ nuevoSujeto.edad +'</td></tbody>';// el += se pone para que cree u nuevo valor en la tabla y no lo borre y remplace-- y las etiquetas html tienen que estar entre comillas simples o dobles cada vez que se habré o sierran
};