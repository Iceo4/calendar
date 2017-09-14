// pages/calendar/calendar.js
const app = getApp();
let dayscount = 30;

Page({

  /**
   * 页面的初始数据
   */
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (dayscount == 0) {
      wx.showModal({
        title: '警告',
        showCancel: false,
        content: '商家不可预订',
        success: function (res) {
          if (res.confirm) {
            wx.navigateBack();
          }
        }
      })
    } else {
      wx.setNavigationBarTitle({
        title: '请选择入住日期'
      })
      intDate(this);
    }


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },
  chooseDay(e) {
    let checkDay = e.currentTarget.dataset.checkDay;
    let checkInDay = this.data.checkInDay,
      checkOutDay = this.data.checkOutDay;
    if (checkInDay == '') {
      checkInDay = checkDay;
      wx.setNavigationBarTitle({
        title: '请选择退房日期'
      })
    } else if (checkInDay != '' && checkOutDay == '') {
      let turn = new Date(checkInDay) >= new Date(checkDay);
      if (turn) {
        checkInDay = checkDay
      } else {
        checkOutDay = checkDay;
      }
    }
    this.setData({ checkInDay, checkOutDay });
    if (checkInDay != '' && checkOutDay != '') {
      var livingDays = new Date(checkOutDay) - new Date(checkInDay);
      livingDays = livingDays / 24 / 60 / 60 / 1000;

      wx.showModal({
        title: '确认入住和离开时间',
        content: checkInDay + '--' + checkOutDay,
        success: (res) => {
          if (res.confirm) {
            app.globalData.checkInDay = checkInDay;
            app.globalData.checkOutDay = checkOutDay;
            app.globalData.livingDays = livingDays;
            wx.navigateBack();
          } else if (res.cancel) {
            this.setData({
              checkInDay: '',
              checkOutDay: ''
            })
          }
        }
      })
    }
  }
});

function intDate(self) {
  let nowDate = new Date(),
    nowYear = nowDate.getFullYear(),
    nowMonth = nowDate.getMonth(),
    today = nowDate.getDate();
  let endDate = new Date(nowYear, nowMonth, today + dayscount),
    endYM = new Date(endDate.getFullYear(), endDate.getMonth());
  let dates = [];
  for (let i = nowMonth; new Date(nowYear, i) <= endYM; i++) {
    let item = [];
    let monthDays = new Date(nowYear, i + 1, 0).getDate(); //获取该月天数  +1
    for (let j = 1; j <= monthDays; j++) {
      let _year = new Date(nowYear, i).getFullYear(),
        _month = new Date(nowYear, i).getMonth() + 1; //获取该月月份 +1
      let day = _year + '/' + _month + '/' + j;
      item.push(day.toString());
    }
    // fillDay(item);
    dates.push(item);
  }
  let startDay = `${nowYear}/${nowMonth + 1}/${today}`,
    endDay = `${endDate.getFullYear()}/${endDate.getMonth() + 1}/${endDate.getDate()}`;
  self.setData({ dates, startDay, endDay })
}