[![N|Solid](https://avatars3.githubusercontent.com/u/60478234?s=64&v=4)](https://nodesource.com/products/nsolid)
# GreenShield Core 0.0.3
GreenShield Core is a API framework to build fast and reliables APIs with Node.js, with a simple syntax.

### pros:
  - Easy to read
  - Open source Code
  - Faster than other frameworks

### Tech
Tech Used on the project
* [Javascript] - Programing language used
* [npm] - package manager
* [node.js] - evented I/O for the backend


### Installation

Dillinger requires [Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ npm install --save GScore
```
## How to use
### Standalone requisitions
a simple endpoint for standalone requisition is pretty easy to build and start coding inside, you just have to create a init point on your code and declare your route after it.
```javascript 
const Core = require("GScore").Core;
Core.init();
Core.get("/alone/get", function(req, res) {
  res.end("Get");
});
Core.post("/alone/post", function(req, res) {
  res.end("Post");
});
Core.start();

```
### Api structuring routes
If you want to build a API, with the GreenShield framework you can code it like a list with a root endpoint. 
```javascript 
const Core = require("GScore").Core;
Core.init();
Core.api("/api", [
  {
    url: "core",
    get: (req, res) => {
      res.end("GET API ROUTE");
    },
    post: (req, res) => {
      res.end("POST API ROUTE");
    }
  },
  {
    url: "main",
    get: (req, res) => {
      res.end("ANOTHER GET API ROUTE");
    }
  }
]);
Core.start();
```
In this example we create 2 routes, "/api/core" and "/api/main".

# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue,
email, or any other method with the owners of this repository before making a change. 

Please note we have a code of conduct, please follow it in all your interactions with the project.

## Pull Request Process

1. Ensure any install or build dependencies are removed before the end of the layer when doing a 
   build.
2. Update the README.md with details of changes to the interface, this includes new environment 
   variables, exposed ports, useful file locations and container parameters.
3. Increase the version numbers in any examples files and the README.md to the new version that this
   Pull Request would represent. The versioning scheme we use is [SemVer](http://semver.org/).
4. You may merge the Pull Request in once you have the sign-off of two other developers, or if you 
   do not have permission to do that, you may request the second reviewer to merge it for you.

