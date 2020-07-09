// pages/control/oxygen/oxygen.js

const app = getApp()

Page({
  back: function () {
    var pages = getCurrentPages(); //获取当前页面栈
    console.log(pages);
    wx.navigateBack({
      delta: 1,
    })
  },
  drawProgress: function (step) {
    step = step/50;
    // 使用 wx.createContext 获取绘图上下文 context
    var ctx = wx.createCanvasContext('canvas');
    var width = wx.getSystemInfoSync().windowWidth;
    var arc = 400*width/750/2;//圆心坐标 400rpx是canvas大小
    var r =170*width/750;
    console.log(r)
    var gradiant = ctx.createLinearGradient(arc,0,arc,2*arc);
    gradiant.addColorStop("0",'green');
    gradiant.addColorStop("0.33",'yellow');
    gradiant.addColorStop("0.66",'orange');
    gradiant.addColorStop("1",'red');
    ctx.setLineWidth(40*width/750);
    ctx.setStrokeStyle(gradiant);
    ctx.setLineCap('round')
    ctx.beginPath();
    // 参数step 为绘制的圆环周长，从0到2为一周 。 -Math.PI / 2 将起始角设在12点钟位置 ，结束角 通过改变 step 的值确定
    ctx.arc(arc , arc, r, -Math.PI / 2, step * Math.PI - Math.PI / 2, false);
    ctx.stroke();
    ctx.draw()
  },
  /**
   * 页面的初始数据
   */
  data: {
    //获取全局变量 状态栏的top和bottom,用于将状态栏空出来
    titleBarTop: app.globalData.titleBar.top,
    titleBarBottom: app.globalData.titleBar.bottom,
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 氧气浓度为多少，参数就填多少，例如下为26%
    this.drawProgress(100)
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