import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import AdminJSSequelize from "@adminjs/sequelize";
import { database } from '../database'; // Importing the database

AdminJS.registerAdapter(AdminJSSequelize); // Registering the adapter for Sequelize

export const adminJs = new AdminJS({
  databases: [database], // Registering the database
  rootPath: "/admin",  // The path where the admin panel will be available
  branding: {
    companyName: "OpenStream",
    logo: "/logoOpenStream.png",
    theme: {
      colors: {
        primary100: '#ff0043',
	      primary80: '#ff1a57',
	      primary60: '#ff3369',
	      primary40: '#ff4d7c',
		    primary20: '#ff668f',
	      grey100: '#151515',
	      grey80: '#333333',
	      grey60: '#4d4d4d',
	      grey40: '#666666',
	      grey20: '#dddddd',
	      filterBg: '#333333',
	      accent: '#151515',
	      hoverBg: '#151515',
      }
    }
  }
})

export const adminJsRouter = AdminJSExpress.buildRouter(adminJs); // Building the router