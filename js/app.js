//TODO: Refactor all code

// Objects

var about = {
	"header": "About",
	"content": "👋 Hi I'm Yash! A Solutions Architect with expertise and hands-on experience in designing, developing and managing robust and scalable enterprise-grade integration solutions on Cloud. I started as a Data Engineer and got introduced to Cloud Computing and enterprise software.<br><br> I believe that programming is the closest skill to wizardry that one can possess. My favorite topics are Python, Azure and Enterprise Integration. I participate as a speaker, mentor and judge in hackathons, tech communities and colleges."
}

var bio = {
	"name": "Yash Bhutoria",
	"role": "Grad Student",
	"location": "Champaign, IL",
	"bioPic": "img/profile.jpg",
	"email": "yash222219@gmail.com",
	"phone": "+12172000330"
}

var skills = {
	"header": "Skills",
	"fields": [
		{
			"field": "Programming Languages",
			"skills": ["Python 3 (Primary)", "Go (Basics)"]
		},
		{
			"field": "Data ETL Platforms",
			"skills": ["Databricks","Azure Data Factory","Dell Boomi","SQL Server Integration Services","Google Data Fusion"]
		},
		{
			"field": "Cloud Services",
			"skills": ["Azure Logic Apps", "Azure Functions", "Azure Service Bus", "Azure Event Grid", "Azure API Management", "Azure App Services", "Azure Storage Services"]
		},
		{
			"field": "Project Domains",
			"skills": ["Enterprise Integration", "Data Engineering", "Infrastructure as Code", "API Design", "Machine Learning", "Business Intelligence"]
		},
		{
			"field": "DevOps Tools",
			"skills": ["Azure DevOps","Terraform", "Git", "Docker", "Jira"]
		},
		{
			"field": "Libraries",
			"skills": ["Azure SDK", "Matplotlib", "Pandas", "Pydantic"]
		},
		{
			"field": "Databases",
			"skills": ["SQL Server", "MySQL", "CosmosDB"]
		},
		{
			"field": "Query Languages",
			"skills": ["SQL", "DAX"]
		},
		{
			"field": "Reporting Tools",
			"skills": ["Power BI"]
		},
		{
			"field": "Frameworks",
			"skills": ["FastAPI", "Flask", "Selenium", "PySpark"]
		},
	]
}

var navigation = {
	"nav": ["work", "skills", "projects", "education"]
}

var contacts = {
	"github": "yashbhutoria",
	"linkedin": "yashbhutoria",
	"instagram":"theyashbhutoria",
	"twitter":"theyashbhutoria"
}

function getYearsAndMonthsSince(date) {
	let years_float = (Date.now() - date) / 31556952000;
	let years = Math.floor(years_float);
	let months = Math.ceil((years_float - years) * 12);
	response = years
	if (years == 1) {
		response += " Year "
	} else {
		response += " Years "
	}
	response += months
	if (months == 1) {
		response += " Month"
	} else {
		response += " Months"
	}
	return response
}

var work = {
	"header": "Work",
	"jobs": [
		{
			"employer": "Gies College of Business",
			"url": "https://giesbusiness.illinois.edu/",
			"title": "Research Assistant <br> (" + getYearsAndMonthsSince(new Date(2022, 10))+")",
			"location": "Champaign, IL",
			"dates": "Oct 2022 - Present",
			"description": "The research aims to ingest, store and analyze the growth and movement of development and jobs in Web3"
		},
		{
			"employer": "Celebal Technologies",
			"url": "http://www.celebaltech.com",
			"title": "MTS <br> (3 Years)",
			"location": "Jaipur, India",
			"dates": "Aug 2019 - July 2022",
			"description": "A Solutions Architect with expertise and hands-on experience in designing, developing and managing robust and scalable enterprise-grade integration solutions on Cloud."
		},
		{
			"employer": "Celebal Technologies",
			"url": "http://www.celebaltech.com",
			"title": "Trainee Data Engineer <br> (3 Months)",
			"location": "Jaipur, India",
			"dates": "May 2019 - July 2019",
			"description": "Data Integration, Data Modeling, Pipeline Scripting, Data Reporting and Deployment, Azure Serverless "
		},
		{
			"employer": "Celebal Technologies",
			"url": "http://www.celebaltech.com",
			"title": "Associate Data Engineer",
			"title": "Associate Data Engineer (Intern)<br> (1 Year 7 Months)",
			"location": "Jaipur, India",
			"dates": "October 2017 - Apri 2019",
			"description": "Data Integration, Data Modeling, Pipeline Scripting, Data Reporting and Deployment, Azure Serverless "
		}
	]
}

