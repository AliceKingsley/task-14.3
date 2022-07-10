function clickBack() {
    let activDiv = document.querySelector('.view');
    console.log(activDiv);

    let newActivDiv = activDiv.previousElementSibling;
    console.log(newActivDiv);

    let buttonRight = document.querySelector('.front');
    buttonRight.disabled = false;

    activDiv.classList.remove('view');
    activDiv.classList.add('hide');
    newActivDiv.classList.add('view');
    newActivDiv.classList.remove('hide');

    if (newActivDiv.previousElementSibling === null) {
        let buttonLeft = document.querySelector('.back');        
        buttonLeft.disabled = true;
    }
}

function clickFront() {
    let activDiv = document.querySelector('.view');
    console.log(activDiv);

    let newActivDiv = activDiv.nextElementSibling;
    console.log(newActivDiv);

    let buttonLeft = document.querySelector('.back');
    buttonLeft.disabled = false;

    activDiv.classList.remove('view');
    activDiv.classList.add('hide');
    newActivDiv.classList.add('view');
    newActivDiv.classList.remove('hide');

    if (newActivDiv.nextElementSibling === null) {
        let buttonRight = document.querySelector('.front');
        buttonRight.disabled = true;
    }
}