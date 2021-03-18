const displayColumns = (columns) => {
  //grab id #hiraganaColumns
  let outputDiv = document.querySelector("#hiraganaColumns");
  let globalOutput = ``;
  // let mentionOutput = ``;

  columns.forEach((i, index) => {
    globalOutput += `    
        <p class="text center underline">
          The Hiragana ${i.title}
        </p>
        `;


    i.values.forEach((value) => {
      globalOutput += `    
            <p class="text center">
                ${value.kana}
                <span class="hide"> (${value.kanaTranslation}) </span>
                <button onclick="toggleTranslation(event)" class="toggler-btn">
                Show
                </button>
            </p>
            
            ${value.mention !== null ?
              value.mention : ''
              }
            `;

        

      if (value.dakuten !== null) {
        globalOutput += `
                <p class="text center">
                    *with the <span class="snippet">゛</span> (dakuten) dyacritic this becomes
                    <span class="snippet">${value.dakuten}</span>
                    <span class="hide"> (${value.dakutenTranslation}) </span>
                    <button onclick="toggleTranslation(event)" class="toggler-btn">
                    Show
                    </button>
                </p>
                `;
      }

      if (value.handakuten !== null) {
        globalOutput += `
                <p class="text center">
                    *with the <span class="snippet">ﾟ</span> (handakuten) dyacritic this
                    becomes
                    <span class="snippet">${value.handakuten}</span>
                    <span class="hide"> (${value.handakutenTranslation}) </span>
                    <button onclick="toggleTranslation(event)" class="toggler-btn">
                        Show
                    </button>
                </p>
                `;
      }
    });


   

    if (i.words.length > 0) {
      globalOutput += `
            <p class="text center bold"> Basic words with the  ${i.title}</p>
            <p class="text center">*remember that on each page refresh, the words get shuffled</p>
            `;
      i.words.forEach((word) => {
        globalOutput += `
              <p class="text center">
                ${word.kanaWord}
                <span class="hide"> (${word.translation}) </span>
                <button onclick="toggleTranslation(event)" class="toggler-btn">
                  Show
                </button>
              </p>
              `;
      });
    }


    

    if (i.practice.length > 0) {
      globalOutput += `
                <p class="text center bold">
                   Practice  the ${i.title} here
                </p>
                <p class="text center">
                *practice remembering the Kana characters here
                </p>
                <p class="text center">
                *remember that on each page refresh they get shuffled
                </p>
                `;
      i.practice.map((practiceKana) => {
        globalOutput += `
                  <p class="text center">
                    ${practiceKana.kana}
                    <label class="labelItem">Answer</label>
                    <input class="inputItem" oninput="check(event, '${practiceKana.value}')" type="text">
                </p>
                  `;
      });
    }
  });

  outputDiv.innerHTML = globalOutput;
};


//method calls
columns.map((column) => {
  shuffle(column.practice);
  shuffle(column.words);
});
displayColumns(columns);columns.map((column) => {
  shuffle(column.practice);
  shuffle(column.words);
});
displayColumns(columns);