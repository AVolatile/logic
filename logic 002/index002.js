document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("name").innerText = "Bubba Gump";
  
    function buttonClick() {
      let firstName = document.getElementById("fname").value;
      let lastName = document.getElementById("lname").value;
      alert(`Welcome to my web, ${firstName}, ${lastName}`);
    }
  
    let users = [ 
      {
        username: "avolatile",
        password: "sup3rsecret"
      },
      {
        username: "testUser",
        password: "TestPass!"
      } 
    ];
  
    // Function to prompt user for username and password
    function login() {
      // Prompt user for username
      let enteredUsername = prompt("Enter your username:");
  
      // Prompt user for password
      let enteredPassword = prompt("Enter your password:");
  
      // Check if the entered username and password match any user in the array
      let foundUser = users.find(user => user.username === enteredUsername && user.password === enteredPassword);
  
      // Display appropriate message based on the result
      if (foundUser) {
        alert("Successfully logged in!");
        document.getElementById("status").innerText = "Logged in"; // Update status message
      } else {
        alert("Sorry, wrong username or password.");
        document.getElementById("status").innerText = "Not logged in"; // Update status message
      }
    }
  
    // Call the login function to start the login process
    login();
  });
  