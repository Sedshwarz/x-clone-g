const img = document.querySelector("#image"),
    file = document.querySelector("#file"),
    colorInput = document.querySelector("#textClr"),
    content = document.querySelector("#content"),
    icerik = document.querySelector("#icerik"),
    thmBtns = document.querySelectorAll(".thmBtn"),
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
    
    var generate = () => {
        
        document.querySelector(".right").classList.add("right-sc");
    
        html2canvas(post, { backgroundColor: "#101125" }).then(function (canvas) {
            var link = document.createElement("a");
            document.body.appendChild(link);
            link.download = 'post.png';
            link.href = canvas.toDataURL();
            link.click();
            link.delete;
        });
    
       document.querySelector(".right").classList.remove("right-sc");
    }

    icerik.addEventListener('paste', function(e) {
        e.preventDefault();
        var text = (e.clipboardData || window.clipboardData).getData('text');
        document.execCommand('insertText', false, text);
    });
    
    /*
    function changeContent() {
        icerik.innerText = content.value;
    };
    */
    
    
    /*
    var setTheme = (ths, clr) => {
        for (var i = 0; i < 4; i++) { thmBtns[i].classList.remove("active") };
        ths.classList.add("active");
        document.querySelector(":root").style.setProperty('--theme', clr);
    }
    */
    




const logoBase64 = "data:image/jpeg;base64,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";

logo.src = logoBase64;

