// Simulate a step counter and heart rate monitor (For demo purposes)
document.getElementById("steps").innerText = "8500"; // Simulated step count
document.getElementById("heart-rate").innerText = "72"; // Simulated heart rate

// AI Assistant - Basic Interaction
document.getElementById("ask-ai").addEventListener("click", function() {
    const query = document.getElementById("ai-query").value;
    const responseField = document.getElementById("ai-response");
    
    if (query.toLowerCase().includes("diet")) {
        responseField.innerText = "Your diet plan is ready: More fruits and vegetables!";
    } else if (query.toLowerCase().includes("exercise")) {
        responseField.innerText = "Daily recommendation: 30 minutes of moderate exercise.";
    } else {
        responseField.innerText = "I am here to help! Please ask me about diet or exercise.";
    }
});

// Booking Appointment
document.getElementById("booking-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("patient-name").value;
    const date = document.getElementById("appointment-date").value;
    const speciality = document.getElementById("doctor-speciality").value;
    const bookingStatus = document.getElementById("booking-status");
    
    bookingStatus.innerText = `Appointment booked for ${name} with a ${speciality} on ${date}.`;
});
