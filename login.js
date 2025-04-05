import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyASYMolDMzMcs6GanO6MAfsNA1NiGGYNqA",
    authDomain: "busybuy-e11bf.firebaseapp.com",
    projectId: "busybuy-e11bf",
    storageBucket: "busybuy-e11bf.firebasestorage.app",
    messagingSenderId: "275315199257",
    appId: "1:275315199257:web:9b0d1928fa58ca51698988"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Firebase Auth initialization

// Login button functionality
document.getElementById('sub').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default button behavior

    const email = document.getElementById('email').value; // Get email from form
    const password = document.getElementById('password').value; // Get password from form
    const errorMessageElement = document.getElementById('errorMessage'); // Error message container

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            alert("Welcome");
            window.location.href="/index.html";
            // ...
        
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("Already user exists");
            // ..
        });

    // Basic client-side validation
    if (!email || !password) {
        errorMessageElement.textContent = 'Please enter both email and password.';
        return;
    }

    
});

// Password toggle functionality
document.getElementById('togglePassword').addEventListener('click', function () {
    const passwordInput = document.getElementById('password');
    const type = passwordInput.type === 'password' ? 'text' : 'password';
    passwordInput.type = type;
});

// Google login button click (Optional, add Firebase Google Authentication if needed)
document.getElementById('googleLoginBtn').addEventListener('click', function () {
    alert('Google login will be integrated here!');
});
