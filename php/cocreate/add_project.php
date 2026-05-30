<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

function console_log($data) {
    $output = json_encode($data);
    echo "<script>console.log($output);</script>";
}

if ($_SERVER["REQUEST_METHOD"]=="POST"){
    $projectName = isset($_POST["name"])?$_POST["name"]:"";
    $projectDescription = isset($_POST["description"])?$_POST["description"]:"";
    $projectDate = isset($_POST["date"])?$_POST["date"]:"";
    $eventDescription = isset($_POST["eventOrAchievement"])?$_POST["eventOrAchievement"]:"";
        $eventImage = isset($_FILES["eventImage"])?$_FILES["eventImage"]:"";
        // $eventUrl = isset($_POST["eventUrl"])?$_POST["eventUrl"]:"";
    

    if ($projectName != "" and $projectDescription != "" and $projectDate != ""){
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "cocreate";
        $projectsTable = "projects";
        $imagesTable = "project_images";
        $eventsTable = "events";


        $connection = new mysqli($servername, $username, $password, $dbname);

        if ($connection->connect_error){
            die("Databse Connection Failed: " . $connection->connect_error);
        }


        if (isset($_FILES["image"])){
            $fileName = $_FILES["image"]["name"];
            $tmpName = $_FILES["image"]["tmp_name"];
            $fileError = $_FILES["image"]["error"];

            if ($fileError !== UPLOAD_ERR_OK) {
                die(json_encode([
                    "error" => "Upload failed"
                ]));
            }

            $extension = pathinfo($fileName, PATHINFO_EXTENSION);

            $newFileName =
            uniqid("project_", true) . ".". $extension;

            $uploadDirectory = "uploads/images/";

            $destination = $uploadDirectory . $newFileName;

            if (!move_uploaded_file($tmpName, $destination)) {
                die(json_encode(["error" => "Could not save file"]));
            }

            $addProjectSQL = "INSERT INTO $projectsTable VALUES (NULL, '$projectName', '$projectDate', '$projectDescription') ";
            if ($connection->query($addProjectSQL) == FALSE){
                die(json_encode(["unable to add project"]));
            }

            $projectId = $connection->insert_id;
            $addImageSQL = "INSERT INTO $imagesTable VALUES (NULL, '$projectId', '/$destination')";
            if ($connection->query($addImageSQL) == FALSE){
                die(json_encode(["unable to add image"]));
            }
            
            $addEventSQL = "INSERT INTO $eventsTable VALUES (NULL, $projectId, '$eventDescription', $eventUrl)";
            if ($connection->query($addEventSQL) == FALSE){
                die(json_encode(["unable to add event"]));
            }
    
}
          
            echo json_encode(["success" => TRUE, "image" => $destination]);

           
        }
         
        
    }


?>