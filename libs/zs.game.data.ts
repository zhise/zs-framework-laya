declare module zs.game.data {
    
    interface UserId {
        user_id: string;
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
}