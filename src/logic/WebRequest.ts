import XHRUtils = zs.laya.XHRUtils;
import DeviceService = zs.laya.DeviceService;

declare interface LoginInfo {
    channel: string;
    identityId: string;
}
    
export default class WebRequest {

    public static readonly ZS_WEB_API = window["zsWebApi"];
    
    public static readonly WEB_API_SKIN_LIST: string = WebRequest.ZS_WEB_API + "store/index";
    public static readonly WEB_API_SKIN_GET_BY_GOLD: string = WebRequest.ZS_WEB_API + "store/buy";
    public static readonly WEB_API_SKIN_GET_BY_VIDEO_SHARE: string = WebRequest.ZS_WEB_API + "store/share_video";
    public static readonly WEB_API_SKIN_SELECT: string = WebRequest.ZS_WEB_API + "store/select_car";

    public static requestSkinList(userId) {
        XHRUtils.xhrPost(this.WEB_API_SKIN_LIST, {"user_id": userId, "timestamp": Date.now()});
        console.log(this.WEB_API_SKIN_LIST.substring(this.ZS_WEB_API.length));
    }

    public static requestSelectSkin(userId, skinId) {
        XHRUtils.xhrPost(this.WEB_API_SKIN_SELECT, {"user_id": userId, "timestamp": Date.now(), "car_id":skinId});
        console.log(this.WEB_API_SKIN_SELECT.substring(this.ZS_WEB_API.length));
    }

    public static requestGetSkinByGold(userId, skinId) {
        XHRUtils.xhrPost(this.WEB_API_SKIN_GET_BY_GOLD, {"user_id": userId, "timestamp": Date.now(), "car_id":skinId});
        console.log(this.WEB_API_SKIN_GET_BY_GOLD.substring(this.ZS_WEB_API.length));
    }

    public static requestGetSkinByShare(userId, skinId) {
        XHRUtils.xhrPost(this.WEB_API_SKIN_GET_BY_VIDEO_SHARE, {"user_id": userId, "timestamp": Date.now(), "car_id": skinId, "type": "share"});
        console.log(this.WEB_API_SKIN_GET_BY_VIDEO_SHARE.substring(this.ZS_WEB_API.length));
    }

    public static requestGetSkinByVideo(userId, skinId) {
        XHRUtils.xhrPost(this.WEB_API_SKIN_GET_BY_VIDEO_SHARE, {"user_id": userId, "timestamp": Date.now(), "car_id": skinId, "type": "video"});
        console.log(this.WEB_API_SKIN_GET_BY_VIDEO_SHARE.substring(this.ZS_WEB_API.length));
    }
}