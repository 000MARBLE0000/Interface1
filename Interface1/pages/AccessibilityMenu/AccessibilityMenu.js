// accessibility-menu.js

function toggleAccessibilityWindow() {
    accessibilityWindow.classList.toggle('show');
  }
  
  function toggleContrast() {
    document.documentElement.classList.toggle('contrast');
    const button = document.querySelector('#accessibilityWindow button:nth-child(1)');
    button.textContent = document.documentElement.classList.contains('contrast') ? 'Invert Colors' : 'Contrast';
  }
  
  function toggleHighlightLink() {
    const links = document.getElementsByTagName('a');
    for (let i = 0; i < links.length; i++) {
      links[i].classList.toggle('highlight-link');
    }
    const button = document.querySelector('#accessibilityWindow button:nth-child(2)');
    button.textContent = document.getElementsByTagName('a')[0].classList.contains('highlight-link') ? 'Remove Link Highlight' : 'Highlight Link';
  }
  
  function toggleBiggerText() {
    const biggerTextClasses = ['bigger-text-1', 'bigger-text-2', 'bigger-text-3'];
    const biggerTextButton = document.querySelector('#accessibilityWindow button:nth-child(3)');
    const currentBiggerTextIndex = biggerTextClasses.findIndex(cls => document.documentElement.classList.contains(cls));
    const nextBiggerTextIndex = (currentBiggerTextIndex + 1) % biggerTextClasses.length;
  
    document.documentElement.classList.remove(...biggerTextClasses);
    document.documentElement.classList.add(biggerTextClasses[nextBiggerTextIndex]);
    biggerTextButton.textContent = `Bigger Text (${nextBiggerTextIndex + 1})`;
  }
  
  function toggleTextSpacing() {
    const textSpacingClasses = ['text-spacing-1', 'text-spacing-2', 'text-spacing-3'];
    const textSpacingButton = document.querySelector('#accessibilityWindow button:nth-child(4)');
    const currentTextSpacingIndex = textSpacingClasses.findIndex(cls => document.documentElement.classList.contains(cls));
    const nextTextSpacingIndex = (currentTextSpacingIndex + 1) % textSpacingClasses.length;
  
    document.documentElement.classList.remove(...textSpacingClasses);
    document.documentElement.classList.add(textSpacingClasses[nextTextSpacingIndex]);
    textSpacingButton.textContent = `Text Spacing (${nextTextSpacingIndex + 1})`;
  }
  
  function toggleHideImages() {
    document.documentElement.classList.toggle('hide-images');
    const button = document.querySelector('#accessibilityWindow button:nth-child(5)');
    button.textContent = document.documentElement.classList.contains('hide-images') ? 'Show Images' : 'Hide Images';
  }
  
  function toggleDyslexiaFriendly() {
    document.documentElement.classList.toggle('dyslexia-friendly');
    const button = document.querySelector('#accessibilityWindow button:nth-child(6)');
    button.textContent = document.documentElement.classList.contains('dyslexia-friendly') ? 'Remove Dyslexia Friendly' : 'Dyslexia Friendly';
  }
  