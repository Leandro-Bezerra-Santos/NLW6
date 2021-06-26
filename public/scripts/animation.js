const btn = document.querySelector('.btn-button');
const form = document.querySelector('.form')

btn.addEventListener("click", event =>{
        event.preventDefault();

        form.classList.add("form-hide");
});