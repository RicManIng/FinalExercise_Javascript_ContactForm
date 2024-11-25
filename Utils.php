<?php
    function contact_checkStringLength($string, $min, $max){
        $length = strlen($string);
        if($length < $min || $length > $max){
            return false;
        }
        return true;
    }

    function contact_checkFieldIsNotNone($field){
        if($field == ""){
            return false;
        }
        return true;
    }

    function contact_checkEmail($email){
        // check the email format
        if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
            return false;
        }

        // Get the domain of the email
        $domain = substr(strrchr($email, "@"), 1);

        // Check if the domain has MX or A records
        if(!checkdnsrr($domain, 'MX') && !checkdnsrr($domain, 'A')){
            return false;
        }

        return true;
    }
?>