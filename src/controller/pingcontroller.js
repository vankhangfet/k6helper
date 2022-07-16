module.exports = class PingController{

    constructor(service) {
        this.service = service;
      }
    
      pong()
      {
        return this.service.pong();
      }
};