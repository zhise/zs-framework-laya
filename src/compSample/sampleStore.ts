
import SdkService = zs.laya.SdkService;
import DeviceService = zs.laya.DeviceService;
import UIService = zs.laya.game.UIService;
import SampleEvent from "../define/SampleEvent";
import SkinData from "../data/SkinData";
import WebRequest from "../logic/WebRequest";
import EventId = zs.laya.game.EventId;

export default class sampleStore extends zs.laya.ui.ZhiSeView {

    /** @prop {name:goodsList,type:Node}*/
    public goodsList: Laya.List;
    /** @prop {name:capital,type:Node}*/
    public capital: Laya.Label;
    /** @prop {name:closeBtn,type:Node}*/
    public closeBtn: Laya.UIComponent;
    /** @prop {name:usingBtn,type:Node}*/
    public usingBtn: Laya.UIComponent;
    /** @prop {name:useGoodsBtn,type:Node}*/
    public useGoodsBtn: Laya.UIComponent;
    /** @prop {name:goldUnlockBtn,type:Node}*/
    public goldUnlockBtn: Laya.UIComponent;
    /** @prop {name:shareUnlockBtn,type:Node}*/
    public shareUnlockBtn: Laya.UIComponent;
    /** @prop {name:videoUnlockBtn,type:Node}*/
    public videoUnlockBtn: Laya.UIComponent;
    /** @prop {name:videoUnlockBtn2,type:Node}*/
    public videoUnlockBtn2: Laya.UIComponent;
    /** @prop {name:unlockGold,type:Node}*/
    public unlockGold: Laya.Label;
    /** @prop {name:unlockShareNum,type:Node}*/
    public unlockShareNum: Laya.Label;
    /** @prop {name:unlockVideoNum,type:Node}*/
    public unlockVideoNum: Laya.Label;
    /** @prop {name:unlockVideoNum2,type:Node}*/
    public unlockVideoNum2: Laya.Label;
    /** @prop {name:curItemImg,type:Node}*/
    public curItemImg: Laya.Image;

    private selectItemIdx: number = 0;
    private userCapital: number = 0;
    private curUseId: number = 0;
    private curSkinId: number = 0;
    private totalVideoNum: number = 0;
    
    constructor() { super(); }

    // onEnable() {
    //     super.onEnable();
    //     this.curSkinId = UserData.data.skinId;
    //     this.show(null, -1, UserData.data.gold, UserData.data.skinId, 0);
    //     this.closeBtn && (this.closeBtn.on(Laya.Event.CLICK, this, this.closeStore));
    //     Laya.stage.on(EventId.NET_XHR_RESPONSE, this, this.onNetXHRReponse);
    // }

    // onDisable() {
    //     this.closeBtn && (this.closeBtn.off(Laya.Event.CLICK, this, this.closeStore));
    //     if (this.curSkinId != UserData.data.skinId) {
    //         Laya.stage.event(SampleEvent.Sample_SKIN_UPDATE, UserData.data.skinId);
    //     }
    //     this.curSkinId = null;
    //     Laya.stage.off(EventId.NET_XHR_RESPONSE, this, this.onNetXHRReponse);
    //     super.onDisable();
    // }

    // private get SelectIdx() {
    //     return this.selectItemIdx;
    // }
    
