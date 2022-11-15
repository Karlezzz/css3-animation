window.addEventListener('load',function(){
    let signInForm = this.document.querySelector('.sign-in-form')
    let signUpForm = this.document.querySelector('.sign-up-form')
    let container = this.document.querySelector('.container')
    let signInButton = this.document.querySelector('#sign-in-btn')
    let signUpButton = this.document.querySelector('#sign-up-btn')

    signUpButton.addEventListener('click',()=>{
        container.classList.add('sign-up-mode')
    })
    signInButton.addEventListener('click',()=>{
        container.classList.remove('sign-up-mode')
    })

})