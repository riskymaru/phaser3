import example1   from "../scenes/example1.js"
import preloader   from "../scenes/preloader.js"

export default{
	type:Phaser.AUTO,
	width:800,
	height:420,
	backgroundColor: 0x303030,
	pixelArt:false,
	physics:{
		default:'arcade',
		arcade:{
			gravity:{y:200},
			debug:false
		}
	},
	scene:[preloader,example1]
};
