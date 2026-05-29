<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

function console_log($data) {
    $output = json_encode($data);
    echo "<script>console.log($output);</script>";
}

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "cocreate";

$projectsTable = "projects";
$imagesTable = "project_images";

$connection = new mysqli($servername, $username, $password, $dbname);

if ($connection->connect_error){
    die("Databse Connection Failed: " . $connection->connect_error);
}

$fetchProjectsSql = "SELECT * FROM $projectsTable";
// console_log($fetchProjectsSql); //gives error Idk why

$projects = $connection->query($fetchProjectsSql);

$projectsArray = [];

if ($projects->num_rows > 0){
    while ($row = $projects->fetch_assoc()){
        $images = $connection->query("SELECT image_url FROM $imagesTable WHERE project_id = {$row['project_id']}");
        if ($images ->num_rows > 0){
            while ($image = $images->fetch_assoc()){
                $row["images"][] = $image;
            }
        }
        $projectsArray[substr($row["project_date"], 0, 4)][] = $row;
    }
}

echo json_encode($projectsArray);
?>