var fixer={},
	winston = require.main.require('winston'),
	_=require('lodash'),
	XRegExp = require('xregexp').XRegExp,
	regexStr = '^//'
  Entities = require('html-entities').XmlEntities;

var regex = XRegExp(regexStr, 'gi');
var entities = new Entities();

fixer.parse=function(data,cb){
	_.each(data.templateValues.metaTags,function(el,i){
		if(el.property && el.property=== 'og:image'){
      var temp=entities.decode(el.content);
			if(temp.match(regex)){
				data.templateValues.metaTags[i].content=data.req.protocol+':'+data.templateValues.metaTags[i].content;
			}
		}
	});
	return cb(null,data);
}
module.exports = fixer;
