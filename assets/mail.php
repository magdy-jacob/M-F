<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = isset($_POST['name']) ? strip_tags(trim($_POST['name'])) : '';
    $email = isset($_POST['email']) ? filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL) : '';
    $option = isset($_POST['option']) ? strip_tags(trim($_POST['option'])) : ''; // Option from select
    $message = isset($_POST['message']) ? strip_tags(trim($_POST['message'])) : '';
    $number = isset($_POST['number']) ? strip_tags(trim($_POST['number'])) : ''; // Phone number is now nullable

    // Validate form data
    if (empty($name) || empty($email) || empty($message)) {
        echo '<p style="color: red;">Please fill in all required fields.</p>';
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo '<p style="color: red;">Invalid email format.</p>';
        exit;
    }

    // Email details
    $to = 'delwar.developer@gmail.com'; // Your email address here
    $from = $email;
    $headers = "From: " . $name . " <" . $from . ">\r\n";
    $headers .= "Reply-To: " . $from . "\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    // Email subject
    $emailSubject = "Contact Form Message";

    // Message body
    $emailBody = "<html>
                    <head>
                        <title>" . $emailSubject . "</title>
                    </head>
                    <body>
                        <p><strong>Name:</strong> " . $name . "</p>
                        <p><strong>Email:</strong> " . $email . "</p>
                        <p><strong>Option:</strong> " . (!empty($option) ? $option : 'No option selected') . "</p>
                        <p><strong>Phone Number:</strong> " . (!empty($number) ? $number : 'No phone number provided') . "</p>
                        <p><strong>Message:</strong> " . nl2br($message) . "</p>
                    </body>
                  </html>";

    // Disable warnings and notices for the script
    error_reporting(E_ALL & ~E_WARNING & ~E_NOTICE);

    // Send the email and suppress errors with the @ operator
    if (@mail($to, $emailSubject, $emailBody, $headers)) {
        echo '<p style="color: green;">Your message has been sent successfully.</p>';
    } else {
        echo '<p style="color: red;">Oops! An error occurred, and your message could not be sent.</p>';
    }

    // Reset error reporting to default
    error_reporting(E_ALL);
}
?>
