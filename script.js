document.getElementById("bookingForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const destination = document.getElementById("destination").value;
  const date = document.getElementById("date").value;
  const passengers = document.getElementById("passengers").value;

  const confirmationMsg = `Booking confirmed to ${destination} on ${date} for ${passengers} passenger(s).`;
  const confirmationDiv = document.getElementById("confirmation");
  confirmationDiv.textContent = confirmationMsg;
  confirmationDiv.classList.remove("hidden");
});
