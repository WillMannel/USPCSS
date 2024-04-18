function updatePreview() {
    var background = document.getElementById('background').value;
    var message = document.getElementById('message').value;
    var preview = document.getElementById('preview');
    switch (background) {
        case 'beach':
            preview.style.backgroundImage = 'url("images/beach.jpg")';
            break;
        case 'city':
            preview.style.backgroundImage = 'url("images/city.jpg")';
            break;
        case 'mountains':
            preview.style.backgroundImage = 'url("images/mountains.jpg")';
            break;
        case 'forest':
            preview.style.backgroundImage = 'url("images/forest.jpg")';
            break;
    }
    preview.innerText = message;
}
