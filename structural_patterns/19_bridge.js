class SimpleRemoteControl{
    constructor(ac){
      this.ac = ac;
  
      this.on = function() {
          this.ac.on();
      };
  
      this.off = function() {
          this.ac.off();
      };
  
      this.setTemparature = function(temp) {
          this.ac.setTemparature(temp);
      };
    }
  };
  
  class InvertorRemoteControl {
    constructor(ac){
      this.ac = ac;
    
  
      this.heat = function() {
        this.ac.heatOn();
      };
  
      this.cold= function() {
        this.ac.coldOn();
      };
  
      this.on = function() {
          this.ac.on();
      };
  
      this.off = function() {
          this.ac.off();
      };
  
      this.setTemparature = function(temp) {
          this.ac.setTemparature(temp);
      };
    }
  };
  
  
  class SimpleAC {
    constructor(){
      this.on = function() {
          console.log('Simple AC is on');
      };
  
      this.off = function() {
          console.log('Simple AC is off');
      };
  
      this.setTemparature = function(temp) {
          console.log(`Simple AC's cooling is set to ` + temp + ' degrees');
      };
    }
  }
  
  class InvertorAC {
    constructor(){
      this.setting = "cool"
  
      this.on = function() {
          console.log('Invertor AC is on');
      };
  
      this.off = function() {
          console.log('Invertor AC is off');
      };
  
      this.heatOn = function(){
        this.setting = "heat"
        console.log("Invertor AC's heating is on")
      };
  
      this.coldOn = function() {
        this.setting = "cool"
        console.log("Invertor AC's cooling is on")
      };
  
      this.setTemparature = function(temp) {
        if(this.setting == "cool"){
          console.log(`Invertor AC's cooling is set to ` + temp + ' degrees');
        }
        if(this.setting == "heat"){
           console.log(`Invertor AC's heating is set to ` + temp + ' degrees');
        }
          
      };
    }
  }
  
  const simpleAC = new SimpleAC()
  const invertorAC = new InvertorAC()
  
  const simpleRemote = new SimpleRemoteControl(simpleAC)
  const invertorRemote = new InvertorRemoteControl(invertorAC)
  
  simpleRemote.on()
  simpleRemote.setTemparature(16)
  simpleRemote.off()
  
  invertorRemote.on()
  invertorRemote.heat()
  invertorRemote.setTemparature(22)
  invertorRemote.off()