# Cypress E2E Testing Framework

This project uses **Cypress** for end-to-end (E2E) testing, following the **Page Object Model (POM)** design pattern to manage locators and reusable functions.

## Requirements

Before starting, make sure you have the following installed:

- Node.js (version 12 or higher)


## Installation

1. Clone this repository to your local machine.

2. Running the Tests 
   At the browser : 
    npx cypress open
   Headless Mode :
    npx cypress run --spec "cypress/e2e/test.cy.js"
3. Additional Dependencies
This framework uses the cypress-xpath dependency to handle XPath selectors. Cypress does not natively support XPath, so this package was added.
 install xpath 
    npm install -D cypress-xpath

4. Notes
The test.cy.js file contains the three requested test cases.
Each test in the test.cy.js file includes comments explaining the function being executed and the verification steps.
The locators and reusable functions are organized within the support folder following the Page Object Model pattern (POM.js)