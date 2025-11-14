$(document).ready(function() {
    // Form submission
    $('#contact-form').submit(function(e) {
        e.preventDefault(); // Prevent default form submission

        // AJAX form validation
        var isValid = true;
        $('#contact-form input, #contact-form textarea, #contact-form select').each(function() {
            if ($(this).val() === '') {
                isValid = false;
                $(this).css('border', '1px solid red'); // Add red border to empty fields
            } else {
                $(this).css('border', ''); // Reset border
            }
        });

        if (!isValid) {
            alert('Please fill in all fields.');
            return false;
        }

        // Collect form data
        var formData = $('#contact-form').serialize();

        // AJAX request
        $.ajax({
            url: 'assets/mail.php', // PHP file to send email
            type: 'POST',
            data: formData,
            success: function(response) {
                // Show response message
                $('.ajax-response').html(response);
                // Optionally reset the form
                $('#contact-form')[0].reset();
            },
            error: function() {
                alert('There was an error sending the form.');
            }
        });
    });
});
