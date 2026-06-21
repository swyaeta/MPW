// Grab theme preference right away before page loads to prevent flickering
let activeMode = localStorage.getItem("portfolio-theme") || "light";
document.documentElement.setAttribute("data-theme", activeMode);

window.onload = function() {
    
    // REAL VISIT COUNTER FIX: Only count once per actual visit session
    let totalViewsBox = document.getElementById("counter");
    if (totalViewsBox) {
        // Get the current overall running count from localStorage
        let currentCount = parseInt(localStorage.getItem("view-numbers") || "0");
        
        // Check if this specific tab session has already been counted
        if (!sessionStorage.getItem("counted-this-visit")) {
            currentCount = currentCount + 1;
            localStorage.setItem("view-numbers", currentCount);
            sessionStorage.setItem("counted-this-visit", "true"); // Mark as counted for this session
        }
        
        // Always display the correct overall number
        totalViewsBox.textContent = currentCount;
    }

    // Double check theme button icon matches current style setup
    let currentIcon = document.querySelector("#dark-btn i");
    if (currentIcon) {
        if (activeMode === "dark") {
            currentIcon.className = "fa-solid fa-sun";
        } else {
            currentIcon.className = "fa-solid fa-moon";
        }
    }

    // Basic form intercept handler configuration
    let messageFormSubmit = document.getElementById("contactForm");
    if (messageFormSubmit) {
        messageFormSubmit.onsubmit = function(event) {
            event.preventDefault();
            
            let currentName = document.getElementById("form-name").value.trim();
            let currentEmail = document.getElementById("form-email").value.trim();
            let currentMsg = document.getElementById("form-message").value.trim();

            if (currentName !== "" && currentEmail !== "" && currentMsg !== "") {
                alert("Message sent! I'll get back to you soon 💌");
                messageFormSubmit.reset();
            } else {
                alert("Please fill out everything before submitting.");
            }
        };
    }

    // Direct click listeners for layout jumping smooth scrolling
    let sectionLinks = document.querySelectorAll('.navigation-links a[href^="#"]');
    sectionLinks.forEach(item => {
        item.onclick = function(event) {
            let pathId = item.getAttribute("href");
            if (pathId === "#") return;
            
            event.preventDefault();
            let elementTarget = document.querySelector(pathId);
            if (elementTarget) {
                let absoluteTop = elementTarget.getBoundingClientRect().top + window.pageYOffset - 20;
                window.scrollTo({ top: absoluteTop, behavior: "smooth" });
            }
        };
    });

    // 3D grid alignment calculations for block boxes
    let interactiveBlocks = document.querySelectorAll(".grid-card, .nav-box");
    interactiveBlocks.forEach(card => {
        card.onmousemove = function(e) {
            let boxPosition = card.getBoundingClientRect();
            let mouseRelativeX = e.clientX - boxPosition.left - (boxPosition.width / 2);
            let mouseRelativeY = e.clientY - boxPosition.top - (boxPosition.height / 2);
            
            let angleX = (mouseRelativeY / (boxPosition.height / 2)) * -8;
            let angleY = (mouseRelativeX / (boxPosition.width / 2)) * 8;
            
            card.style.transform = `perspective(600px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.02)`;
        };
        
        card.onmouseleave = function() {
            card.style.transform = "perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)";
        };
    });

    // Simple dot matrix movement engine routine logic loop background setup
    let canvasElement = document.getElementById("dotsCanvas");
    if (canvasElement) {
        let drawContext = canvasElement.getContext("2d");
        let pointsList = [];
        
        function updateCanvasDimensions() {
            canvasElement.width = window.innerWidth;
            canvasElement.height = window.innerHeight;
        }
        window.onresize = updateCanvasDimensions;
        updateCanvasDimensions();

        // Push structural parameters data inside coordinate vectors array map
        for (let idx = 0; idx < 60; idx++) {
            pointsList.push({
                xCoord: Math.random() * canvasElement.width,
                yCoord: Math.random() * canvasElement.height,
                vectorX: (Math.random() - 0.5) * 0.5,
                vectorY: (Math.random() - 0.5) * 0.5,
                radiusSize: Math.random() * 2 + 1
            });
        }

        function executionRenderLoop() {
            drawContext.clearRect(0, 0, canvasElement.width, canvasElement.height);
            let currentActiveModeSetting = document.documentElement.getAttribute("data-theme");
            
            if (currentActiveModeSetting === "dark") {
                drawContext.fillStyle = "rgba(247, 160, 214, 0.3)";
            } else {
                drawContext.fillStyle = "rgba(37, 15, 21, 0.12)";
            }
            
            pointsList.forEach(p => {
                p.xCoord += p.vectorX;
                p.yCoord += p.vectorY;
                
                if (p.xCoord < 0 || p.xCoord > canvasElement.width) p.vectorX *= -1;
                if (p.yCoord < 0 || p.yCoord > canvasElement.height) p.vectorY *= -1;
                
                drawContext.beginPath();
                drawContext.arc(p.xCoord, p.yCoord, p.radiusSize, 0, Math.PI * 2);
                drawContext.fill();
            });
            requestAnimationFrame(executionRenderLoop);
        }
        executionRenderLoop();
    }
};

// Global mode conversion setup called cleanly inside buttons element click event
function toggleTheme() {
    let checkState = document.documentElement.getAttribute("data-theme");
    let nextState = "light";
    
    if (checkState === "light") {
        nextState = "dark";
    }
    
    document.documentElement.setAttribute("data-theme", nextState);
    localStorage.setItem("portfolio-theme", nextState);
    
    let stateIcon = document.querySelector("#dark-btn i");
    if (stateIcon) {
        if (nextState === "dark") {
            stateIcon.className = "fa-solid fa-sun";
        } else {
            stateIcon.className = "fa-solid fa-moon";
        }
    }
}