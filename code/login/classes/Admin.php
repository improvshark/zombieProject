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


    private function getAllUserData()
    {
        // if database connection opened
        if ($this->databaseConnection()) {

            // database query, getting all the info of the selected user
            $query_user = $this->db_connection->prepare('SELECT * FROM users');
            $query_user->bindValue(':user_name', $user_name, PDO::PARAM_STR);
            $query_user->execute();
            // get result row (as an object)
            return $query_user->fetchObject();

		} else {

            return false;
        }
    }


    public function setUserGroup($userGroup)
    {

    }

    public function deleteUser()
    {

    }


    public function ()
    {

    }


}

?>