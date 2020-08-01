import ObjectPool = zs.laya.ObjectPool;
import EventId = zs.laya.game.EventId;
import SceneLogic from "./SceneLogic";
import DyqqShader from "../customShader/DyqqShader";
import ShaderTest from "../test/ShaderTest";

export default class GameLogic extends Laya.Script {
    
    constructor() {super()}
    
    onAwake() {
        console.log("5");
        Laya.stage.once(EventId.LAUNCH_COMPLETED, this, this.onSceneReady);
        Laya.stage.on(EventId.UI_VIEW_CLOSED, this, this.onViewClosed);
        Laya.stage.on(EventId.UI_VIEW_OPENED, this, this.onViewOpened);
    }

    onDestroy() {
        this.sceneLogic = null;
        Laya.stage.off(EventId.UI_VIEW_CLOSED, this, this.onViewClosed);
        Laya.stage.off(EventId.UI_VIEW_OPENED, this, this.onViewOpened);
    }

    private sceneLogic: SceneLogic = null;
    private onSceneReady(s: Laya.Scene3D) {
        console.log("1111");
		DyqqShader.initShader();
        ObjectPool.ClearCache();

        if (s) {
            this.sceneLogic = Laya.stage.addChildAt(s, 0).addComponent(SceneLogic);
        }
        else {
            Laya.stage.addComponent(ShaderTest);
        }
        zs.laya.game.UIService.hideLoading();
        Laya.stage.event(EventId.GAME_HOME);
        console.log("2222");
    }

    private onViewClosed(viewName: string) {
        console.log(`${viewName} closed`);
    }

    private onViewOpened(viewName: string) {
        console.log(`${viewName} opened`);
    }
}