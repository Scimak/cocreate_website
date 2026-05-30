<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");


if ($_SERVER["REQUEST_METHOD"]=="POST"){
    $projectId = isset($_POST["project_id"])?$_POST["project_id"]:"";
    

    if ($projectId != ""){
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "cocreate";
        $projectsTable = "projects";
        $imagesTable = "project_images";
        $eventsTable = "events";


        $connection = new mysqli($servername, $username, $password, $dbname);

        if ($connection->connect_error){
            die("Database Connection Failed: " . $connection->connect_error);
        }


        $fetchProjectSQL = "SELECT project_id, project_name, project_date, project_description FROM $projectsTable WHERE project_id = $projectId";

        $projectDetails = $connection->query($fetchProjectSQL);
        $projectDataArray = [];

        if ($projectDetails->num_rows > 0){
            while ($row = $projectDetails->fetch_assoc()){
                if (!isset($projectDataArray[$row["project_id"]])){
                    $projectDataArray[$row["project_id"]] = 
                    ["project_name"=>$row["project_name"], "project_date"=>$row["project_date"], "project_description"=>$row["project_description"]];

                    $fetchImagesSQL = "SELECT image_url FROM $imagesTable WHERE project_id = $projectId";
                    $projectImages = $connection->query($fetchImagesSQL);
                    if ($projectImages->num_rows > 0){
                        while($rowImg = $projectImages->fetch_assoc()){
                            $projectDataArray[$row["project_id"]]["images"][] = $rowImg["image_url"];
                        }
                    } else {
                        $projectDataArray[$row["project_id"]]["images"] = [];
                    }

                    $fetchEventsSQL = "SELECT event_description, event_url FROM $eventsTable WHERE project_id = $projectId";
                    $projectEvents = $connection->query($fetchEventsSQL);
                    if ($projectEvents->num_rows > 0){
                        $projectDataArray[$row["project_id"]]["has_events"] = true;
                        while($rowEvent = $projectEvents->fetch_assoc()){
                            $projectDataArray[$row["project_id"]]["events"][] = $rowEvent["event_description"];
                            $projectDataArray[$row["project_id"]]["events_urls"][] = $rowEvent["event_url"];
                        }
                    } else {
                        $projectDataArray[$row["project_id"]]["has_events"] = false;
                        $projectDataArray[$row["project_id"]]["events"][] = [];
                            $projectDataArray[$row["project_id"]]["events_urls"][] = [];
                    }
                }
            }
        }
        echo json_encode($projectDataArray);
    }  
}


?>