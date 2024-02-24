
let displayText = document.getElementById("displaytext")


// button - click to generate word count



// trim to remove whitespace, split to divide words in array [word] [word] [word], 
// .filter(word => word) filter the whitespaces



function inputText() {
  const typeText = document.getElementById("typeText");
  const typetextValue = typeText.value;
  const trimValue = typetextValue.trim();
  const words = trimValue.split(/\s+/).filter(word => word);
  displayText.textContent = "Word count: " + words.length;

}


// press delete on keyboard to delete whole text
document.getElementById('typeText').addEventListener("keydown", function(event) {
  if (event.keyCode === 46) {
    deleteText();
  }
});



document.getElementById('typeText').addEventListener("input", inputText);

function deleteText() {
  displayText.textContent = "";
  document.getElementById("typeText").value = "";
}

