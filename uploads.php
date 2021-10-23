<?php
    if (isset($_POST['submit'])) {
        // $fileName = $_FILES['img']['name'];
        $fileTmpName = $_FILES['img']['tmp_name'];

        // $fileExt = explode('.', $fileName);
        // $fileActualExt = strtolower(end($fileExt));

        // $fileNameNew = uniqid('', true).".".$fileActualExt;
        // $fileDestination = 'uploads/'.$fileNameNew;
        // move_uploaded_file($fileTmpName, $fileDestination);
        $hairClass = exec("python objectDetection.py $fileTmpName", $output, $ret_code);
        echo "<p align=center> Your Hair Type is Type ". $hairClass. "!</p>";
    }
?>