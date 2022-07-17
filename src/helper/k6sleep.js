module.exports = class K6Sleep{

    constructor(val) {
        this.val = val;
      }

      generator(){
        return `sleep(${this.val})`;
      }
};