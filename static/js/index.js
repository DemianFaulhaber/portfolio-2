const go_up = document.getElementById("go-up")

window.addEventListener('scroll', function(){
    position = window.scrollY
    if(position > 1000){
        go_up.classList.add('show')
    }
    else{
        go_up.classList.remove('show')
    }
})

go_up.addEventListener('click', function() {
        window.scrollTo(0, 0)
    })
    