const fs = require('fs');

let rawdata = fs.readFileSync('src/data/diaspora.json');
let DiasporaData = JSON.parse(rawdata);
let Diaspora = JSON.parse(JSON.stringify(DiasporaData[0]));
let DiasporaCopy = JSON.parse(JSON.stringify(DiasporaData[0]));
let ChosenPeople = JSON.parse(JSON.stringify(DiasporaData[1]));
let Refusers = JSON.parse(JSON.stringify(DiasporaData[2]));

let NumberList;

let RussiaNumber = [0, 39, 0, 0];
let USANumber = [0, 20, 0, 0];
let FranceNumber = [0, 9, 0, 0];
let GeorgiaNumber = [0, 6, 0, 0];
let EuropeNumber = [0, 6, 0, 0];
let FormerSUNumber = [0, 6, 0, 0];
let MiddleEastNumber = [0, 4, 0, 0];
let LatinAmericaNumber = [0, 3, 0, 0];
let OtherNumber = [0, 3, 0, 0];
let TurkeyNumber = [0, 2, 0, 0];
let IranNumber = [0, 2, 0, 0];
let DSecondaryNumber = [0, 25, 0, 0];
let DProfessionalNumber = [0, 25, 0, 0];
let DUniversityNumber = [0, 50, 0, 0];
let DAge18_30Number = [0, 28, 0, 0];
let DAge31_45Number = [0, 30, 0, 0];
let DAge46_60Number = [0, 24, 0, 0];
let DAge61Number = [0, 18, 0, 0];
let DFemale = [0, 50, 0, 0];
let DMale = [0, 50, 0, 0];

