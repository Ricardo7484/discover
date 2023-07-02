function toggleMode() {
    const html = document.documentElement;

    html.classList.toggle('light');
    
    const img = document.querySelector("#profile img")

    if(html.classList.contains('light')) {
        img.setAttribute("src", "./assets/assets/avatarDiaRoxoCirculo.png");
        img.setAttribute("alt", "Avatar de pessoa com pele clara, cabelo marrom, óculos de sol e mão indicando positivo, com um fundo roxo claro.");
    } else{
        img.setAttribute("src", "./assets/assets/avatarNoiteRoxoCirculo.png");
        img.setAttribute("alt", "Avatar de pessoa com pele clara, cabelo marrom e mão indicando positivo, com um fundo roxo claro.");
img.v

    }
}