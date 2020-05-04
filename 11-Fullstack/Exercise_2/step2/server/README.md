# GUIDELINE FOR 21.04.2020 Exercise
This readme contains information about the backend part of the exercise realized on 21.04.2020.

## Content:
* [Initialization](#initialization)
* [General information](#general-information)
* [Detailed explanation of files](#detailed-explanation-of-files)
* [Extra](#extra)

# Initialization 
For initialize this project please follow these commands
- `mkdir server`
- `npx express-generator . --no-view`
- `npm install`
- `npm install mongoose dotenv cors`

First command, creates a new folder where we will save the application. Next command creates a template for the express server, this helps to have an easier start as starting by scratch. The option of `--no-view` is needed to not install any view engines with the modules, as this will be extra modules that will not be used.

Third command, installs all the basics modules needed for the express server tu run. Then we install extra modules that we will need for this specific application.

# General information
This application consist in an example of reading, creating, editing and deliting data from the MongoDB local server using mongoose with express. The context for this app is the storage of movie reviews. The next step is to connect this server with a react app for the frontend, this step will be talk in a more deep way in the next week. For now this backend will be completed for it to work with the Postman software.

# Detailed explanation of files
The basic structure of this server will look like this:


- The bin folder contains a `www` file is the configuration for the express server to run. There is defined the port and the listen call for the server.
- The config folder is a new folder created in order to save the files with important configuration to the application. For example the `config.env` to save the enviromantal variables, like the port and the MongoDB uri. Next is the `db.js` that contains the main function to connect the express server with the MongoDB server.
- The models is also created by us. This folder contains the models related to the collections that will be used from our MongoDB server. For this application, we are only using one collection called `MovieReviews.js`
- Next folder is the public folder, this one is of not use in this application but makes no harm to save in case a little index for the server is needed in a future.
- The routes folder will include all the routes that we as developer decide that our server will need. For example in this application we create the `api.js` file with the needed routes to receive the request from the frontend.
- The main file for the express server is the `app.js` this file defines our server with the needed modules that will be used in the application. Also all of the routes are imported and used here.

# Extra
The more detailed explanation for what each code line does is in each file with some comments. If you have more questions contact me. 