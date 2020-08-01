export default class TestEgg extends Laya.Script{
    onAwake(){
        super.onAwake();
        console.log("==========显示金蛋==========");
        
        zs.laya.game.UIService.showKnockEggView();
    }
}