function getNumbers() {
	for (let i = 0; i < DiasporaCopy.length; i++) {
		if (DiasporaCopy[i].CountryFinal === "Russia") {
			RussiaNumber[2]++;
			RussiaNumber[3] = RussiaNumber[2] - RussiaNumber[1];
		} else if (DiasporaCopy[i].CountryFinal === "USA") {
			USANumber[2]++;
			USANumber[3] = USANumber[2] - USANumber[1];
		} else if (DiasporaCopy[i].CountryFinal === "France") {
			FranceNumber[2]++;
			FranceNumber[3] = FranceNumber[2] - FranceNumber[1];
		} else if (DiasporaCopy[i].CountryFinal === "Georgia") {
			GeorgiaNumber[2]++;
			GeorgiaNumber[3] = GeorgiaNumber[2] - GeorgiaNumber[1];
		} else if (DiasporaCopy[i].CountryFinal === "Europe (excl. France)") {
			EuropeNumber[2]++;
			EuropeNumber[3] = EuropeNumber[2] - EuropeNumber[1];
		} else if (DiasporaCopy[i].CountryFinal === "Former SU (excl. RU & Geo)") {
			FormerSUNumber[2]++;
			FormerSUNumber[3] = FormerSUNumber[2] - FormerSUNumber[1];
		} else if (DiasporaCopy[i].CountryFinal === "Middle East (excl. Tr & Ir)") {
			MiddleEastNumber[2]++;
			MiddleEastNumber[3] = MiddleEastNumber[2] - MiddleEastNumber[1];
		} else if (DiasporaCopy[i].CountryFinal === "Latin America") {
			LatinAmericaNumber[2]++;
			LatinAmericaNumber[3] = LatinAmericaNumber[2] - LatinAmericaNumber[1];
		} else if (DiasporaCopy[i].CountryFinal === "Other") {
			OtherNumber[2]++;
			OtherNumber[3] = OtherNumber[2] - OtherNumber[1];
		} else if (DiasporaCopy[i].CountryFinal === "Turkey") {
			TurkeyNumber[2]++;
			TurkeyNumber[3] = TurkeyNumber[2] - TurkeyNumber[1];
		} else if (DiasporaCopy[i].CountryFinal === "Iran") {
			IranNumber[2]++;
			IranNumber[3] = IranNumber[2] - IranNumber[1];
		}

		if (DiasporaCopy[i].Education === "Secondary or unfinished secondary") {
			DSecondaryNumber[2]++;
			DSecondaryNumber[3] = DSecondaryNumber[2] - DSecondaryNumber[1];
		} else if (DiasporaCopy[i].Education === "Professional or vocational") {
			DProfessionalNumber[2]++;
			DProfessionalNumber[3] = DProfessionalNumber[2] - DProfessionalNumber[1];
		} else if (DiasporaCopy[i].Education === "University or postgraduate") {
			DUniversityNumber[2]++;
			DUniversityNumber[3] = DUniversityNumber[2] - DUniversityNumber[1];
		}

		if (DiasporaCopy[i].AGEGroup === "18-30") {
			DAge18_30Number[2]++;
			DAge18_30Number[3] = DAge18_30Number[2] - DAge18_30Number[1];
		} else if (DiasporaCopy[i].AGEGroup === "31-45") {
			DAge31_45Number[2]++;
			DAge31_45Number[3] = DAge31_45Number[2] - DAge31_45Number[1];
		} else if (DiasporaCopy[i].AGEGroup === "46-60") {
			DAge46_60Number[2]++;
			DAge46_60Number[3] = DAge46_60Number[2] - DAge46_60Number[1];
		} else if (DiasporaCopy[i].AGEGroup === "61+") {
			DAge61Number[2]++;
			DAge61Number[3] = DAge61Number[2] - DAge61Number[1];
		}

		if (DiasporaCopy[i].Gender === "Male") {
			DMale[2]++;
			DMale[3] = DMale[2] - DMale[1];
		} else {
			DFemale[2]++;
			DFemale[3] = DFemale[2] - DFemale[1];
		}
	}
	NumberList = [
		{
			namegroup: "country",
			coun: "RussiaNumber",
			num: RussiaNumber[3] - RussiaNumber[1]
		},
		{
			namegroup: "country",
			coun: "USANumber",
			num: USANumber[3] - USANumber[1]
		},
		{
			namegroup: "country",
			coun: "FranceNumber",
			num: FranceNumber[3] - FranceNumber[1]
		},
		{
			namegroup: "country",
			coun: "GeorgiaNumber",
			num: GeorgiaNumber[3] - GeorgiaNumber[1]
		},
		{
			namegroup: "country",
			coun: "EuropeNumber",
			num: EuropeNumber[3] - EuropeNumber[1]
		},
		{
			namegroup: "country",
			coun: "FormerSUNumber",
			num: FormerSUNumber[3] - FormerSUNumber[1]
		},
		{
			namegroup: "country",
			coun: "MiddleEastNumber",
			num: MiddleEastNumber[3] - MiddleEastNumber[1]
		},
		{
			namegroup: "country",
			coun: "LatinAmericaNumber",
			num: LatinAmericaNumber[3] - LatinAmericaNumber[1]
		},
		{
			namegroup: "country",
			coun: "OtherNumber",
			num: OtherNumber[3] - OtherNumber[1]
		},
		{
			namegroup: "country",
			coun: "TurkeyNumber",
			num: TurkeyNumber[3] - TurkeyNumber[1]
		},
		{
			namegroup: "country",
			coun: "IranNumber",
			num: IranNumber[3] - IranNumber[1]
		},
		{
			namegroup: "education",
			ed: "DSecondaryNumber",
			num: DSecondaryNumber[3] - DSecondaryNumber[1]
		},
		{
			namegroup: "education",
			coun: "DProfessionalNumber",
			num: DProfessionalNumber[3] - DProfessionalNumber[1]
		},
		{
			namegroup: "education",
			coun: "DUniversityNumber",
			num: DUniversityNumber[3] - DUniversityNumber[1]
		},
		{
			namegroup: "age",
			age: "DAge18_30Number",
			num: DAge18_30Number[3] - DAge18_30Number[1]
		},
		{
			namegroup: "age",
			age: "DAge31_45Number",
			num: DAge31_45Number[3] - DAge31_45Number[1]
		},
		{
			namegroup: "age",
			age: "DAge46_60Number",
			num: DAge46_60Number[3] - DAge46_60Number[1]
		},
		{
			namegroup: "age",
			age: "DAge61Number",
			num: DAge61Number[3] - DAge61Number[1]
		},
		{
			namegroup: "gender",
			gender: "DMale",
			num: DMale[3] - DMale[1]
		},
		{
			namegroup: "gender",
			gender: "DFemale",
			num: DFemale[3] - DFemale[1]
		}
	];
}

