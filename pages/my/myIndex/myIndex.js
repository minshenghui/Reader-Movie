// pages/my/my.js
//获取应用实例
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo')
    },

    // 获取用户头像
    getUserInfo: function (e) {
        console.log(e)
        app.globalData.userInfo = e.detail.userInfo
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        })
    },

    // 复制 GitHub
    CopyLink(e) {
        wx.setClipboardData({
            data: e.currentTarget.dataset.link,
            success(res) {
                wx.showToast({
                    title: '已复制',
                    duration: 1000,
                })
            }
        })
    },

    // 版权信息
    copyRight: function () {
        wx.navigateTo({
            url: '/pages/my/copyRight/copyRight',
        })
    },

    systems: function () {
        wx.showModal({
            title: '提示',
            content: this.data.model + " &&\\n " + this.data.system,
            showCancel: false,
            success(res) {
                if (res.confirm) {
                    console.log('用户点击确定')
                } else if (res.cancel) {
                    console.log('用户点击取消')
                }
            }
        })
    },

    // 跳转到 logs
    logs: function () {
        wx.navigateTo({
            url: '/pages/my/mylogs/mylogs',
        })
    },

    

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var that = this;
        wx.getSystemInfo({
            success: function (res) {
                that.setData({
                    brand: res.brand,
                    model: res.model,
                    version: res.version,
                    system: res.system,
                    platform: res.platform,
                    screenWidth: res.screenWidth,
                    screenHeight: res.screenHeight,
                    pixelRatio: res.pixelRatio
                })
            },
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