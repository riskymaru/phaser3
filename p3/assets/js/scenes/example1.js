import TilePlatform from "../objects/tileplatform.js";
import Tile from "../objects/tile.js";
import FX from "../com/fx.js";
import Assets from "../assets.js";

export default class example1 extends Phaser.Scene{

	constructor(config){
		super({key:"example1"});
	};
	
	create(){

		const assets = new Assets({scene:this,x:0,y:0});

		const platform = new TilePlatform({scene:this,x:0,y:0});
			 
		const general1 = new Tile(assets.tile);

		const general2 = new Tile(assets.tile);

		var   target_move = null;

			  //export platform
			  platform.alpha = 0.25
			  //console.log(platform);

			  this.platform = platform

			  //generate general
              general1.tint = 0xff6666;
              general1.location_id = 20
              general1.x = platform.tiles[general1.location_id].x
              general1.y = platform.tiles[general1.location_id].y
              general1.setScale(1);
              this.general1 = general1

              general2.tint = 0x5555cc;
              general2.location_id = 29
              general2.x = platform.tiles[general2.location_id].x
              general2.y = platform.tiles[general2.location_id].y
              general2.setScale(1);
              this.general2 = general2

              //add target
              this.target_move = target_move;

              //add control
              this.addControl();
	};

	addControl(){
        const self = this;
        var i = 0;

            Phaser.Tap(this.general1,
                {"onTap":function(){
                    //console.log("general1");
                    self.target_move = self.general1;
                }},
            this);

            Phaser.Tap(this.general2,
                {"onTap":function(){
                    //console.log("general2");
                    self.target_move = self.general2;
                }},
            this);

            for(i=0;i<50;i++){
                self.defaultTilesAction( self.platform.tiles[i] );
            };
    };

    defaultTilesAction(_obj){
        const self = this;

            Phaser.Tap(_obj,
                {"onTap":function(){
                	if(self.target_move != null){
                    	TweenMax.to(self.target_move,0.25,{x:_obj.x,y:_obj.y});
                    }
                }},
            self);
    };

    checkArea(area_id){
    	var area = 90
    }

};