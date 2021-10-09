const app = getApp()
var numarr1=[0,0,0,0,0,0];
Page({
  data: {
    one_img:'../../image/6.png',
    two_img: '../../image/6.png',
    three_img: '../../image/6.png',
    four_img: '../../image/6.png',
    five_img: '../../image/6.png',
    six_img: '../../image/6.png',
    flag:true,
    timer:null,
    msg:'摇一摇',
    msg2:'返回',
    total:0,
    txt:'开始你的回合吧',

    arr:[
      '../../image/1.png',
      '../../image/2.png',
      '../../image/3.png',
      '../../image/4.png',
      '../../image/5.png',
      '../../image/6.png',
    ]
  },
  enter1:function(event){
    let obj = this;
    if(obj.data.flag==true){
       obj.data.timer = setInterval(function () {
        let one = Math.floor(Math.random() * 6);
        let two = Math.floor(Math.random() * 6);
        let three = Math.floor(Math.random() * 6);
        let four = Math.floor(Math.random() * 6);
        let five = Math.floor(Math.random() * 6);
        let six = Math.floor(Math.random() * 6);
        obj.setData({
          one_img: obj.data.arr[one],
          two_img: obj.data.arr[two],
          three_img: obj.data.arr[three],
          four_img: obj.data.arr[four],
          five_img: obj.data.arr[five],
          six_img: obj.data.arr[six],
          flag:false,
          msg:'停止',
          txt:'',
          numarr2:[one,two,three,four,five,six],
        })
      }, 50);

    }else{
      clearInterval(obj.data.timer);
      obj.setData({
           msg:'摇一摇',
           flag:true,
      })
      for(var i=0;i<6;i++){
        numarr1[obj.data.numarr2[i]]=numarr1[obj.data.numarr2[i]]+1;
      }
      
      }
  },
  enter2:function(event){
    wx.navigateTo({
      url:'/pages/home/home',
    })
  }
  
})
  
