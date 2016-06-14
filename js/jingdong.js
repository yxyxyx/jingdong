window.onload=function(){
  //选项卡
  var banner=document.getElementsByClassName("banner")[0];
  var lis=document.getElementsByClassName("zuo-item");
  var yin=document.getElementsByClassName("banzy");
  var item=document.getElementsByClassName("zuo-item");
  for(i=0;i<lis.length;i++){
    lis[i].index=i;
    lis[i].onmouseover=function(){
      for(var j=0;j<lis.length;j++){
         yin[j].style.display="none";
      }
      yin[this.index].style.display="block";
      item[this.index].style.background="#fff";
      item[this.index].style.color="#b61d1d";
    }
    lis[i].onmouseout=function(){
      for(var j=0;j<lis.length;j++){
        yin[this.index].style.display="none";
        item[this.index].style.background="";
        item[this.index].style.color="";
      }
    } 
  }

  var zclunbo=function(){
  var win=$(".banzh")[0];
	var imgs=$("a",win);
	var lis=$("li",win);
	var btn=$(".btn")[0];
	var btnl=$(".btnl")[0];
	var btnr=$(".btnr")[0];
	var num=0;
	var t=setInterval(move,2000);
	//点击事件
	for(var i=0;i<lis.length;i++){
		lis[i].index=i;
		lis[i].onclick=function(){
			num=this.index;
			for(var i=0;i<lis.length;i++){
				imgs[i].style.zIndex=0;
      	        lis[i].style.background="#ccc";
      	        // animate(imgs[i],{opacity:0},1000);
			}
			imgs[num].style.zIndex=3;
            lis[this.index].style.background="#658463";
            // animate(imgs[num],{opacity:1},1000);
		}
	}
	//点击抓手
	btnl.onclick=function(){
	    num--;
       if (num <0) {
           num = imgs.length-1;
       }
       for (var i = 0; i < imgs.length; i++) {
           imgs[i].style.zIndex=0;
           lis[i].style.background="#ccc";
       }
       imgs[num].style.zIndex=3;
       lis[num].style.background="#658463";
	}
	btnr.onclick=function(){
		move();
	}
    //移入移出
    win.onmouseover=function(){
        clearInterval(t);
        btnl.style.opacity=0.3;
        btnr.style.opacity=0.3;
   }
    win.onmouseout=function(){
    	t=setInterval(move,2000);
      btnl.style.opacity=0;
      btnr.style.opacity=0;
    }
    //轮播
	function move(){                 
      num++;
      if(num==imgs.length){
      	num=0;
      }
      for(var i=0;i<imgs.length;i++){
      	imgs[i].style.zIndex=0;
      	// animate(imgs[i],{opacity:0},1000);
      	lis[i].style.background="#ccc";
      }
      imgs[num].style.zIndex=3;
      // animate(imgs[num],{opacity:1},1000);
      lis[num].style.background="#658463";
	}
 }()
  //节点轮播
        var jiedian=function(){
        var win=$(".jrtjy")[0];
        var box=$(".box3")[0];
        var as=$("a",box);
        var len=as.length;
        var iW=parseInt(getStyle(as[0],"width"));
        var btkl=$(".btkl",win)[0];
        var btkr=$(".btkr",win)[0];
        box.style.left=len*iW+"px";
        var t=setInterval(moveal,2000);

        win.onmouseover=function(){
          clearInterval(t);
          btkl.style.opacity=0.4;
          btkr.style.opacity=0.4;
        }
        win.onmouseout=function(){
          t=setInterval(moveal,2000);
          btkl.style.opacity=0;
          btkr.style.opacity=0;
        }
        btkl.onclick=function(){
          moveal()
        }
        btkr.onclick=function(){
          movear()
        }
        function moveal(){
          animate(box,{left:-iW},function(){
            var first=getFirst(box);
            box.appendChild(first);
            box.style.left="0px";
          })
        }
        function movear(){
          animate(box,{left:iW},function(){
            var last=getLast(box);
            box.insertBefore(last,box.firstElementChild);
            box.style.left="0px";
          })
        }
     }()
     
     var lunbo=function(win){
     var imgs=win.firstElementChild.children;
     var lis=$("li",win);
     var zal=$(".zal",win)[0];
     var zar=$(".zar",win)[0];
     var num=0;
     var flag=true;  
     var index=0;
     var imgW=parseInt(getStyle(imgs[0],"width"));
     //轮播
     // var flag1=true;
     var t=setInterval(move1,2000);
     //鼠标移入移出
     win.onmouseover=function(){
      clearInterval(t);
      zal.style.opacity=0.4;
      zar.style.opacity=0.4;
     }
     win.onmouseout=function(){
      t=setInterval(move1,2000);
      zal.style.opacity=0;
      zar.style.opacity=0;
     }
   //   //点击跳转
     for(i=0;i<lis.length;i++){
     lis[i].index=i;
     lis[i].onclick=function(){
      for(i=0;i<lis.length;i++){
        lis[i].style.background="#f4f4f4";
      }
      lis[this.index].style.background="red";
      imgs[this.index].style.left=imgW+"px";
        animate(imgs[index],{left:-imgW},2000);
        animate(imgs[this.index],{left:0},2000);
        index=num=this.index;
     }
   }
   //   //点击左右小爪
     zal.onclick=function(){
      move1();
     }
     zar.onclick=function(){
      mover();
     }
     
     
     //轮播
    
    function move1(){
      if(!flag){
        return
      }
      flag=false;
      num--;
      if(num<0){
        num=imgs.length-1;
      }
        imgs[num].style.left=imgW+"px";
        animate(imgs[index],{left:-imgW},2000,function(){
          flag=true;
        });
        animate(imgs[num],{left:0},2000,function(){
          flag=true;
        });
          for(var i=0;i<imgs.length;i++){
          lis[i].style.background="#625351";
         }
           lis[num].style.background="#b6161f";
           index=num;
       }

       function mover(){
      if(!flag){
        return
      }
      flag=false;
      num++;
      if(num==imgs.length){
        num=0;
      }
        imgs[num].style.left=-imgW+"px";
        animate(imgs[index],{left:imgW},2000,function(){
          flag=true;
        });
        animate(imgs[num],{left:0},2000,function(){
          flag=true;
        });
          for(var i=0;i<imgs.length;i++){
          lis[i].style.background="#625351";
         }
           lis[num].style.background="#b6161f";
           index=num;
       }
   }

   //1楼轮播
   var lou1=$(".lou1yz3")[0];
   lunbo(lou1);
   //3楼轮播
   var lou3=$(".lou3yz1")[0];
   lunbo(lou3);
   // //4楼轮播
   var lou4=$(".lou4yz1")[0];
   lunbo(lou4);
   // //5楼轮播
   var lou5=$(".lou5yz1")[0];
   lunbo(lou5);
   // //6楼轮播
   var lou6=$(".lou6yz2")[0];
   lunbo(lou6);
   // //7楼轮播
   var lou7=$(".lou7yz2")[0];
   lunbo(lou7);
   // //8楼轮播
   var lou8=$(".lou8yz2")[0];
   lunbo(lou8);
   // //9楼轮播
   var lou9=$(".lou9yz2")[0];
   lunbo(lou9);
   // //10楼轮播
   var lou10=$(".tsyxxyzys")[0];
   lunbo(lou10);
   // //11楼轮播
   var lou11z=$(".fwx2s")[0];
   lunbo(lou11z);
   var lou11y=$(".fwx2s1")[0];
   lunbo(lou11y);

//返回顶部
var foce=document.getElementById('foce-6');
foce.onclick=function(){
  var obj=document.body.scrollTop?document.body:document.documentElement;  //解决兼容性问题
    animate(obj,{
    scrollTop:1 });
}
//楼层跳转
var cH=document.documentElement.clientHeight;
var floors=document.querySelectorAll('.floor');
var floorArr=[];
for(var i=0;i<floors.length;i++){
  floorArr.push(floors[i].offsetTop)
}
//点击跳转
var jump=document.querySelector('.jump');
var liss=jump.querySelectorAll('li');
var jH=jump.offsetHeight;
jump.style.Top=(cH-jH)/2+"px";
for(var i=0;i<liss.length;i++){
liss[i].index=i;
  var flag=true;
  liss[i].onclick=function(){
    flag=false;
    var obj=document.body.scrollTop?document.body:documentElement;
    animate(obj,{scrollTop:floors[this.index].offsetTop},function(){
      flag=true;
    })
    for(var i=0;i<liss.length;i++){
      liss[i].style.color="#625351";
      liss[this.index].style.color="#b6161f";
    }
  }
}
var flagD=true;

  window.onscroll=function(){
    if(flag){
      var obj=document.body.scrollTop?document.body:document.documentElement;
      var tops=obj.scrollTop;
      for(var i=0;i<floors.length;i++){
       if(tops+cH>floorArr[i]+100){
          for(var j=0;j<floors.length;j++){
            liss[j].style.color="#625351";
            }
          liss[i].style.color="#b6161f";
       }
    }
    if(tops>=1600){
     if(flagD){
       flagD=false;
       animate(jump,{opacity:1})
       animate(foce,{opacity:1});
     }
    }else{
     if(!flagD){
       flagD=true;
       animate(jump,{opacity:0})
       animate(foce,{opacity:0}); 
      }

    }
  }
}
//右下方轮播
var sulun=$('.sulun')[0];
var imatt=sulun.children;
var imattH=imatt[0].offsetHeight;
var time=setInterval(fn,2000);
function fn(){
    sulun.insertBefore(sulun.lastElementChild,sulun.firstElementChild);  
    sulun.style.top=-imattH+35+'px';
    animate(sulun,{top:35},Tween.Linear);
}      
}