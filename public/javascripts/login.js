
var btnLogin = document.querySelector(".login button").addEventListener("click", (e) => {
    let username = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;

    fetch('http://localhost:3000/users/login', {
        method: "POST",
        //zeggen dat we met json te maken hebben
        headers: {
            'Content-Type': 'application/json'
        },
        //data meegeven
        body: JSON.stringify({
            "username": username,
            "password": password
        })

        //parsen respone van nodejs in json
    }).then(response => {
        return response.json();
    }).then(json => {
        if (json.status === "success") {
            let token = json.data.token;
            //token stockeren
            localStorage.setItem("token", token);
            window.location.href = "app.html";
        } else {
            let feedback = document.querySelector(".alert");
            feedback.textContent = "Login failed buddy";
            feedback.classList.remove('hidden');
        }
    })
});