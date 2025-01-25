# OpenStream

OpenStream is a video streaming platform developed based on the OneBitFlix project from the OneBitCode course. This project demonstrates the use of various technologies including Express, Sequelize, and AdminJS to create a robust and scalable web application.

## Features

- User authentication and authorization
- Video streaming
- Admin panel for managing content
- Database integration with PostgreSQL

## Technologies Used

- [Express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js
- [Sequelize](https://sequelize.org/) - Promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite, and Microsoft SQL Server
- [AdminJS](https://adminjs.co/) - Auto-generated admin panel for your Node.js application
- [PostgreSQL](https://www.postgresql.org/) - Powerful, open-source object-relational database system

### Prerequisites

- Node.js
- PostgreSQL

### Installation

1. Clone the repository:
  ```bash
    git clone https://github.com/ThalisonBotz/OpenStream
    cd openstream

2. Install dependencies:
  ```bash
    npm install

3. Configure the database:
  ```bash
    Ensure PostgreSQL is running and create a database named openstream_development.
    Update the database configuration in `sequelizeCli.js` if necessary.

4. Run database migrations:
  ```bash
    npx sequelize-cli db:migrate

5. Seed the database:
  ```bash
    npx sequelize-cli db:seed:all

## Running the Application

1. Start the development server:
  ```bash
    npm run dev
The server will be running on `http://localhost:3000`.

## Admin Panel

1. Access the AdminJS panel at
`http://localhost:3000/admin`

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.

## References

`onebitcode` - For providing the course and inspiration for this project
  `https://comunidade.onebitcode.com/`

`onebitflix` - The original project this is based on.
  `https://comunidade.onebitcode.com/c/projetos/sections/360131/lessons/1337441`