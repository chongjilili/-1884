// pages/fcategory.js
var app = getApp();
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
    this.catid = options.cat_id;
    var name = options.name;
    var that = this;
    wx.request({
      url: app.d.ceshiUrl + '/Api/Category/getNextCatogeryByCatid',
      method: 'post',
      data: {
        cat_id: this.catid,
        name : name
      },
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        //--init data 
        var status = res.data.status;
        if (status == 1) {
          var list = res.data.list;
          var catList = res.data.catList;
          that.setData({
            types: list,
            typeTree: catList,
          });
        } else {
          wx.showToast({
            title: res.data.err,
            duration: 2000,
          });
        }
        that.setData({
          currType: 4
        });
        //console.log(list)

      },
      error: function (e) {
        wx.showToast({
          title: '网络异常！',
          duration: 2000,
        });
      },

    });
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

  },

  navtap:function(e){
    console.log(e);
    var catid = e.target.dataset.catid;
    var name = e.target.dataset.name;
    wx.navigateTo({
      url: '../listdetail/listdetail?cat_id=' + catid+'&name='+name
    })

  }









})