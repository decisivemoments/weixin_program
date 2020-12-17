var hd=new Array(100000)
var choice1=new Array(100000)
var choice2=new Array(100000)
var N=1
hd[1]="你来到了一条分岔路前，左边是森林，右边是海岸，你选择前往："
choice1[1]="森林"
choice2[1]="海岸"
hd[2]="你遇到了一颗苹果树，上面的苹果好像很好吃，你选择："
choice1[2]="吃了再说！"
choice2[2]="先去别的地方看看吧"
hd[3]="你想起了美人鱼的传说，不知不觉就呆到了夜晚。在你准备离开的时候，你突然发现岸边的石头后面好像躺着一个人，难道是美人鱼？"
choice1[3]="过去看看"
choice2[3]="还是先打电话报警吧"
hd[4]="吃饱的你感觉玩累了，于是回家睡觉了，一天过去了"
hd[5]="你迷路了，而且花了很长时间都找不到食物和水，无法再忍受的你啃起了树皮，谁知道这棵树居然有毒。你挂了"
hd[6]="好吧我编不下去了，结局你自己想吧"
hd[7]="嗯，有事先找警察叔叔"
Page({
  data:{
    is_focus:1,
    N:1,
    choice1:choice1,
    choice2:choice2,
    hd:hd
  },
  choice1(){
    this.setData({
      N:this.data.N*2
    })
  },
  choice2(){
    this.setData({
      N:this.data.N*2+1
    })
  },
  choice3(){
     this.setData({
      N:(this.data.N-1)/2
    })
  },
choice4(){
  this.setData({
   N:this.data.N/2
 })}
});