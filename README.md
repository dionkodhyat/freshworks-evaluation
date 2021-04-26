# Full Stack Developer Selection Test



## About

I was tasked in creating a web application that allows the user and admin to submit and view information in regards to data of birds being fed around the world. Because user management and authentication was not a requirement or expectation, I designed the application where all the users are able to see the data that was submitted to the database.

The UI is a simple table that display this information with a button that pops a modal out that enables users to submit information relevant to the data.

When the page is loaded, it creates a `GET` request to fetch all the entries from the database and display it on the table. Additionally, when the users filled out the form and pressed submit, it will create a `POST` request that will submit the entry to the database.

In the end, I've spent roughly **8 hours** working on this application which included designing, implementation and documentation.



## Technology Stack

The main technology stack that I used were

- PostgreSQL
- Express
- Node.js
- ReactJS

I mainly used these stack because these were the ones that I was most comfortable with. I was initially debating with using either PostgreSQL or MongoDB for my database, and I opted to go for PostgreSQL because I wanted to get more practice working with SQL databases.



## How to run the app

I have deployed the server and database to Heroku to simplify the setup process. The application front-end can be tested easily without needing to setup the backend. However, I have wrote down a guide down below to setup and run a server on the local machine. Either clone the repo or download the zip file. Then on the terminal, ensure you are on the `myapp` directory. 

### Running the Client

1. `cd client`
2. `npm i`
3. `npm start`



### Hosting the database locally

1. Install [PostgreSQL](https://www.postgresql.org/download/) and [Node.js](https://nodejs.org/en/) if the machine does not have it already

2. Add Postgres to the system PATH (Windows only)

3. Open the `PSQL` shell, click enter on the first four options and provide the password you have chosen during the installation 

   ![img](https://i.gyazo.com/f1cdf6f166c4d131c37e9ff3c631f01c.png)

4. Ensure you are at the `postgres=#` section, 

5. Create a database with the name of your choosing, for this example I will choose the name `localdb`. To do this run the following command 
   `CREATE DATABASE localdb;`

6. Click `ctrl+c` or type in `\q` and confirm to exit out of the psql shell

7. Open up another Command Prompt/Terminal and proceed to go on the project directory

8. Enter the following command and replace `<NAME_OF_DATABASE>` with the name of the database you previously created if differed in the previous steps
   `psql -U postgres -d <NAME_OF_DATABASE> < dump.sql`

9. This will populate the local database with the one that has been designed and seeded with for the application

10. <u>If the name of your database differs from</u> `localDB`, replace the value of `database` in file `db.js` with the correct database name



### Hosting the server locally

1. To ensure the app are making API calls to the local server, uncomment line 8 and 18 for `client/src/components/DataTable.js` and `client/src/components/DataForm.js` respectively

2. Comment line 9 and 19 for `client/src/DataTable.js` and `client/src/DataForm.js` respectively

3. It should look like:

   `client/src/components/DataTable.js`

   ```javascript
   const url = "http://localhost:9000/"
   // const url = "https://dion-fw-heroku.herokuapp.com/"
   ```

   ​	`client/src/components/DataForm.js`

   ```javascript
   const url = "http://localhost:9000/data"
   // const url = "https://dion-fw-heroku.herokuapp.com/data"
   ```

4. Back on the terminal, ensure you are in the root folder and Install the node dependencies through `npm i`

5. Start the local server through the `node index.js` command in the terminal
