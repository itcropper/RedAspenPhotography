Function.getClassName = function() {
	return "Function";
};


/* Extend from another prototyped Function */
Function.prototype.Extend = function(superClass) {
	this.prototype = new superClass();

	this.prototype.getSuperClass = function() {
		return superClass;
	};
	this.getSuperClass = this.prototype.getSuperClass;
	return this;
};

/*
The Super method allows us to do the constructor (or any super call) chaining more easily.  It looks like this:

var A = function() {
  this.value = ["1"]
}

var B = function() {
  B.Super(this);
  this.value.push("2");
}

Super calls for non constructor methods look like:
Class.Super(this, "methodName", arguments);
*/

Function.prototype.Super = function(context, methodName, args) {
	if (null != methodName) {
		var method = this.getSuperClass().prototype[methodName];
	}
	else {
		var method = this.getSuperClass();
	}

	if (!args) {
		return method.call(context);
	}
	else {
		return method.apply(context, args);
	}
};

/*
Function.Implements
It takes either an instanciated object or a functor, and a list of properties/methods and add
them to the calling functor.  Be careful not to apply methods that call other methods/object in
the passed functor/object that do not exist in the calling functor.
*/
Function.prototype.Implements = function(obj, members) {
	if(typeof obj == "function") {
		obj = obj.prototype;
	}
	var tObj = {}
	for(var i = 0, len = members.length; i < len; ++i) {
		tObj[members[i]] = obj[members[i]] || null;
	}
	var o = WSDOM.Util.copyObject(tObj);
	for(var i in o) {
		this.prototype[i] = o[i];
	}
};

/* Used to be 'hitch'.  Now it works right. */
Function.prototype.Context = function(obj) {
	var fnReference = this;
	return function () {
		return typeof fnReference == "function" ? fnReference.apply(obj, arguments) : obj[fnReference].apply(obj, arguments);
	};
};
/* Use to get WSDOM.Events - like control w/ jQuery Events */
Function.prototype.eventContext = function(obj, oArgs){
	
	var fnReference = this; 
	oArgs = oArgs || {};
	var fHandler = function () { 
		return  fnReference.apply(obj, [arguments[0], this, oArgs.data]);
	};
	
	if(oArgs.delay){
			fHandler =  function(){ 
				var innerFnRef = this;
				var args = arguments;
				setTimeout(function()	{ return  fnReference.apply(obj, [args[0], innerFnRef, oArgs.data]);}, oArgs.delay);
			}
	}
	return fHandler;
}
Function.prototype.EmptyFunction = function() {};;