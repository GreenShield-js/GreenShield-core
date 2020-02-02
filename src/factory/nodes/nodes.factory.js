exports.CORE_NODE  = {
  version: "",
  instanceOf: loader => {
    loader();
  },
  isRunning:false,
  warning:[]
};
exports.INIT_NODE = {
  host:"127.0.0.1",
  port:5695,
  methods:["GET","POST","PUT","DELETE"],
  rootRoute:"/",
}