
export default class preloader extends Phaser.Scene{

	constructor(){
		super({key:"preloader"});
	}

	preload(){
        this.load.image("cup",'assets/img/cup.png');
        this.load.image("tile1",'assets/img/tile1.png');

        this.checkProgress();
    }

	create(){
        //console.log(this)
    }
    
    checkProgress(){

        this.load.on('progress', function (value) {
            //console.log(value);
        });
                    
        this.load.on('fileprogress', function (file) {
            //console.log(file.src);
        });
        
        this.load.on('complete', function () {
            //console.log('complete',this);
            this.scene.start("example1");
        },this);

    }
};