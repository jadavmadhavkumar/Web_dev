# Web_dev

# Step 1: Create the root project directory
mkdir cybersecurity-platform
cd cybersecurity-platform

# Step 2: Create backend and frontend directories
mkdir backend
mkdir frontend

# Step 3: Inside the backend, create the required subdirectories
mkdir backend\config
mkdir backend\controllers
mkdir backend\models
mkdir backend\routes
mkdir backend\middleware

# Step 4: Create the necessary files in the backend directory
New-Item backend\server.js -ItemType File

# Step 5: Inside the frontend, create the public and src directories
mkdir frontend\public
mkdir frontend\src
mkdir frontend\src\components

# Step 6: Create the necessary files in the frontend directory
New-Item frontend\src\App.js -ItemType File
New-Item frontend\src\index.js -ItemType File
New-Item frontend\.env -ItemType File
