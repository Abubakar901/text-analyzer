document.addEventListener('DOMContentLoaded', () => {
  const textareaEl = document.querySelector('#textInput');
  const generateInfoBtn = document.querySelector('#generateInfo');

  const data = {
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

  const updateStatsDisplay = () => {
    document.getElementById('sentenceCount').innerText = data.sentences;
    document.getElementById('wordCount').innerText = data.words;
    document.getElementById('uppercaseCount').innerText = data.uppercase;
    document.getElementById('lowercaseCount').innerText = data.lowercase;
    document.getElementById('spaceCount').innerText = data.spaces;
    document.getElementById('digitCount').innerText = data.digits;
    document.getElementById('vowelCount').innerText = data.vowels;
    document.getElementById('consonantCount').innerText = data.consonants;
  };

  const analyzeText = () => {
    const text = textareaEl.value || '';
    data.sentences = findLength(text.match(/[.!?]/g));
    data.words = findLength(text.match(/\b\w+\b/g));
    data.spaces = findLength(text.match(/\s/g));
    data.uppercase = findLength(text.match(/[A-Z]/g));
    data.lowercase = findLength(text.match(/[a-z]/g));
    data.digits = findLength(text.match(/\d/g));
    data.vowels = findLength(text.match(/[aeiouAEIOU]/g));
    data.consonants = findLength(text.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g));
    
    updateStatsDisplay();
  };

  generateInfoBtn.addEventListener('click', analyzeText);

  // Optional dark mode toggle feature
  const darkModeToggle = document.getElementById('darkModeToggle');
  darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darkModeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
  });
});