/*Start Functional*/
function check() {
	if (ChosenPeople.length !== 0) {
		document.getElementById("Diaspora").classList.remove("hide");
		document.getElementById("button_Diaspora").classList.add("hide");
	}
	if (localStorage.getItem("Armenia") !== null) {
		document.getElementById("Armenia").classList.remove("hide");
		document.getElementById("button_Armenia").classList.add("hide");
	}
	if (localStorage.getItem("Artsakh") !== null) {
		document.getElementById("Artsakh").classList.remove("hide");
		document.getElementById("button_Artsakh").classList.add("hide");
	}

	if (localStorage.getItem("Diaspora") !== null || localStorage.getItem("Armenia") !== null || localStorage.getItem("Artsakh") !== null) {
		document.getElementById("openrestart").classList.remove("hide");
		document.getElementById("openrestart").classList.add("restart");
	} else {
		document.getElementById("openrestart").classList.add("hide");
		document.getElementById("openrestart").classList.remove("restart");
	}
}
function closewindow(winid) {
	document.getElementById(winid).classList.add("hide");
}
function openrestart(winid) {
	document.getElementById(winid).classList.remove("hide");
}
function clearstorage() {
	DiasporaData[1]=[]
	DiasporaData[2]=[]
	let data = JSON.stringify(DiasporaData);
	fs.writeFileSync('src/data/diaspora.json', data);
	closewindow("confirm_Contenier");
	location.reload();
}
function button_Armenia() {
	localStorage.setItem("Armenia", "fdffg8h4tr8h");
	check();
}
function button_Artsakh() {
	localStorage.setItem("Artsakh", "sdfsfgd14gfg");
	check();
}
/*End Functional*/

function getDifference(a, b) {
	const isSameUser = (a, b) => a.Code === b.Code && a.Gender === b.Gender && a.Education === b.Education && a.Area === b.Area && a.AGEGroup === b.AGEGroup && a.CountryFinal === b.CountryFinal;
	const onlyInLeft = (left, right, compareFunction) =>
		left.filter(leftValue =>
			!right.some(rightValue =>
				compareFunction(leftValue, rightValue)));
	const onlyInA = onlyInLeft(a, b, isSameUser);
	const onlyInB = onlyInLeft(b, a, isSameUser);
	return [...onlyInA, ...onlyInB];
}

function Print(people) {
	let id = 1;
	document.getElementById("diasporatable").innerHTML = people
		.map(
			person =>
				`
					<tr id="${id++}">
						<td>${id - 1}</td>
						<td>${person.Code}</td>
						<td>${person.CountryFinal}</td>
						<td>${person.Gender}</td>
						<td>${person.AGEGroup}</td>
						<td>${person.Education}</td>
						<td>${person.Area}</td>
						<td>
							<button class="butt_changing" onclick="changeConfirm('${id - 1}','${person.Code}', '${person.CountryFinal}', '${person.Gender}', '${person.AGEGroup}', '${person.Education}', '${person.Area}')">Փոխարինել</button>
						</td>
					</tr >
	`
		)
		.join("");
}

function changeConfirm(id, code, country, gender, age, education, area) {
	document.getElementById("confirmbutt").setAttribute("onclick", `change('${id}','${code}', '${country}', '${gender}', '${age}', '${education}', '${area}')`);
	document.getElementById("confirm_Contenier").classList.remove("hide");
	document.getElementById("confirmCode").innerHTML = code;

}

function change(id, code, country, gender, age, education, area) {
	let arrayDifference = getDifference(getDifference(Diaspora, Refusers), ChosenPeople);
	let index = arrayDifference.findIndex(item => item.Code === code);
	let datachange = arrayDifference[index];
	arrayDifference.splice(index, 1);
	let arrayforchange = arrayDifference.filter(peopledata => peopledata.AGEGroup === age && peopledata.Area === area && peopledata.Gender === gender && peopledata.Education === education && peopledata.CountryFinal === country);
	if (arrayforchange.length !== 0) {
		const random = Math.floor(Math.random() * arrayforchange.length);
		document.getElementById(id).innerHTML = `
		<tr id="${arrayforchange[random].Code}">
			<td>${id}</td>
			<td>${arrayforchange[random].Code}</td>
			<td>${arrayforchange[random].CountryFinal}</td>
			<td>${arrayforchange[random].Gender}</td>
			<td>${arrayforchange[random].AGEGroup}</td>
			<td>${arrayforchange[random].Education}</td>
			<td>${arrayforchange[random].Area}</td>
			<td>
				<button class="butt_changing" onclick="changeConfirm('${id}','${arrayforchange[random].Code}', '${arrayforchange[random].CountryFinal}', '${arrayforchange[random].Gender}', '${arrayforchange[random].AGEGroup}', '${arrayforchange[random].Education}', '${arrayforchange[random].Area}')">Փոխարինել</button>
			</td>
		</tr >
		`;
		Refusers.push(datachange);
		closewindow('confirm_Contenier');
		console.log(Refusers);
	} else {
		closewindow('confirm_Contenier');
		openrestart('none_Contenier');
	}
}


