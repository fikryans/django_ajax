console.log("Detail posts");

const backBtn = document.getElementById("back-btn")
const updateBtn = document.getElementById("update-btn") 
const deletBtn = document.getElementById("delete-btn")
const postBox = document.getElementById("post-box")
const url = window.location.href + "data/"
const spinnerBox = document.getElementById("spinner-box")
const updateURL = window.location.href + "update/"
const deleteURL = window.location.href + "delete/"
const updateForm = document.getElementById("update-form")
const deleteForm = document.getElementById("delete-form")
const csrf = document.getElementsByName("csrfmiddlewaretoken");
const titleInput = document.getElementById("id_title")
const bodyInput = document.getElementById("id_body")
const alertBox = document.getElementById("alert-box")





backBtn.addEventListener("click", ()=> {
    history.back()
})

$.ajax({
    type: 'GET',
    url: url,
    success: function (response) {
        console.log(response);
        const data = response.data

        if(data.logged_in !== data.author){
            console.log('different');
        } else {
            console.log('the same');
            updateBtn.classList.remove('not-visible')
            deletBtn.classList.remove('not-visible')
            
        }
        const titleEl = document.createElement('h3')
        titleEl.setAttribute('class', 'mt-1')
        titleEl.setAttribute('id', 'title')


        const bodyEl = document.createElement('p')
        bodyEl.setAttribute('class', 'mt-1')
        bodyEl.setAttribute('id', 'body')


        titleEl.textContent =data.title
        bodyEl.textContent = data.body

        postBox.appendChild(titleEl)
        postBox.appendChild(bodyEl)
        spinnerBox.classList.add('not-visible')
    },
    error: function (error) {
        console.log(error);
    }
})

updateForm.addEventListener('submit', e=>{
    e.preventDefault()

    const title = document.getElementById('title')
    const body = document.getElementById('body')

    $.ajax({
        type:'POST',
        url:updateURL,
        data: {
            'csrfmiddlewaretoken':csrf[0].value,
            'title':titleInput.value,
            'body':bodyInput.value,

        },
        success: function (response) {
            console.log(response);
            handleAlert("success", "post has been updated!")
            title.textContent = response.title
            body.textContent = response.body
        },
        error: function (error) {
            console.log(error);
        }
    })


})