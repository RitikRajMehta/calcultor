let input = document.createElement('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button =>{
    button.addEventListener('click',(e)=>{
        
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.getElementById('inputBox').value = string;
        }
        
        else if(e.target.innerHTML == 'AC')
        {
            string = "";
            document.getElementById('inputBox').value = string;
        }
        else if(e.target.innerHTML == 'DEL')
        {
            string = string.substring(0, string.length-1);
            document.getElementById('inputBox').value = string;
        }
        else
        {
        console.log(e.target)
        string = string + e.target.innerHTML;
        document.getElementById('inputBox').value = string;
        }

    })
})