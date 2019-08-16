//TODO: Refactor all code

// Objects

var about = {
	"header": "About",
	"content": "Data Engineering, Machine Learning and Azure PaaS"
}

var bio = {
	"name": "Yash Bhutoria",
	"role": "Data Engineer",
	"location": "Jaipur India",
	"bioPic": "img/profile.jpg",
	"email": "yash.bhutoria@celebaltech.com",
	"phone": "+919521878460"
}

var skills = {
	"header": "Skills",
	"fields": [
		{
			"field": "Languages",
			"skills": ["Python 3", "Java SE 8"]
		},
		{
			"field": "Libraries",
			"skills": ["Pytorch", "OpenCV", "Scikt-learn", "Pandas", "Numpy"]
		},
		{
			"field": "Databases",
			"skills": ["SQL Server", "MySQL"]
		},
		{
			"field": "Query Languages",
			"skills": ["SQL", "DAX"]
		},
		{
			"field": "Data Tools",
			"skills": ["SQL Server Integration Services", "SQL Server Analysis Services", "Azure Analysis Services"]
		},
		{
			"field": "Cloud Tools",
			"skills": ["Azure Logic Apps", "Azure Functions"]
		},
		{
			"field": "Reporting Tools",
			"skills": ["Power BI"]
		},
		{
			"field": "Project Domains",
			"skills": ["Data Engineering", "Machine Learning", "ETL", "Business Intelligence", "Serverless"]
		},
		{
			"field": "Frameworks",
			"skills": ["Flask", "Django","Selenium"]
		},
		{
			"field": "Other tools",
			"skills": ["Git", "Docker"]
		},
	]
}

var navigation = {
	"nav": ["work", "skills", "projects", "education"]
}

var contacts = {
	"github": "yashbhutoria",
	"instagram": "theyashbhutoria",
	"linkedin": "yashbhutoria",
	"twitter": "@theyashbhutoria"
}

var work = {
	"header": "Work",
	"jobs": [
		{
			"employer": "Celebal Technologies",
			"url": "http://www.celebaltech.com",
			"title": "Data Engineer",
			"location": "Jaipur, India",
			"dates": "2019 - Present",
			"description": "Data Integration, Data Modeling, Pipeline Scripting, Data Reporting and Deployment, Azure Serverless "
		},
		{
			"employer": "Celebal Technologies",
			"url": "http://www.celebaltech.com",
			"title": "Associate Data Engineer",
			"location": "Jaipur, India",
			"dates": "2017 - 2019",
			"description": "Data Integration, Data Modeling, Pipeline Scripting, Data Reporting and Deployment, Azure Serverless "
		}
	]
}

var projects = {
	"header": "Projects",
	"projects": [
		{
			"title": "Terraform Automation",
			"url": "",
			"dates": "2019",
			"description": "Created fully automated spoke deployment solution to deploy desired architecture on Azure Enterprise Cloud using Terraform templates and Flask UI",
			"images": [
				""
			]
		},
		{
			"title": "Hate Speech Detection and Twitter Integration",
			"url": "",
			"dates": "2019",
			"description": "A Web Based Tool and REST API that detects hate speech and offensive language using Logistic Regression on Twitter data fetched from APIs",
			"images": [
				""
			]
		},
		{
			"title": "Serverless Data Pipelines",
			"url": "",
			"dates": "2018",
			"description": "Data integration project based on Azure Functions and Azure Logic App to schedule and automate data pipelines along with some transformation",
			"images": [
				""
			]
		},
		{
			"title": "Azure OMS to ServiceNow Automation Solution",
			"url": "",
			"dates": "2018",
			"description": "Automated the creation of Incidents on SNOW, creating Azure Logic App and Azure Function App, from the process of alert generation to ticket generation",
			"images": [
				""
			]
		},
		{
			"title": "SAP Reporting",
			"url": "",
			"dates": "2017",
			"description": "Reporting Service project using SSIS and Power BI on an SAP database. Data pulled from SAP Table using Xtract IS and loaded to SQL Server. The data then used to create a Power BI Report.",
			"images": [
				""
			]
		},
		{
			"title": "Dynamic Row Level Security Implementation",
			"url": "",
			"dates": "2017",
			"description": "A tabular model deployed on SQL Server Analysis Server with DAX filters, so that a Power BI report shows data only what is permissible to a user viewing it as per decided visiblity.",
			"images": [
				""
			]
		}
	]
}

