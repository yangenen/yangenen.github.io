		// 证件时间
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
		layui.use('upload', function(){
			var upload = layui.upload;
			//身份证头像
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
			//身份证国辉
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
			//手持身份证
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
			//银行卡照片
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
			//商户经营门头照片
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
			//商户收银台照片
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
			//商户经营实体产品照片
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
			//特殊行业许可证
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
			// 协议签名照片
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
		});
