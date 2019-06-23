chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		$(".s-result-list .s-result-item:not(:contains('Get it by'))").remove();
	}
	}, 100);
});