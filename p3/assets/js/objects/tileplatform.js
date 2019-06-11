import Assets from "../assets.js";
import Tile from "../objects/tile.js";

export default class TilePlatform extends Phaser.GameObjects.Image{

    constructor(config){
        super(config.scene,config.x, config.y , config.key);
        this.scene = config.scene;
        this.scene.add.existing(this);
        this.init();
    }

    
    init(){

        //init assets
        var assets = new Assets({scene:this.scene,x:0,y:0});
		var tiles = new Array();
        var i = 0;
        var _h = 0;
		var _v = 0;
        var tile_grid = [[0],[0],[0],[0],[0]];

		const x_ad_hust = 40;
		const y_ad_hust = 40;
        const tile_size = 80;
        const tile_h = 9;
        const tile_v = 5;
        const tile_total = tile_v * tile_h;

              

        for(i=0;i<tile_total;i++){
                tiles[i] = new Tile(assets.tile);
                tiles[i].x += ((tile_size*(_h % tile_h))+x_ad_hust);
                tiles[i].y += ((tile_size*_v)+y_ad_hust);
                tiles[i].setScale(1);
                tiles[i]._id = i;
                tiles[i].setInteractive();
                tiles[i].input.enabled = false;
      
                if(i % tile_h == tile_h-1){
                    tile_grid[_v][_h] = tiles[i]
                    _v += 1;
                    _h = 0;
                }else{
                    tile_grid[_v][_h] = tiles[i]
                    _h += 1;
                }
        }

        
        this.tile_h = tile_h
        this.tile_v = tile_v
        this.tiles = tiles;
        this.tile_total = tile_total;
        this._target = null;


        this.addTileAction();
    };


    reset_tiles(){
        var i = 0;
        var tile_total = this.tile_total;

        for(i=0;i<tile_total;i++){
             this.tiles[i].tint = 0xffffff;
             this.tiles[i].input.enabled = false;
         }
    }

    addTileAction(){
        var i = 0;

        TweenMax.allTo(this.tiles,0.25,{delay:3,startAt:{alpha:1},alpha:0.75,yoyo:true,repeat:1},0.1);

        for(i=0; i<this.tile_total; i++){
            this.defaultTilesAction( this.tiles[i] );
        };

        this.reset_tiles();
    }

    defaultTilesAction( _obj){

        const self = this;

            Phaser.Tap(_obj,
                {"onTap":function(){
                    console.log("k",self._target)
                    if(self._target != null){
                        console.log("defaultTilesAction");
                        self.reset_tiles();
                        self._target.location_id = _obj._id
                        TweenMax.to(self._target,0.25,{x:_obj.x,y:_obj.y});
                    }
                }},
            self);
    };

    checkArea(selected_unit){

        if(selected_unit.location_id % this.tile_h > 0){
            this.tiles[selected_unit.location_id - 1].tint = 0xffccaa;
            this.tiles[selected_unit.location_id - 1].input.enabled = true;

            if((selected_unit.location_id-1) % this.tile_h > 0 ){
                this.tiles[selected_unit.location_id - 2].tint = 0xffccaa;
                this.tiles[selected_unit.location_id - 2].input.enabled = true;
            }
        }

        //--------------------------------------------------------------------------

        console.log("hh",(selected_unit.location_id) % this.tile_h)
        if((selected_unit.location_id) % this.tile_h >= 0 && 
           (selected_unit.location_id) % this.tile_h < this.tile_h-1)
        {
            this.tiles[selected_unit.location_id + 1].tint = 0xffccaa;
            this.tiles[selected_unit.location_id + 1].input.enabled = true;

            if((selected_unit.location_id) % this.tile_h < this.tile_h - 2 ){
                this.tiles[selected_unit.location_id + 2].tint = 0xffccaa;
                this.tiles[selected_unit.location_id + 2].input.enabled = true;
            }
        }

        //--------------------------------------------------------------------------

        if(selected_unit.location_id - this.tile_h >= 0 ){
            this.tiles[selected_unit.location_id - this.tile_h].tint = 0xffccaa;
            this.tiles[selected_unit.location_id - this.tile_h].input.enabled = true;
        }

        //--------------------------------------------------------------------------

        if(selected_unit.location_id + this.tile_h < this.tile_total ){
            this.tiles[selected_unit.location_id + this.tile_h].tint = 0xffccaa;
            this.tiles[selected_unit.location_id + this.tile_h].input.enabled = true;
        }
    }

    add_path_finder(){
        //--------------------------------------------------------------------------

        //--------------------------------------------------------------------------

        /*var easystar = new EasyStar.js();

            var grid = [
                        [0,0,1,0,0,0,0,1,0,0],
                        [0,0,1,0,0,0,0,1,0,0],
                        [0,0,1,0,0,0,0,1,0,0],
                        [0,0,1,0,0,0,0,1,0,0],
                        [0,0,0,0,0,0,0,0,0,0]
                       ];

                easystar.setGrid(grid);

                easystar.setAcceptableTiles([0]);

                easystar.findPath(0, 1, 3, 0, function( path ) {
                    console.log(path);
                    if (path === null) {
                        //alert("Path was not found.");
                    } else {
                        //alert("Path was found. The first Point is " + path[0].x + " " + path[0].y);
                    }
            });*/
    }
}
