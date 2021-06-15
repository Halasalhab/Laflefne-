var fav = document.getElementsByClassName('fav')
for (var i = 0; i < fav.length; i++) {
    fav[i].addEventListener('click', changeStar)
    fav[i].addEventListener('dblclick', changeStar2)

}

function changeStar() {
    this.src = '../img/empty-star-.png'
}

function changeStar2() {
    this.src = '../img/star.png'
}