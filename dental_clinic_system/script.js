// ** FIREBASE CONFIG **
const firebaseConfig = {
    apiKey: "AIzaSyCRZ7YGmO5amv1KvzW1aklyI4k5542pz0Y",
    authDomain: "dental-clinic-web-1ea04.firebaseapp.com",
    databaseURL: "https://dental-clinic-web-1ea04-default-rtdb.firebaseio.com", 
    projectId: "dental-clinic-web-1ea04",
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// ** LOGIN LOGIC **
const adminLoginBtn = document.getElementById('login-btn');
const authStatus = document.getElementById('auth-status');

if (adminLoginBtn) {
    adminLoginBtn.addEventListener('click', () => {
        console.log("Login button clicked!"); // हे Console मध्ये दिसेल

        const username = document.getElementById('adminUsername').value.trim();
        const password = document.getElementById('adminPassword').value.trim();

        console.log("Entering with:", username);

        // क्रेडेन्शिअल्स एकदम नीट तपासा
        if (username === 'admin@swamidental.com' && password === 'password123') {
            authStatus.textContent = '✅ Success! Redirecting to Facilities...';
            authStatus.style.color = "green";

            console.log("Redirecting to facilities.html...");

            setTimeout(() => {
                // स्पेलिंग नीट तपासा: 'facilities.html'
                window.location.href = 'facilities.html'; 
            }, 1000); 

        } else {
            authStatus.textContent = '❌ Invalid Email or Password!';
            authStatus.style.color = "red";
            console.log("Login failed!");
        }
    });
}