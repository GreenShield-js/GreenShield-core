let Core = require("./main").Core

Core.init();

Core.get("/simpleGet", function(req, res) {
  res.end("Get\n");
});

Core.api("/api", [
  {
    url: "core",
    get: (req, res) =>{
      res.end("Core\n");
    }
  },
  {
    url: "main",
    get: (req, res) =>{
      res.end("Main\n");
    }
  }
]);

Core.start();
