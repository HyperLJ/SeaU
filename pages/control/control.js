// pages/control/control.js

const app=getApp();

Page({
  jumpToTem:function(){
    wx.navigateTo({
      url: 'temperature/temperature'
    })
  },
  jumpToOxy:function(){
    wx.navigateTo({
      url: 'oxygen/oxygen'
    })
  },
  jumpToPH:function(){
    wx.navigateTo({
      url: 'ph/ph'
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    titleBarTop: app.globalData.titleBar.top,
    titleBarBottom: app.globalData.titleBar.bottom,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})