const texto = document.querySelector(".texto");
const encriptado = document.querySelector(".encriptado");
const copiar = document.querySelector(".copiar");
const desaparece1 = document.querySelector(".desaparece1")
const desaparece2 = document.querySelector(".desaparece2")

/*Las "llaves" de encriptación que utilizaremos son las siguientes:
`La letra "e" es convertida para "enter"`
`La letra "i" es convertida para "imes"`
`La letra "a" es convertida para "ai"`
`La letra "o" es convertida para "ober"`
`La letra "u" es convertida para "ufat"`*/
function botonencriptar( ) {
    const texto1 = encriptar(texto.value);
    encriptado.value=texto1;
    encriptado.style.backgroundImage = "none";
    texto.value = "";
    desaparece1.style.display = "none";
    desaparece2.style.display = "none";
    copiar.style.display = "block";
    

}
function encriptar(stringtexto){
    let matrisregla =[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringtexto = stringtexto.toLowerCase();
    for (let i = 0; i < matrisregla.length; i++) {
        if (stringtexto.includes(matrisregla[i] [0])){
            stringtexto = stringtexto.replaceAll(matrisregla[i][0],matrisregla[i][1]);
        }
    }
    return stringtexto;
}
function botondesencriptar(){
    const texto2 = desencriptar(texto.value);
    encriptado.value=texto2;
    encriptado.style.backgroundImage = "none";
    texto.value = "";
}
function desencriptar(stringtexto1){
    let matrisregla =[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    for (let i = 0; i < matrisregla.length; i++) {
        if (stringtexto1.includes(matrisregla[i] [1])){
            stringtexto1 = stringtexto1.replaceAll(matrisregla[i][1],matrisregla[i][0]);
        }
    }
    return stringtexto1;
}
function botoncopiar(){
    encriptado.select();
    navigator.clipboard.writeText(encriptado.value)
    encriptado.value = "";
}
