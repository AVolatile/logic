document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form from submitting the traditional way

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");

  // Basic validation
  if (!username || !password) {
    errorMessage.textContent = "Please fill in both fields.";
    return;
  }

  // Mock login (this is where you'd handle actual authentication)
  if (username === "admin" && password === "password123") {
    errorMessage.style.color = "green";
    errorMessage.textContent = "Login successful!";
    // Redirect to another page or take further actions
  } else {
    errorMessage.textContent = "Incorrect username or password.";
  }
});