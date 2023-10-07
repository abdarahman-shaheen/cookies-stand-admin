# Cookie Stand Admin App Documentation

This README provides an overview of the components and structure of the Cookie Stand Admin app. The app allows users to create and manage information about cookie stands, displaying the data in a tabular format.

## Components


### `ReportTable` Component

The `ReportTable` component is a crucial part of the app, responsible for presenting information about cookie stands in a structured table format. Here are some additional details:

- **Dynamic Table Creation**: The component dynamically generates tables based on the provided `hours` and `reports` props. It calculates totals for each location and each hour of operation, as well as the grand total.

- **Responsive Styling**: The tables are styled with responsive design in mind. It uses CSS classes and color-coding to make the data visually appealing and easy to read.

- **Conditional Message**: When there are no cookie stands available (i.e., the `reports` array is empty), the component displays a user-friendly message stating, "No Cookie Stands Available."

### `CreateForm` Component

The `CreateForm` component allows users to create new cookie stands by providing details such as location, minimum customers per hour, maximum customers per hour, and average cookies sold per sale. Here are more details:

- **Form Handling**: This component handles form input and validation. Users can enter numeric values for customer counts and average cookies sold per sale.

- **State Management**: It uses React state hooks to manage the form inputs, making it easy to capture and submit user input.

- **Data Submission**: When users submit the form, the component triggers the `onCreate` callback, passing the new cookie stand's details as an object.

### `Footer` Component

The `Footer` component is a simple but informative part of the app:

- **Location Count**: It calculates the number of locations based on the length of the `reports` array and displays this count in a footer. This provides users with an overview of how many cookie stands are currently being managed.

### `Header` Component

The `Header` component provides the app's title and navigation:

- **Title**: It displays the title "Cookie Stand Admin" to identify the purpose of the app.

- **Navigation**: Users can quickly navigate back to the "Overview" page using the provided link.

### `Main` Component

The `Main` component serves as the main content of the app:

- **State Management**: It manages the state for `cookieStands`, an array that holds information about all the cookie stands created by the user.

- **Creation Handling**: The component contains the `handleCreateCookieStand` function, which is used to add newly created cookie stands to the `cookieStands` array.

- **Rendering Components**: It renders the `CreateForm`, `ReportTable`, and `Footer` components to create the user interface.

### `Overview` Page

The "Overview" page is a separate page that provides a link to return to the main page. It enhances the user experience by enabling easy navigation between pages.