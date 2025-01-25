import express from 'express'; // Express Import
import { database } from './database'; // Database Import
import { adminJs, adminJsRouter } from './adminjs'; // AdminJS Import

const app = express();
app.use(express.static('public')) // Static files
app.use(adminJs.options.rootPath, adminJsRouter); // Using the router with the rootPath

const port = process.env.PORT || 3000; // If port is not defined, it will run on 3000

app.listen(port, () => {
  database.authenticate().then(()=>{
    console.log('DB connection has been established successfully.');
  }); // testing the connection
  console.log(`Server is running on port ${port}`);
})