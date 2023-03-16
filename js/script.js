let meField = document.getElementById("me")
fetch("https://raw.githubusercontent.com/jockaplay/landing-page/main/sobre.json").then((respon) => {
    respon.json().then((sobre) => {
        meField.innerHTML = sobre.me
    })
})

meField.scrollTo(0, 1000);

function scrollToSection(section){
    let sobre = document.getElementById(section);
    sobre.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
}