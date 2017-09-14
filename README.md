# calendar
小程序  日历组件 
可以预示 可预订天数，显示节假日

// pages/calendar/calendar.js
const app = getApp();
let dayscount = 30; //预设天数

Page({

  /**
   * 页面的初始数据
   */
	/*festivaltag也可以请求数据得到*/
        
  
  data: {
    checkInDay: '',
    checkOutDay: '',
    festivaltag: {   	
      "2017/1/1": "元旦",
      "2017/2/14": "情人节",
      "2017/3/8": "妇女节",
      "2017/5/1": "劳动节",
      "2017/6/1": "儿童节",
      "2017/10/1": "国庆节",
      "2017/12/24": "平安夜",
      "2017/12/25": "圣诞"
    }

  },

