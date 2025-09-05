🛍️ Products RESTful API
This is a basic RESTful API for managing product data. It's built with Node.js, Express, and MongoDB, and it demonstrates fundamental CRUD (Create, Read, Update, Delete) operations. This project serves as a foundational example of a backend service following a Model-Controller-Route architecture.

✨ Features
Create: Add a new product to the database.
Read:
    Retrieve a list of all products.
    Retrieve a single product by its ID.
Update: Modify an existing product's details.
Delete: Remove a product from the database.

🛠️ Technologies Used
Node.js: A JavaScript runtime environment.
Express.js: A web application framework for Node.js.
Mongoose: An ODM (Object Data Modeling) library for MongoDB.
MongoDB: A NoSQL document database.
dotenv: A module to load environment variables from a .env file.

💻 API Endpoints
You can use Postman, Thunder Client, or cURL to test these endpoints. The base URL is http://localhost:3000/products.
    GET /: Get all products.
    GET /:id: Get a single product by ID.
    POST /: Add a new product (requires JSON body).
    PUT /:id: Update a product (requires JSON body).
    DELETE /:id: Delete a product.

Author
S Yasha Sri - https://github.com/Yashasri0602