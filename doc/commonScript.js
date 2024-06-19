const img = document.querySelector("#image"),
    file = document.querySelector("#file"),
    colorInput = document.querySelector("#textClr"),
    content = document.querySelector("#content"),
    icerik = document.querySelector("#icerik"),
    thmBtns = document.querySelectorAll(".thmBtn"),
    navbar = document.querySelector(".navbar"),
    post = document.querySelector(".right"),
    logo = document.querySelector(".right").querySelector("img");

    var reader;

    function changeImage(ths) {
        var fileX = ths.files[0];
    
        reader = new FileReader();
        reader.onloadend = function () {
            img.src = reader.result;
        }
    
        if (fileX) {
            reader.readAsDataURL(fileX);
        }
    }
    
    function changeTextColor(){
        document.execCommand("ForeColor", false, colorInput.value);
    }
    
    function addEmoji(thisItem){
        document.execCommand('inserttext', false, thisItem.innerText);
    }

    icerik.addEventListener('paste', function(e) {
        e.preventDefault();
        var text = (e.clipboardData || window.clipboardData).getData('text');
        document.execCommand('insertText', false, text);
    });
    
    function toggleNavBar(){
        navbar.classList.toggle("activeBar");
    }
