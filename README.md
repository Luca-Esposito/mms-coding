# Coding Challenge

###Backend 
the backend is written in typescript with Nest.js. It is located in ./backend folder. It is runing on Port 3000  

###Frontend Client Side 
the frontend client side is written in typescript with React. It is located in ./frontend/client folder. It is runing on Port 8080  (it's not complete)

###Frontend Server Side
the frontend server side written in typescript with React. It is located in ./frontend folder. (it's not complete)

## Common setup
Clone the repo and install the dependencies.

```bash
git clone https://github.com/Luca-Esposito/mms-coding.git
cd mms-coding
```

```bash
npm install
```


## Use Docker
You can also run this app as a Docker container:

Step 1: Clone the repo

```bash
git clone https://github.com/Luca-Esposito/mms-coding.git
```

Step 2: Build the Docker image

```bash
docker-compose build
```

Step 3: Run the Docker container locally:
```bash
docker-compose up
```


## NOTES:
- This Project is made without: Pagination, Authorization and Authentication, Data Caching, Testing, Proper logging and error handling
- For this project the data objects has been simplified
- Line Item are appended directly to the Order Entries to save the origin line items 

