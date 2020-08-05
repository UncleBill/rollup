define(['exports', 'external'], function (exports, external) { 'use strict';

	function _interopNamespace(e) {
		if (e && e.__esModule) { return e; } else {
			var n = Object.create(null);
			if (e) {
				Object.keys(e).forEach(function (k) {
					var d = Object.getOwnPropertyDescriptor(e, k);
					Object.defineProperty(n, k, d.get ? d : {
						enumerable: true,
						get: function () {
							return e[k];
						}
					});
				});
			}
			n['default'] = e;
			return Object.freeze(n);
		}
	}

	var external__namespace = /*#__PURE__*/_interopNamespace(external);



	exports.external = external__namespace;
	exports.indirect = external__namespace;

	Object.defineProperty(exports, '__esModule', { value: true });

});
