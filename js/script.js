let textareaEl = document.querySelector("#text");
let text = null;

let data = {
  words: 0,
  sentences: 0,
  uppercase: 0,
  lowercase: 0,
  spaces: 0,
  digits: 0,
  vowels: 0,
  consonants: 0,
};

const findLength = (item) => (item == null ? 0 : item.length);

const setText = () => {
  text = textareaEl.value;
  if (text != null) {
    data.sentences = findLength(text.match(/\056/g));
    data.words = findLength(text.match(/[a-zA-Z]+/g));
    data.spaces = findLength(text.match(/\s/g));
    data.uppercase = findLength(text.match(/[A-Z]/g));
    data.lowercase = findLength(text.match(/[a-z]/g));
    data.digits = findLength(text.match(/\d/g));
    data.vowels = findLength(text.match(/[aeiou]/gi));
    data.consonants = findLength(text.match(/[bcdfghjklmnpqrstvwxyz]/gi));
    }
    document.getElementById("sentences-box").innerText = data.sentences;
    document.getElementById("words-box").innerText = data.words;
    document.getElementById("uppercase-box").innerText = data.uppercase;
    document.getElementById("lowercase-box").innerText = data.lowercase;
    document.getElementById("space-box").innerText = data.spaces;
    document.getElementById("digit-box").innerText = data.digits;
    document.getElementById("vowel-box").innerText = data.vowels;
    document.getElementById("constant-box").innerText = data.consonants;
};

