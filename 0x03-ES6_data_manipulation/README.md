# Playing with Data manipulation

## Resources

- [Array]()
- [Typed Array]()
- [Set Data Structure]()
- [Map Data Structure]()
- [WeakMap]()

## Learning Objectives

- How to use map, filter, and reduce on arrays
- Typed arrays
- The Set, Map, and Weak link data structures


## Setup

### Install NodeJS 12.11.x

(in your home directory):
``curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh sudo bash nodesource_setup.sh sudo apt install nodejs -y``


Check NodeJS and npm versions:
``$ nodejs -v v12.11.1 $ npm -v 6.11.3``


### Install Jest, Babel, and ESLint

In your project directory, install Jest, Babel, and ESLint by using the supplied `package.json` and run `npm install`.

## Configuration files

Add the following files to your project directory:
- `package.json`For more tasks and detailed instructions, refer to the respective files in the project directory.For more tasks and detailed instructions, refer to the respective files in the project directory.
- `babel.config.js`
- `.eslintrc.js`

Don’t forget to run `$ npm install` when you have the `package.json`

## Tasks

### 0. Basic list of objects

Create a function named `getListStudents` that returns an array of objects. Each object should have three attributes: `id` (Number), `firstName` (String), and `location` (String).

Example output:
[ { id: 1, firstName: 'Guillaume', location: 'San Francisco' }, { id: 2, firstName: 'James', location: 'Columbia' }, { id: 5, firstName: 'Serena', location: 'San Francisco' } ]

