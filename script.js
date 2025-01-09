function sendForm() {
    // Get the form field values
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    // Build the mailto URL
    var mailtoLink = "mailto:sandeep231ee@gmail.com?subject=" + encodeURIComponent(subject) +"&body=" + encodeURIComponent("Full Name: " + fullName + "\n" +"Email: " + email + "\n" +"Phone: " + phoneNumber + "\n" +"Message: " + message);
    
    // Open the mailto link
    window.location.href = mailtoLink;
    
    return false; // Prevent form submission from reloading the page
}