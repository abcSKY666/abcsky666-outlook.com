// 定义changePage函数
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
	document.getElementById("button" + pageNum).classList.add("active");
}

// 页面加载完成后执行一些操作
window.onload = function() {
	// 页面加载完成后默认显示第一页
	changePage(1);
}
