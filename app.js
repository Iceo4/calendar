//app.js
import { getYMD, getTomorrowYMD } from './utils/util.js';
App({
  onLaunch: function () {
    // 展示本地存储能力
    
  },
  globalData: {
    checkInDay: getYMD(new Date()),
    checkOutDay: getTomorrowYMD(new Date()),
  }
})