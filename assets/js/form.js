document.getElementById('feedback_form').addEventListener('submit', function(event) {
    event.preventDefault()
    this.querySelector('button').disabled = true
    this.querySelector('.error-message').classList.remove('d-block')
    this.querySelector('.loading').classList.add('d-block')
    var request = {
        name: document.getElementById('input-name').value,
        phone: document.getElementById('input-phone').value,
        service: document.getElementById('input-service').value,
        message: document.getElementById('input-message').value,
    }

    fetch("/feedback/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        redirect: "follow",
        body: JSON.stringify(request)
    }).then(function() {
        this.querySelector('.loading').classList.remove('d-block')
        this.querySelector('.error-message').classList.remove('d-block')
        this.querySelector('.sent-message').classList.add('d-block')
    }.bind(this)).catch(function () {
        this.querySelector('.loading').classList.remove('d-block')
        this.querySelector('.error-message').classList.add('d-block')
        this.querySelector('button').disabled = false
    }.bind(this))
})

var input = document.getElementById('input-service')
document.querySelectorAll('.contact-link').forEach(function (el) {
    el.addEventListener('click', function () {
        input.value = this.getAttribute("data-value")
    })
})