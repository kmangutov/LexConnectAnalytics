
var service = LexConnectService("logs");
var sessionMap = {};

var parseSession = function(sessionId) {

}

service.getAll().then(function(res, err) {
	res.forEach(function (item) {
		if (!item["sessionId"]) {
			return;
		}

		var sessionId = item["sessionId"];
		if (!sessionMap["sessionId"]) {
			sessionMap[sessionId] = [];
		}
		sessionMap[sessionId].push(item);
	})
}).then(function() {
	console.log(JSON.stringify(sessionMap));
});