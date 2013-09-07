<?php

/**
 * class Admin
 * handles changing user data
 * 
 * @author Improvshark <improvshark@gmail.com>
 */
class Admin
{
    /** @var object $db_connection The database connection */
    private $db_connection = null;


    /**
     * the function "__construct()
     */ 
	public function __construct()
	{

	}

    /**
     * Checks if database connection is opened and open it if not
     */
    private function databaseConnection()
    {
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


    public function getAllUserData()
    {
        // if database connection opened
        if ($this->databaseConnection()) {

        // database query, getting all the info of the selected user
        foreach($this->db_connection->query('SELECT user_id, user_group, user_name, user_email FROM users') as $row) {
            $info['user_id'] = $row['user_id'];
            $info['user_group'] = $row['user_group'];
            $info['user_name'] = $row['user_name'];
            $info['user_email'] = $row['user_email'];
            $array[] = $info;
            $info = [];
        }

        return $array;

		} else {

            return false;
        }
    }


    public function setUserGroup($user_id, $userGroup)
    {

    }

    public function deleteUser($user_id)
    {

    }

}

?>