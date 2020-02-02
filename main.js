const Core = require("./src/core/main").Core

Core.init()
console.log(Core.protocolValues)
Core.setEndpointConfig({host:"0.0.0.0",port:1000})
console.log(Core.protocolValues)