export default class Assets extends Phaser.GameObjects.Image{

    constructor(config){
        super(config.scene,config.x, config.y , config.key);
        this.scene = config.scene;
        this.scene.add.existing(this);
        this.init();
    }

    
    init(){
        //init assets
		this.tile = { scene:this.scene, x:0, y:0, key:"tile1" };
		this.cup  = { scene:this.scene, x:0, y:0, key:"cup"   };
    }

}