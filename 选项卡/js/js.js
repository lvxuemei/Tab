window.onload=function(){
(function(){{
    var oLis=document.getElementById("nav").getElementsByTagName("li");//获取选项卡nav里的li
    var oDls=document.getElementById("main").getElementsByTagName("dl");//获取选项卡里的每个块dl
    var oImg=document.getElementsByTagName("img");//获取整个网页的图片
    var oLeft=document.getElementById("left");//左箭头
    var oRight=document.getElementById("right");//右箭头
    var timer=null,n=0,b=0;//timer控制setInterval,n存储this.index值,b存的是图片的下标。
    
    
    function play(){//play控制的是选项卡当中的li,首先遍历一遍所有li，并给新增属性index赋值,然后给所有li样式清空，之后再给当前li样式
    for(var j=0;j<oLis.length;j++){
        oLis[j].index=j;
        oLis[j].onclick=function(){
            for(var i=0;i<oLis.length;i++){
                oLis[i].className="";
                oDls[i].className="";
            }
            oLis[this.index].className="on";
     oDls[this.index].className="on"; 
     n=this.index;//用来存储当前index的值 (用来看当前显示的是第几块，便于后来对图片下标的控制)
     b=n*3;//存储当前显示的块对应的开始图片的下标。
        }
    }
    }
    
    function fz(){
        for(var a=0;a<15;a++){//遍历所有图片下标并给所有图片都不显示
            oImg[a].className="";
         }
         oImg[b].className="pic";//当前块对应的起始图片显示
    }
    
    function lb(){
        
       fz();//同上
        //console.log(b);
        b++;//图片下标依次递增
        if(b==n*3+3){//每个块的图片有三张，如果图片下标大于第三张 就从新赋值成第一个图片的下标
            b=n*3;
        }
    }
    
    
        oLeft.onclick=oRight.onclick=function(){
         if(this==oLeft){//左箭头当点击的时候图片下标b递减
          b--;
          if(b<n*3){//如果下标小于当前块对应的最初图片下标就从最后图片往前数
              b=n*3+2
          }
          fz();
        }
        else{
            b++;//点击右箭头图片递增，下标大于最后的图片就从头再来。
            if(b==n*3+3){
                b=n*3;
            }
            fz();
        }
    }
    play();
    setInterval(lb,1000);
    
    

}})();
}