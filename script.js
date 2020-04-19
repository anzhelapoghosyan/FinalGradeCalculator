function calculateGrade() {
	var particip_percent = parseInt(document.getElementById("participationGrade").innerHTML)
	var quiz_percent = parseInt(document.getElementById("quizzesGrade").innerHTML)
	var pm1_percent = parseInt(document.getElementById("PM1Grade").innerHTML)
	var pm2_percent = parseInt(document.getElementById("PM2Grade").innerHTML)
	var fin_proj_percent = parseInt(document.getElementById("finalProjGrade").innerHTML)

	var particip_grade = parseFloat(document.getElementById("currParticipation").value)

	if (particip_grade < 0 || particip_grade > 100) {
    document.getElementById("currParticipation").style = "background-color:darkred";
    alert("Please enter a value from 0 to 100")
  } else {
	var participation = particip_percent * particip_grade / 100
  }


	var quiz_grade = parseFloat(document.getElementById("currQuizzes").value)

	if (quiz_grade < 0 || quiz_grade > 100) {
    document.getElementById("currQuizzes").style = "background-color:darkred";
    alert("Please enter a value from 0 to 100")
  } else {
	var quiz = quiz_percent * quiz_grade / 100
  }


	var pm1_grade = parseFloat(document.getElementById("currProjMilestone1").value)

	if (pm1_grade < 0 || pm1_grade > 100) {
    document.getElementById("currProjMilestone1").style = "background-color:darkred";
    alert("Please enter a value from 0 to 100")
  } else {
	var pm1 = pm1_percent * pm1_grade / 100	
  }


	var pm2_grade = parseFloat(document.getElementById("currProjMilestone2").value)

	if (pm2_grade < 0 || pm2_grade > 100) {
    document.getElementById("currProjMilestone2").style = "background-color:darkred";
    alert("Please enter a value from 0 to 100")
  } else {
	var pm2 = pm2_percent * pm2_grade / 100
  }

	var fin_proj_grade = parseFloat(document.getElementById("currFinProj").value)

	if (fin_proj_grade < 0 || fin_proj_grade > 100) {
    document.getElementById("currFinProj").style = "background-color:darkred";
    alert("Please enter a value from 0 to 100")
  } else {
	var fin_proj = fin_proj_percent * fin_proj_grade / 100
  }

	var currGrade = participation + quiz + pm1 + pm2 + fin_proj
	if(currGrade > 0 || currGrade < 100) {
		alert(currGrade)
	} else {
	console.log(currGrade)
	}
}

  