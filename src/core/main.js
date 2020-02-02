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
  api(rootRoute,content){
    
    for(let i=0;i<content.length;i++){
      sysRoutes.push({
        url: rootRoute+"/"+content[i].url,
        get: content[i].get
      });
    }
  },
  get(url, action) {
    sysRoutes.push({
      url: url,
      get: action
    });
  },
  mapRoutes(reqUrl, req, res) {
    let mainFunction = ()=>{
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('Not found...\n')
    }
    for (let i = 0; i < sysRoutes.length; i++) {
      if (sysRoutes[i].url === reqUrl) {
        mainFunction = sysRoutes[i].get;
      }
    }
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
        response.writeHead(200, { "Content-Type": "text/plain" });
        action(request, response);
      })
      .listen(this.protocolValues.port);
  }
};
