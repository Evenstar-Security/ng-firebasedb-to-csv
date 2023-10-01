# ng-firebase-db-to-csv

This is a simple web application built in Angular which provides a button which allows you to download the contents of a [Firebase](https://firebase.google.com/) database to a CSV. 

## Requirements

This project requires Node.js and Angular on the system it is running. It was built and tested using:
   - `Angular CLI`: 16.2.3 and 16.2.4
   - `Node`: 16.20.1 and 18.18.0
   - `Package Manager`: npm 8.19.4 and 9.8.1
   - `OS`: win32 x64 and linux x64

Once you have Node.js and Angular running, you must put a JSON file called `ng-firebasedb-to-csv.json` in a directory called `sysinfo`. The `sysinfo` directory must have the same parent directory as this project's directory.

```json

    {
        "key1": "value1",
        "key2": "value2"
    }

```

## Run Code

Verify that your JSON file is correctly formatted and in the right directory. Run `cat ../sysinfo/ng-firebasedb-to-csv.json` and that should output the contents of your JSON file.

Once you have the requirements installed, you can run this web app with the Angular command: `ng serve`

The web app will then be running at `http://localhost:4200`