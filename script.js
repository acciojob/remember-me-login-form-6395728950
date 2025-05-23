//your JS code here. If required.
 

document.getElementById("submit").addEventListener("click", (e) => {
    e.preventDefault();

    const name = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const remember = document.getElementById('checkbox');
	  alert(`Logged in as ${name}`);

    // Check if there are existing credentials
    if (localStorage.getItem("name") && localStorage.getItem("password")) {
        document.getElementById('existing').style.display = "block";
        document.getElementById('existing').addEventListener("click", () => {
            alert(`Logged in as ${localStorage.getItem("name"}`);
        });
    }

    if (remember.checked) {
        localStorage.setItem("name", name);
        localStorage.setItem("password", password);
    } else {
        localStorage.removeItem("name");
        localStorage.removeItem("password");
    }

   
});
	
})
