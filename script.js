//your JS code here. If required.
 
 const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const checkbox = document.getElementById("checkbox");
    const submitBtn = document.getElementById("submit");
    const existingBtn = document.getElementById("existing");

    // Check if credentials exist on page load
    window.onload = () => {
      const savedUsername = localStorage.getItem("username");
      const savedPassword = localStorage.getItem("password");
      if (savedUsername && savedPassword) {
        existingBtn.style.display = "inline-block";
      }
    };

    // Handle form submission
    document.getElementById("loginForm").addEventListener("submit", (e) => {
      e.preventDefault();
      const username = usernameInput.value;
      const password = passwordInput.value;

      alert(`Logged in as ${username}`);

      if (checkbox.checked) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
      } else {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
      }

      // Update visibility of existing user button
      if (localStorage.getItem("username")) {
        existingBtn.style.display = "inline-block";
      } else {
        existingBtn.style.display = "none";
      }
    });

    // Handle login as existing user
    existingBtn.addEventListener("click", () => {
      const savedUsername = localStorage.getItem("username");
      if (savedUsername) {
        alert(`Logged in as ${savedUsername}`);
      }
    });
