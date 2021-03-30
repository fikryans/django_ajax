console.log("hello world");

const postsBox = document.getElementById("posts-box");
const spinnerBox = document.getElementById("spinner-box");
const loadBtn = document.getElementById("load-btn")
const endBox = document.getElementById("end-box")

let visible = 3

const getData = () =>{
    $.ajax({
      type: "GET",
      url: `/data/${visible}/`,
      success: function (response) {
        console.log(response);
        const data = response.data;
        setTimeout(() => {
          spinnerBox.classList.add("not-visible");
          console.log(data);
          data.forEach((el) => {
            postsBox.innerHTML += `
            <div class="card mb-2">
                <div class="card-body">
                <h5 class="card-title">${el.title}</h5>
                <p class="card-text">${el.body}</p>
                </div>
                <div class="card-footer">
                    <div class="row">
                        <div class="col-1">
                            <a href="#" class="btn btn-primary">Details</a>
                        </div>
                        <div class="col-1">
                            <a href="#" class="btn btn-primary">Like</a>
                        </div>
                    </div>
                </div>
            </div>
                    `;
          }, 1000);
          if (response.size === 0){
              endBox.textContent = 'No Posts added yet...'
          }
          else if (response.size <= visible){
            loadBtn.classList.add('not-visible')
            endBox.textContent = 'No more post to load..'
          }
        });
      },
      error: function (error) {
        console.log("error", error);
      },
    });
}

loadBtn.addEventListener('click', ()=>{
    spinnerBox.classList.remove('not-visible')
    visible += 3
    getData()
})
getData()