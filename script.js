
let displayText = document.getElementById("displaytext")


// button - click to generate word count



// trim to remove whitespace, split to divide words in array [word] [word] [word], 
// .filter(word => word) filter the whitespaces

function inputText () {
  const typeText = document.getElementById("typeText");
  const typetextvalue = typeText.value;
  const wordCount = typetextvalue.trim().split(/\s+/).filter(word => word).length; 
  displayText.textContent = `Words counted: ${wordCount}`; 
}

function submit() {
  inputText();
}

function deleteText() {
  displayText.textContent = ""; 
  document.getElementById("typeText").value = "";
}