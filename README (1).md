<h1>Bike Store Application</h1>
<hr><p>A Bike Store Management System built with Express.js, TypeScript, and MongoDB using Mongoose for schema validation and CRUD operations. Features include bike inventory management, order placement, and revenue calculation.</p><h2>Technologies Used</h2>
<hr><ul>
<li>NodeJS</li>
</ul><ul>
<li>mongoose</li>
</ul><ul>
<li>mongodb</li>
</ul><ul>
<li>express</li>
</ul><ul>
<li>cors</li>
</ul><h2>Features</h2>
<hr><ul>
<li>Features Products Create a Bike: Add a new bike (POST /api/products). Get All Bikes: Fetch all bikes or filter by category (GET /api/products). Get a Specific Bike: Retrieve a bike by ID (GET /api/products/:productId). Update a Bike: Update bike details (PUT /api/products/:productId). Delete a Bike: Remove a bike from inventory (DELETE /api/products/:productId). Orders Place an Order: Create an order, update inventory (POST /api/orders). Revenue Calculation: Compute total revenue (GET /api/orders/revenue).</li>
</ul><h2>Models</h2>
<hr><p>Product
name, brand, price, category (enum), description, quantity, inStock (boolean).
Order
email, product (ObjectId), quantity, totalPrice.</p><h2>Contact</h2>
<hr><p><span style="margin-right: 30px;"></span><a href="https://www.linkedin.com/in/humain-islam-rabbi-517429307/"><img target="_blank" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" style="width: 10%;"></a><span style="margin-right: 30px;"></span><a href="https://github.com/humainislam11"><img target="_blank" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" style="width: 10%;"></a></p>