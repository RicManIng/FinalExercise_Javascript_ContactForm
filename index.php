<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact form</title>
    <link rel="stylesheet" href="resources/css/contact.min.css">
    <script type="module" src="js/contact.js"></script>
</head>
<body>
    <?php
        require_once("Utils.php");

        $valid_form = false;
        $errors = array();

        if($_SERVER["REQUEST_METHOD"] == "POST"){
            $name = $_POST["name"];
            $surname = $_POST["surname"];
            $email = $_POST["email"];
            $infoSubject = $_POST["info-subject"];
            $object = $_POST["object"];
            $message = $_POST["message"];
            $phone = $_POST["phone"];

            if(!contact_checkStringLength($name, 2, 50)){
                $errors["name"] = "Name must be between 2 and 50 characters";
            }

            if(!contact_checkStringLength($surname, 2, 50)){
                $errors["surname"] = "Surname must be between 2 and 50 characters";
            }

            if(!contact_checkStringLength($object, 2, 50)){
                $errors["object"] = "Object must be between 2 and 50 characters";
            }

            if(!contact_checkStringLength($message, 50, 1000)){
                $errors["message"] = "Message must be between 50 and 1000 characters";
            }

            if(!contact_checkFieldIsNotNone($infoSubject)){
                $errors["info-subject"] = "You must select an argument";
            }

            if(!contact_checkEmail($email)){
                $errors["email"] = "Invalid email";
            }

            if(!contact_checkPhone($phone)){
                $errors["phone"] = "Invalid phone number";
            }

            if(count($errors) == 0){
                $valid_form = true;
            }
        }
    ?>
    <main>
        <?php if($valid_form): ?>
            <h1>Form sent</h1>
            <p>Your form has been sent</p>
        <?php else: ?>
        <h1>Contact me</h1>
            <form action="index.php" method="post" novalidate>

                <label for="name">Name * : </label>
                <input type="text" name="name" id="name" value="<?= $_POST['name'] ?? ''; ?>" required placeholder="insert here your name">
                <p class="info" id="info-name"></p>
                <p class="error" id="error-name"><?= $errors['name'] ?? '';?></p>

                <label for="surname">Surname * : </label>
                <input type="text" name="surname" id="surname" value="<?= $_POST['surname'] ?? ''; ?>" required placeholder="insert here your surname">
                <p class="info" id="info-surname"></p>
                <p class="error" id="error-surname"><?= $errors['surname'] ?? '';?></p>

                <label for="email">Email * : </label>
                <input type="email" name="email" id="email" value="<?= $_POST['email'] ?? ''; ?>" required placeholder="insert here your email address">
                <p class="error" id="error-email"><?= $errors['email'] ?? '';?></p>

                <label for="phone">Telephone : </label>
                <input type="tel" name="phone" id="phone" value="<?= $_POST['phone'] ?? ''; ?>" placeholder="insert here your phone number">
                <p class="error" id="error-phone"><?= $errors['phone'] ?? '';?></p>

                <label for="info-subject">Select a contact argument * : </label>
                <select name="info-subject" id="info-subject" class="not-select">
                    <option class="sel-default" value="" <?= (@$_POST['info-subject'] == '') ? 'selected' : ''?>>Select an argument</option>
                    <option class="sel-selected" value="webDev" <?= (@$_POST['info-subject'] == 'webDev') ? 'selected' : ''?>>Web Development</option>
                    <option class="sel-selected" value="embDev" <?= (@$_POST['info-subject'] == 'embDev') ? 'selected' : ''?>>Embedded System Development</option>
                    <option class="sel-selected" value="jobOffer" <?= (@$_POST['info-subject'] == 'jobOffer') ? 'selected' : ''?>>Job Opportunity</option>
                    <option class="sel-selected" value="other" <?= (@$_POST['info-subject'] == 'other') ? 'selected' : ''?>>Other</option>
                </select>
                <p class="error" id="error-subject"><?= $errors['info-subject'] ?? '';?></p>

                <label for="object">Object * : </label>
                <input type="text" name="object" id="object" value="<?= $_POST['object'] ?? ''; ?>" required placeholder="insert here the ogject of the contact mail">
                <p class="info" id="info-object"></p>
                <p class="error" id="error-object"><?= $errors['object'] ?? '';?></p>

                <label for="message">Message * : </label>
                <textarea name="message" id="message" rows="10" required placeholder="insert here the message of your email"><?= $_POST['message'] ?? ''; ?></textarea>
                <p class="info" id="info-message"></p>
                <p class="error" id="error-message"><?= $errors['message'] ?? '';?></p>
                <button type="submit" id="submit" disabled>Send</button>
            </form>
        <?php endif; ?>
    </main>
</body>
</html>