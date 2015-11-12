var Module = function () {};

(function(){

	Module.prototype.eventTypes = function () {

		return ['initialized'];
	};

	Module.prototype.$ = function (selector) {

		return this.$element.find(selector);
	};

	Module.prototype.init = function (el) {

		if (el) {

			if (typeof el === 'string') { this.selector = el; }

			this.$element = $(el).first();

		} else if (this.selector) {

			this.$element = $(this.selector).first();
		}

		if (!this.guid) {

			this.guid = guid();
			this.events = {};
			var eventTypes = this.eventTypes();
			for (var i = 0; i < eventTypes.length; i++) {

				this.events[eventTypes[i]] = eventTypes[i] + '.' + this.guid;
			}
		}
        
        $(".site-loader").delay(500).fadeOut("slow");

		this.initListeners();

		// inits shared by all modules go here

		this.emit(this.events.initialized);
	};

	Module.prototype.registerModule = function (moduleName, moduleFunc, moduleSelector) {

		if (!moduleFunc || !moduleSelector) { return; }

		var $module = this.$element.find(moduleSelector).first();

		if (!$module.length) { return; }

		if (!this[moduleName]) {

			this[moduleName] = new moduleFunc();
			this[moduleName].selector = moduleSelector;
		}
		
		this[moduleName].init($module);
	};

	Module.prototype.initListeners = function () {};

	Module.prototype.on = function(type, callback, capture) {
	
		this.$element.on(type, callback);
	};

	Module.prototype.off = function (type, callback, capture) {

		this.$element.off(type, callback);
	};

	Module.prototype.emit = function (type, data) {

		this.$element.trigger(type, data);
	};

})();