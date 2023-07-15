# How to Run a MERN Project

To run a MERN project, you need to follow these steps:

# Step 1: Clone the project

First, you need to clone the MERN project from the repository on Github. You can use the git clone command to download the project. 

# Step 2: Install dependencies

After cloning the project, navigate to the client directory using the terminal and run the npm install command to install all the dependencies needed for the frontend of the application.
Once the frontend dependencies have been installed, go back to the main directory of the project and run npm install to install the dependencies for the backend.

# Step 3: Set up environment variables

In the main directory of the project, create a .env file and insert the SECRET_KEY and DATABASE variables. These variables are used to authenticate and connect to the database.

# Step 4: Run the project

To run the frontend, navigate to the client directory using the terminal and run npm start.
To run the backend, go back to the main directory of the project and run nodemon app.js. This will start the server and allow the application to communicate with the database.

# Step 5: Open the application

Once the frontend and backend are running, open a web browser and navigate to http://localhost:3000 to see the application in action.
Congratulations! You have successfully set up and run a MERN project.