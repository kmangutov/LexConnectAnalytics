
var service = LexConnectService("logs");
var sessionMap = {};

var indexLoads = 0;
var indexCtoaClicks = 0;

var parsePageLoad = function(event) {
	switch (item["page"]) {
		case "event":
			indexLoads++;
			break;
	}
}

var parseItem = function(item) {
	if (item["page"] === "index") {
		indexLoads++;
	} else 

	var 

}

var parseSession = function(sessionId) {

}

service.getAll().then(function(res, err) {
	res.forEach(function (item) {
		if (!item["sessionId"]) {
			return;
		}

		parseItem(item);

		var sessionId = item["sessionId"];
		if (!sessionMap["sessionId"]) {
			sessionMap[sessionId] = [];
		}
		sessionMap[sessionId].push(item);
	})
}).then(function() {
	console.log("indexLoads: " + indexLoads);
});