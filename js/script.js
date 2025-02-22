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

  // Function to animate numbers smoothly
  const animateNumber = (element, start, end, duration) => {
    let startTime = null;
    
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      element.innerText = value;

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  const updateStatsDisplay = () => {
    animateNumber(document.getElementById('sentenceCount'), 0, data.sentences, 1000);
    animateNumber(document.getElementById('wordCount'), 0, data.words, 1000);
    animateNumber(document.getElementById('uppercaseCount'), 0, data.uppercase, 1000);
    animateNumber(document.getElementById('lowercaseCount'), 0, data.lowercase, 1000);
    animateNumber(document.getElementById('spaceCount'), 0, data.spaces, 1000);
    animateNumber(document.getElementById('digitCount'), 0, data.digits, 1000);
    animateNumber(document.getElementById('vowelCount'), 0, data.vowels, 1000);
    animateNumber(document.getElementById('consonantCount'), 0, data.consonants, 1000);
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
  });
});