    // private show(datas: any[], selectItemIdx: number, capital: number, curUseId: number, videoNum: number) {
    //     this.selectItemIdx = selectItemIdx ? selectItemIdx : 0;
    //     this.userCapital = capital ? capital : 0;
    //     this.curUseId = curUseId;
    //     this.totalVideoNum = videoNum;
    //     this.goodsList.selectEnable = true;
    //     this.goodsList.vScrollBarSkin = "";
    //     this.goodsList.selectHandler = Laya.Handler.create(this, this.onItemSelected, null, false);
    //     this.goodsList.renderHandler = Laya.Handler.create(this, this.onSkinItemRender, null, false);
    //     this.capital.text = this.userCapital.toString();
    //     if (this.useGoodsBtn) {
    //         this.useGoodsBtn.off(Laya.Event.CLICK, this, this.userItem);
    //         this.useGoodsBtn.on(Laya.Event.CLICK, this, this.userItem);
    //     }
    //     if (this.goldUnlockBtn) {
    //         this.goldUnlockBtn.off(Laya.Event.CLICK, this, this.unlockItemByGold);
    //         this.goldUnlockBtn.on(Laya.Event.CLICK, this, this.unlockItemByGold);
    //     }
    //     if (this.shareUnlockBtn) {
    //         this.shareUnlockBtn.off(Laya.Event.CLICK, this, this.unlockItemByShare);
    //         this.shareUnlockBtn.on(Laya.Event.CLICK, this, this.unlockItemByShare);
    //     }
    //     if (this.videoUnlockBtn) {
    //         this.videoUnlockBtn.off(Laya.Event.CLICK, this, this.unlockItemByVideo);
    //         this.videoUnlockBtn.on(Laya.Event.CLICK, this, this.unlockItemByVideo);
    //     }
    //     if (this.videoUnlockBtn2) {
    //         this.videoUnlockBtn2.off(Laya.Event.CLICK, this, this.unlockItemByVideo);
    //         this.videoUnlockBtn2.on(Laya.Event.CLICK, this, this.unlockItemByVideo);
    //     }
    //     this.goodsList.array = datas;
    //     this.onItemSelected(this.selectItemIdx);
    //     if (datas == null) {
    //         this.disableBtns();
    //         WebRequest.requestSkinList(UserData.data.userId);
    //     }
    // }

    // private enableBtns() {
    //     this.useGoodsBtn.mouseEnabled = true;
    //     this.goldUnlockBtn.mouseEnabled = true;
    //     this.shareUnlockBtn.mouseEnabled = true;
    //     this.videoUnlockBtn.mouseEnabled = true;
    //     this.videoUnlockBtn2.mouseEnabled = true;
    // }

    // private disableBtns() {
    //     this.useGoodsBtn.mouseEnabled = false;
    //     this.goldUnlockBtn.mouseEnabled = false;
    //     this.shareUnlockBtn.mouseEnabled = false;
    //     this.videoUnlockBtn.mouseEnabled = false;
    //     this.videoUnlockBtn2.mouseEnabled = false;
    // }

    // private closeStore() {

    // }

    // private onItemSelected(newIdx) {
    //     if (this.goodsList.array == null || this.goodsList.array.length == 0) {
    //         return ;
    //     }
    //     if (this.selectItemIdx >= 0) {
    //         var data = this.goodsList.getItem(this.selectItemIdx);
    //         data["update"] = !data["update"];
    //         this.goodsList.setItem(this.selectItemIdx, data);
    //     }
    //     this.selectItemIdx = newIdx;
    //     if (this.selectItemIdx >= 0) {
    //         var data = this.goodsList.getItem(this.selectItemIdx);
    //         data["update"] = !data["update"];
    //         this.goodsList.setItem(this.selectItemIdx, data);
    //     }
    //     var skinData = this.goodsList.array[newIdx];
    //     if (skinData == null) {
    //         this.usingBtn.visible = false;
    //         this.useGoodsBtn.visible = false;
    //         this.goldUnlockBtn.visible = false;
    //         this.shareUnlockBtn.visible = false;
    //         this.videoUnlockBtn.visible = false;
    //         this.videoUnlockBtn2.visible = false;
    //         this.curItemImg.skin = ""; 
    //         return ;
    //     }
        
