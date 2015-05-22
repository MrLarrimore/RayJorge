game.GameTimerManager = Object.extend({
   init: function(x, y, settings){
       this.now = new Date().getTime();
       this.lastCreep = new Date().getTime();
       this.paused = false;
       this.alwaysUpdate = true;
   },
   update: function (){
       this.now = new Date().getTime(); 
       this.goldTimerCheck();
       this.creepTimerCheck();
   
       return true;
   },
   goldTimerCheck:function(){
       if(Math.round(this.now/1000)%20 ===0 && (this.now - this.lastCreep >= 1000)){
           game.data.gold += (game.data.exp1 + 10);
           console.log("Current gold: " + game.data.gold);
       }
   }
});