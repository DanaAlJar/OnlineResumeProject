/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var bio = {
  "name" : "Danah AlJar",
  "role" : "Web Developer",
  "contacts" : {
    "mobile": "+966565143461",
    "email": "danaaljar@gmail.com",
    "github": "DanaAlJar",
    "location": "Saudi Arabia"
  },
  "skills": [ "Detail oriented.", "Strong organizational skills and time management abilities.","Work effectively within a team as well independently." ,"Advance knowledge of Microsoft Office (Word, Excel, Outlook, PowerPoint, Access).","Bilingual: Fluent in Arabic and English."
  ],
  "welcomeMessage": "Hello, welcome to my online resume!",
  "bioPic":"images/me.png"
};
bio.display = function(){
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$('#header').prepend(formattedName+formattedRole);

var formattedMobile =  HTMLmobile.replace("%data%",bio.contacts.mobile);
var formattedEmail  =  HTMLemail.replace("%data%",bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
$('#topContacts , #footerContacts').append(formattedMobile + formattedEmail + 
  formattedGithub + formattedLocation);

var formattedbioPic = HTMLbioPic.replace("%data%",bio.bioPic);
$('#header').append(formattedbioPic);

var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
$('#header').append(formattedwelcomeMsg);

if (bio.skills.length > 0) {
      $("#header").append(HTMLskillsStart);

      for (var i = 0, len = bio.skills.length; i < len; i++) {
        var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);

        $("#skills").append(formattedSkills);
    }
  }
};
bio.display();
var education =
{
	"schools" : [
		{ "name": "Prince Mohammad Bin Fahd University",
		  "location": "Khobar,Saudi Arabia",
		  "degreeDates" :"2012-2016",
		  "degree": "Bachelor of Science",
		  "majors": ["Computer Engineering"],
		  "url" : "http://www.pmu.edu.sa"
		},
		{
		  "name": "Dhahran Ahliyya School ",
		  "location": "Dhahran,Saudi Arabia",
		  "degreeDates" :"2000-2012",
		  "degree": "High School",
		  "majors" : ["Science stream"],
		  "url" : "www.das.sch.sa"
		}
	],
  "onlineCourses" :[
	{ 
		"title":"Front-End Web Developer Nanodegree.",
		"school": "Udacity.",
		"dates": "2 July - Present.",
		"url" : "https://www.udacity.com"

	}

  ] 
};


education.display = function() {

 if (education.schools.length > 0 || education.onlineCourses.length > 0) {
      for (var i = 0, iLen = education.schools.length; i < iLen; i++) {
        var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[i].degreeDates);
        var formattedschoolNamedegree = formattedschoolName + formattedschoolDegree;

        $('#education').append(HTMLschoolStart);
        $('.education-entry:last').append(formattedschoolNamedegree);
        $('.education-entry:last').append(formattedschoolDates);
        $('.education-entry:last').append(formattedLocation);

        for (var k = 0, kLen = education.schools[i].majors.length; k < kLen; k++) {
          var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors[k]);

          $('.education-entry:last').append(formattedschoolMajor);
        }
      }

      $('#education').append(HTMLonlineClasses);

      for (var m = 0, mLen = education.onlineCourses.length; m < mLen; m++) {
        var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[m].title).replace('#', education.onlineCourses[m].url);
        var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[m].school);
        var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[m].dates);
        var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[m].url);
        var formattedonlineSchooltitle = formattedonlineTitle + formattedonlineSchool;

        $('#education').append(HTMLschoolStart);
        $('.education-entry:last').append(formattedonlineTitle);
        $('.education-entry:last').append(formattedonlineDates);
        $('.education-entry:last').append(formattedonlineURL);
      }
    }
};
education.display();


var work =
{ 
  "jobs" : [

  {
    "employer": "Emerson",
    "title": "Graduate Engineer",
    "location": "Khobar,Saudi Arabia",
    "dateWorked":"July 2017 - Present",
    "description":"Beginners Integration Training (BIT) program."

  },
  {
    "employer": "Saudi Aramco Oil Company",
    "title": "Summer Training Program (Summer B)",
    "location": "Dhahran,Saudi Arabia",
    "dateWorked":"June 2016 - August 2016",
    "description":"Information Protection Department/ Information Protection Management Division"

  }
 ]

};

work.display = function (){ 

if (work.jobs.length > 0) {
      for (var i = 0, len = work.jobs.length; i < len; i++) {
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dateWorked);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        $('#workExperience').append(HTMLworkStart);
        $('.work-entry:last').append(formattedEmployerTitle);
        $('.work-entry:last').append(formattedDates);
        $('.work-entry:last').append(formattedLocation);
        $('.work-entry:last').append(formattedDescription);
    }
}

};

work.display();

var projects =
{
  "projects": [
  {
      "title": "M&M’s Sorting Machine",
      "dates": "May 2015",
      "description": "A sorting machine that sorts M&M's candy by color.",
      "images": ["images/m&ms.png"]
      
  },
  {   "title": "Portfolio",
      "dates": "July 2017",
      "description": "As part of Udacity's Front-End Web Developer Nanodegree I created an online protfilo of projects.",
      "images": ["images/portfolio.png"]
    
  },
  {   "title": "Animal Trading Cards",
      "dates": "July 2017",
      "description": "As part of Udacity's Front-End Web Developer Nanodegree I created an online animal trading cards.",
      "images": ["images/animal.png"]
    
  }

  ]
};

projects.display = function() {
    if (projects.projects.length > 0) {
      for (var j = 0, jLength = projects.projects.length; j < jLength; j++) {
        var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects[j].title);
        var formattedprojectDates = HTMLprojectDates.replace("%data%", projects.projects[j].dates);
        var formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.projects[j].description);

        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(formattedprojectTitle);
        $(".project-entry:last").append(formattedprojectDates);
        $(".project-entry:last").append(formattedprojectDescription);

       for (var m = 0, mLength = projects.projects[j].images.length; m < mLength; m++) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[j].images[m]);

        $(".project-entry:last").append(formattedImage);
        }
      
    }
  }
}; 
projects.display();

$('#mapDiv').append(googleMap);
