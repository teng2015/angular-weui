### Angular Weui框架说明

> weuiToast 服务

+ 介绍：toast对象主要提供加载中和已完成的提示框【无用户交互】

	DEMO：[http://blog.lxstart.net/weui/templates/#toast](http://blog.lxstart.net/weui/templates/#toast)

+ 调用方法

```javascript
// 弹出成功提示框，1s消失（Promise）
$weuiToast.show({
	type: 'finish',
	delay: 1000
}).then(function() {
	console.log('finished');
});

// 显示加载中提示框
$weuiToast.show({
	type: 'loading',
	delay: 0	//不自动消失
});

// 移除提示框
$weuiToast.hide();
setTimeout(function() {
	$weuiToast.hide();
}, 2000);
```

+ 开发情况

基本完成服务化的编码，还需要优化性能

	* 移除toast和通过隐藏toast的智能判断

	* 组件化，提供自定义模板

> weuiDialog 服务

+ 介绍：dialog对象主要提供模态框（`alert`、`confirm`、`prompt`、`modal`）

+ 调用方法

```javascript

```

+ 开发情况