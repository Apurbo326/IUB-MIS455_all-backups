<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Basic of Database</title>
    <link rel="stylesheet" href="input-form-backend-css.css">
</head>
<body>
    <?php
    $host = 'localhost'; 
    $username = 'root'; 
    $password = ''; 
    $database = 'cse309_class-performance'; 

    $conn = mysqli_connect($host, $username, $password, $database);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $name = $_POST['name'];
    $email = $_POST['email'];
    $contact = $_POST['contact'];

    $sql = "INSERT INTO test2 (name, email, contact) VALUES ('$name', '$email', '$contact')";

    if ($conn->query($sql) === TRUE) {
        echo "<h1>Welcome " . $name . "!</h1><br>" .
            "Your email address is : <b>" . $email . "</b><br>" .
            "Your contact number is : <b>" . $contact ."</b><br><br>" .
            "<h3>Sorry, " . $name . ". We stored your data <span>XD</span></h3>";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
    ?>
    <button><a href="index.php">Back</a></button>
</body>
</html>
