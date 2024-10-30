let currentIndex1 = 0;
const images1 = document.querySelectorAll('.slider1 img');
const totalImages1 = images1.length;

// Function to show the current image and hide others
function showImage1(index) {
    images1.forEach((img, i) => {
        img.classList.remove('active'); // Remove active class from all images
        if (i === index) {
            img.classList.add('active'); // Add active class to the current image
        }
    });
}

// Function to go to the next image
function nextImage1() {
    currentIndex1 = (currentIndex1 + 1) % totalImages1; // Loop back to the first image
    showImage1(currentIndex1);
}

// Set interval to change images every 5 seconds
setInterval(nextImage1, 5000); // 5000ms = 5 seconds

// Show the first image initially
showImage1(currentIndex1);

let currentIndex2 = 0;
const images2 = document.querySelectorAll('.slider2 img');
const totalImages2 = images2.length;

// Function to show the current image and hide others
function showImage2(index) {
    images2.forEach((img, i) => {
        img.classList.remove('active'); // Remove active class from all images
        if (i === index) {
            img.classList.add('active'); // Add active class to the current image
        }
    });
}

// Function to go to the next image
function nextImage2() {
    currentIndex2 = (currentIndex2 + 1) % totalImages2; // Loop back to the first image
    showImage2(currentIndex2);
}

// Set interval to change images every 5 seconds
setInterval(nextImage2, 5000); // 5000ms = 5 seconds

// Show the first image initially
showImage2(currentIndex2);


    // Show the button when the user scrolls down
    window.onscroll = function() {
        var topButton = document.getElementById("back-to-top");
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            topButton.style.display = "block";
        } else {
            topButton.style.display = "none";
        }
    };

    // Scroll to the top smoothly when the button is clicked
    document.getElementById("back-to-top").addEventListener("click", function(event) {
        event.preventDefault();  // Prevent default anchor behavior
        window.scrollTo({
            top: 0,
            behavior: 'smooth'   // Smooth scrolling
        });
    });
    const scrollingText = document.getElementById('scrollingText');

    // You can dynamically change the content of the scrolling text
    scrollingText.innerText = "Let’s collaborate to build, design, and secure your digital future—together!";




    
      