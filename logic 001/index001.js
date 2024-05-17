document.getElementById("name").innerText = "Bubba Gump"


function buttonClick() {
   let firstName = document.getElementById("fname").value
   let lastName = document.getElementById("lname").value
    alert(`Welcome to my web, ${firstName}, ${lastName}`)

}

let users = [
    {
        username: "amil",
        password: "sup3rsecret"
    },
    {
        username: "bubbG1",
        password: "runFor3st!"
    },
    {
        username: "charlie01",
        password: "Pass1234!"
    },
    {
        username: "deltaEcho",
        password: "deltaEcho2$"
    },
    {
        username: "foxtrotG",
        password: "Foxtrot98@"
    },
    {
        username: "golfSierra",
        password: "golfSierra#1"
    },
    {
        username: "hotelBravo",
        password: "Hotel@Bravo"
    },
    {
        username: "india2Juliet",
        password: "indiaJ2$"
    },
    {
        username: "kiloLima",
        password: "KiloLima3^"
    },
    {
        username: "mikeNovember",
        password: "mikeN7%"
    },
    {
        username: "oscarPapa",
        password: "OscarP@2024"
    },
    {
        username: "quebecRomeo",
        password: "QuebecRomeo#5"
    },
    {
        username: "sierraTango",
        password: "SierraT!99"
    },
    {
        username: "uniformVictor",
        password: "UVictor1*"
    },
    {
        username: "whiskeyXray",
        password: "WhiskeyX#8"
    },
    {
        username: "yankeeZulu",
        password: "YanZul_7!"
    },
    {
        username: "alpha29",
        password: "AlphaTwoNine$"
    },
    {
        username: "betaCharlie",
        password: "Beta$Charlie1"
    },
    {
        username: "gammaDelta",
        password: "GammaDelta2024!"
    },
    {
        username: "epsilonZeta",
        password: "EpsZeta@22"
    },
    {
        username: "thetaIota",
        password: "Theta*Iota3"
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
    } else {
        alert("Sorry, wrong username or password.");
    }
}




// Call the login function to start the login process
login();
