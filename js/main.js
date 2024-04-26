
const btn = document.getElementById('btn');

 btn.addEventListener('click', () => {

    

    const form = document.forms['form'];
    const numCard = form['card-number'].value;
    const nameCard = form['card-name'].value;
    const dateOne = form['date-exp1'].value;
    const dateTwo = form['date-exp2'].value;
    const dateResultado = `${dateOne}/${dateTwo}`;   
    const cvc = form['cvc'].value;

    let newNumberCard = ''; // Inicializamos una cadena vacía para almacenar el número de tarjeta formateado
        for (let i = 0; i < numCard.length; i++) {
            newNumberCard += numCard[i]; // Agregamos el dígito actual al número de tarjeta formateado
            if ((i + 1) % 4 === 0) {
                newNumberCard += ' '; // Agregamos un espacio después de cada conjunto de 4 dígitos, excepto al final
            }
        }
        document.getElementById('nameUser').innerHTML = nameCard;
    

        // Estas serian las validaciones en el caso que no se llenen los campos.
        if (nameCard.trim() === '') {
            document.getElementById('nameCardWarning').style.display = 'block';
            return;
        } else {
            document.getElementById('nameCardWarning').style.display = 'none';
        }
        if (numCard.trim() === '') {
            document.getElementById('numCardWarning').style.display = 'block';
            return;

        } else {
            document.getElementById('numCardWarning').style.display = 'none';
        }
        if (dateOne.trim() === '' || dateTwo.trim() === '') {
            document.getElementById('dateExpWarning').style.display = 'block';
             return;
        } else {
            document.getElementById('dateExpWarning').style.display = 'none';
        }
    
        if (cvc.trim() === '') {
            document.getElementById('cvcWarning').style.display = 'block';
            return; // Detener la ejecución si el campo está vacío
        } else {
            document.getElementById('cvcWarning').style.display = 'none';
            const finish = document.getElementById('finish');
            form.style.display = 'none';
            finish.style.display = 'block';
        }
    
       


    document.getElementById('numberUser').innerHTML = newNumberCard;
    document.getElementById('dateUser').innerHTML = dateResultado;
    document.getElementById('cvcUser').innerHTML = cvc; 

 })


 function limitNumbers(event) {
    const input = event.target;
    const maxLength = 16; 

    if (input.value.length > maxLength) {
        input.value = input.value.slice(0, maxLength); // Truncar el valor a la longitud máxima
    }
}

function limitDates(event){
    const input = event.target;
    const maxLength = 2;

    if(input.value.length > maxLength){
        input.value = input.value.slice(0, maxLength);
    }
}

function cvcLimit(event){
    const input = event.target;
    const maxLength = 3;

    if(input.value.length > maxLength){
        input.value = input.value.slice(0, maxLength);
    }
}


function reload(){
    location.reload();
}