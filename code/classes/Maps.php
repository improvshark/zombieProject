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


    public function getMap($mapID) {
        // if database connection opened
        if ($this->databaseConnection()) {
            // database query, getting all the info of the selected map
            return $this->db_connection->query('SELECT * FROM map WHERE mapID = $mapID' );
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
             return $this->db_connection->query('DELETE FROM map WHERE mapID = $mapID');
        }
        else {
            return false;
        }

    } 

    public function createMap($data) {

        // pull info from data
        $map = json_decode ($data);

       //print_r($map->{'map'}->{'title'});

        $author = $map->{'map'}->{'author'};
        $name = $map->{'map'}->{'title'};

        // insert into table
        if ($this->databaseConnection()) {
            echo "querying database";

            return $this->db_connection->query("INSERT INTO map (author, name, data) VALUES ('$author', '$name', '$data')");

        }else {
            return false;
        }
    }

    public function saveMap($data, $mapID) {

        if (empty($mapID)){
            $this->createMap($data);
        } 
        else if ($this->databaseConnection()) {

            return $this->db_connection->query('UPDATE (data) VALUES ($data) WHERE mapID = $mapID');

        }else {
            return false;
        }
    }

}

?>

