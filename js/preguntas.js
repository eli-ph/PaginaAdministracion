(function(){
    const tituloPreguntas = [...document.querySelectorAll('.titulo__pregunta')]; /*Todas las preguntas en un array*/
    console.log(tituloPreguntas)

    tituloPreguntas.forEach(question =>{
        question.addEventListener('click', ()=>{
            let altura = 0;
            let respuesta = question.nextElementSibling;
            let padding = question.parentElement.parentElement;

            padding.classList.toggle('padding__preguntasF--add');
            question.children[0].classList.toggle('flecha__pregunta--rotate');

            if(respuesta.clientHeight === 0){
                altura = respuesta.scrollHeight; /*Alto minimo para que se muestre*/
            }

            respuesta.style.height = `${altura}px`;
        });
    });
})();