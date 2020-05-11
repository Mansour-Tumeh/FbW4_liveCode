# Complete DevHub project

## Steps for running the application:

1. run `npm install` in the main folder.
2. run `npm install` in the client folder.
3. Create a `default.json` file inside the config folder. You can copy it from a previous project also. The content of the file would be:
    ```javascript        
    {
        "mongoURI": "mongodb://localhost:27017/devhub",
        "jwtSecret": "newsecret"
    } 
4. Change the mongoURI for the project. Use either localhost or atlas for it. Remember to change the database name for the one you want for this application. For example `devhub`
5. Now to run both client and server, open the terminal in the main folder and run:
    ```
    npm run dev