window.onload=function(){
	// 基础部分的数据操作 逻辑操作
// ---------------------------------------------------------------------
	//javascript特定用途部分------  必须能做到的事

	// 能表达页面中的任何元素
	// (所有的页面中的对象都定义在window这个对象中)

	// 选取页面中的元素
	// var el=document.getElementById('test');
	// var els=document.getElementsByClassName('xiao');
	// els现在是一个类数组
	// console.log(el);
	// console.log(els);
	// el.style.width='100px';
	// 若出现con't read property 'style' of null----页面中没有el---->test

	// 获取元素的信息
	// 以及对元素进行操作
	// 和浏览器配合通过对元素的属性进行操作改变元素的样式
	// var ccc={
	// 	style:{border:null,width:100};
	// }
	// ccc.style.border='1px solid red';
	// el.style.border='2px solid red';


	// var setInterVal(a,1000);
	// 这个函数接受两个参数,第一个参数是回调函数,第二个参数是时间
	// 这个函数的功能是 每隔s就自动帮我们调用一次传入的回调函数




// ----------------------------------------------1----------------------------------------------------------

	// var els=document.getElementsByClassName('xiao');
	// var colors=['red','green','blue','cyan','orange'];	
	// var weiyi=[[-650,-200,0],[-300,-100,5],[0,0,10],[300,-100,5],[650,-200,0]];
	// var lunbo =function(){
	// 	for(var i=0;i<els.length;i++){
	// 	 	els[i].style.backgroundColor=colors[i];
	// 		// 并不是所有对象都有style这个属性 (这里的els)
	// 		// 和浏览器配合检测用户行为  ( 事件 )
	// 		els[i].style.zIndex=weiyi[i][2];
	// 	 	els[i].style.webkitTransform='translate3d('+ weiyi[i][0] +'px ,0, '+ weiyi[i][1] +'px)';
	// 	}
	// 	weiyi.push(weiyi.shift());	
	// }
	// setInterval(lunbo,2000);//程序=数据结构+算法---上面的var可以只保留一个,用','隔开

// --------------------------------------------------------------------------------------------------




// -------------------------------------------2-----------------------

	var els=document.getElementsByClassName('xiao');
	// var colors=['red','green','blue','cyan','orange'];	
	var data=[
		{translateX:'-650px',translateZ:'-200px'},
		{translateX:'-300px',translateZ:'-100px'},
		{translateX:'0px',   translateZ:'0px' },
		{translateX:'300px', translateZ:'-100px'},
		{translateX:'650px', translateZ:'-200px'}
	];
	var lunfn=function(){
		for(var i=0;i<els.length;i++){
			// els[i].style.zIndex=data[i].zIndex;
			// els[i].style.backgroundColor=colors[i];
			els[i].style.webkitTransform='translate3d('+data[i].translateX+',0,'+data[i].translateZ+')';
		}
		data.unshift(data.pop());
	}
	var lunbo=setInterval(lunfn,3000);

	for(var i=0;i<els.length;i++){
		els[i].index=i;
		els[i].onclick=function(){
			clearInterval(lunbo);
			var index=this.index;
			for (var ii = 0; ii < els.length; ii++) {
				console.log(els[ii].style.webkitTransform);
				if(els[ii].style.webkitTransform=='translate3d(0px, 0px, 0px)'){
					for(var j=0;j<els.length+index-ii;j++){
						lunfn();
					}
					
				}
				
			};

		lunbo=setInterval(lunfn,3000);
		}
	}

// ------------------------------------------------------------------














	// var cc=document.getElementsByClassName('xiao');
	// cc[0].style.width='400px';

	// cc[0].innerHTML='我是1';//改div中的字

	// cc[0].onclick=function(){
	// 	alert(this.innerHTML);//this-----c[0]
	// }

// -----------------------------------------------------------------


// var el=document.getElementById();
// var els=document.getElementsByClassName();

// el.style.marginLeft='';
// el.innerHTML='XX';

// setInterval(fn,1000);
// el.onclick=function(){alert(this.innerHTML);}


























// 思路:
	// 选取元素的api
	// document.getElementById('')会得到单个元素
	// document.getElementsByClassName('')会得到一个元素的集合,类似数组
	// 给元素添加样式的api
	// xx.style.webkitTransform='translate3d(0,0,0)';
	// var data=[{x:-300,z:-400},
	// 		  {x:-200,z:-200},
	// 		  {x:0,z:0},
	// 		  {x:200,z:-200},
	// 		  {x:300,z:-400}
	// 		];
	// 利用document.getElementByClassName 得到所有的面
	// 写一个函数给所有的面按照顺序 分别添加数组中的样式
	// 面有5个 数组中正好也是5个数据
	// 函数每调用一次 就把数组中最后一个元素放到数组的开头
	// 再次调用函数 就会看到前面的样式发生变化
	// 设置成每个2秒调用该函数,就会自动轮播起来
















}