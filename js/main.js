const form = document.querySelector('form');

const resultadoSet = (message,imcValue) => {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = "";
    const p = createP();
    if(imcValue){
        p.classList.add('paragrafo-resultado');
        p.innerHTML = `Seu Imc é ${imcValue} (${message})`;
    }else{
        p.classList.add('bad')
        p.innerHTML = `${message}`;
    }
    resultado.appendChild(p);
}

const imcGet = (peso, altura) => {
    const imc = (peso / altura ** 2);
    return Number(imc.toFixed(2));
}


const getNivelImc = (imc) => {
    if(imc < 18.5) {
        resultadoSet('Abaixo do Peso',imc);
    }else if(imc >= 18.5 && imc <= 24.9){
        resultadoSet('Peso Normal',imc);
    }else if(imc >= 25 && imc <= 29.9 ){
        resultadoSet('Sobrepeso',imc);
    }else if(imc >= 30 && imc <= 34.9){
        resultadoSet('Obesidade grau 1',imc);
    }else if(imc >= 35 && imc <= 39.9){
        resultadoSet('Obesidade grau 2',imc);
    }else {
        resultadoSet('Obesidade grau 3',imc);
    }
}



form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputPeso = document.querySelector('#peso');
    const inputAltura = document.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);


    if(!peso) {
        resultadoSet('Valor inválido');
        return;
    }

    if(!altura){
        resultadoSet('Valor inválido');
        return;
    }

    const imcValue = imcGet(peso,altura);
    const imcCategory = getNivelImc(imcValue);
    // const message = `Seu IMC é ${imcCategory}`;
    // resultadoSet(message,true);
});


const createP = () => {
    const p = document.createElement('p');
    return p;
}














































































// Capturar evento de submit do formulário
// const form = document.querySelector('#formulario');

// form.addEventListener('submit', function(e){
//     e.preventDefault();
//     const inputPeso = e.target.querySelector('#peso');
//     const inputAltura = e.target.querySelector('#altura');


//     const peso = Number(inputPeso.value);
//     const altura = Number(inputAltura.value);

//     if(!peso) {
//         setResultado('Peso inválido', false);
//         return;
//     }

//     if(!altura) {
//         setResultado('Altura inválida', false);
//         return;
//     }

//     const imc = getImc(peso, altura);
//     const nivelImc = getNivelImc(imc);
//     const msg = `Seu IMC é ${imc} (${nivelImc}).`;
//     setResultado(msg,true);
// });

// function getNivelImc (imc) {
//     const nivel = ['Abaixo do peso', 'Peso Normal', 'Sobrepeso',
//     'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

//     if(imc >= 39.9) return nivel[5];
    
//     if(imc >= 34.9) return nivel[4];
    
//     if(imc >= 29.9) return nivel[3];
    
//     if(imc >= 24.9) return nivel[2];
    
//     if(imc >= 18.5) return nivel[1];
    
//     if(imc < 18.5) return nivel[0];
    
// }

// function getImc (peso, altura) {
//     const imc = peso / altura ** 2;
//     return imc.toFixed(2);
// }


// const criaP = () => {
//     const p = document.createElement('p');
//     return p;
// }


// const setResultado = (msg, isValid) => {
//     const resultado = document.querySelector('#resultado');
//     resultado.innerHTML = '';

//     const p = criaP();

//    if(isValid) { 
//         p.classList.add('paragrafo-resultado');
//     }else {
//         p.classList.add('bad');
//     }

//     p.innerHTML = msg;
//     resultado.appendChild(p);
// }