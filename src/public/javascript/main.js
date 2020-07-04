const formColegios = document.getElementById('ingresarColegios');
const colegiosAddIcon = document.getElementById('colegiosAddIcon');
const colegiosRemoveIcon = document.getElementById('colegiosRemoveIcon');
const btnIngresarColegio = document.getElementById('btnIngresarColegio');
const numberOneLabel = document.querySelector('#numberOneLabel');
const test = document.getElementById('test');



let numero = test.childElementCount / 2 + 1;

console.log(test.childElementCount);


colegiosAddIcon.addEventListener('click', () => {
    // let newColegio = addColegio();

    let label = document.createElement('label');
    label.className = 'col-sm-1 col-form-label';
    label.innerText = numero;
    numero++;
    let newDiv = document.createElement('div');
    newDiv.className = 'col-sm-3';
    let input = document.createElement('input');
    input.type = 'text';
    input.name = 'colegiosLower[]';
    input.className = 'form-control';
    input.required = true;
    let formGroup = document.createElement('div');
    formGroup.className = 'col-sm-3 colegioMargin';
    formGroup.appendChild(input);


    // formColegios.insertBefore(newColegio, btnIngresarColegio);
    test.appendChild(label);
    test.appendChild(formGroup);
})


colegiosRemoveIcon.addEventListener('click', () => {
    // let newColegio = addColegio();

    for(let i = 0; i < 2; i++){
        test.removeChild(test.lastElementChild);
    }

    if(numero === 0) {
        numero = 0;
    } else {
        numero--;
    }
})

