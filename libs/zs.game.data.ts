declare module zs.game.data {
    
    interface UserId {
        userId: string;
        gold: number;
        goods: any;
        goods_ids: any;
    }
    
    interface UserInfo {
        max_score: any;
        gold: any;
    }
    
    interface LevelData {
        game_id: any;
    }

    interface AuthorizeData {
        nickName: string;
        avatarUrl: string;
        gender: any; // 性别 0：未知、1：男、2：女
    }

    interface RankData {
        user_id: number;
        avatar: string;
        nickname: string;
        max_checkpoints: number;
        rank: number;
    }
    
    interface GameSetting {
    
    }    
    
    interface GameStartResponse {

    }

    interface GameEndResponse {
        
    }

    interface GoodsData {
        goods_id: number; // 1,
        goods_name: string; // "初始",
        goods_type: number; // "无",
        buy_type: number; // 1,
        gold: number; // 0,
        video_num: number; // 0,
        type: string; // "默认",
        status: number; // 1,
        video_now: number; // 0
    }
    
    interface StoreConfig {
        storeType: number;
        catalogue: any;
    }
}