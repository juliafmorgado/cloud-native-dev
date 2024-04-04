# Challenge 2: Cloud Native Applications Persistance

This repository contains a simple storage application for the challenge 2 created by Salaboy [here](https://github.com/salaboy/cloud-native-dev/tree/main/2). It has two versions: one using the file system for persistence and the other using a PostgreSQL database. This document provides instructions on how to run and switch between these two versions.

## Instructions

### Prerequisites
Before you start, ensure you have the following installed:

- Node.js (preferably the latest LTS version)
- npm (comes with Node.js)
- PostgreSQL (for the SQL version)

Additionally, make sure PostgreSQL is running if you are using the SQL version.

### Installation
1. Clone the repository
`git clone https://github.com/juliafmorgado/cloud-native-dev.git`

2. Navigate into the cloned repository directory:
`cd 2-challenge`

3. Install the necessary dependencies:
`npm install`

### Running the Application

#### File System Version
1. Switch to the `fs` branch:
`git  checkout fs`

2. Run the application:
`node server.js`

3. Access the application at `http://localhost:3000`

#### PostgreSQL Database Version
1. Switch to the `sql` branch:
`git checkout sql`

2. Ensure your PostgreSQL database is set up. If  not, follow the steps in my [blog post](https://www.juliafmorgado.com/posts/cloud-native-dev-challenge-2/):
3. Run the application:
`node server.js`
4. Access the application at `http://localhost:3000`

### Switching Between Versions
You can switch between the `fs` and `sql` versions by using Git commands to checkout the respective branch. Follow the steps in the "Running the Application" section for the version you wish to run.

Have Fun!

