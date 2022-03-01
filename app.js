const loginBtn = document.getElementById("login-btn");
const singupBtn = document.getElementById("singup-btn");
const userName = document.getElementById("userName");
const userPass = document.getElementById("password");
const userName1 = document.getElementById("userName1");
const userPass1 = document.getElementById("password1");
const submit = document.getElementById("submit")
const login = document.getElementById("login");
const singUp = document.getElementById("singup");
const interFace = document.getElementById("interface");
loginBtn.addEventListener("click", () => {
   
    interFace.style.display = "none";
   
    singUp.style.display = "block";

})

login.addEventListener("click", () => {
    let userNamea = userName.value;
    let passCode = userPass.value;
    const lst = localStorage.getItem("username")
    const lsts = localStorage.getItem("userpass")
    if (userNamea == lst || passCode == lsts) {
        alert("ok")
    } else {
        alert("try again")
    }

})

singupBtn.addEventListener("click", () => {
    const interFace = document.getElementById("interface");
    interFace.style.display = "none";
    const singUp = document.getElementById("singup-page");
    singUp.style.display = "block";

})

submit.addEventListener("click", () => {
    const inputName = userName1.value;
    const inputPass = userPass1.value;

    localStorage.setItem("username", inputName)
    localStorage.setItem("userpass", inputPass)
    console.log(inputName, inputPass)
    userName1.value = "";
    userPass1.value = "";
    location.reload();
})