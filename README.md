 
# Work Flow:

# 1. The user_role table contains user types i.e., Admin , Employee, customer.
# 2. When the new user registers, user_role should be set as above step which values contains in user_role table.
# 3. First registered user role will be set as "Admin" and remaining will be different.
	
	# 3.1 if no records found in the DB and the new user registers user_role will be set to "Admin".
	# 3.2 if one record found in the DB and the new user registers user_role will not be set as Admin.
# 4. The user table contains registered users in which user_role number will match the RoleId in the user_role table which tells us the user_role is Admin or Employee.



# HOW TO RUN:

# 1. Clone the project using Github link https://github.com/shashikumarNiranjan/UserBackEnd.git
# 2. Open terminal and move to project folder(i.e., download path)
# 3. In the terminal type "npm install" which downloads node modules.
# 4. In the terminal type "nodemon server.js" or "node server.js" which runs the server.

   Once server starts it will run in 8081. Confirm it by checking localhost:8081/
# 5. post below data to the user_role table by hitting the API http://localhost:8081/api/role
	
	{
                "RoleId": "1",
                "UserType": "Admin"
    }
	
	{
                "RoleId": "2",
                "UserType": "Employee"
    }

# 6. Register new user by hitting the API http://localhost:8081/api/user and Post below data.

	{
        "userId": "1",
        "userName": "test",
        "email": "test@gmail.com",
        "phoneNo": "9854785959"
    }
# 7. While Posting data to DB depends on the user, user_role will be assigned.(i.e., First user or not)