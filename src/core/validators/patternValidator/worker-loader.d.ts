// This is needed if we want to use the lib worker-loader on Typescript 
// more info: https://webpack.js.org/loaders/worker-loader/#integrating-with-typescript
// It allows to use Worker but we need to prefix the path by worker-loader! (example 'worker-loader!./runRegex.worker')
// This is used inside safeRegexExecute.js,
declare module 'worker-loader!*' {
  class WebpackWorker extends Worker {
    constructor();
  }

  export default WebpackWorker;
}
