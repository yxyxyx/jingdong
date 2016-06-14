window.onload=function(){
	// 无缝轮播
     var lou=$(".teshu")[0];
     var imags=$("a",lou);
     var lins=$("li",lou);
     var zal=$(".zal")[0];
     var zar=$(".zar")[0];
     var num=0;
     var flag=true;  
     var index=0;
     var imagW=parseInt(getStyle(imags[0],"width"));
     //轮播
     var flag1=true;
     var t=setInterval(move,500);
     //鼠标移入移出
     lou.onmouseover=function(){
      clearInterval(t)
     }
     lou.onmouseout=function(){
      t=setInterval(move,500)
     }
     //点击跳转
     for(i=0;i<lins.length;i++){
     lins[i].index=i;
     lins[i].onclick=function(){
      for(i=0;i<lins.length;i++){
        lins[i].style.background="#f4f4f4";
      }
      lins[this.index].style.background="red";
      imags[this.index].style.left=imagW+"px";
        animate(imags[index],{left:-imagW},500);
        animate(imags[this.index],{left:0},500);
        index=num=this.index;
     }
   }
     //点击左右小爪
     zal.onclick=function(){
      move();
     }
     zar.onclick=function(){
      move();
     }
     
     
     //轮播
    
  function move(){
      if(!flag){
        return
      }
      flag=false;
      num++;
      if(num==imags.length){
        num=0;
      }
        imags[num].style.left=imagW+"px";
        animate(imags[index],{left:-imagW},500,function(){
          flag=true;
        });
        animate(imags[num],{left:0},500,function(){
          flag=true;
        });
          for(var i=0;i<imags.length;i++){
          lins[i].style.background="#f4f4f4";
         }
           index=num;
           lins[num].style.background="red";
       }
}