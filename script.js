// 定义changePage函数
var pointPageNum = null;
function changePage(pageNum) {
	// 获取所有页面元素和按钮元素
	var pages = document.getElementsByClassName("page");
	var buttons = document.getElementsByTagName("button");

	// 先将所有页面元素隐藏
	for (var i = 0; i < pages.length; i++) {
		pages[i].style.display = "none";
	}

	// 然后将对应页面元素显示出来
	document.getElementById("page" + pageNum).style.display = "block";

	// 将所有按钮恢复原来的颜色
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].classList.remove("active"); //先去除之前的样式
	}

	// 将当前按钮变为蓝色
	if(pageNum == "2.1" || pageNum == "2.2") {
		pointPageNum = 2;
	} else {
		pointPageNum = pageNum;
	}
	document.getElementById("button" + pointPageNum).classList.add("active");
}


function changeLibraryPage(pageNum) {
	// 获取所有页面元素和按钮元素
	var pages = document.getElementsByClassName("library");
	var buttons = document.getElementsByTagName("lib_button");

	// 先将所有页面元素隐藏
	for (var i = 0; i < pages.length; i++) {
		pages[i].style.display = "none";
	}

	// 然后将对应页面元素显示出来
	document.getElementById("library" + pageNum).style.display = "block";

	// 将所有按钮恢复原来的颜色
	for (let i = 0; i < buttons.length; i++) {
		buttons[i].style["background-color"] = "white"; //先去除之前的样式
		buttons[i].style["color"] = "black";
	}

	// 将当前按钮变为蓝色
	document.getElementById("lib_button" + pageNum).style["background-color"] = "skyblue";
	document.getElementById("lib_button" + pageNum).style["color"] = "white";
}

// 页面加载完成后执行一些操作
window.onload = function() {
	// 页面加载完成后默认显示第一页
	changePage(1);
}