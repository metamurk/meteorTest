Template.messages.events({
	'change #fileInput': function (event) {
		console.log("input");
		FS.Utility.eachFile(event, function(file) {
			Images.insert(file);
		});
		$("form")[0].reset();
	}
});

Template.images.images = function() {
	return Images.find();
};