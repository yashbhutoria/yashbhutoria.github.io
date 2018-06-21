//TODO: Refactor all code

// Objects

var bio = {
	"name": "Yash Bhutoria",
	"role": "Associate Data Engineer",
	"location": "Jaipur India",
	"bioPic": "img/profile.jpg"
}

var skills = {
	"header": "Skills",
	"fields": [
		{
			"field": "Languages",
			"skills": ["Python", "Java SE 8"]
		},
		{
			"field": "Libraries",
			"skills": ["OpenCV", "Scikt-learn","Pandas","Numpy"]
		},
		{
			"field": "Query Languages",
			"skills": ["SQL", "HiveQL", "AzureSQL"]
		},
		{
			"field": "Data Tools",
			"skills": ["SQL Server Integration Services", "SQL Server Analysis Services", "Azure Analysis Services"]
		},
		{
			"field": "Frameworks",
			"skills": ["Hadoop 2"]
		},
		{
			"field": "Cloud",
			"skills": ["Microsoft Azure"]
		},
		{
			"field": "Reporting Tools",
			"skills": ["Power BI", "Tibco Spotfire"]
		},
		{
			"field": "Project Domains",
			"skills": ["Data Engineering","Machine Learning", "ETL", "Business Intelligence","Big Data"]
		},
		{
			"field": "Operating Systems",
			"skills": ["Windows", "Linux"]
		},
		{
			"field": "Version Control",
			"skills": ["Git"]
		},
		{
			"field": "Databases",
			"skills": ["SQL Server","MySQL","Hive","Pig","Hbase"]
		}
	]
}

var navigation = {
	"nav": ["work", "projects", "education", "skills"]
}

var contacts = {
	"email": "yash222219@gmail.com",
	"github": "yashbhutoria",
	"instagram": "theyashbhutoria",
	"linkedin":"yashbhutoria",
	"twitter": "@theyashbhutoria"
}

var work = {
	"header": "Work",
	"jobs": [
		{
			"employer": "Celebal Technologies",
			"url": "http://www.celebaltech.com",
			"title": "Associate Data Engineer",
			"location": "Jaipur, India",
			"dates": "2017 - Present",
			"description": "Data Integration, Data Modeling, Pipeline Scripting, Data Reporting and Deployment"
		},

	]	
}

var projects = {
	"header": "Projects",
	"projects": [
		// {
		// 	"title": "Date Asia",
		// 	"url": "https://date-asia.com/?skin=def_mobile",
		// 	"dates": "2014 - Present",
		// 	"description": "An in-progress responsive reboot of a personal project that I started in an attempt to improve my front-end development skills. I learn well by doing, and this project gives me a chance to put new skills I've gained into practice. An open source PHP dating script on the backend, Bootstrap 3 on the front end.",
		// 	"images": [
		// 	"img/dateAsia01.jpg", "img/dateAsia02.jpg", "img/dateAsia03.jpg"
		// 	]			
		// }
	]
}

var education =  {
	"educationHeader": "Education",
	"formalHeader": "Formal",
	"formalSchools": [
		{
			"school": "Poornima College of Engineering",
			"qualification": "B.Tech",
			"board":"Rajasthan Technical University",
			"url": "pce.poornima.org",
			"dates": "2019",
			"grades":"66.67 %"
		},
		{
			"school": "Jhunjhunu Academy",
			"board":"CBSE",
			"qualification": "Senior Secondary",
			"url": "",
			"dates": "2015",
			"grades":"89.80 %"
		},
		{
			"school": "RDS Public School",
			"board":"BSER",
			"qualification": "Secondary",
			"url": "",
			"dates": "2013",
			"grades":"82.00 %"
		}
	],
	"onlineHeader": "Online Eduction",
	"onlineSchools": [

		{
			"school": "Placeholder",
			"course": "Placeholder",
			"url": "Placeholder",
			"dates": "2019"
		}
	]
}

// Display Objects

bio.display = function() {

	var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#bio").append(formattedBioPic);

	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#bio").append(formattedName);

	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#bio").append(formattedRole);

}();

contacts.display = function() {

	var formattedEmail = HTMLemail.replace("%data%", contacts.email);
	$("#leftContent").append(formattedEmail);

	var formattedGithub = HTMLgithub.replace("%data%", contacts.github);
	$("#contacts").append(formattedGithub);

	var formattedCodepen = HTMLcodepen.replace("%data%", contacts.linkedin);
	$("#contacts").append(formattedCodepen);

	var formattedInstagram = HTMLinstagram.replace("%data%", contacts.instagram);
	$("#contacts").append(formattedInstagram);

	var formattedTwitter = HTMLtwitter.replace("%data%", contacts.twitter);
	$("#contacts").append(formattedTwitter);

}();

