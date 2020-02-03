let Core = require("./main").Core;

Core.init();

Core.get("/simpleGet", function(req, res) {
  res.end("Get\n");
});
Core.post("/simplePost", function(req, res) {
  res.end("Post\n");
});
Core.api("/api", [
  {
    url: "core",
    get: (req, res) => {
      res.end("Core\n");
    },
    post: (req, res) => {
      res.end("POST PICA\n");
    }
  },
  {
    url: "main",
    get: (req, res) => {
      res.end("Main\n");
    }
  }
]);

Core.start();
