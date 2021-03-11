 

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