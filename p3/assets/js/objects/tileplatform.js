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
        console.log('assets aaax');

        //init assets
       var assets = new Assets({scene:this.scene,x:0,y:0});

		var tiles = new Array();
        var i = 0;
        var _h = 0;
		var _v = 0;
		const x_ad_hust = 40;
		const y_ad_hust = 40;
        const tile_size = 80;
        const tile_h = 10;
        const tile_v = 5;
        const tile_total = tile_v * tile_h;

        for(i=0;i<tile_total;i++){
                tiles[i] = new Tile(assets.tile);
                tiles[i].x += ((tile_size*(_h % tile_h))+x_ad_hust);
                tiles[i].y += ((tile_size*_v)+y_ad_hust);
                tiles[i].setScale(1);
                if(i % tile_h == tile_h-1){
                    _v += 1;
                    _h = 0;
                }else{
                    _h += 1;
                }
        }

        TweenMax.allTo(tiles,0.25,{delay:3,startAt:{alpha:1},alpha:0.75,yoyo:true,repeat:1},0.1);
    }

}