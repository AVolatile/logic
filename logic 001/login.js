document.getElementById("name").innerText = "Bubba Gump"


function buttonClick() {
   let userName = document.getElementById("userName").value
   let passWord = document.getElementById("passWord").value
    alert(`Welcome to my web, you are now logged in!`)

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

 //Function to authenticate user
 
 function authenticateUser(username, password) {
 
     for (let i = 0; i < username.length; i++) {
         if (user[i].username === username && users[i].password === password) {
             return true; 
 
         }
 
     }
     return false; 
 
 
 }
 
// Call the login function to start the login process
login();
