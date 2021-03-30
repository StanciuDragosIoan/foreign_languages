const columns = [
  // vowels
  {
    title: "vowels (ア イ ウ エ オ)",
    values: [
      {
        kana: "ア",
        kanaTranslation: "A",
        dakuten: null,
        dakutenTranslation: null,
        handakuten: null,
        handakutenTranslation: null,
        mention: null,
      },

      {
        kana: "イ",
        kanaTranslation: "i",
        dakuten: null,
        dakutenTranslation: null,
        handakuten: null,
        handakutenTranslation: null,
        mention: null,
      },

      {
        kana: "ウ",
        kanaTranslation: "U",
        dakuten: "ヴ",
        dakutenTranslation: "V",
        handakuten: null,
        handakutenTranslation: null,
        mention: `<p class="text center">
        *there is no 'V' sound in Japanese so most people will pronounce
        <span class="snippet">ヴ</span> as 'vu' or 'bui' (from 'B'). Even 'vu' is 
        very rare, so <span class="snippet">ヴ</span> will almost always be pronounced as
        (bu) from the H column for names starting with V. 
        *An exception might be: <br>  ヴラド・ツェペシュ <br>  (Vurado Tsepeshu)
      </p>
      `,
      },

      {
        kana: "エ",
        kanaTranslation: "E",
        dakuten: null,
        dakutenTranslation: null,
        handakuten: null,
        handakutenTranslation: null,
        mention: null,
      },

      {
        kana: "オ",
        kanaTranslation: "O",
        dakuten: null,
        dakutenTranslation: null,
        handakuten: null,
        handakutenTranslation: null,
        mention: null,
      },
    ],

    words: [
      {
        kanaWord: "to_replace_with_word",
        translation: "translation_goes_here",
      },
    ],

    practice: [
      {
        kana: "ア",
        value: "a",
      },

      {
        kana: "イ",
        value: "i",
      },

      {
        kana: "ウ",
        value: "u",
      },

      {
        kana: "エ",
        value: "e",
      },

      {
        kana: "オ",
        value: "o",
      },
    ],
  },

  {
    title: "Katakana diagraphs - to finish... (ア イ ウ エ オ)",
    values: [
      {
        kana: "ア",
        kanaTranslation: "A",
        dakuten: null,
        dakutenTranslation: null,
        handakuten: null,
        handakutenTranslation: null,
        mention: null,
      },

      {
        kana: "イ",
        kanaTranslation: "i",
        dakuten: null,
        dakutenTranslation: null,
        handakuten: null,
        handakutenTranslation: null,
        mention: null,
      },

      {
        kana: "ウ",
        kanaTranslation: "U",
        dakuten: "ヴ",
        dakutenTranslation: "V",
        handakuten: null,
        handakutenTranslation: null,
        mention: `<p class="text center">
        *there is no 'V' sound in Japanese so most people will pronounce
        <span class="snippet">ヴ</span> as 'vu' or 'bui' (from 'B'). Even 'vu' is 
        very rare, so <span class="snippet">ヴ</span> will almost always be pronounced as
        (bu) from the H column for names starting with V. 
        *An exception might be: <br>  ヴラド・ツェペシュ <br>  (Vurado Tsepeshu)
      </p>
      `,
      },

      {
        kana: "エ",
        kanaTranslation: "E",
        dakuten: null,
        dakutenTranslation: null,
        handakuten: null,
        handakutenTranslation: null,
        mention: null,
      },

      {
        kana: "オ",
        kanaTranslation: "O",
        dakuten: null,
        dakutenTranslation: null,
        handakuten: null,
        handakutenTranslation: null,
        mention: `
        <p class="text center">
        Where hiragana puts 2 vowels to express the length of the same vowel <span class="snippet">ああ</span>
        katakana will lengthen the vowel by adding a dash to it: <span class="snippet">アー</span>
      </p>

      <p class="text center bold">
        Diagraphs in katakana
      </p>

      <p class="text center">
        Katakana makes diagraphs in order to better mimmick foreign pronounciations:
      </p>

      <p class="text center"> 
        wi = ウィ (note the <span class="snippet">ィ</span> is small)
      </p>
      <p class="text center"> 
        we = ウェ (note the <span class="snippet">ェ</span> is small)
      </p>
      <p class="text">
        *note that the wi or we sounds do not exist in Japanese
      </p>
        `,
      },
    ],

    words: [
      {
        kanaWord: "to_replace_with_word",
        translation: "translation_goes_here",
      },
    ],

    practice: [
      {
        kana: "ア",
        value: "a",
      },

      {
        kana: "イ",
        value: "i",
      },

      {
        kana: "ウ",
        value: "u",
      },

      {
        kana: "エ",
        value: "e",
      },

      {
        kana: "オ",
        value: "o",
      },
    ],
  },
];

/*
 * practice all kana values
 */
