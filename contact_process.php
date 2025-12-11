<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // 1. Sanitize and Validate Inputs
    $nome = strip_tags(trim($_POST["nome"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $telefone = strip_tags(trim($_POST["telefone"]));
    $mensagem = strip_tags(trim($_POST["mensagem"]));

    // 2. Destination Email
    $to = "agendamento@clinicaviddas.com.br"; 
    $subject = "Novo Contato pelo Site: $nome";

    // 3. Email Body
    $email_content = "Nome: $nome\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Telefone: $telefone\n\n";
    $email_content .= "Mensagem:\n$mensagem\n";

    // 4. Email Headers
    // IMPORTANT: For Locaweb/HostGator, the 'From' email must often be a real account on the domain.
    // We use a fixed sender to ensure delivery, and put the user's email in Reply-To.
    $headers = "From: Site Clinica Viddas <agendamento@clinicaviddas.com.br>" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion() . "\r\n" .
               "MIME-Version: 1.0" . "\r\n" .
               "Content-Type: text/plain; charset=UTF-8";

    // 5. Send Email
    if (mail($to, $subject, $email_content, $headers)) {
        // Success: Redirect with success flag
        header("Location: contact.html?status=success");
        exit;
    } else {
        // Failure: Redirect with error flag
        header("Location: contact.html?status=error");
        exit;
    }
} else {
    // If accessed directly, redirect to contact page
    header("Location: contact.html");
    exit;
}
?>
