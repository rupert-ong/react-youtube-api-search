

# React Youtube API Search App
A simple React application that searches and displays Youtube videos based on a search input. As seen on Modern React and Redux course by Stephen Grider.

**Enhancements to Original Project**
* Use ref to autofocus text search on component mount
* Add state property to keep track of current video in list menu
* Update Bootstrap version and refactor code

## Getting Started 

### Prerequisites

You will need the following installed on your system
* [Node and NPM](https://nodejs.org)
* [Git](https://git-scm.com/)

### Installation

Clone the repo and install the dependencies in the command line:
```
npm install
```
Rename `env-template.js` to `env.js` and add your Youtube API key the environment variable:
```javascript
const API_KEY = 'GET API KEY FROM CONSOLE.DEVELOPERS.GOOGLE.COM';
```
Then start the server:
```
npm run start
```