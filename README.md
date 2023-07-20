# Cypress

npm install cypress --save-dev

Option 1: Run tests in Cypress Window/UI

To run tests on Cypress window, do the following:

In the terminal, enter the command

npx cypress open

Or,

Alternatively, enter the command

node ./node_modules/cypress/bin/cypress open  

Executing Cypress tests on Chrome

cypress run --browser chrome
Using npm scripts, launching the browsers with cypress has become easy:

"scripts": {
"cy:run:chrome": "cypress run --browser chrome"
}

npx cypress run --browser edge