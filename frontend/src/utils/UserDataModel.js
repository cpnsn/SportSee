export default class UserDataModel {
    constructor(userData, activityData, averageSessionsData, performanceData) {
      this.userInfos = userData.userInfos || {};
      this.todayScore = userData.todayScore || userData.score || 0;
      this.keyData = userData.keyData || {};
  
      this.activity = activityData.sessions || [];
      this.averageSessions = averageSessionsData.sessions || [];
      this.performance = {
        kind: performanceData.kind || {},
        data: performanceData.data || [],
      };
    }
  }
  