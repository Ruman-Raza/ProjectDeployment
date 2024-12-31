// Scroll the info Page 
const infoButton = document.getElementById('infoBtn');
const infoSection = document.getElementById('page1');

infoButton.addEventListener('click', function() {
    console.log("View Info Page");
    infoSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

// Scroll the contact page 
const contactButton = document.getElementById('contactBtn');
const contactSection = document.getElementById('contactPage');

contactButton.addEventListener('click', function() {
    console.log("View Contact Page");
    contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

// Scroll the home Page 
const homeButton = document.getElementById('homeBtn');
const homeSection = document.getElementsByTagName('body');

homeButton.addEventListener('click', function() {
    console.log("View Home Page");
    homeSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

// Experience alert
const expButton = document.getElementById('expBtn');

expButton.addEventListener('click',function(){
    alert("NO EXPERIENCE!");
})

// Add an event listener to the pageSelector dropdown
document.getElementById('pageSelector').addEventListener('change', function() {
    var selectedOption = this.value; // Get the selected value

    // Check which option was selected and scroll to the corresponding section
    if (selectedOption === 'home') {
        console.log("View Home Page");
        document.getElementsByTagName('body').scrollIntoView({ behavior: 'smooth', block: 'start'});
    } else if (selectedOption === 'info') {
        console.log("View Info Page");
        document.getElementById('page1').scrollIntoView({behavior: 'smooth', block: 'start'});
    } else if (selectedOption === 'contact') {
        console.log("View Contact Page");
        document.getElementById('contactPage').scrollIntoView({behavior: 'smooth', block: 'start'});
    } else if (selectedOption === 'experience') {
        alert("NO EXPERIENCE!")
    }
});

// Message alert
document.getElementById('submitBtn').addEventListener('click', function() {
    var message = document.getElementById('message').value.trim(); // Get the message and remove extra spaces
  
    // Check if the message is empty
    if (message === "") {
        alert("Please enter a message before submitting!");
      console.log("Please enter a message before submitting!");
    } else {
        alert("Message submitted");
      console.log("Message submitted: " + message); // Log the message to the console
      // Optionally, you can clear the message field after submission
      document.getElementById('message').value = ""; 
    }
  });





  document.getElementById("infoBtn").addEventListener("click", function() {
    var element = document.querySelector(".page1-img");
    var elements = document.querySelector(".info-page")
    element.classList.add("show");
});
