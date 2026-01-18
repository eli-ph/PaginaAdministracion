(function(){
    const deslizantes = [...document.querySelectorAll('.descripcion__cuerpo')]; /*array de secciones*/
    const botonSiguinete = document.querySelector('#despues'); 
    const botonAntes = document.querySelector('#antes');
    let valor;

    botonSiguinete.addEventListener('click', ()=>{
        changePosition(1);
    });

    botonAntes.addEventListener('click', ()=>{
        changePosition(-1);
    });

    const changePosition = (add) =>{
        const descripcionSiguiente = document.querySelector('.descripcion__cuerpo--shadow').dataset.id;
        valor = Number(descripcionSiguiente);
        valor+= add;
        
        deslizantes[Number(descripcionSiguiente)-1].classList.remove('descripcion__cuerpo--shadow');

        if(valor === deslizantes.length+1 || valor === 0){
            valor = valor === 0 ? deslizantes.length : 1;
        }
        deslizantes[valor-1].classList.add('descripcion__cuerpo--shadow');
    }

})();
