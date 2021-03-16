/*
 * practice kana values
 */
const values = [
    {
        kana: 'あ',
        value: 'a'
    },

    {
        kana: 'い',
        value: 'i'
    },

    {
        kana: 'う',
        value: 'u'
    },

    {
        kana: 'え',
        value: 'e'
    },

    {
        kana: 'お',
        value: 'o'
    }
];

 
/*
 * shuffle array of values
 */

function shuffle(array) {
    // var currentIndex = array.length, temporaryValue, randomIndex;

    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

shuffle(values);
  


/*
 * render practice templates
 */
const renderPracticeTemplates = (practiceTemplates) => {
    let outputDiv = document.querySelector("#practiceTemplates");
    let output = ``;
    practiceTemplates.forEach((i)=> {
        output += 
        `
            <p class="text center">
            ${i.kana}
            <label class="labelItem">Answer</label>
            <input class="inputItem" oninput="check(event, '${i.value}')" type="text" />
        </p>   
        `
   
    }); 
    outputDiv.innerHTML = output;

};

renderPracticeTemplates(values);
 