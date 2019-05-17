import TilePlatform from "../objects/tileplatform.js";
import Tile from "../objects/tile.js";

export default class example1 extends Phaser.Scene{

	constructor(){
		super({key:"example1"});
	}
	
	create(){
		var pf = new TilePlatform({scene:this,x:0,y:0});
	}
};