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

// load images into images area (class="images")
$(document).ready(function() {
	$("#img1").attr("src", images.man.path)
				 .attr("desc",images.man.description)
				 .attr("heading",images.man.heading);
	$("#img2").attr("src", images.wizard.path)
				 .attr("desc",images.wizard.description)
				 .attr("heading", images.wizard.heading);
	$("#img3").attr("src", images.beast.path)
				 .attr("desc",images.beast.description)
				 .attr("heading", images.beast.heading);

// load captions into image area
	$("#img1-caption").html("\
		<h3>" + images.man.heading + "</h3>" + 
		"<p>" + images.man.description + "</p>"
	);
		 
	$("#img2-caption").html("\
		<h3>" + images.wizard.heading + "</h3>" + 
		"<p>" + images.wizard.description + "</p>"
	);	

	$("#img3-caption").html("\
		<h3>" + images.beast.heading + "</h3>" + 
		"<p>" + images.beast.description + "</p>"
	);			 

}); // close $(document).ready

