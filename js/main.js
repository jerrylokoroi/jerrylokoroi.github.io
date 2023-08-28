var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
} 

document.getElementById("submit-button").addEventListener("click", function() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var subject = encodeURIComponent("Contact Form Submission from " + name);
    var body = encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message);

    var mailtoLink = "mailto:jerry.ekuwom@learninglions.org?subject=" + subject + "&body=" + body;

    window.location.href = mailtoLink;
});