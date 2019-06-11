export default class Tile extends Phaser.GameObjects.Image{

    constructor(config){
        super(config.scene,config.x, config.y , config.key);
        this.scene = config.scene;
        this.scene.add.existing(this);
        this.init();
        return this;
    };

    init(){
        
    };
   
}