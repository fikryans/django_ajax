const handleAlert = (type, msg) => {
    alertBox.innerHTML = 
    `
        <div class="alert alert-${type}" role="alert">
            ${msg}
        </div>
    `
}