function sortArray(arr, prop) {
	arr.sort((a, b) => {
		return b[prop] - a[prop];
	});
}
function deleteperson(array) {
	for (let i = 0; i < array.length; i++) {
		DiasporaCopy.splice(array[i], 1);
	}
}
function pushanddel(index) {
	ChosenPeople.push(DiasporaCopy[index]);
	DiasporaCopy.splice(index, 1);
}
function plus(percode, genderPerson, educationPerson, agePerson, countryPerson) {
	let exarray = [];
	let caarray = [];
	let edarray = [];
	let agearray = [];
	let gearray = [];
	if (countryPerson === "Russia") {
		RussiaNumber[0]++;
	} else if (countryPerson === "USA") {
		USANumber[0]++;
	} else if (countryPerson === "France") {
		FranceNumber[0]++;
	} else if (countryPerson === "Georgia") {
		GeorgiaNumber[0]++;
	} else if (countryPerson === "Europe (excl. France)") {
		EuropeNumber[0]++;
	} else if (countryPerson === "Former SU (excl. RU & Geo)") {
		FormerSUNumber[0]++;
	} else if (countryPerson === "Middle East (excl. Tr & Ir)") {
		MiddleEastNumber[0]++;
	} else if (countryPerson === "Latin America") {
		LatinAmericaNumber[0]++;
	} else if (countryPerson === "Other") {
		OtherNumber[0]++;
	} else if (countryPerson === "Turkey") {
		TurkeyNumber[0]++;
	} else if (countryPerson === "Iran") {
		IranNumber[0]++;
	}
	if (educationPerson === "Secondary or unfinished secondary") {
		DSecondaryNumber[0]++;
	} else if (educationPerson === "Professional or vocational") {
		DProfessionalNumber[0]++;
	} else if (educationPerson === "University or postgraduate") {
		DUniversityNumber[0]++;
	}

	if (agePerson === "18-30") {
		DAge18_30Number[0]++;
	} else if (agePerson === "31-45") {
		DAge31_45Number[0]++;
	} else if (agePerson === "46-60") {
		DAge46_60Number[0]++;
	} else if (agePerson === "61+") {
		DAge61Number[0]++;
	}

	if (genderPerson === "Male") {
		DMale[0]++;
		var index = DiasporaCopy.findIndex(item => item.Code === percode);
		pushanddel(index);
	} else {
		DFemale[0]++;
		var index = DiasporaCopy.findIndex(item => item.Code === percode);
		pushanddel(index);
	}

	if (RussiaNumber[0] === RussiaNumber[1]) {
		caarray.push("Russia");
	} if (USANumber[0] === USANumber[1]) {
		caarray.push("USA");
	} if (FranceNumber[0] === FranceNumber[1]) {
		caarray.push("France");
	} if (GeorgiaNumber[0] === GeorgiaNumber[1]) {
		caarray.push("Georgia");
	} if (EuropeNumber[0] === EuropeNumber[1]) {
		caarray.push("Europe (excl. France)");
	} if (FormerSUNumber[0] === FormerSUNumber[1]) {
		caarray.push("Former SU (excl. RU & Geo)");
	} if (MiddleEastNumber[0] === MiddleEastNumber[1]) {
		caarray.push("Middle East (excl. Tr & Ir)");
	} if (LatinAmericaNumber[0] === LatinAmericaNumber[1]) {
		caarray.push("Latin America");
	} if (OtherNumber[0] === OtherNumber[1]) {
		caarray.push("Other");
	} if (TurkeyNumber[0] === TurkeyNumber[1]) {
		caarray.push("Turkey");
	} if (IranNumber[0] === IranNumber[1]) {
		caarray.push("Iran");
	}

	if (DSecondaryNumber[0] === DSecondaryNumber[1]) {
		edarray.push("Secondary or unfinished secondary");
	} if (DProfessionalNumber[0] === DProfessionalNumber[1]) {
		edarray.push("Professional or vocational");
	} if (DUniversityNumber[0] === DUniversityNumber[1]) {
		edarray.push("University or postgraduate");
	}

	if (DAge18_30Number[0] === DAge18_30Number[1]) {
		agearray.push("18-30");
	} if (DAge31_45Number[0] === DAge31_45Number[1]) {
		agearray.push("31-45");
	} if (DAge46_60Number[0] === DAge46_60Number[1]) {
		agearray.push("46-60");
	} if (DAge61Number[0] === DAge61Number[1]) {
		agearray.push("61+");
	}

	if (DFemale[0] === DFemale[1]) {
		gearray.push("Female");
	} if (DMale[0] === DMale[1]) {
		gearray.push("Male");
	}
	for (let i = 0; i < DiasporaCopy.length; i++) {
		if (caarray.includes(DiasporaCopy[i].CountryFinal) || edarray.includes(DiasporaCopy[i].Education) || agearray.includes(DiasporaCopy[i].AGEGroup) || gearray.includes(DiasporaCopy[i].Gender)) {
			exarray.push(i);
		}
	};
	deleteperson([...new Set(exarray)]);

}
function getAllIndexespushdell(arr, val) {
	let indexes = [];
	let i = -1;
	while ((i = arr.indexOf(val, i + 1)) != -1) {
		indexes.push(i);
	}
	for (let i = 0; i < indexes.length; i++) {
		plus(DiasporaCopy[indexes].Code, DiasporaCopy[indexes].Gender, DiasporaCopy[indexes].Education, DiasporaCopy[indexes].AGEGroup, DiasporaCopy[indexes].CountryFinal);
	}
}

