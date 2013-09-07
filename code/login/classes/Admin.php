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
    /** @var array $errors Collection of error messages */
    public $errors = array();
    /** @var array $messages Collection of success / neutral messages */
    public $messages = array();


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

    public function editUserGroup()
    {
        if (!empty($_POST['user_group']) && $_POST['user_email'] == $_SESSION["user_email"]) {

            $this->errors[] = "Sorry, that email address is the same as your current one. Please choose another one.";

        // user mail cannot be empty and must be in email format
        } elseif (!empty($_POST['user_email']) && filter_var($_POST['user_email'], FILTER_VALIDATE_EMAIL)) {

            // if database connection opened
            if ($this->databaseConnection()) {

                // prevent database flooding
                $this->user_email = substr(trim($_POST['user_email']), 0, 64); 
                // not really necessary, but just in case...
                $this->user_id = intval($_SESSION['user_id']);

                // write users new data into database
                $query_edit_user_email = $this->db_connection->prepare('UPDATE users SET user_email = :user_email WHERE user_id = :user_id');
                $query_edit_user_email->bindValue(':user_email', $this->user_email, PDO::PARAM_STR);
                $query_edit_user_email->bindValue(':user_id', $this->user_id, PDO::PARAM_INT);
                $query_edit_user_email->execute();

                if ($query_edit_user_email->rowCount()) {

                    $_SESSION['user_email'] = $this->user_email;
                    $this->messages[] = "Your email address has been changed successfully. New email address is " . $this->user_email . ".";

                } else {

                    $this->errors[] = "Sorry, your email changing failed.";

                }

            }

        } else {

            $this->errors[] = "Sorry, your chosen email does not fit into the naming pattern.";

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