let meField = document.getElementById("me")
fetch("https://raw.githubusercontent.com/jockaplay/landing-page/main/sobre.json").then((respon) => {
    respon.json().then((sobre) => {
        meField.innerHTML = sobre.me
    })
})