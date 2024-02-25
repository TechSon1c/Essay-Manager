let displayText = document.getElementById("displaytext");


// Function to count words in the input text
function inputText() {
    const typeText = document.getElementById("typeText");
    const typetextValue = typeText.value;
    const trimValue = typetextValue.trim();
    const words = trimValue.split(/\s+/).filter(word => word);
    displayText.textContent = "Word count: " + words.length;
}

// Listen for the DEL key press to delete text
document.getElementById('typeText').addEventListener("keydown", function(event) {
    if (event.keyCode === 46) {
        deleteText();
    }
});

document.getElementById('typeText').addEventListener("input", inputText);

// Function to delete text
function deleteText() {
    displayText.textContent = "";
    document.getElementById("typeText").value = "";
}

// Function to save the text
function saveText() {
  const typeText = document.getElementById('typeText');
  const typeTextEl = document.getElementById('typeTextEl');
  const typetextValue = typeText.value.trim();
  if(typetextValue !== ""){
    typeTextEl.value = typetextValue;
  }
}

function save3Text() {
  const typeText = document.getElementById('typeText');
  const typeTextEl = document.getElementById('typeTextEl3');
  const typetextValue = typeText.value.trim();
  if(typetextValue !== ""){
    typeTextEl.value = typetextValue;
  }
}
function save2Text() {
  const typeText = document.getElementById('typeText');
  const typeTextEl = document.getElementById('typeTextEl2');
  const typetextValue = typeText.value.trim();
  if(typetextValue !== ""){
    typeTextEl.value = typetextValue;
  }
}
function save4Text() {
  const typeText = document.getElementById('typeText');
  const typeTextEl = document.getElementById('typeTextEl4');
  const typetextValue = typeText.value.trim();
  if(typetextValue !== ""){
    typeTextEl.value = typetextValue;
  }
}




function deleteText() {
  displayText.textContent = "";
  document.getElementById("typeText").value = "";
}


// make sure if user really wants to delete all the saved
function deleteText2() {
  const confirmation = prompt("Warning! Are you sure you want to delete everything? Type 'yes' to confirm.");
  if (confirmation && confirmation.toLowerCase() === "yes") {
      document.getElementById('typeTextEl').value = "";
      document.getElementById('typeTextEl3').value = "";
      document.getElementById('typeTextEl4').value = "";
      document.getElementById('typeTextEl2').value = "";
      displayText.textContent = "";
  }
}

