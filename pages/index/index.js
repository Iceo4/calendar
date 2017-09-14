//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '/pages/calendar/calendar'
    })
  },
  onLoad: function () {
   
  }, 
  onShow: function () {
    let checkInDay = app.globalData.checkInDay,
      checkOutDay = app.globalData.checkOutDay;

    this.setData({
      checkInDay: checkInDay,
      checkOutDay: checkOutDay,
    })

    
  }
})
