var images = {
	man: {
		heading: 'Man Image',
		description: 'Image of a man.',
		path: 'images/man.jpg'
	},
	wizard: {
		heading: 'Wizard Image',
		description: 'Image of a wizard.',
		path: 'images/wizard.jpg'
	},
	beast: {
		heading: 'Beast Image',
		description: 'Image of a beast.',
		path: 'images/beast.jpg'
	}
};

$(document).ready(function() {
	$("#img1").attr("src",images.man.path);
	$("#img2").attr("src", images.wizard.path);
	$("#img3").attr("src", images.beast.path);
})