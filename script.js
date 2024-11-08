 
document.getElementById("loginForm").onsubmit = function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "aayush" && password === "password123") {
        document.getElementById("loginPanel").style.display = "none";
        document.getElementById("dashboard").style.display = "block";
        fetchGitHubUsers();
    } else {
        alert("Invalid login details.");
    }
};
 
document.getElementById("logoutBtn").onclick = function() {
    document.getElementById("loginPanel").style.display = "block";
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
};

 
function fetchGitHubUsers() {
    fetch("https://api.github.com/users?per_page=10")
        .then(response => {
            if (!response.ok) throw new Error("Network response was not ok");
            return response.json();
        })
        .then(users => displayUsers(users))
        .catch(error => console.error("Error fetching users:", error));
}

 
function displayUsers(users) {
    const userList = document.getElementById("userList");
    userList.innerHTML = users.map(user => 
        `<li><a href="${user.html_url}" target="_blank">${user.login}</a></li>`
    ).join('');
}


 
 
