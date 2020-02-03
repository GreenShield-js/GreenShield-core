const http = require("http");
let CORE_NODE = require("../factory/nodes/nodes.factory").CORE_NODE;
let INIT_NODE = require("../factory/nodes/nodes.factory").INIT_NODE;
let sysRoutes = require("../services/routes/route.service").routes;
exports.Core = {
  http: http,
  protocolValues: {},
  routes: sysRoutes,
  init() {
    this.protocolValues = INIT_NODE;
    return INIT_NODE;
  },
  setEndpointConfig(initNode) {
    let keys = Object.keys(initNode);
    keys.map(value => {
      if (this.protocolValues[value]) {
        this.protocolValues[value] = initNode[value];
      }
    });
  },
  api(rootRoute, content) {
    for (let i = 0; i < content.length; i++) {
      let keys = Object.keys(content[i]);
      for (let key = 0; key < keys.length; key++) {
        if (keys[key] === "get") {
          this.get(rootRoute + "/" + content[i].url, content[i].get);
        }
        if (keys[key] === "post") {
          this.post(rootRoute + "/" + content[i].url, content[i].post);
        }
      }
    }
    console.log(sysRoutes);
  },
  get(url, action) {
    sysRoutes.push({
      url: url,
      method: "GET",
      content: action
    });
  },
  post(url, action) {
    sysRoutes.push({
      url: url,
      method: "POST",
      content: action
    });
  },

  mapRoutes(reqUrl, req, res) {
    methodNotAllowed = (req, res) => {
      res.writeHead(405, { "Content-Type": "text/plain" });
      res.end("Method not allowed\n");
    };
    routeNotFound = (req, res) => {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Content not found\n");
    };
    mainFunction = routeNotFound;
    let acepted = false;
    sysRoutes.map(route => {
      if (route.url === reqUrl) {
        if (req.method === route.method) {
          acepted = true;
          mainFunction = route.content;
        } else if (acepted === false) {
          mainFunction = methodNotAllowed;
        }
      }
    });

    return mainFunction;
  },
  isCompactible() {
    return true;
  },
  generateNodes() {
    return CORE_NODE;
  },
  start() {
    let mapRoutes = this.mapRoutes;
    this.http
      .createServer(function(request, response) {
        action = mapRoutes(request.url, request, response);

        action(request, response);
      })
      .listen(this.protocolValues.port);
  }
};
