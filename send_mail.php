<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fullname = $_POST['fullname'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = "abhinavtechee@gmail.com";
    $subject = "Portfolio Contact Us by $fullname";
    $body = "
    <html>
    <head>
        <title>Portfolio Contact Us</title>
        <style>
            body {
                font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
                background-color: #f4f4f4;
                color: #333;
                padding: 20px;
            }
            .container {
                max-width: 600px;
                margin: 0 auto;
                background-color: #fff;
                padding: 20px;
                border-radius: 10px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            }
            h2 {
                color: #4CAF50;
                border-bottom: 2px solid #4CAF50;
                padding-bottom: 10px;
            }
            p {
                line-height: 1.6;
                margin: 10px 0;
            }
            .footer {
                margin-top: 20px;
                text-align: center;
                font-size: 0.9em;
                color: #777;
            }
        </style>
    </head>
    <body>
        <div class='container'>
            <h2>Contact Us Message</h2>
            <p><strong>Full Name:</strong> $fullname</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Message:</strong></p>
            <p>$message</p>
        </div>
    </body>
    </html>
    ";
    $headers = "From: $email\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send message.";
    }
}
?>