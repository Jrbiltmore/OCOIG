
# Inspector General Office (OCOIG)

## Overview

The Inspector General Office application is designed to manage and oversee grants, ensuring transparency and accountability. The application includes a client built with React and Redux, and a server built with Node.js, Express, and MongoDB.

## Features

- User authentication and authorization
- Grant management (create, update, delete, view)
- Role-based access control
- Data visualization with Recharts
- CSRF protection
- Dockerized for easy deployment

## Prerequisites

- Node.js
- Docker
- Docker Compose

## Installation

1. Clone the repository:

   \`\`\`bash
   git clone https://github.com/jrbiltmore/OCOIG.git
   \`\`\`

2. Navigate to the project directory:

   \`\`\`bash
   cd OCOIG
   \`\`\`

3. Install dependencies:

   \`\`\`bash
   cd client
   npm install
   cd ../server
   npm install
   \`\`\`

4. Run the application with Docker Compose:

   \`\`\`bash
   docker-compose up --build
   \`\`\`

5. Open your browser and go to \`http://localhost:3000\` to see the client application.

## Environment Variables

- \`MONGO_URI\`: MongoDB connection string
- \`JWT_SECRET\`: Secret key for JWT

## Folder Structure

- \`client\`: React client application
- \`server\`: Node.js and Express server application
- \`docker-compose.yml\`: Docker Compose configuration
- \`Dockerfile\`: Dockerfile for the client

## License

This project is licensed under the MIT License.
