1. App Initialization and Component Mounting
Start the application by running npm run dev in your project directory. The app will open in the browser at (http://localhost:5173/)


2. useEffect Hook Execution
What happens inside useEffect:

A fetch request is made to "https://fakestoreapi.com/products" to retrieve a list of products.
Once the data is fetched and successfully converted to JSON (res.json()), the Setproducts function is called to update the Products state with the fetched product data.
Now, Products contains an array of products with details like id, title, price, and image.
The empty array [] as the second argument ensures that the useEffect hook is executed only once when the component is mounted.

3. Rendering the UI (First Render)
 The component renders:

The heading: "Fake Store".
The initial cart item count:Cart Items: 0.

Rendering Products:
The Products array is initially empty (since the API request hasn't completed yet), so nothing is displayed during the first render for products.

4.Re-render After Products Fetch
Once the data fetching is complete and the Products state is updated, React triggers a re-render of the component with the new data.

Product Grid Rendering:

The Products.slice(0, 3) function limits the number of products displayed to the first three products.
Each product is rendered in a card layout with:
Image: Displayed using the img tag.
Title: Displayed in bold.
Price: Displayed with the price of the product.
"Add to Cart" Button: Allows the user to add the product to the cart.

5. Cart Component Rendering
After the handleAddToCart function updates the state, a re-render occurs, which also updates the Cart component with the new cart data.

Total Items: The number of items in the cart (Increment).
List of Cart Items: Each item in cartItems is rendered with:
The product image (img).
The product title, ID, and price.
Total Price: The total price of all items in the cart.
![image](https://github.com/user-attachments/assets/d2ba0507-0a34-4adf-a677-6bdc514c44b2)

6. Cart Component Execution
Inside the Cart component:

Rendering Cart Items:

The cartItems.map() function iterates over each product in the cart and renders it as a list item.
Each list item contains:
The product’s image (small size).
The product’s title, ID, and price.
Displaying Total Items:

The total number of items in the cart (Increment) is displayed.
Displaying Total Price:

The total price of all items in the cart is shown, using totalPrice.toFixed(2) to format the price to two decimal places.

![image](https://github.com/user-attachments/assets/3818101c-78ec-4f0d-af5c-4cc31cb2da3d)

