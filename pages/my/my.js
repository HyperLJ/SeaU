// pages/my/my.js
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    //获取全局变量 状态栏的top和bottom,用于将状态栏空出来
    titleBarTop : app.globalData.titleBar.top,
    titleBarBottom : app.globalData.titleBar.bottom
  },

  exitLogin:function(e){
    getApp().globalData.hasUserInfo = false,
    getApp().globalData.userInfo = null
    wx.navigateTo({
      url: '../startup/startup',
    })
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