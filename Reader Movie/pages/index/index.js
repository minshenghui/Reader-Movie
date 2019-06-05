var app = getApp();

Page({

    /**
     * 页面的初始数据
     */
    data: {
        swiperIndex: 0 //这里不写第一次启动展示的时候会有问题
    },
    bindchange(e) {
        this.setData({
            swiperIndex: e.detail.current
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var timeSite = app.globalData.timeApi + 'Movie/MovieComingNew.api?locationId=290';
        this.getMovieData(timeSite)
    },

    getMovieData: function(movieSite) {
        var that = this;
        wx.request({
            url: movieSite,
            method: 'Get',
            header:{
                'Content-Type': 'xml'
            },
            success: function(res) {
                console.log(res.data)
                that.getMovieList(res.data)
            }
        })
    },

    getMovieList: function(timeMovie) {
        var movieList = [];
        for (var mid in timeMovie.moviecomings) {
            var movie = timeMovie.moviecomings[mid];
            var title = movie.title;
            if (title.length > 8) {
                title = title.substring(0, 8) + '...'
            }
            var actors = movie.actor1 + ' && ' + movie.actor2;
            if (actors === ' && ') {
                actors = '未知'
            }
            if (actors.length > 12) {
                actors = actors.substring(0, 12) + '...'
            }
            var director = movie.director;
            if (director == '') {
                director = '未知'
            }
            var temp = {
                title: title,
                imgUrl: movie.image,
                average: movie.ratingFinal,
                director: director,
                imgVideoUrl: movie.videos,
                releaseDate: movie.releaseDate,
                actors: actors
            }
            movieList.push(temp);
            this.setData({
                movieList: movieList
            })
        }
    }
    ,

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