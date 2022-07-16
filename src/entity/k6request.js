module.exports = class K6Request{

    constructor(url,method,headers,body,params) {
        this.url = url;
        this.method = method,
        this.headers = headers;
        this.body = body;
        this.params = params;
      }
    
};