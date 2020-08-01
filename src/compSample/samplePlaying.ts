import SampleEvent from "../define/SampleEvent";
import SampleRes from "../define/SampleRes";
import EventId = zs.laya.game.EventId;

export default class SamplePlaying extends zs.laya.ui.ZhiSeView {
    
    /** @prop {name:goldLabel,type:Node}*/
    public goldLabel:Laya.Label;
    /** @prop {name:otherLabel,type:Node}*/
    public otherLabel:Laya.Label;
    /** @prop {name:scoreLabel,type:Node}*/
    public scoreLabel:Laya.Label;
    
    constructor() { super(); }

    private scoreTip: Laya.Prefab = null;
    private scoreTip1: Laya.Prefab = null;

    onEnable(): void {
        super.onEnable();
        //this.goldLabel.text = UserData.data.gold.toString();
        Laya.stage.event(EventId.GAME_START);
    }

    onDisable(): void {
        this.scoreTip = null;
        super.onDisable();
    }

    onStart(): void {        
        Laya.loader.load("prefab/scoreTip.prefab", Laya.Handler.create(this, this.onScoreTipReady), null, Laya.Loader.PREFAB);
        Laya.loader.load("prefab/scoreTip1.prefab", Laya.Handler.create(this, this.onScoreTip1Ready), null, Laya.Loader.PREFAB);
    }

    onClick() {
        Laya.stage.event(EventId.GAME_WIN);
    }
    
    private onPopScoreTip(tipPos: Laya.Vector3, perScore: number, type: number) {     

        if (type == 0) {
        
            if (this.scoreTip == null) {
                return ;
            }

            var tip = Laya.Pool.getItemByCreateFun("scoreTip", this.scoreTip.create, this.scoreTip) as Laya.Label;
            this.owner.addChild(tip);
            tip.text = "+" + perScore;
            tip.x = tipPos.x;
            tip.y = tipPos.y;
            Laya.Tween.to(tip, {y:tipPos.y-50}, 1000, Laya.Ease.elasticOut, Laya.Handler.create(null, ()=>{
                tip.removeSelf();
                Laya.Pool.recover("scoreTip", tip);
            }));
        }
        else if (type == 1) {
        
            if (this.scoreTip1 == null) {
                return ;
            }

            var tip = Laya.Pool.getItemByCreateFun("scoreTip1", this.scoreTip1.create, this.scoreTip1) as Laya.Label;
            this.owner.addChild(tip);
            tip.text = "x" + perScore;
            tip.x = tipPos.x;
            tip.y = tipPos.y;
            tip.scaleX = 1;
            tip.scaleY = 1;
            Laya.Tween.to(tip, {y:tipPos.y-50, scaleX:1.1, scaleY:1.1}, 1000, Laya.Ease.elasticOut, Laya.Handler.create(null, ()=>{
                tip.removeSelf();
                Laya.Pool.recover("scoreTip1", tip);
            }));
        }
    }

    private onScoreTipReady(scoreTip: Laya.Prefab) {
        this.scoreTip = scoreTip;
    }

    private onScoreTip1Ready(scoreTip: Laya.Prefab) {
        this.scoreTip1 = scoreTip;
    }
}