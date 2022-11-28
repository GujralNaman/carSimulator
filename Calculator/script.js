let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';

for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;
        console.log('button text is ', buttonText);

        if(buttonText == 'X'){
            buttonText = '*';
            screenValue += buttonText
            screen.value = screenValue;
        }
        else if(buttonText == 'C'){
            screenValue = ""
            screen.value = screenValue;
        }

        else if(buttonText == '='){
            screen.value = eval(screenValue)
        }

        else if(buttonText == 'π'){
            buttonText = '3.14';
            screenValue += buttonText
            screen.value = screenValue;
        }
        
        else if(buttonText == 'e'){
            buttonText = '2.71828';
            screenValue += buttonText
            screen.value = screenValue;
        }    
        else if(buttonText == '←'){
            screen.value = screen.value.substr(0, screen.value.length-1)
        }

        else if(buttonText == ''){
            alert('no new function added. still under perview')
        }

        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}