const values = [
  {
    kana: "あ",
    value: "a",
  },

  {
    kana: "い",
    value: "i",
  },

  {
    kana: "う",
    value: "u",
  },

  {
    kana: "え",
    value: "e",
  },

  {
    kana: "お",
    value: "o",
  },

  {
    kana: "か",
    value: "ka",
  },

  {
    kana: "が",
    value: "ga",
  },

  {
    kana: "き",
    value: "ki",
  },

  {
    kana: "ぎ",
    value: "gi",
  },

  {
    kana: "く",
    value: "ku",
  },

  {
    kana: "ぐ",
    value: "gu",
  },

  {
    kana: "け",
    value: "ke",
  },

  {
    kana: "げ",
    value: "ge",
  },

  {
    kana: "こ",
    value: "ko",
  },

  {
    kana: "ご",
    value: "go",
  },

  {
    kana: "さ",
    value: "sa",
  },

  {
    kana: "ざ",
    value: "za",
  },

  {
    kana: "し",
    value: "shi",
  },

  {
    kana: "じ",
    value: "dji",
  },

  {
    kana: "す",
    value: "su",
  },

  {
    kana: "ず",
    value: "zu",
  },

  {
    kana: "せ",
    value: "se",
  },

  {
    kana: "ぜ",
    value: "se",
  },

  {
    kana: "そ",
    value: "so",
  },

  {
    kana: "ぞ",
    value: "zo",
  },

  {
    kana: "ソ",
    value: "so",
  },

  {
    kana: "た",
    value: "ta",
  },

  {
    kana: "だ",
    value: "da",
  },

  {
    kana: "ち",
    value: "chi",
  },

  {
    kana: "ぢ",
    value: "dji",
  },

  {
    kana: "つ",
    value: "tsu",
  },

  {
    kana: "づ",
    value: "dzu",
  },

  {
    kana: "て",
    value: "te",
  },

  {
    kana: "で",
    value: "de",
  },

  {
    kana: "と",
    value: "to",
  },

  {
    kana: "ど",
    value: "do",
  },

  {
    kana: "な",
    value: "na",
  },

  {
    kana: "に",
    value: "ni",
  },

  {
    kana: "ぬ",
    value: "nu",
  },

  {
    kana: "ね",
    value: "ne",
  },

  {
    kana: "の",
    value: "no",
  },

  {
    kana: "は",
    value: "ha",
  },

  {
    kana: "ば",
    value: "ba",
  },

  {
    kana: "ば",
    value: "pa",
  },

  {
    kana: "ひ",
    value: "hi",
  },

  {
    kana: "び",
    value: "bi",
  },

  {
    kana: "ぴ",
    value: "pi",
  },

  {
    kana: "ふ",
    value: "fu",
  },

  {
    kana: "ぶ",
    value: "bu",
  },

  {
    kana: "ぷ",
    value: "pu",
  },

  {
    kana: "へ",
    value: "he",
  },

  {
    kana: "ベ",
    value: "be",
  },

  {
    kana: "ペ",
    value: "pe",
  },

  {
    kana: "ほ",
    value: "ho",
  },

  {
    kana: "ぼ",
    value: "bo",
  },

  {
    kana: "ま",
    value: "ma",
  },

  {
    kana: "み",
    value: "mi",
  },

  {
    kana: "む",
    value: "mu",
  },

  {
    kana: "め",
    value: "me",
  },

  {
    kana: "も",
    value: "mo",
  },

  {
    kana: "ら",
    value: "ra",
  },

  {
    kana: "り",
    value: "ri",
  },

  {
    kana: "る",
    value: "ru",
  },

  {
    kana: "れ",
    value: "re",
  },

  {
    kana: "ろ",
    value: "ro",
  },

  {
    kana: "や",
    value: "ia",
  },

  {
    kana: "ゆ",
    value: "iu",
  },

  {
    kana: "よ",
    value: "io",
  },

  {
    kana: "きゃ",
    value: "kya",
  },

  {
    kana: "ぎゃ",
    value: "gya",
  },

  {
    kana: "きゅ",
    value: "kyu",
  },

  {
    kana: "ぎゅ",
    value: "gyu",
  },

  {
    kana: "きょ",
    value: "kyo",
  },

  {
    kana: "ぎょ",
    value: "gyo",
  },

  {
    kana: "しゃ",
    value: "sha",
  },

  {
    kana: "じゃ",
    value: "ja",
  },

  {
    kana: "しゅ",
    value: "shu",
  },

  {
    kana: "じゅ",
    value: "ju",
  },

  {
    kana: "しょ",
    value: "sho",
  },

  {
    kana: "じょ",
    value: "jo",
  },

  {
    kana: "ちゃ",
    value: "cha",
  },

  {
    kana: "ちゅ",
    value: "chu",
  },

  {
    kana: "ぢゅ",
    value: "ju",
  },

  {
    kana: "ちょ",
    value: "cho",
  },

  {
    kana: "にゃ",
    value: "nya",
  },

  {
    kana: "にゅ",
    value: "nyu",
  },

  {
    kana: "にょ",
    value: "nyo",
  },

  {
    kana: "ひゃ",
    value: "hya",
  },

  {
    kana: "びゃ",
    value: "bya",
  },

  {
    kana: "ぴょ",
    value: "pyo",
  },

  {
    kana: "ひゅ",
    value: "hyu",
  },

  {
    kana: "びゅ",
    value: "byu",
  },

  {
    kana: "ぴゅ",
    value: "pyu",
  },

  {
    kana: "ひょ",
    value: "hyo",
  },

  {
    kana: "びょ",
    value: "byo",
  },

  {
    kana: "ぴょ",
    value: "pyo",
  },

  {
    kana: "みゃ",
    value: "mya",
  },

  {
    kana: "みゅ",
    value: "myu",
  },

  {
    kana: "みょ",
    value: "myo",
  },

  {
    kana: "りゃ",
    value: "rya",
  },

  {
    kana: "りゅ",
    value: "ryu",
  },

  {
    kana: "りょ",
    value: "ryo",
  },

  {
    kana: "わ",
    value: "wa",
  },

  {
    kana: "を",
    value: "w0",
  },

  {
    kana: "ん",
    value: "n",
  },
];
