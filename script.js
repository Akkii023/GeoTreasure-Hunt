// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault(); // Prevent form submission
  
  // Get the user's answer and preference
  const answerInput = document.getElementById('answer');
  const preferenceSelect = document.getElementById('preference');
  const answer = answerInput.value.trim();
  const preference = preferenceSelect.value;
  
  // Validate the user's answer
  if (answer.toLowerCase() === 'correct') {
    // Display coordinates related to the preference
    let coordinates = '';
    switch (preference) {
      case 'preference1':
        coordinates = '28.47343,77.05749';
        break;
      case 'preference2':
        coordinates = '28.47342,77.05724';
        break;
      case 'preference3':
        coordinates = '28.47359,77.05759';
        break;
      default:
        coordinates = 'latitude,longitude'; // Default coordinates
        break;
    }
    
    // Redirect to Google Maps with the coordinates
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${coordinates}`;
    window.location.href = googleMapsUrl;
  } else {
    alert('Wrong answer. Please try again.');
  }
}

// Add event listener to form submission
const form = document.getElementById('answerForm');
form.addEventListener('submit', handleSubmit);
