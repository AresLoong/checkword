//随机数
		function random(min, max) {
			return parseInt(Math.random() * (max - min + 1)) + min;
		}
		//不重复的数组
		function randomArr() {
			var arr = [];
			while (arr.length < 5) {
				var temp = random(0, 4);
				//去重
				if (arr.indexOf(temp) == -1) {
					arr.push(temp);
				}
			}
			return arr;
		}
		//刷新
		function fresh() {
			//中间字 变化
			var textIndex = random(0, 4);
			colorIndex = random(0, 4);
			textDiv.innerHTML = textArr[textIndex];
			textDiv.style.color = colorArr[colorIndex];
			//获取乱序下标数组(分别用两个变量,分别取出来了5个数)
			var textRandoms = randomArr();
			var colorRandoms = randomArr();
			//		alert(textRandoms);
			for (i = 0; i < bottomDivs.length; i++) {
				////			获取数组中的保存的乱序下标
				//			var tempTextI = textRandoms[i];
				////			通过乱序下标 获取文本
				//			var tempText = textArr[tempTextI];
				////			赋值给div
				//			bottomDivs[i].innerHTML = tempText;
				//给bottomDivs[i]这个数组中,获取了textArr数组中的字的顺序
				bottomDivs[i].innerHTML = textArr[textRandoms[i]];
				bottomDivs[i].style.color = colorArr[colorRandoms[i]];
				//保存乱序下标,用于进行比较
				bottomDivs[i].index = textRandoms[i];
			}
		}
		//游戏点击事件
		function clickRoll() {
			for (var i = 0; i < bottomDivs.length; i++) {
				bottomDivs[i].onclick = function() {
					//1.判断
					//2.正确后刷新
					clearInterval(timer);
					timer = setInterval(function() {
						daoJiShi--;
						if (daoJiShi > -1) {
							timeDiv.innerHTML = "倒计时:" + daoJiShi;
						} else {
							//				clearInterval(timer);
							alert("你赢了,你获得了:" + a + "分");
							fresh();
							a = 0;
							daoJiShi = 10;
							timeDiv.innerHTML = "倒计时:" + daoJiShi;
							scoreDiv.innerHTML = "分数:" + a;
							clearInterval(timer);
						}
					}, 1000);
					if (this.index == colorIndex) {
						fresh();
						scoreDiv.innerHTML = "分数:" + ++a;
					} else {
						alert("你输了,你获得了:" + a + "分");
						fresh();
						a = 0;
						daoJiShi = 10;
						timeDiv.innerHTML = "倒计时:" + daoJiShi;
						scoreDiv.innerHTML = "分数:" + a;
						clearInterval(timer);
					}
				}
			}
			fresh();
		}
		//变化的核心 获得内容不重复的乱序数组(数组中为下标值)
		var textDiv = document.querySelector(".text");
		var bottomDivs = document.querySelectorAll(".bottomText");
		//获取时间
		var timeDiv = document.querySelector(".time");
		//获取分数
		var scoreDiv = document.querySelector(".score");
		var textArr = ["红", "绿", "蓝", "黄", "黑"];
		var colorArr = ["red", "green", "blue", "yellow", "black"];
		//将colorIndex变成全局变量
		var colorIndex = 0;
		var t = 10;
		var timer = null;
		var daoJiShi = 10;
		var a = 0;
		//加载游戏,进行游戏,刷新游戏
		clickRoll();