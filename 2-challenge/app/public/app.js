// Function to save text
async function saveText() {
    const text = document.getElementById('textArea').value;
    await fetch('/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });
    fetchAllTexts(); // Refresh the list after saving
  }
  
  // Function to fetch all texts
  async function fetchAllTexts() {
    const response = await fetch('/all');
    const texts = await response.json();
    const list = document.getElementById('textsList');
    list.innerHTML = ''; // Clear existing list
    texts.forEach((text) => {
      const item = document.createElement('li');
      item.textContent = text;
      list.appendChild(item);
    });
  }
  
  // Load all texts on initial load
  document.addEventListener('DOMContentLoaded', fetchAllTexts);
  