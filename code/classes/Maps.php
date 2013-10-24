<?php

/**
 * class Map
 * handles map saving and such
 */
class Maps {
    /** @var object $db_connection The database connection */
    private $db_connection = null;
    /** @var array $errors Collection of error messages */
    public $errors = array();
    /** @var array $messages Collection of success / neutral messages */
    public $messages = array();


    /**
     * the function "__construct()
     */ 
	public function __construct() {

	}

    /**
     * Checks if database connection is opened and open it if not
     */
    private function databaseConnection() {
        // connection already opened
        if ($this->db_connection != null) {
            return true;
        } else {
            // create a database connection, using the constants from config/config.php
            try {
                $this->db_connection = new PDO('mysql:host='. DB_HOST .';dbname='. DB_NAME, DB_USER, DB_PASS);
                return true;

                // If an error is catched, database connection failed
            } catch (PDOException $e) {
                $this->errors[] = "Database connection problem.";
                return false;
            }
        }
    }	

    public function getLastId(){
                // if database connection opened
        if ($this->databaseConnection()) {
            // database query, getting all the info of the selected map
            $result = $this->db_connection->query('SELECT mapID, timeStamp FROM map ORDER BY timeStamp DESC ');

            return $result->fetchObject()->{'mapID'};

        } else {
            return false;
        }
    }
    public function getMap($mapID) {
        // if database connection opened
        if ($this->databaseConnection()) {
            // database query, getting all the info of the selected map
            $result =  $this->db_connection->query('SELECT * FROM map WHERE mapID = $mapID' );

            return $result->fetchObject();
        } else {
            return false;
        }
    }
    public function getThumb($mapID) {
        // if database connection opened
        if ($this->databaseConnection()) {
            // database query, getting all the info of the selected map
            $result = $this->db_connection->query("SELECT png FROM mapPng WHERE mapID = '$mapID' ");
            return $result->fetchObject()->{'png'};
        } else {
            return false;
        }
    }

    public function getMaps() {
        // if database connection opened
        if ($this->databaseConnection()) {

        // database query, getting all the info of the selected map
        foreach($this->db_connection->query('SELECT * FROM map' ) as $row) {
            $info['mapID'] = $row['mapID'];
            $info['author'] = $row['author'];
            $info['name'] = $row['name'];
            $info['data'] = $row['data'];
            $array[] = $info;
            $info = [];
        }

        return $array;

        } else {

            return false;
        }
    } 

    public function deleteMap($mapID) {

        // if database connection opened
        if ($this->databaseConnection()) {
            // write users new data into database
            echo "now deleting map!";
            return $this->db_connection->query("DELETE FROM map WHERE mapID = '$mapID'");
        }
        else {

            return false;
        }

    } 

    public function createMap() {
        if ($this->databaseConnection()) {

            $data = $_POST['data'];
            $thumb = $_POST['thumb'];
            // pull info from data
            $map = json_decode ($data);

            $author = $map->{'map'}->{'author'};
            $name = $map->{'map'}->{'title'};

            // insert into table

            $this->db_connection->query("INSERT INTO map (author, name, data) VALUES ('$author', '$name', '$data')");

            $lastId = $this->getLastId();

            $this->db_connection->query("INSERT INTO mapPng (mapID, png) VALUES ('$lastId', '$thumb')");

            return $lastId;
        }else {
            return false;
        }
    }

    public function saveMap() {
        if ($this->databaseConnection()) {

            $data = $_POST['data'];
            $mapID = (int )$_POST['id'];
            $thumb = $_POST['thumb'];

            // pull info from data
            $map = json_decode ($data);

            $author = $map->{'map'}->{'author'};
            $name = $map->{'map'}->{'title'};

            echo "this is the map id:" . $mapID.":";

            $this->db_connection->query("UPDATE map set data = '$data', author = '$author',name = '$name' WHERE mapID = '$mapID'");
            $this->db_connection->query("UPDATE mapPng set png = '$thumb' WHERE mapID = '$mapID'");

        }else {
            return false;
        }
    }

}

?>

