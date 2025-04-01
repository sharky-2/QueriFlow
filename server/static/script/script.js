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

let isText1 = true; 
function toggleMainPageText() {
    const title = document.getElementById("page-title");
    const subtitle = document.getElementById("page-subtitle");

    const title_text1 = "Hello. I’m QueriFlow";
    const subtitle_text1 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.";
    
    const title_text2 = "I'm small school project";
    const subtitle_text2 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.";

    if (isText1) {
        rollText(title, title_text1);
        rollText(subtitle, subtitle_text1);
    } else {
        rollText(title, title_text2);
        rollText(subtitle, subtitle_text2);
    }

    isText1 = !isText1;
}


// Tables lines
const frames = document.querySelectorAll('.lines-frame');
frames.forEach(frame => {
    frame.addEventListener('mousedown', startDrag);

    let offsetX, offsetY, initialX, initialY;

    function startDrag(e) {
        // frame.classList.add('box-shadow');

        const rect = frame.getBoundingClientRect();
        initialX = rect.left;
        initialY = rect.top;

        offsetX = e.clientX - initialX;
        offsetY = e.clientY - initialY;

        document.addEventListener('mousemove', drag);
        document.addEventListener('mouseup', stopDrag);
    }

    function drag(e) {
        const newX = e.clientX - offsetX;
        const newY = e.clientY - offsetY;

        frame.style.left = `${newX}px`;
        frame.style.top = `${newY}px`;

        updateLines();
    }

    function stopDrag() {
        // frame.classList.remove('box-shadow');
        document.removeEventListener('mousemove', drag);
        document.removeEventListener('mouseup', stopDrag);
    }
});

function updateLines() {
    const svg = document.getElementById('lines')
    svg.innerHTML = '' 

    const drawnPairs = new Set() 

    const allFrames = document.querySelectorAll('.lines-frame')

    allFrames.forEach(frame => {
        const items = frame.querySelectorAll('.item')
        items.forEach(item1 => {
            allFrames.forEach(otherFrame => {
                if (frame !== otherFrame) {
                    const otherItems = otherFrame.querySelectorAll('.item')
                    otherItems.forEach(item2 => {
                        if (item1.id === item2.id) {
                            const pairKey = `${item1.id}-${item2.id}`

                            if (!drawnPairs.has(pairKey) && !drawnPairs.has(`${item2.id}-${item1.id}`)) {
                                drawnPairs.add(pairKey)

                                const rect1 = item1.getBoundingClientRect()
                                const rect2 = item2.getBoundingClientRect()

                                const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')

                                const cpX = (rect1.right + rect2.left) / 2 
                                const cpY = Math.min(rect1.top, rect2.top) - 50

                                const d = `M${rect1.right},${rect1.top + rect1.height / 2} Q${cpX},${cpY} ${rect2.left},${rect2.top + rect2.height / 2}`

                                path.setAttribute('d', d)
                                path.setAttribute('stroke', '#E6E6E6')
                                path.setAttribute('fill', 'transparent')
                                path.setAttribute('stroke-width', '1')
                                svg.appendChild(path)
                            }
                        }
                    })
                }
            })
        })
    })
}

// Color port
document.querySelectorAll('.lines-frame .list .item .box').forEach(box => {
    const text = box.textContent.trim();
    if (text === 'V') {
        box.style.backgroundColor = 'var(--blue)'; /* or use a variable: var(--red) */
    } else if (text === 'F') {
        box.style.backgroundColor = 'var(--orange)';
    } else if (text === 'A') {
        box.style.backgroundColor = 'red';
    } else if (text === 'B') {
        box.style.backgroundColor = 'var(--dark-white)';
    }
});

updateLines()
toggleMainPageText();