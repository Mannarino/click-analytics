export interface ipInfoVisit {
    country: string;
    city: string;
    region: string;
}
export interface UserData {
    country: string;
    city: string;
    region: string;
  }
  
  export   interface ClickData {
    count: number;
    timestamps: string[];
  }
  
  export   interface SessionData {
    userData: UserData;
    visits: string[];
    clicks: { [key: string]: ClickData };
  }
  
  export   interface SessionResponse {
    success: boolean;
    data: SessionData;
  }