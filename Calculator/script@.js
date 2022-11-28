let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';

function trigo(callback, angle){
    angle = angle * Math.PI/180;
}

function cos(){
    screen.value = Math.cos(screen.value);
}

function tan(){
    screen.value = Math.tan(screen.value);
}

function log(){
    screen.value = Math.log(screen.value);
}


function sqrt(){
    screen.value = Math.sqrt(screen.value);
}

function fact(){
    var i, num, f;
    f=1;
    num = screen.value;
    for(i=1; i<=num; i++){
        f = f*i;
    }

    i = i-1;
    screen.value = f;
}

for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;
        console.log('your buttontext is', buttonText)

        if(buttonText == 'X'){
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }

        else if(buttonText == '='){
            screen.value = eval(screenValue)
        }
        
        else if(buttonText == 'C'){
            screenValue = ""
            screen.value = screenValue;
        }

        else if(buttonText == 'sin'){
            sin();
        }

        else if(buttonText == 'cos'){
            cos();
        }

        else if(buttonText == 'Tan'){
            tan();
        }

        else if(buttonText == 'log'){
            log();
        }

        else if(buttonText == '√'){
            sqrt();
        }

        else if(buttonText == ''){
            pow();
        }

        else if(buttonText == 'x!'){
            fact();
        }

        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}