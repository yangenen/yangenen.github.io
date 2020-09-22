		layui.use('upload', function(){
			var upload = layui.upload;
			//营业执照
			var uploadInst = upload.render({
				elem: '#test1' //绑定元素
				,url: 'https://textxtt.tjyqx.cn/index/Image/uploads' //上传接口
				,done: function(res){
				  //上传完毕回调
				}
				,error: function(){
				  //请求异常回调
				}
			});
			//商户门头照片
			var uploadInst = upload.render({
				elem: '#test2' //绑定元素
				,url: 'https://textxtt.tjyqx.cn/index/Image/uploads' //上传接口
				,done: function(res){
				  //上传完毕回调
				}
				,error: function(){
				  //请求异常回调
				}
			});
			//收银台照片
			var uploadInst = upload.render({
				elem: '#test3' //绑定元素
				,url: 'https://textxtt.tjyqx.cn/index/Image/uploads' //上传接口
				,done: function(res){
				  //上传完毕回调
				}
				,error: function(){
				  //请求异常回调
				}
			});
			//实体产品照片
			var uploadInst = upload.render({
				elem: '#test4' //绑定元素
				,url: 'https://textxtt.tjyqx.cn/index/Image/uploads' //上传接口
				,done: function(res){
				  //上传完毕回调
				}
				,error: function(){
				  //请求异常回调
				}
			});
			//特殊行业许可证
			var uploadInst = upload.render({
				elem: '#test5' //绑定元素
				,url: 'https://textxtt.tjyqx.cn/index/Image/uploads' //上传接口
				,done: function(res){
				  //上传完毕回调
				}
				,error: function(){
				  //请求异常回调
				}
			});
			// 纸质协议
			var uploadInst = upload.render({
				elem: '#test6' //绑定元素
				,url: 'https://textxtt.tjyqx.cn/index/Image/uploads' //上传接口
				,done: function(res){
				  //上传完毕回调
				}
				,error: function(){
				  //请求异常回调
				}
			});
			var uploadInst = upload.render({
				elem: '#test7' //绑定元素
				,url: 'https://textxtt.tjyqx.cn/index/Image/uploads' //上传接口
				,done: function(res){
				  //上传完毕回调
				}
				,error: function(){
				  //请求异常回调
				}
			});
			var uploadInst = upload.render({
				elem: '#test8' //绑定元素
				,url: 'https://textxtt.tjyqx.cn/index/Image/uploads' //上传接口
				,done: function(res){
				  //上传完毕回调
				}
				,error: function(){
				  //请求异常回调
				}
			});
			var uploadInst = upload.render({
				elem: '#test9' //绑定元素
				,url: 'https://textxtt.tjyqx.cn/index/Image/uploads' //上传接口
				,done: function(res){
				  //上传完毕回调
				}
				,error: function(){
				  //请求异常回调
				}
			});
			//身份证正面
			var uploadInst = upload.render({
				elem: '#test10' //绑定元素
				,url: 'https://textxtt.tjyqx.cn/index/Image/uploads' //上传接口
				,done: function(res){
				  //上传完毕回调
				}
				,error: function(){
				  //请求异常回调
				}
			});
			//身份证国辉
			var uploadInst = upload.render({
				elem: '#test11' //绑定元素
				,url: 'https://textxtt.tjyqx.cn/index/Image/uploads' //上传接口
				,done: function(res){
				  //上传完毕回调
				}
				,error: function(){
				  //请求异常回调
				}
			});
			//银行卡
			var uploadInst = upload.render({
				elem: '#test12' //绑定元素
				,url: 'https://textxtt.tjyqx.cn/index/Image/uploads' //上传接口
				,done: function(res){
				  //上传完毕回调
				}
				,error: function(){
				  //请求异常回调
				}
			});
			//对公账户
			var uploadInst = upload.render({
				elem: '#test13' //绑定元素
				,url: 'https://textxtt.tjyqx.cn/index/Image/uploads' //上传接口
				,done: function(res){
				  //上传完毕回调
				}
				,error: function(){
				  //请求异常回调
				}
			});
			// ——————————————————————————————————————
			//被授权人身份证照片
			var uploadInst = upload.render({
				elem: '#test14' //绑定元素
				,url: 'https://textxtt.tjyqx.cn/index/Image/uploads' //上传接口
				,done: function(res){
				  //上传完毕回调
				}
				,error: function(){
				  //请求异常回调
				}
			});
			var uploadInst = upload.render({
				elem: '#test15' //绑定元素
				,url: 'https://textxtt.tjyqx.cn/index/Image/uploads' //上传接口
				,done: function(res){
				  //上传完毕回调
				}
				,error: function(){
				  //请求异常回调
				}
			});
			//被授权人银行卡照片
			var uploadInst = upload.render({
				elem: '#test16' //绑定元素
				,url: 'https://textxtt.tjyqx.cn/index/Image/uploads' //上传接口
				,done: function(res){
				  //上传完毕回调
				}
				,error: function(){
				  //请求异常回调
				}
			});
			//授权委托书
			var uploadInst = upload.render({
				elem: '#test17' //绑定元素
				,url: 'https://textxtt.tjyqx.cn/index/Image/uploads' //上传接口
				,done: function(res){
				  //上传完毕回调
				}
				,error: function(){
				  //请求异常回调
				}
			});
		});
		// 日历1
		layui.use('laydate', function(){
			var laydate = layui.laydate;
			//证件开始时间
			laydate.render({
			elem: '#time1' //指定元素
			});
			//证件结束时间
			laydate.render({
			elem: '#time2' //指定元素
			});
		});
		// 日历2
		layui.use('laydate', function(){
			var laydate = layui.laydate;
			//证件开始时间
			laydate.render({
			elem: '#time3' //指定元素
			});
			//证件结束时间
			laydate.render({
			elem: '#time4' //指定元素
			});
		});
		// TAB切换
		layui.use('element', function(){
			var element = layui.element;
		});
