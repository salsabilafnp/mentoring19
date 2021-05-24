window.addEventListener('scroll', function(e) {
    var current = window.scrollY
    if (current >= 200) {
        document.querySelector('.navbar').classList.add('bg-main')
        document.querySelector('.navbar').classList.remove('bg-transparent')
    } else {
        document.querySelector('.navbar').classList.remove('bg-main')
        document.querySelector('.navbar').classList.add('bg-transparent')
    }
})