    //     this.curItemImg.skin = "skinImg/" + zs.laya.MiscUtils.number2String2(skinData.car_id) + ".png";
    //     if (skinData.status == 1) {        
    //         this.usingBtn.visible = skinData.car_id == this.curUseId;   
    //         this.useGoodsBtn.visible = !this.usingBtn.visible;
    //         this.goldUnlockBtn.visible = false;
    //         this.shareUnlockBtn.visible = false;
    //         this.videoUnlockBtn.visible = false;
    //         this.videoUnlockBtn2.visible = false;
    //     }
    //     else if (skinData.buy_type == 2) {
    //         this.usingBtn.visible = false;
    //         this.useGoodsBtn.visible = false;
    //         this.goldUnlockBtn.visible = true;
    //         this.shareUnlockBtn.visible = false;
    //         this.videoUnlockBtn.visible = false;
    //         this.videoUnlockBtn2.visible = false;
    //         this.unlockGold.text = skinData.gold.toString();
    //     }
    //     else if (skinData.buy_type == 3) {
    //         this.usingBtn.visible = false;
    //         this.useGoodsBtn.visible = false;
    //         this.goldUnlockBtn.visible = false;
    //         this.shareUnlockBtn.visible = true;
    //         this.videoUnlockBtn.visible = false;
    //         this.videoUnlockBtn2.visible = false;
    //         this.unlockShareNum.text = "";//skinData.share_now + "/" + skinData.share_num;
    //     }
    //     else if (skinData.buy_type == 4) {
    //         this.usingBtn.visible = false;
    //         this.useGoodsBtn.visible = false;
    //         this.goldUnlockBtn.visible = false;
    //         this.shareUnlockBtn.visible = false;
    //         this.videoUnlockBtn.visible = true;
    //         this.videoUnlockBtn2.visible = false;
    //         this.unlockVideoNum.text = skinData.video_now + "/" + skinData.video_num;
    //     }
    //     else if (skinData.buy_type == 5) {
    //         this.usingBtn.visible = false;
    //         this.useGoodsBtn.visible = false;
    //         this.goldUnlockBtn.visible = false;
    //         this.shareUnlockBtn.visible = false;
    //         this.videoUnlockBtn.visible = false;
    //         this.videoUnlockBtn2.visible = true;
    //         this.unlockVideoNum2.text = this.totalVideoNum + "/" + skinData.video_num;
    //     }
    //     else {
    //         this.usingBtn.visible = false;
    //         this.useGoodsBtn.visible = false;
    //         this.goldUnlockBtn.visible = false;
    //         this.shareUnlockBtn.visible = false;
    //         this.videoUnlockBtn.visible = false;
    //         this.videoUnlockBtn2.visible = false;
    //     }
    // }

    // private onSkinItemRender(item: Laya.Clip, index: number) {
    //     var skinData = this.goodsList.array[index];
    //     var icon = item.getChildByName("icon") as Laya.Image;
    //     icon.skin = "icon/" + zs.laya.MiscUtils.number2String2(skinData.car_id) + ".png";
    //     var lockTag = item.getChildByName("lock") as Laya.Image;
    //     lockTag.visible = skinData.status == 0;
    //     var selectTag = item.getChildByName("select") as Laya.Image;
    //     selectTag.visible = skinData.car_id == this.curUseId;
    //     item.index = index == this.selectItemIdx ? 1 : 0;
    // }

    // private userItem() {
    //     var skinData = this.goodsList.array[this.selectItemIdx];
    //     this.disableBtns();
    //     WebRequest.requestSelectSkin(UserData.data.userId, skinData.car_id);
    // }

    // private unlockItemByGold() {
    //     var skinData = this.goodsList.array[this.selectItemIdx];
    //     if (skinData.gold > this.userCapital) {
    //         UIService.showToast("金币不足");
    //     }
    //     else {
    //         this.disableBtns();
    //         WebRequest.requestGetSkinByGold(UserData.data.userId, skinData.car_id);
    //     }
    // }