var projects = {
	"header": "Projects",
	"projects": [
		{
			"title": "Data Lake Implementation on GCP (for a Medical Device Manufacturer)",
			"url": "",
			"dates": "08/2020 – 09/2020",
			"description": "Lead Integration Developer. Designed the GCP solution and setup project infrastructure on GCP with services like VPC, Cloud Data Fusion, Cloud Dataproc, AI Notebooks, Cloud Function, GCS and BigQuery. Created data pipelines from SAP HANA and SAP ECC over ODBC and ODATA protocols. Wrote Python code in Cloud Functions and AI Notebooks. Scheduled the jobs using Cloud Scheduler.",
			"images": [
				""
			]
		},
		{
			"title": "Data Integration on Dell Boomi (for a Global Sports Brand)",
			"url": "",
			"dates": "05/2020 – 08/2020",
			"description": "Lead Offshore Developer, lead a team of 4. Managed overall offshore delivery, and produced planning and design documents. Developed integrations connecting 10+ systems to run on daily batches and real-time frequencies using Dell Boomi Integration platform as a middleware.",
			"images": [
				""
			]
		},
		{
			"title": "iPaaS on Azure (for a Hospitality Company at San Diego)",
			"url": "",
			"dates": "2019 - 2020",
			"description": "The customer wanted to eliminate point to point custom data integration solution with a unified and extendable platform. Designed and developed an integration platform on Azure being a lead developer handling a team of 4. The project included C# based server-less functions, API Gateway, Cloud-based automated workflows and Infrastructure as Code all deployed and configured with CI/CD Pipelines for automation and agility.",
			"images": [
				""
			]
		},
		{
			"title": "Matplotlib Visuals Service",
			"url": "https://hub.docker.com/repository/docker/yashbhutoria/matplotlib-visual-service",
			"dates": "2020",
			"description": "This service was created as a REST API to generate custom graphs and visuals using Matplotlib API. This was used in a chatbot to show visuals and graphs within the conversation on the fly showing micro analytics of various metrics.",
			"images": [
				"../img/dial.jpg",
				"../img/funnel2.jpg",
				"../img/trendtile2.jpg",
				"../img/line_and_trend.jpg",
			]
		},
		{
			"title": "Learning and Development Reporting (for an Indian Telecom Company)",
			"url": "",
			"dates": "2019",
			"description": "The project delivered a Power BI dashboard showing learning and development progress and metrics on the entire company. This solution is built to automatically pull the data from the company's various learning platforms, transformed and stored into Azure SQL Database. The data pipelines were built upon API and Selenium-based scheduled jobs.",
			"images": [
				""
			]
		},
		{
			"title": "DL Based Spill Detection (for an Indian Manufacturer)",
			"url": "",
			"dates": "2019",
			"description": "Solved customer's problem for detecting oil container spills in a factory by deploying a deep learning based model to automatically detect and alert security systems for any harmful oil spill in the premise using existing CCTV cameras",
			"images": [
				""
			]
		},
		{
			"title": "Infrastructure Automation (for a US based Investment Firm)",
			"url": "",
			"dates": "2019",
			"description": "Created fully automated spoke deployment reusable Terraform scripts to deploy desired architecture on Azure using Terraform templates and Flask UI",
			"images": [
				""
			]
		},
		{
			"title": "Serverless Data Pipelines (for an Austrailing Accounting Company)",
			"url": "",
			"dates": "2018",
			"description": "Data integration project based on Azure Functions and Azure Logic App to schedule and automate data pipelines along with some transformations",
			"images": [
				""
			]
		},
		{
			"title": "Azure OMS to ServiceNow Automation Solution (for a US based Investment Firm)",
			"url": "",
			"dates": "2018",
			"description": "Automated the creation of Incidents on SNOW, creating Azure Logic App and Azure Function App, from the process of alert generation to ticket generation",
			"images": [
				""
			]
		},
		{
			"title": "SAP Reporting (for a US based Financial Consulting Firm)",
			"url": "",
			"dates": "2017",
			"description": "Reporting Service project using SSIS and Power BI on an SAP database. Data pulled from SAP Table using Xtract IS and loaded to SQL Server. The data then used to create a Power BI Report.",
			"images": [
				""
			]
		},
		{
			"title": "Hate Speech Detection and Twitter Integration (College Project)",
			"url": "",
			"dates": "2019",
			"description": "A Web Based Tool and REST API that detects hate speech and offensive language using Logistic Regression on Twitter data fetched from APIs",
			"images": [
				""
			]
		},
		{
			"title": "Dynamic Row Level Security Implementation (POC)",
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
			"school": "University of Illinois Urbana-Champaign",
			"qualification": "Master of Science in Business Analytics",
			"board": "Gies College of Business",
			"url": "https://illinois.edu/",
			"dates": "2022 - 2023",
			"grades": ""
		},
		{
			"school": "Rajasthan Technical University",
			"qualification": "B.Tech",
			"board": "Poornima College of Engineering, Jaipur",
			"url": "http://pce.poornima.org",
			"dates": "2015 - 2019",
			"grades": ""
		},
		{
			"school": "Jhunjhunu Academy",
			"board": "CBSE",
			"qualification": "Senior Secondary",
			"url": "http://www.jhunjhunuacademy.org/",
			"dates": "2013 - 2015",
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
