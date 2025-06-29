document.getElementById("startForm").addEventListener("submit", function (e) {
    e.preventDefault();
    document.documentElement.requestFullscreen().then(() => {
      window.location.href = "test.html";
    });
  });
  document.getElementById("startForm").addEventListener("submit", function (e) {
    e.preventDefault();
    let form = e.target;
    let name = form[0].value;
    let email = form[1].value;
    let address = form[2].value;
  
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("address", address);
  
    document.documentElement.requestFullscreen().then(() => {
      window.location.href = "test.html";
    });
  });
  