import EventId = zs.laya.game.EventId;

export default class GamePlayUI extends Laya.Script {
    
    /** @prop {name:goldLabel,type:Node}*/
    public goldLabel:Laya.Label;
    /** @prop {name:otherLabel,type:Node}*/
    public otherLabel:Laya.Label;
    /** @prop {name:scoreLabel,type:Node}*/
    public scoreLabel:Laya.Label;
    
    constructor() { super(); }

    onEnable(): void {
        super.onEnable();
        //this.goldLabel.text = UserData.data.gold.toString();
        Laya.stage.event(EventId.GAME_START);
    }

    onDisable(): void {
        super.onDisable();
    }

    onClick() {
        Laya.stage.event(EventId.GAME_FAILED);
    }
}