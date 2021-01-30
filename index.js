
/*
    code by: Tadiwos-Stack
    date:    Jan 29, 2021
    date:    12:40 am (GMT)
    Don't forget upvote
*/


alert("🎨🖌️The first 2 Drawing is mine  Others are naod and ocean art         👉 <> You can copy any Part oF the code 💝💞 Feel Free to Tell your Idea/Suggestion")
function init() {

    // DOM node
    const btn = document.querySelector(".floating-btn");
    
    // handle window scroll
    function handlScroll() {
        if (window.pageYOffset > 300) {
            btn.style.transform = "scale(1)";
        } else {
            btn.style.transform = "scale(0)";
        }
    }
    
    // attach scroll to window
    window.addEventListener("scroll", handlScroll);
    
    // handle reset scroll
    function scrollUp() {
        window.scrollTo(0, 0);
    }
    
    // reset window scroll
    btn.addEventListener("click", scrollUp);
}

// invoke init when DOM loaded
window.addEventListener("DOMContentLoaded", init);

