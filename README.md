## Component Structure and Approach

The application is built using two main React components:

* **App Component:** Stores the laptop data and renders the list of products.
* **ProductCard Component:** Displays individual laptop information, specifications, seller details, and handles user interactions such as viewing details and contacting the seller.

### Approach

The laptop data is stored in an array of objects. The `App` component uses the `map()` function to render a `ProductCard` for each laptop. React's `useState` hook is used to manage the visibility of product details and the contact seller button status. Inline CSS styling is used to create a clean and responsive user interface.