    // private unlockItemByShare() {
    //     this.disableBtns();
    //     var self = this;
    //     var skinData = this.goodsList.array[this.selectItemIdx];
    //     if (skinData.video_num > skinData.video_now) {
    //         Laya.stage.once(DeviceService.EVENT_ON_SHOW, null, (timeStamp)=>{
    //             if (Date.now() - timeStamp > 3000) {
    //                 WebRequest.requestGetSkinByShare(UserData.data.userId, skinData.car_id);
    //             }
    //             else {
    //                 UIService.showToast("分享失败");
    //                 self.enableBtns();
    //             }
    //         }, [Date.now()]);
    //         SdkService.openShare(zs.laya.game.ADConfig.zs_share_title, zs.laya.game.ADConfig.zs_share_image);
    //     }
    //     else {
    //         WebRequest.requestGetSkinByGold(UserData.data.userId, skinData.car_id);
    //     }
    // }

    // private unlockItemByVideo() {
    //     this.disableBtns();
    //     var skinData = this.goodsList.array[this.selectItemIdx];
    //     if (skinData.video_num > skinData.video_now) {
    //         SdkService.playVideo(Laya.Handler.create(null, ()=>{
    //             if (skinData.buy_type == 4) {
    //                 WebRequest.requestGetSkinByVideo(UserData.data.userId, skinData.car_id);
    //             }
    //             else {
    //                 WebService.updateVideoLog(2);
    //             }
    //         }),
    //         Laya.Handler.create(null, ()=>{
    //             this.enableBtns();
    //         }),
    //         Laya.Handler.create(null, ()=>{
    //             UIService.showToast("今日视频观看次数已用尽");
    //             this.enableBtns();
    //         }));
    //     }
    //     else {
    //         WebRequest.requestGetSkinByGold(UserData.data.userId, skinData.car_id);
    //     }
    // }

    // private onNetXHRReponse(result: number, api: string, params: string, response: any) {
    //     if (result != 1) {
    //         return ;
    //     }
    //     if (api == WebRequest.WEB_API_SKIN_LIST) {
    //         if (SkinData.skinList.length == 0) {
    //             SkinData.initSkinList(response.data);
    //             this.show(SkinData.skinList, 0, UserData.data.gold, UserData.data.skinId, response.data.video_num);
    //         }
    //         else {
    //             SkinData.initSkinList(response.data);
    //             this.show(SkinData.skinList, this.SelectIdx, UserData.data.gold, UserData.data.skinId, response.data.video_num);
    //         }
    //         this.enableBtns();
    //     }
    //     else if (api == WebRequest.WEB_API_SKIN_SELECT) {
    //         WebRequest.requestSkinList(UserData.data.userId);
    //         UserData.updateSkin(SkinData.skinList[this.SelectIdx].car_id);
    //     }
    //     else if (api == WebRequest.WEB_API_SKIN_GET_BY_GOLD) {      
    //         var skinData: SkinData = SkinData.skinList[this.SelectIdx];
    //         UserData.data.gold -= skinData.gold;
    //         WebRequest.requestSkinList(UserData.data.userId);
    //     }
    //     else if (api == WebRequest.WEB_API_SKIN_GET_BY_VIDEO_SHARE) {            
    //         var skinData: SkinData = SkinData.skinList[this.SelectIdx];
    //         if (skinData.buy_type == 3 && skinData.share_now + 1 >= skinData.share_num) {
    //             WebRequest.requestGetSkinByGold(UserData.data.userId, skinData.car_id);
    //         }
    //         else if (skinData.buy_type == 4 && skinData.video_now + 1 >= skinData.video_num) {
    //             WebRequest.requestGetSkinByGold(UserData.data.userId, skinData.car_id);
    //         }
    //         else if (skinData.buy_type == 5 && this.totalVideoNum + 1 >= skinData.video_num) {
    //             WebRequest.requestGetSkinByGold(UserData.data.userId, skinData.car_id);
    //         }
    //         else {
    //             WebRequest.requestSkinList(UserData.data.userId);
    //         }
    //     }
    // }
}