var education = {
	"educationHeader": "Education",
	"formalHeader": "Formal",
	"formalSchools": [
		{
			"school": "Poornima College of Engineering, Jaipur",
			"qualification": "B.Tech",
			"board": "Rajasthan Technical University",
			"url": "http://pce.poornima.org",
			"dates": "2019",
			"grades": "66.04 %"
		},
		{
			"school": "Jhunjhunu Academy",
			"board": "CBSE",
			"qualification": "Senior Secondary",
			"url": "http://www.jhunjhunuacademy.org/",
			"dates": "2015",
			"grades": "89.80 %"
		},
		{
			"school": "RDS Public School",
			"board": "BSER",
			"qualification": "Secondary",
			"url": "http://rdspublicschool.org/",
			"dates": "2013",
			"grades": "82.00 %"
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
about.display = function () {

	var formattedAboutHeader = HTMLaboutHeader.replace("%data%", about.header);
	console.log(formattedAboutHeader);
	$("#about").append(formattedAboutHeader);

	var formattedContent = HTMLaboutContent.replace("%data%", about.content);
	$("#about").append(formattedContent);

}();


bio.display = function () {

	var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#bio").append(formattedBioPic);

	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#bio").append(formattedName);

	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#bio").append(formattedRole);

	var formattedEmail = HTMLemail.replace("%data%", bio.email).replace("%data%", bio.email);
	$("#bio").append(formattedEmail);

	$("#bio").append(HTMLresume)

	var formattedPhone = HTMLphone.replace("%data%", bio.phone).replace("%data%", bio.phone);
	$("#bio").append(formattedPhone);
}();

contacts.display = function () {


	var formattedGithub = HTMLgithub.replace("%data%", contacts.github);
	$("#contacts").append(formattedGithub);

	var formattedCodepen = HTMLcodepen.replace("%data%", contacts.linkedin);
	$("#contacts").append(formattedCodepen);

	var formattedInstagram = HTMLinstagram.replace("%data%", contacts.instagram);
	$("#contacts").append(formattedInstagram);

	var formattedTwitter = HTMLtwitter.replace("%data%", contacts.twitter);
	$("#contacts").append(formattedTwitter);

}();

navigation.display = function () {

	for (nav in navigation.nav) {
		var formattedNavigation = HTMLnavigation.replace("%data%", navigation.nav[nav]).replace("%id%", navigation.nav[nav]);
		$("#nav").append(formattedNavigation);

		anchorScroll(navigation.nav[nav]);
	}

	function anchorScroll(target) {
		$("#link" + target).on("click", function () {
			$("#" + target).children("h2").removeClass("pop");
			$('html,body').animate({
				scrollTop: $("#" + target).offset().top
			}, 1000, function () {
			});
		});
	}

}();

work.display = function () {

	var formattedWorkHeader = HTMLworkHeader.replace("%data%", work.header);
	$("#work").append(formattedWorkHeader);

	for (job in work.jobs) {

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

projects.display = function () {

	var formattedProjectsHeader = HTMLprojectsHeader.replace("%data%", projects.header);
	$("#projects").append(formattedProjectsHeader);

	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title).replace("%url%", projects.projects[project].url);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		// $(".project-entry:last").append(HTMLprojectImageStart);

		// if (projects.projects[project].images.length > 0) {
		// 	for(image in projects.projects[project].images) {
		// 		var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image])
		// 		$(".project-images:last").append(formattedImage);
		// 	}
		// }

	}

}();

education.display = function () {

	var formattedEducationHeader = HTMLeducationHeader.replace("%data%", education.educationHeader);
	$("#education").append(formattedEducationHeader);

	var formattedFormalHeader = HTMLformalHeader.replace("%data%", education.formalHeader);
	$("#education").append(formattedFormalHeader);

	for (school in education.formalSchools) {
		$("#education").append(HTMLformalStart);

		var formattedFormalSchool = HTMLformalSchool.replace("%data%", education.formalSchools[school].school).replace("%url%", education.formalSchools[school].url);;
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

skills.display = function () {

	var formattedSkillsHeader = HTMLskillsHeader.replace("%data%", skills.header);
	$("#skills").append(formattedSkillsHeader);
	var topLayer = document.createElement('div');
	topLayer.setAttribute('class', 'topLayer');
	topLayer.setAttribute('id', `yash_topLayer`);
	$("#skills").append(topLayer);
	var i = 0;

	for (field in skills.fields) {
		var container = document.createElement('div');
		container.setAttribute('class', 'yash_style');
		container.setAttribute('id', `yash_skills${i}`);
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
