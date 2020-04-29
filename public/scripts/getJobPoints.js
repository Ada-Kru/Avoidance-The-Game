let btn = document.querySelector(".btn")
let choice = '';

// get whatever occupation user checked
function getRadioValue(){
    var element = document.getElementsByName('occupations');

    for(let i = 0; i < element.length; i++){
        if(element[i].checked){
            choice = element[i].value;
            return choice;
        }
    }
}

btn.addEventListener('click', () => {
    getRadioValue();
});

