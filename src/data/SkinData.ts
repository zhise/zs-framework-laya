
export default class SkinData {
    public car_id: number; // 1,
    public car_name: string; // "初始",
    public car_des: string; // "无",
    public buy_type: number; // 1,
    public gold: number; // 0,
    public share_num: number; // 0,
    public video_num: number; // 0,
    public type: string; // "默认",
    public status: number; // 1,
    public share_now: number; // 0,
    public video_now: number; // 0
    public store_version: number; // 1 正式环境, 2 开发环境

    public static skinList: SkinData[] = [];
    public static totalVideo: number = 0;

    public static initSkinList(webResponse) {
        this.skinList = webResponse.list;
        this.totalVideo = Number(webResponse.video_num);
        if (zs.laya.game.ADConfig.isPublicVersion()) {
            this.skinList = this.skinList.filter((skinData: SkinData)=>{
                return skinData.store_version == 1;
            });
        }
        else {
            this.skinList = this.skinList.filter((skinData: SkinData)=>{
                return skinData.store_version == 2 || skinData.store_version == 1;
            });
        }
    }
}