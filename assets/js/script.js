window.addEventListener('scroll', function (e) {
    var current = window.scrollY
    if (current >= 200) {
        document.querySelector('.nav-main').classList.add('bg-main')
        document.querySelector('.nav-main').classList.remove('bg-transparent')
    } else {
        document.querySelector('.nav-main').classList.remove('bg-main')
        document.querySelector('.nav-main').classList.add('bg-transparent')
    }
})