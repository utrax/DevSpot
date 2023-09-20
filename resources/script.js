// Get a reference to the form element and the submit button
const form = document.getElementById('myForm');
const submitButton = document.getElementById('submitButton');

// Add an event listener to the form's submit event
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

                // Display an alert with the input value
                submitButton.click();
                alert('You submitted: ');
                window.location.reload();


    // You can also perform other actions here, such as sending data to a server

});
