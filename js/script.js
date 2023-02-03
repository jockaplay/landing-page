let meField = document.getElementById("me")
fetch("/sobre.json").then((respon) => {
    respon.json().then((sobre) => {
        meField.innerHTML = sobre.me
    })
})