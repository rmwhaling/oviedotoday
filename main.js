function toggleBorders () {
    const element = document.getElementById("myElement");

    if (element.style.border === "none" || element.style.border === "") {
        element.style.border = "1px solid red";
    } else {
        element.style.border = "none";
    }
};

document.getElementById('toggleButton').addEventListener('click', function() {
    const postItems = document.querySelectorAll('.post-item');
    
    postItems.forEach(item => {
        if (item.style.backgroundColor === 'green') {
            item.style.backgroundColor = '';
        } else {
            item.style.backgroundColor = 'green';
        }
    });
});


