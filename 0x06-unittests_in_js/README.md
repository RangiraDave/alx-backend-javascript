# alx-backend-javascript

This repository contains the code for the ALX Backend JavaScript projects.

## Table of Contents
- [Resources]()
- [Project Description](#project-description)
- [Learning Objectives](#learning-objectives)
- [Requirements](#requirements)
- [Tasks](#tasks)
    - [0. Basic test with Mocha and Node assertion library](#0-basic-test-with-mocha-and-node-assertion-library)
    - [1. Combining descriptions](#1-combining-descriptions)
    - [2. Basic test using Chai assertion library](#2-basic-test-using-chai-assertion-library)
    - [3. Spies](#3-spies)
    - [4. Stubs](#4-stubs)
    - [5. Hooks](#5-hooks)
    - [6. Async tests with done](#6-async-tests-with-done)
    - [7. Skip](#7-skip)
    - [8. Basic Integration testing](#8-basic-integration-testing)
    - [9. Regex integration testing](#9-regex-integration-testing)
    - [10. Deep equality & Post integration testing](#10-deep-equality--post-integration-testing)


## Resources


## Project Description
This project focuses on unit testing in JavaScript using Mocha, Chai, and Sinon. It covers topics such as writing test suites, using different assertion libraries, handling async functions, and performing integration testing.

## Learning Objectives
By the end of this project, you should be able to:
- Use Mocha to write a test suite
- Use different assertion libraries (Node or Chai)
- Present long test suites effectively
- Use spies to track function calls
- Use stubs to replace function implementations
- Understand and use hooks in testing
- Write unit tests for async functions
- Perform integration testing with a small node server

## Requirements
- Ubuntu 18.04
- Node 12.x.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All files should end with a new line
- A README.md file is mandatory at the root of the project folder
- Code should use the .js extension
- Running tests with `npm run test *.test.js` should pass without any warnings or errors

## Tasks
### 0. Basic test with Mocha and Node assertion library
- Install Mocha using npm
- Set up a script in package.json to run Mocha using npm test
- Use the assert library
- Create a function named calculateNumber that accepts two arguments (numbers) a and b
- The function should round a and b and return their sum
- Write test cases for this function in a file named 0-calcul.test.js
- Use assert to run the test suite

### 1. Combining descriptions
- Upgrade the function created in the previous task (0-calcul.js)
- Add a new argument named type as the first argument of the function. type can be SUM, SUBTRACT, or DIVIDE (string)
- When type is SUM, round the two numbers, and add a and b
- When type is SUBTRACT, round the two numbers, and subtract b from a
- When type is DIVIDE, round the two numbers, and divide a by b. If the rounded value of b is equal to 0, return the string "Error"
- Write test cases for this function in a file named 1-calcul.test.js
- Use assert to run the test suite

### 2. Basic test using Chai assertion library
- Install Chai using npm
- Copy the code from 1-calcul.js to a new file named 2-calcul_chai.js
- Copy the code from 1-calcul.test.js to a new file named 2-calcul_chai.test.js
- Rewrite the test suite using expect from Chai

### 3. Spies
- Install Sinon using npm
- Create a new file named utils.js
- Create a new module named Utils
- Create a property named calculateNumber and paste the code from the previous task's function into it
- Export the Utils module
- Create a new file named 3-payment.js
- Create a new function named sendPaymentRequestToApi that takes two arguments: totalAmount and totalShipping
- The function calls the Utils.calculateNumber function with type SUM, totalAmount as a, totalShipping as b, and displays the message "The total is: <result of the sum>" in the console
- Create a new file named 3-payment.test.js and add a new suite named sendPaymentRequestToApi
- Use sinon.spy to verify that the math used for sendPaymentRequestToApi(100, 20) is the same as Utils.calculateNumber('SUM', 100, 20)

### 4. Stubs
- Create a new file named 4-payment.js and copy the code from 3-payment.js
- Create a new file named 4-payment.test.js and copy the code from 3-payment.test.js
- Stub the function Utils.calculateNumber to always return the number 10
- Verify that the stub is being called with type = SUM, a = 100, and b = 20
- Add a spy to verify that console.log is logging the correct message "The total is: 10"

### 5. Hooks
- Create a new file named 5-payment.js and copy the code from 4-payment.js
- Create a new file named 5-payment.test.js
- Inside the same describe, create 2 tests:
    - The first test will call sendPaymentRequestToAPI with 100 and 20:
        - Verify that the console is logging the string "The total is: 120"
        - Verify that the console is only called once
    - The second test will call sendPaymentRequestToAPI with 10 and 10:
        - Verify that the console is logging the string "The total is: 20"
        - Verify that the console is only called once
- Use beforeEach and afterEach hooks to complete this exercise

### 6. Async tests with done
- Create a new file named 6-payment_token.js
- Create a new function named getPaymentTokenFromAPI
- The function takes a boolean argument called success
- When success is true, it should return a resolved promise with the object {data: 'Successful response from the API'}
- Otherwise, the function does nothing
- Create a new file named 6-payment_token.test.js and write a test suite named getPaymentTokenFromAPI
- Test the result of getPaymentTokenFromAPI(true) using the done callback

### 7. Skip
- Use the file 7-skip.test.js provided
- Make the test suite pass without fixing or removing the failing test

### 8. Basic Integration testing
- Create a new folder named 8-api
- Copy the package.json file provided into the 8-api folder
- Create a new file named api.js in the 8-api folder
- Use Express to create an instance of the app
- Listen to port 7865 and log "API available on localhost port 7865" to the console when the express server is started
- For the route GET /, return the message "Welcome to the payment system"
- Create a new file named api.test.js in the 8-api folder
- Write test cases for the index page:
    - Correct status code?
    - Correct result?
    - Other?
- Make sure the test suite passes when the server is running

### 9. Regex integration testing
- Create a new folder named 9-api
- Copy the package.json, api.js, and api.test.js files from the previous task into the 9-api folder
- Modify the api.js file to add a new endpoint GET /cart/:id
- :id must be only a number (validation must be in the route definition)
- When accessed, the endpoint should return the message "Payment methods for cart :id"
- Modify the api.test.js file to add test cases for the cart page:
    - Correct status code when :id is a number?
    - Correct status code when :id is NOT a number (=> 404)?
    - etc.

### 10. Deep equality & Post integration testing
- Create a new folder named 10-api
- Copy the package.json, api.js, and api.test.js files from the previous task into the 10-api folder
- Modify the api.js file to add an endpoint GET /available_payments that returns an object with the following structure:
    ```
    {
        payment_methods: {
            credit_cards: true,
            paypal: false
        }
    }
    ```
- Modify the api.js file to add an endpoint POST /login that returns the message "Welcome :username" where :username is the value of the body variable userName
- Modify the api.test.js file to add test suites for the /login and /available_payments endpoints



## HappyCoding!