navigation.display = function() {

	for(nav in navigation.nav) {
		var formattedNavigation = HTMLnavigation.replace("%data%", navigation.nav[nav]).replace("%id%", navigation.nav[nav]);
		$("#nav").append(formattedNavigation);

		anchorScroll(navigation.nav[nav]);
	}

	function anchorScroll(target) {
		$("#link"+target).on("click", function() {
				$("#"+target).children("h2").removeClass("pop");
	    	$('html,body').animate({
	        	scrollTop: $("#"+target).offset().top
	    	}, 1000, function() {
	    	});
	    });
	}

}();

work.display = function() {

	var formattedWorkHeader = HTMLworkHeader.replace("%data%", work.header);
	$("#work").append(formattedWorkHeader);

	for(job in work.jobs) {

		$("#work").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer).replace("%url%", work.jobs[job].url);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);

	}

}();

projects.display = function() {

	var formattedProjectsHeader = HTMLprojectsHeader.replace("%data%", projects.header);
	$("#projects").append(formattedProjectsHeader);

	for(project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title).replace("%url%", projects.projects[project].url);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		$(".project-entry:last").append(HTMLprojectImageStart);

		if (projects.projects[project].images.length > 0) {
			for(image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image])
				$(".project-images:last").append(formattedImage);
			}
		}

	}	

}();

education.display = function() {

	var formattedEducationHeader = HTMLeducationHeader.replace("%data%", education.educationHeader);
	$("#education").append(formattedEducationHeader);

	var formattedFormalHeader = HTMLformalHeader.replace("%data%", education.formalHeader);
	$("#education").append(formattedFormalHeader);

	for(school in education.formalSchools) {
		$("#education").append(HTMLformalStart);
		
		var formattedFormalSchool = HTMLformalSchool.replace("%data%", education.formalSchools[school].school);
		$(".formal-entry:last").append(formattedFormalSchool);

		var formattedFormalBoard = HTMLformalBoard.replace("%data%", education.formalSchools[school].board);
		$(".formal-entry:last").append(formattedFormalBoard);

		var formattedFormalQualification = HTMLformalQualification.replace("%data%", education.formalSchools[school].qualification);
		$(".formal-entry:last").append(formattedFormalQualification);

		var formattedFormalGrades = HTMLformalGrades.replace("%data%", education.formalSchools[school].grades);
		$(".formal-entry:last").append(formattedFormalGrades);

		var formattedFormalDates = HTMLformalDates.replace("%data%", education.formalSchools[school].dates);
		$(".formal-entry:last").append(formattedFormalDates);
	}

	// var formattedOnlineHeader = HTMLonlineHeader.replace("%data%", education.onlineHeader);
	// $("#education").append(formattedOnlineHeader);

	// for(school in education.onlineSchools) {
	// 	$("#education").append(HTMLonlineStart);
		
	// 	var formattedOnlineCourse = HTMLonlineCourse.replace("%data%", education.onlineSchools[school].course).replace("%url%", education.onlineSchools[school].url);
	// 	$(".online-entry:last").append(formattedOnlineCourse);

	// 	var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineSchools[school].school);
	// 	$(".online-entry:last").append(formattedOnlineSchool);

	// 	var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineSchools[school].dates);
	// 	$(".online-entry:last").append(formattedOnlineDates);
	// }

}();

skills.display = function() {

	var formattedSkillsHeader = HTMLskillsHeader.replace("%data%", skills.header);
	$("#skills").append(formattedSkillsHeader);
	var topLayer = document.createElement('div');
	topLayer.setAttribute('class','topLayer');
	topLayer.setAttribute('id',`yash_topLayer`);
	$("#skills").append(topLayer);
	var i = 0;

	for(field in skills.fields) {
		var container = document.createElement('div');
		container.setAttribute('class','yash_style');
		container.setAttribute('id',`yash_skills${i}`);
		$("#yash_topLayer").append(container);
		var formattedSubHeader = HTMLskillsSubHeader.replace("%data%", skills.fields[field].field)
		$(`#yash_skills${i}`).append(formattedSubHeader);

		var formattedSkillsList = HTMLskillsList.replace("%data%", field);
		$(`#yash_skills${i}`).append(formattedSkillsList);

		for (skill in skills.fields[field].skills) {
			var formattedSkillsItem = HTMLskillsItem.replace("%data%", skills.fields[field].skills[skill]);
			$('#skillsList' + field).append(formattedSkillsItem);
		}
		i++;
	}

}();

// Foundation
$(document).foundation();