function button_Diaspora() {
	/*----------------------------------------------------------------------------------------------*/
	localStorage.setItem("Diaspora", "x4d47fg7d4g8g");
	check();
	/*----------------------------------------------------------------------------------------------*/
	if (RussiaNumber[3] === 0) {
		getAllIndexespushdell(DiasporaCopy, "Russia");
	} if (USANumber[3] === 0) {
		getAllIndexespushdell(DiasporaCopy, "USA");
	} if (FranceNumber[3] === 0) {
		getAllIndexespushdell(DiasporaCopy, "France");
	} if (GeorgiaNumber[3] === 0) {
		getAllIndexespushdell(DiasporaCopy, "Georgia");
	} if (EuropeNumber[3] === 0) {
		getAllIndexespushdell(DiasporaCopy, "Europe (excl. France)");
	} if (FormerSUNumber[3] === 0) {
		getAllIndexespushdell(DiasporaCopy, "Former SU (excl. RU & Geo)");
	} if (MiddleEastNumber[3] === 0) {
		getAllIndexespushdell(DiasporaCopy, "Middle East (excl. Tr & Ir)");
	} if (LatinAmericaNumber[3] === 0) {
		getAllIndexespushdell(DiasporaCopy, "Latin America");
	} if (OtherNumber[3] === 0) {
		getAllIndexespushdell(DiasporaCopy, "Other");
	} if (TurkeyNumber[3] === 0) {
		getAllIndexespushdell(DiasporaCopy, "Turkey");
	} if (IranNumber[3] === 0) {
		getAllIndexespushdell(DiasporaCopy, "Iran");
	}

	if (DSecondaryNumber[3] === 0) {
		getAllIndexespushdell(DiasporaCopy, "Secondary or unfinished secondary");
	} if (DProfessionalNumber[3] === 0) {
		getAllIndexespushdell(DiasporaCopy, "Professional or vocational");
	} if (DUniversityNumber[3] === 0) {
		getAllIndexespushdell(DiasporaCopy, "University or postgraduate");
	}

	if (DAge18_30Number[3] === 0) {
		getAllIndexespushdell(DiasporaCopy, "18-30");
	} if (DAge31_45Number[3] === 0) {
		getAllIndexespushdell(DiasporaCopy, "31-40");
	} if (DAge46_60Number[3] === 0) {
		getAllIndexespushdell(DiasporaCopy, "46-60");
	} if (DAge61Number[3] === 0) {
		getAllIndexespushdell(DiasporaCopy, "61+");
	}

	if (DFemale[3] === 0) {
		getAllIndexespushdell(DiasporaCopy, "Female");
	} if (DMale[3] === 0) {
		getAllIndexespushdell(DiasporaCopy, "Male");
	}

}

closewindow('restart_Contenier');
closewindow('none_Contenier');
closewindow('confirm_Contenier');
check();

if (ChosenPeople.length === 0) {
	getNumbers();
	sortArray(NumberList, "num");
	plus("N4rt", "Male", "University or postgraduate", "31-45", "Turkey");
	plus("NPB9", "Male", "University or postgraduate", "31-45", "Turkey");
	Print(DiasporaCopy);
}