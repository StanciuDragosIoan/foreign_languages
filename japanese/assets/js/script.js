 

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
    const answerBox = Array.from(document.querySelectorAll(".checkAnswer"));
    if(e.target.value !== answer){
       console.log('wrong');
       answerBox.map(i=> {
        i.style.border = "2px solid red";
    });
    } else {
        console.log('correct'); 

        answerBox.map(i=> {
            i.style.border = "2px solid green";
        });
    }
    answerBox.map(i=> {
        //i.style.backgroundColor = "red";
    });
}