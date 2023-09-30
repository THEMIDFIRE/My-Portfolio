<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Get the form data
    $name = $_POST["name"];
    $phone = $_POST["phone"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"]
  // Set the email subject and body
    $subject = "New Message from Contact Form";
    $body = "Name: $name\nEmail: $email\nMessage: $message"
  // Set the email headers
    $headers = "From: $email\n";
    $headers .= "Reply-To: $email\n";
    $headers .= "MIME-Version: 1.0\n";
    $headers .= "Content-Type: text/plain; charset=utf-8\n"
  // Send the email
    mail("midomohamedmagdy@hotmail.com", $subject, $body, $headers)
  // Redirect the user to the success page
    header("Location: success.html");
}
?>