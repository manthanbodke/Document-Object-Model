// Function to change the header text
function changeText() {
    document.getElementById('header').innerHTML = "Welcome to MIT World Peace University";
}

// Function to change the paragraph color
function changeColor() {
    document.getElementById('description').style.color = 'blue';
}

// Function to move the paragraph (e.g., move it to the top of the article)
function moveParagraph() {
    let paragraph = document.getElementById('description');
    let parent = paragraph.parentNode;
    parent.insertBefore(paragraph, parent.firstChild);
}

// Function to change the image
function changeImage() {
    let image = document.getElementById('myImage');
    image.src = "image4.jpg"; // Replace 'newImage.jpg' with the actual path of the new image
}