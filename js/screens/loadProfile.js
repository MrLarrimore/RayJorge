game.LoadProfile = me.ScreenObject.extend({
	/**	
	 *  action to perform on state change
	 */
	onResetEvent: function() {	
		me.game.world.addChild(new me.Sprite(0, 0, me.loader.getImage('load-screen')), -10); // TODO
	
                console.log(game.data.exp + " load");
                document.getElementById("input").style.visibility = "visible";
                document.getElementById("load").style.visibility = "visible";
        
                me.input.unbindKey(me.input.KEY.B);
                me.input.unbindKey(me.input.KEY.Q);
                me.input.unbindKey(me.input.KEY.W);
                me.input.unbindKey(me.input.KEY.E);
                me.input.unbindKey(me.input.KEY.A);
                
                
                me.game.world.addChild(new (me.Renderable.extend({
                    init: function(){
                        this._super(me.Renderable, 'init', [10, 10, 300, 50]);
                        this.font = new me.Font("Arial", 26, "white");
                    },
                    
                    draw: function(renderer){
                        this.font.draw(renderer.getContext(), "ENTER YOUR USERNAME AND PASSWORD", this.pos.x, this.pos.y);
                    }
                    
                   
                           })));   
                           
                    
                    
                    },
=======
		me.game.world.addChild(new me.Sprite(0, 0, me.loader.getImage('load-screen')), -10); //TODO
	
              document.getElementById("input").style.visibility = "visible";
              document.getElementById("load").style.visibility = "visible";
        
        
        me.input.bindKey(me.input.KEY.F1, "F1");
        me.input.bindKey(me.input.KEY.F2, "F2");
        me.input.bindKey(me.input.KEY.F3, "F3");
        me.input.bindKey(me.input.KEY.F4, "F4");
        me.input.bindKey(me.input.KEY.F5, "F5");
        var exp1cost = ((game.data.exp1 + 1) + 10);
            
       me.game.world.addChild(new (me.Renderable.extend({
       init: function(){
           this._super(me.Renderable, 'init', [10, 10, 300, 50]);
      this.font = new me.Font ("Arial", 26, "white");
       },
       
       draw:function(renderer){
              this.font.draw(renderer.getContext(), "ENTER YOUR USERNAME AND PASSWORD", this.pos.x, this.pos.y);  
              
              
       }
       
       })));
           
            this.handler = me.event.subscribe(me.event.KEYDOWN, function(action, keyCode, edge){
                if(action === "F1"){
                    if(game.data.exp >= exp1cost){
                        game.data.exp1 += 1;
                        game.data.exp -= exp1cost;
                        me.state.change(me.state.PLAY);
                    }else{
                        console.log("not enough experience");
                    }
                }else if(action === "F2"){
                    
                }else if(action === "F3"){
                        
                }else if(action === "F4"){
                            
                }else if(action === "F5"){
                    me.state.change(me.state.PLAY);
                }
            });
            
        },
>>>>>>> 3f9f368e694b2a1e71da87f645525290cba4f018
	
	
	/**	
	 *  action to perform when leaving this screen (state change)
	 */
	onDestroyEvent: function() {
<<<<<<< HEAD
            document.getElementById("input").style.visibility = "hidden";
            document.getElementById("load").style.visibility = "hidden";
=======
        document.getElementById("input").style.visibility = "hidden";
        document.getElementById("load").style.visibility = "hidden";
>>>>>>> 3f9f368e694b2a1e71da87f645525290cba4f018
	}
});


