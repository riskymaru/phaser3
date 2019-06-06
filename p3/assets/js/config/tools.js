
//--------------------------------------------------------------------------
Phaser.Tap = function(p_obj, btn_event, self) {

    p_obj.setInteractive();
    
    if (btn_event.hasOwnProperty("onTap")) {
            p_obj.on('pointerdown', 
                function(){
                    btn_event['onTap']();
                }, 
            self);
    }

    if (btn_event.hasOwnProperty("onOut")) {
            p_obj.on('pointerout', 
                function(){
                    btn_event['onOut']();
                }, 
            self);
    }

    if (btn_event.hasOwnProperty("onOver")) {
            p_obj.on('pointerover', 
                function(){
                    btn_event['onOver']();
                }, 
            self);
    }

    if (btn_event.hasOwnProperty("onUp")) {
            p_obj.on('pointerup', 
                function(){
                    btn_event['onUp']();
                }, 
            self);
    }
}