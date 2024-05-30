# 0x02-ES6_classes

## Resources
Read or watch:
- [Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [Metaprogramming](https://en.wikipedia.org/wiki/Metaprogramming)

## Learning Objectives
> How to define a Class
> How to add methods to a class
> Why and how to add a static method to a class
> How to extend a class from another
> Metaprogramming and symbols


## Setup
1. Install NodeJS 12.11.x
    - In your home directory, run the following commands:
      ```shell
      curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
      sudo bash nodesource_setup.sh
      sudo apt install nodejs -y
      nodejs -v
      npm -v
      ```
    - The output of `nodejs -v` should be `v12.11.1` and the output of `npm -v` should be `6.11.3`
2. Install Jest, Babel, and ESLint
    - In your project directory, run the following command:
      ```shell
      npm install
      ```

## Tasks
### 0. You used to attend a place like this at some point
Implement a class named `ClassRoom`:
- Prototype: `export default class ClassRoom`
- It should accept one attribute named `maxStudentsSize` (Number) and assigned to `_maxStudentsSize`

### 1. Let's make some classrooms
Import the `ClassRoom` class from `0-classroom.js`.
Implement a function named `initializeRooms`. It should return an array of 3 `ClassRoom` objects with the sizes 19, 20, and 34 (in this order).

### 2. A Course, Getters, and Setters
Implement a class named `HolbertonCourse`:
- Constructor attributes:
  - `name` (String)
  - `length` (Number)
  - `students` (array of Strings)
- Make sure to verify the type of attributes during object creation
- Each attribute must be stored in an “underscore” attribute version (ex: name is stored in `_name`)
- Implement a getter and setter for each attribute.

### 3. Methods, static methods, computed methods names..... MONEY
Implement a class named `Currency`:
- Constructor attributes:
  - `code` (String)
  - `name` (String)
- Each attribute must be stored in an “underscore” attribute version (ex: name is stored in `_name`)
- Implement a getter and setter for each attribute.
- Implement a method named `displayFullCurrency` that will return the attributes in the following format `name (code)`.

### 4. Pricing
Import the class `Currency` from `3-currency.js`.
Implement a class named `Pricing`:
- Constructor attributes:
  - `amount` (Number)
  - `currency` (Currency)
- Each attribute must be stored in an “underscore” attribute version (ex: name is stored in `_name`)
- Implement a getter and setter for each attribute.
- Implement a method named `displayFullPrice` that returns the attributes in the following format `amount currency_name (currency_code)`.
- Implement a static method named `convertPrice`. It should accept two arguments: `amount` (Number), `conversionRate` (Number). The function should return the amount multiplied by the conversion rate.

### 5. A Building
Implement a class named `Building`:
- Constructor attributes:
  - `sqft` (Number)
- Each attribute must be stored in an “underscore” attribute version (ex: name is stored in `_name`)
- Implement a getter for each attribute.
- Consider this class as an abstract class. And make sure that any class that extends from it should implement a method named `evacuationWarningMessage`.
- If a class that extends from it does not have a `evacuationWarningMessage` method, throw an error with the message `Class extending Building must override evacuationWarningMessage`.

### 6. Inheritance
Import `Building` from `5-building.js`.
Implement a class named `SkyHighBuilding` that extends from `Building`:
- Constructor attributes:
  - `sqft` (Number) (must be assigned to the parent class `Building`)
  - `floors` (Number)
- Each attribute must be stored in an “underscore” attribute version (ex: name is stored in `_name`)
- Implement a getter for each attribute.
- Override the method named `evacuationWarningMessage` and return the following string `Evacuate slowly the NUMBER_OF_FLOORS floors`.

### 7. Airport
Implement a class named `Airport`:
- Constructor attributes:
  - `name` (String)
  - `code` (String)
- Each attribute must be stored in an “underscore” attribute version (ex: name is stored in `_name`)
- The default string description of the class should return the airport code (example below).

### 8. Primitive - Holberton Class
Implement a class named `HolbertonClass`:
- Constructor attributes:
  - `size` (Number)
  - `location` (String)
- Each attribute must be stored in an “underscore” attribute version (ex: name is stored in `_name`)
- When the class is cast into a Number, it should return the size.
- When the class is cast into a String, it should return the location.

### 9. Hoisting
Fix the code in `9-hoisting.js` and make it work.

### 10. Vroom
Implement a class named `Car`:
- Constructor attributes:
  - `brand` (String)
  - `motor` (String)
  - `color` (String)
- Each attribute must be stored in an “underscore” attribute version (ex: name is stored in `_name`)
- Add a method named `cloneCar`. This method should return a new object of the class.
- Hint: Symbols in ES6



## HappyCoding!
