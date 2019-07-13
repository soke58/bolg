var DEMO = (function(win,$){
	itemReg = /\$\w+[.]?\w+\$/gi,
	detailReg = /\$\w+[.]?\w+[.]?\w+\$/gi;
	String.prototype.temp = function(reg, obj) {
	    return this.replace(reg, function(matchs) {
	        var returns = '',
	        getStr = matchs.replace(/\$/g, ""),
	        subArr = getStr.split('.');
	        len = subArr.length;
	        if(len == 1){ 
	        	returns = obj[getStr];
	        }else if(len > 1){ 
	        	returns = obj[subArr[0]];
	        	for(var i=1; i<len; i++){
		        	returns = returns[subArr[i]];
	        	}
	        }
	        return (returns + "") == "undefined"? "": returns;
	    });
	};
	var domRander = function(tpl, ele, reg){ 
		var showTpl = tpl.html(),
		showHtml = '';
		for(var i=0,len = JSON.length,jsonList=null; i<len; i++){
			jsonList = JSON[i] || {};
			showHtml += showTpl.temp(reg, jsonList);
		}
		$('tbody',ele).html(showHtml);
	};
	return {
		init : function(){
			domRander($('#shoptpl'), $('#shopitem'), itemReg);
			domRander($('#detailtpl'), $('#detailitem'), detailReg);
		}
	}
})(window, jQuery);
$(function(){
	DEMO.init();
})
