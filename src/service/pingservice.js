module.exports = class PingService{

    constructor() {
    
      }
    
      pong()
      {
        // Time started
        //console.time("ping service");
        console.log("Ping service");
        let message = {message:"pong"}
        // Printing total execution time
        //console.timeLog("pingTime");
        return message;
      }
};