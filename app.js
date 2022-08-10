function temp(medida, graus){


    graus = document.getElementById('numero').value
    let box = document.getElementById('temperaturaselect')
    medida = box.options[box.selectedIndex].text;
    
console.log(medida);
console.log(graus)

if(medida=='Kelvin'){

    graus = parseInt(graus)+ parseInt(273)
    alert(graus)

}

}

