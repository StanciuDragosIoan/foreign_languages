 

const toggleTranslation = (e) => {
    const translation = e.target.previousSibling.previousSibling; 
   
    if(translation.className === 'hide'){
        translation.className = 'kana text-center';
        e.target.innerText = 'Hide';
    } else {
        translation.className = 'hide';
        e.target.innerText = 'Show';
    }
}

const check  = (e, answer) => {
    const label = e.target.previousSibling.previousSibling;
    console.log(label)
    const input =   e.target;
    console.log(input)

 if(e.target.value !== answer){
       console.log('wrong');
   
       label.style.border = "5px solid red";
       input.style.border = "5px solid red";
        label.innerText = "Wrong! X_x"
    } else {
        label.style.border = "5px solid green";
        input.style.border = "5px solid green";
        label.innerText = "Correct! ^_^"
    }

 
    
}