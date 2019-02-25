// pages/post/post.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var post_data = [
      {
        image: "/images/avatar.jpg",
        time: "Feb 24 2019",
        title: "长沙怎么还不出太阳1",
        article: "长沙已经快下了一个月的雨了，听说要下到 3 月底去了，我滴个神啊，洗的衣服都干不了，我该怎么办啊！",
        data: "66"
      }, {
        image: "/images/avatar.jpg",
        time: "Feb 24 2019",
        title: "长沙怎么还不出太阳2",
        article: "长沙已经快下了一个月的雨了，听说要下到 3 月底去了，我滴个神啊，洗的衣服都干不了，我该怎么办啊！",
        data: "66"
      }, {
        image: "/images/avatar.jpg",
        time: "Feb 24 2019",
        title: "长沙怎么还不出太阳3",
        article: "长沙已经快下了一个月的雨了，听说要下到 3 月底去了，我滴个神啊，洗的衣服都干不了，我该怎么办啊！",
        data: "66"
      }
    ]
    this.setData({
      post_key:post_data
    })
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