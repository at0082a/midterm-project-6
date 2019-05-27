# Food Now - Food Order Pick-up WebApp

Pizza Uto is a web application for a single restaurant wher a user can order food for pick-up. Users can view the menu and select a pizza or beverage with an option to select a size of small, medium or large. The user can view all items in a cart and proceed to a check out page.

In the cart, the user can edit each item individually by increasing or decreasing quantity and deleting an order item. All changes are reflected on the total price amount. A user can also click on a link to continue shopping.

The web app uses Twilio API to communicate with the restaurant (SMS text) about a new order placed. The restaurant can reply with the amount of time needed for the order to be ready. This time will be then sent to the final user via SMS.

## Getting Started

1. Install dependencies: `npm i`
2. Run the server: `npm run local`
3. Visit `http://localhost:8080/`

## Dependencies

- Node 5.10.x or above
- NPM 3.8.x or above
- Body Parser
- EJS
- Express
- Knex
- Postgre SQL
- Twilio (API)

## Database Update

- On your terminal type: npm run knex migrate:latest
- Press enter
- After, type: npm run knex seed:run
- Now you should have the most up to date db

## Team Members
- Soumya
- Alex
- Fiona
