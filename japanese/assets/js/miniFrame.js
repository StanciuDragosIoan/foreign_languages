/*
 <p class="text center underline">
      The Hiragana H Column (は　ひ　ふ　へ　ほ)
    </p>

    <p class="text center">
      は
      <span class="hide"> (HA) </span>
      <button onclick="toggleTranslation(event)" class="toggler-btn">
        Show
      </button>
    </p>
    <p class="text center">
      *with the <span class="snippet">゛</span> (dakuten) dyacritic this becomes
      <span class="snippet">ば </span>
      <span class="hide"> (BA) </span>
      <button onclick="toggleTranslation(event)" class="toggler-btn">
        Show
      </button>
    </p>
    <p class="text center">
      *with the <span class="snippet">ﾟ</span> (handakuten) dyacritic this
      becomes
      <span class="snippet">ぱ </span>
      <span class="hide"> (PA) </span>
      <button onclick="toggleTranslation(event)" class="toggler-btn">
        Show
      </button>
    </p>

*/

function testFunc() {
  console.log("test");
}

const displayColumns = (columns) => {
  //grab id #hiraganaColumns
  let outputDiv = document.querySelector("#hiraganaColumns");
  let globalOutput = ``;

  columns.forEach((i, index) => {
    globalOutput += `    
        <p class="text center underline">
            ${i.name} (${i.titleValue})
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
            <p class="text center bold"> Basic words with  ${i.name}</p>
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

    i.values.map((kanaVal, index) => {
      // TODO refactor logic
      if (kanaVal.mention !== null) {
        globalOutput += `
          <p class="text center">
            *the letter <span class="snippet">そ</span> has a second variant (which is
            <span class="snippet">${kanaVal.mention}</span> )
          </p>
        `;
      }
    });

    if (i.values.mention !== null) {
      // console.log(i.values);
    }

    if (i.practice.length > 0) {
      globalOutput += `
                <p class="text center bold">
                   Practice  the ${i.name} here
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
const renderPracticeTemplates = (practiceTemplates, selector) => {
  let outputDiv = document.querySelector(selector);
  let output = `
    <p class="text center">
      <button onclick="()=> console.log('shuffler here')" class="toggler-btn">
        Shuffle
      </button>
    </p>
    `;
  practiceTemplates.forEach((i) => {
    output += `
            <p class="text center">
            ${i.kana}
            <label class="labelItem">Answer</label>
            <input class="inputItem" oninput="check(event, '${i.value}')" type="text" />
        </p>   
        `;
  });
  outputDiv.innerHTML = output;
};

const renderPracticeTemplates2 = (arr) => {
  arr.forEach((i) => {
    let outputDiv = document.querySelector(i.selector);
    let output = `
        <p class="text center">
          <button onclick="()=> console.log('shuffler here')" class="toggler-btn">
            Shuffle
          </button>
        </p>
        `;
    i.practiceTemplates.forEach((i) => {
      output += `
                <p class="text center">
                ${i.kana}
                <label class="labelItem">Answer</label>
                <input class="inputItem" oninput="check(event, '${i.value}')" type="text" />
            </p>   
            `;
    });
    outputDiv.innerHTML = output;
  });
};

const renderPracticeColumn = () => {
  // document.querySelector('.practice-column').innerHTML = 'test';
};

// const test = [
//     {
//         practiceTemplates: values,
//         selector: "#practiceTemplates"
//     },

//     {
//         practiceTemplates: columnA,
//         selector: ".practice-columnA"
//     },

//     {
//         practiceTemplates: columnK,
//         selector: ".practice-columnK"
//     },
// ];

// shuffle(columnA);
//method calls
renderPracticeTemplates(values, "#practiceTemplates");
// renderPracticeTemplates(columnA, ".practice-column");
// renderPracticeTemplates2(test);

columns.map((column) => {
  shuffle(column.practice);
  shuffle(column.words);
});
displayColumns(columns);
