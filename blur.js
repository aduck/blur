// addEvent
function addEvent(o,type,cb){
	if(o.addEventListener){
		o.addEventListener(type,cb,false);
	}else if(o.attachEvent){
		o.attachEvent('on'+type,cb);
	}else{
		o['on'+type]=cb;
	}
}
// contains
function contains(pn,cn){
	if(pn.contains){
		return pn.contains(cn);
	}else if(pn.compareDocumentPosition){
		return pn.compareDocumentPosition(cn)==20 || pn.compareDocumentPosition(cn)==16 || pn==cn;
	}
}
// hasElem
function hasElem(arr,o){
	for(var i=0,len=arr.length;i<len;i++){
		if(arr[i]==o)	return true;
	}
	return false;
}
// blur
function blur(o,callback,excepts){
	var body=document.body;
	addEvent(body,'click',function(e){
		var e=e || window.event,
			target=e.target || e.srcElement;
		if(excepts && excepts instanceof Array){
			if(!contains(o,target) && !hasElem(excepts,target)){
				callback();
			}
		}else{
			callback();
		}
	})
}