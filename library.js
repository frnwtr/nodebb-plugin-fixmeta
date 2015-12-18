var fixer={},
	winston = require.main.require('winston'),
	_=require('lodash'),
	XRegExp = require('xregexp').XRegExp,
	regexStr = '^//';

var regex = XRegExp(regexStr, 'gi');
fixer.parse=function(data,cb){
	_.each(data.templateValues.metaTags,function(el,i){
		if(el.property && el.property=== 'og:image'){
			if(el.content.match(regex)){
				data.templateValues.metaTags[i].content=data.req.protocol+':'+data.templateValues.metaTags[i].content;
			}
		}
	});
	return cb(null,data);
}
module.exports = fixer;
