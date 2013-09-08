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
        if (empty($_POST['user_group']) ) {

            $this->errors[] = "no user_group specified";

        // user mail cannot be empty and must be in email format
        } elseif (!empty($_POST['user_group']) && ($_POST['user_group']== 'dev' or $_POST['user_group']== 'admin' or $_POST['user_group']== 'user')){

            // if database connection opened
            if ($this->databaseConnection()) {

                // write users new data into database
                $query_edit_user_group = $this->db_connection->prepare('UPDATE users SET user_group = :user_group WHERE user_id = :user_id');
                $query_edit_user_group->bindValue(':user_group', $_POST['user_group'], PDO::PARAM_STR);
                $query_edit_user_group->bindValue(':user_id', $_POST['user_id'], PDO::PARAM_INT);
                $query_edit_user_group->execute();

                if ($query_edit_user_group->rowCount()) {

                    $this->messages[] = "user_group has been changed successfully. New group is " . $_POST['user_group'] . ".";

                } else {

                    $this->errors[] = "Sorry, your user_group change failed.";

                }

            }

        } else {

            $this->errors[] = "not a valid usergroup";

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

