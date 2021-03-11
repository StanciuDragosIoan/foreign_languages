 

const toggleTranslation = (e) => {
    const translation = e.target.previousSibling; 
    if(translation.className === 'toggle-translation'){
        translation.className = 'hide';
        e.target.innerText = 'Show';
    } else {
        translation.className = 'toggle-translation';
        e.target.innerText = 'Hide';
    }
}