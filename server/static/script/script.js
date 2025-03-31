// Click sound
function playSound() {
    const sound = document.getElementById("click-sound")
    sound.play()
}

// Toggle text
function rollText(element, newText) {
    element.style.transition = "transform 0.5s ease"
    element.style.transform = "translateX(-100%)"
    setTimeout(() => {
        element.innerText = newText
        element.style.transition = "none"
        element.style.transform = "translateX(100%)"
        setTimeout(() => {
            element.style.transition = "transform 0.5s ease"
            element.style.transform = "translateX(0)"
        }, 50)
    }, 500)
}

function MainPage_Text1() {
    const title = document.getElementById("page-title")
    const subtitle = document.getElementById("page-subtitle")
    const title_text = "Hello. I’m QueriFlow"
    const subtitle_text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    rollText(title, title_text)
    rollText(subtitle, subtitle_text)
}

function MainPage_Text2() {
    const title = document.getElementById("page-title")
    const subtitle = document.getElementById("page-subtitle")
    const title_text = "I'm small school project"
    const subtitle_text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    rollText(title, title_text)
    rollText(subtitle, subtitle_text)
}