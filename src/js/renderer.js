const fs = require('fs');

let rawdata = fs.readFileSync('src/data/diaspora.json');
let DiasporaData = JSON.parse(rawdata);
let Diaspora = JSON.parse(JSON.stringify(DiasporaData[0]));
let DiasporaCopy = JSON.parse(JSON.stringify(DiasporaData[0]));
let ChosenPeople = JSON.parse(JSON.stringify(DiasporaData[1]));
let Refusers = JSON.parse(JSON.stringify(DiasporaData[2]));

let Numbercoun = [];
let Numbered = [];
let Numberage = [];
let Numbergender = [];


let RussiaNumber = [0, 39, 0, 0];
let USANumber = [0, 20, 0, 0];
let FranceNumber = [0, 9, 0, 0];
let GeorgiaNumber = [0, 6, 0, 0];
let EuropeNumber = [0, 6, 0, 0, {
	"Austria": [0, 1, 0, 0, false],
	"Belgium": [0, 1, 0, 0, false],
	"Cyprus": [0, 1, 0, 0, false],
	"CzechRepublic": [0, 1, 0, 0, false],
	"Denmark": [0, 1, 0, 0, false],
	"Estonia": [0, 1, 0, 0, false],
	"Finland": [0, 1, 0, 0, false],
	"Germany": [0, 1, 0, 0, false],
	"Greece": [0, 1, 0, 0, false],
	"Ireland": [0, 1, 0, 0, false],
	"Italy": [0, 1, 0, 0, false],
	"Netherlands": [0, 1, 0, 0, false],
	"Poland": [0, 1, 0, 0, false],
	"Romania": [0, 1, 0, 0, false],
	"Serbia": [0, 1, 0, 0, false],
	"Slovakia": [0, 1, 0, 0, false],
	"Spain": [0, 1, 0, 0, false],
	"Sweden": [0, 1, 0, 0, false],
	"Switzerland": [0, 1, 0, 0, false],
	"eUK": [0, 1, 0, 0, false]
}];
let FormerSUNumber = [0, 6, 0, 0, {
	"Belarus": [0, 1, 0, 0, false],
	"Kazakhstan": [0, 1, 0, 0, false],
	"Latvia": [0, 1, 0, 0, false],
	"Turkmenistan": [0, 1, 0, 0, false],
	"Ukraine": [0, 3, 0, 0, true]
}];
let MiddleEastNumber = [0, 4, 0, 0, {
	"Israel": [0, 1, 0, 0, false],
	"Lebanon": [0, 2, 0, 0, true],
	"mUAE": [0, 1, 0, 0, false]
}];
let LatinAmericaNumber = [0, 3, 0, 0, {
	"Argentina": [0, 2, 0, 0, true],
	"Brazil": [0, 1, 0, 0, false]
}];
let OtherNumber = [0, 3, 0, 0, {
	"Anguilla": [0, 1, 0, 0, true],
	"Australia": [0, 1, 0, 0, false],
	"Canada": [0, 2, 0, 0, true],
	"Chile": [0, 1, 0, 0, false],
	"Colombia": [0, 1, 0, 0, false],
	"Egypt": [0, 1, 0, 0, false],
	"Ethiopia": [0, 1, 0, 0, false],
	"Ghana": [0, 1, 0, 0, false],
	"India": [0, 1, 0, 0, false],
	"Korea": [0, 1, 0, 0, false],
	"SaudiArabia": [0, 1, 0, 0, false],
	"SriLanka": [0, 1, 0, 0, false],
	"SaudiArabia": [0, 1, 0, 0, false],
	"Uruguay": [0, 1, 0, 0, false],
	"WesternSahara": [0, 1, 0, 0, false]
}];
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
	Numbercoun = [];
	Numbered = [];
	Numberage = [];
	Numbergender = [];

	RussiaNumber[2] = 0;
	USANumber[2] = 0;
	FranceNumber[2] = 0;
	GeorgiaNumber[2] = 0;
	EuropeNumber[2] = 0;
	FormerSUNumber[2] = 0;
	MiddleEastNumber[2] = 0;
	LatinAmericaNumber[2] = 0;
	OtherNumber[2] = 0;
	TurkeyNumber[2] = 0;
	IranNumber[2] = 0;
	DSecondaryNumber[2] = 0;
	DProfessionalNumber[2] = 0;
	DUniversityNumber[2] = 0;
	DAge18_30Number[2] = 0;
	DAge31_45Number[2] = 0;
	DAge46_60Number[2] = 0;
	DAge61Number[2] = 0;
	DMale[2] = 0;
	DFemale[2] = 0;
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
			if (DiasporaCopy[i].Country === "Ukraine") {
				FormerSUNumber[4].Ukraine[2]++;
				FormerSUNumber[4].Ukraine[3] = FormerSUNumber[4].Ukraine[2] - FormerSUNumber[4].Ukraine[1];
			}
		} else if (DiasporaCopy[i].CountryFinal === "Middle East (excl. Tr & Ir)") {
			MiddleEastNumber[2]++;
			MiddleEastNumber[3] = MiddleEastNumber[2] - MiddleEastNumber[1];
			if (DiasporaCopy[i].Country === "Lebanon") {
				MiddleEastNumber[4].Lebanon[2]++;
				MiddleEastNumber[4].Lebanon[3] = MiddleEastNumber[4].Lebanon[2] - MiddleEastNumber[4].Lebanon[1];
			}
		} else if (DiasporaCopy[i].CountryFinal === "Latin America") {
			LatinAmericaNumber[2]++;
			LatinAmericaNumber[3] = LatinAmericaNumber[2] - LatinAmericaNumber[1];
			if (DiasporaCopy[i].Country === "Argentina") {
				LatinAmericaNumber[4].Argentina[2]++;
				LatinAmericaNumber[4].Argentina[3] = LatinAmericaNumber[4].Argentina[2] - LatinAmericaNumber[4].Argentina[1];
			}
		} else if (DiasporaCopy[i].CountryFinal === "Other") {
			OtherNumber[2]++;
			OtherNumber[3] = OtherNumber[2] - OtherNumber[1];
			if (DiasporaCopy[i].Country === "Anguilla") {
				OtherNumber[4].Anguilla[2]++;
				OtherNumber[4].Anguilla[3] = OtherNumber[4].Anguilla[2] - OtherNumber[4].Anguilla[1];
			} else if (DiasporaCopy[i].Country === "Canada") {
				OtherNumber[4].Canada[2]++;
				OtherNumber[4].Canada[3] = OtherNumber[4].Canada[2] - OtherNumber[4].Canada[1];
			}
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

		if (DiasporaCopy[i].AGEGroup === "31-45") {
			DAge31_45Number[2]++;
			DAge31_45Number[3] = DAge31_45Number[2] - DAge31_45Number[1];

		} else if (DiasporaCopy[i].AGEGroup === "18-30") {
			DAge18_30Number[2]++;
			DAge18_30Number[3] = DAge18_30Number[2] - DAge18_30Number[1];

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
	if (RussiaNumber[0] !== RussiaNumber[1]) {
		Numbercoun.push({ namegroup: "country", coun: "RussiaNumber", num: RussiaNumber[3] },);
	}
	if (USANumber[0] !== USANumber[1]) {
		Numbercoun.push({ namegroup: "country", coun: "USANumber", num: USANumber[3] },);
	}
	if (FranceNumber[0] !== FranceNumber[1]) {
		Numbercoun.push({ namegroup: "country", coun: "FranceNumber", num: FranceNumber[3] },);
	}
	if (GeorgiaNumber[0] !== GeorgiaNumber[1]) {
		Numbercoun.push({ namegroup: "country", coun: "GeorgiaNumber", num: GeorgiaNumber[3] },);
	}
	if (EuropeNumber[0] !== EuropeNumber[1]) {
		Numbercoun.push({ namegroup: "country", coun: "EuropeNumber", num: EuropeNumber[3] },);
	}
	if (FormerSUNumber[0] !== FormerSUNumber[1]) {
		Numbercoun.push({ namegroup: "country", coun: "FormerSUNumber", num: FormerSUNumber[3] },);
	}
	if (MiddleEastNumber[0] !== MiddleEastNumber[1]) {
		Numbercoun.push({ namegroup: "country", coun: "MiddleEastNumber", num: MiddleEastNumber[3] },);
	}
	if (LatinAmericaNumber[0] !== LatinAmericaNumber[1]) {
		Numbercoun.push({ namegroup: "country", coun: "LatinAmericaNumber", num: LatinAmericaNumber[3] },);
	}
	if (OtherNumber[0] !== OtherNumber[1]) {
		Numbercoun.push({ namegroup: "country", coun: "OtherNumber", num: OtherNumber[3] },);
	}
	if (TurkeyNumber[0] !== TurkeyNumber[1]) {
		Numbercoun.push({ namegroup: "country", coun: "TurkeyNumber", num: TurkeyNumber[3] },);
	}
	if (IranNumber[0] !== IranNumber[1]) {
		Numbercoun.push({ namegroup: "country", coun: "IranNumber", num: IranNumber[3] },);
	}


	if (DSecondaryNumber[0] !== DSecondaryNumber[1]) {
		Numbered.push({ namegroup: "education", coun: "DSecondaryNumber", num: DSecondaryNumber[3] },);
	}
	if (DProfessionalNumber[0] !== DProfessionalNumber[1]) {
		Numbered.push({ namegroup: "education", coun: "DProfessionalNumber", num: DProfessionalNumber[3] },);
	}
	if (DUniversityNumber[0] !== DUniversityNumber[1]) {
		Numbered.push({ namegroup: "education", coun: "DUniversityNumber", num: DUniversityNumber[3] },);
	}

	if (DAge18_30Number[0] !== DAge18_30Number[1]) {
		Numberage.push({ namegroup: "age", coun: "DAge18_30Number", num: DAge18_30Number[3] },);
	}
	if (DAge31_45Number[0] !== DAge31_45Number[1]) {
		Numberage.push({ namegroup: "age", coun: "DAge31_45Number", num: DAge31_45Number[3] },);
	}
	if (DAge46_60Number[0] !== DAge46_60Number[1]) {
		Numberage.push({ namegroup: "age", coun: "DAge46_60Number", num: DAge46_60Number[3] },);
	}
	if (DAge61Number[0] !== DAge61Number[1]) {
		Numberage.push({ namegroup: "age", coun: "DAge61Number", num: DAge61Number[3] },);
	}

	if (DMale[0] !== DMale[1]) {
		Numbergender.push({ namegroup: "gender", coun: "DMale", num: DMale[3] },);
	}
	if (DFemale[0] !== DFemale[1]) {
		Numbergender.push({ namegroup: "gender", coun: "DFemale", num: DFemale[3] },);
	}




	sortall();
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
	DiasporaData[1] = [];
	DiasporaData[2] = [];
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
	const isSameUser = (a, b) => a.Code === b.Code && a.Gender === b.Gender && a.Education === b.Education && a.AGEGroup === b.AGEGroup && a.CountryFinal === b.CountryFinal;
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
						<td>
							<button class="butt_changing" onclick="changeConfirm('${id - 1}','${person.Code}', '${person.CountryFinal}', '${person.Gender}', '${person.AGEGroup}', '${person.Education}')">Փոխարինել</button>
						</td>
					</tr >
	`
		)
		.join("");
}

function changeConfirm(id, code, country, gender, age, education) {
	document.getElementById("confirmbutt").setAttribute("onclick", `change('${id}','${code}', '${country}', '${gender}', '${age}', '${education}')`);
	document.getElementById("confirm_Contenier").classList.remove("hide");
	document.getElementById("confirmCode").innerHTML = code;

}

function change(id, code, country, gender, age, education) {
	let arrayDifference = getDifference(getDifference(Diaspora, Refusers), ChosenPeople);
	let index = arrayDifference.findIndex(item => item.Code === code);
	let datachange = arrayDifference[index];
	arrayDifference.splice(index, 1);
	let arrayforchange = arrayDifference.filter(peopledata => peopledata.AGEGroup === age && peopledata.Gender === gender && peopledata.Education === education && peopledata.CountryFinal === country);
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
			<td>
				<button class="butt_changing" onclick="changeConfirm('${id}','${arrayforchange[random].Code}', '${arrayforchange[random].CountryFinal}', '${arrayforchange[random].Gender}', '${arrayforchange[random].AGEGroup}', '${arrayforchange[random].Education}')">Փոխարինել</button>
			</td>
		</tr >
		`;
		Refusers.push(datachange);
		closewindow('confirm_Contenier');

	} else {
		closewindow('confirm_Contenier');
		openrestart('none_Contenier');
	}
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
function plus(percode, genderPerson, educationPerson, agePerson, countryPerson, country) {
	let exarray = [];
	let caarray = [];
	let caarray2 = [];
	let edarray = [];
	let agearray = [];
	let gearray = [];
	if (countryPerson === "Russia") {
		RussiaNumber[0]++;
		if (RussiaNumber[0] === RussiaNumber[1]) {
			caarray.push("Russia");
		}
	} else if (countryPerson === "USA") {
		USANumber[0]++;
		if (USANumber[0] === USANumber[1]) {
			caarray.push("USA");
		}
	} else if (countryPerson === "France") {
		FranceNumber[0]++;
		if (FranceNumber[0] === FranceNumber[1]) {
			caarray.push("France");
		}
	} else if (countryPerson === "Georgia") {
		GeorgiaNumber[0]++;
		if (GeorgiaNumber[0] === GeorgiaNumber[1]) {
			caarray.push("Georgia");
		}
	} else if (countryPerson === "Europe (excl. France)") {
		EuropeNumber[0]++;
		if (country === "Austria") {
			EuropeNumber[4].Austria[0]++;
			if (EuropeNumber[4].Austria[0] === EuropeNumber[4].Austria[1]) {
				caarray2.push("Austria");
			}
		} else if (country === "Belgium") {
			EuropeNumber[4].Belgium[0]++;
			if (EuropeNumber[4].Belgium[0] === EuropeNumber[4].Belgium[1]) {
				caarray2.push("Belgium");
			}
		} else if (country === "Cyprus") {
			EuropeNumber[4].Cyprus[0]++;
			if (EuropeNumber[4].Cyprus[0] === EuropeNumber[4].Cyprus[1]) {
				caarray2.push("Cyprus");
			}
		} else if (country === "CzechRepublic") {
			EuropeNumber[4].CzechRepublic[0]++;
			if (EuropeNumber[4].CzechRepublic[0] === EuropeNumber[4].CzechRepublic[1]) {
				caarray2.push("CzechRepublic");
			}
		} else if (country === "Denmark") {
			EuropeNumber[4].Denmark[0]++;
			if (EuropeNumber[4].Denmark[0] === EuropeNumber[4].Denmark[1]) {
				caarray.push("Denmark");
			}
		} else if (country === "Estonia") {
			EuropeNumber[4].Estonia[0]++;
			if (EuropeNumber[4].Estonia[0] === EuropeNumber[4].Estonia[1]) {
				caarray.push("Estonia");
			}
		} else if (country === "Finland") {
			EuropeNumber[4].Finland[0]++;
			if (EuropeNumber[4].Finland[0] === EuropeNumber[4].Finland[1]) {
				caarray.push("Finland");
			}
		} else if (country === "Germany") {
			EuropeNumber[4].Germany[0]++;
			if (EuropeNumber[4].Germany[0] === EuropeNumber[4].Germany[1]) {
				caarray.push("Germany");
			}
		} else if (country === "Greece") {
			EuropeNumber[4].Greece[0]++;
			if (EuropeNumber[4].Greece[0] === EuropeNumber[4].Greece[1]) {
				caarray.push("Greece");
			}
		} else if (country === "Ireland") {
			EuropeNumber[4].Ireland[0]++;
			if (EuropeNumber[4].Ireland[0] === EuropeNumber[4].Ireland[1]) {
				caarray.push("Ireland");
			}
		} else if (country === "Italy") {
			EuropeNumber[4].Italy[0]++;
			if (EuropeNumber[4].Italy[0] === EuropeNumber[4].Italy[1]) {
				caarray.push("Italy");
			}
		} else if (country === "Netherlands") {
			EuropeNumber[4].Netherlands[0]++;
			if (EuropeNumber[4].Netherlands[0] === EuropeNumber[4].Netherlands[1]) {
				caarray.push("Netherlands");
			}
		} else if (country === "Poland") {
			EuropeNumber[4].Poland[0]++;
			if (EuropeNumber[4].Poland[0] === EuropeNumber[4].Poland[1]) {
				caarray.push("Poland");
			}
		} else if (country === "Romania") {
			EuropeNumber[4].Romania[0]++;
			if (EuropeNumber[4].Romania[0] === EuropeNumber[4].Romania[1]) {
				caarray.push("Romania");
			}
		} else if (country === "Serbia") {
			EuropeNumber[4].Serbia[0]++;
			if (EuropeNumber[4].Serbia[0] === EuropeNumber[4].Serbia[1]) {
				caarray.push("Serbia");
			}
		} else if (country === "Slovakia") {
			EuropeNumber[4].Slovakia[0]++;
			if (EuropeNumber[4].Slovakia[0] === EuropeNumber[4].Slovakia[1]) {
				caarray.push("Slovakia");
			}
		} else if (country === "Spain") {
			EuropeNumber[4].Spain[0]++;
			if (EuropeNumber[4].Spain[0] === EuropeNumber[4].Spain[1]) {
				caarray.push("Spain");
			}
		} else if (country === "Sweden") {
			EuropeNumber[4].Sweden[0]++;
			if (EuropeNumber[4].Sweden[0] === EuropeNumber[4].Sweden[1]) {
				caarray.push("Sweden");
			}
		} else if (country === "Switzerland") {
			EuropeNumber[4].Switzerland[0]++;
			if (EuropeNumber[4].Switzerland[0] === EuropeNumber[4].Switzerland[1]) {
				caarray.push("Switzerland");
			}
		} else if (country === "UK") {
			EuropeNumber[4].eUK[0]++;
			if (EuropeNumber[4].eUK[0] === EuropeNumber[4].eUK[1]) {
				caarray.push("UK");
			}
		}
		if (EuropeNumber[0] === EuropeNumber[1]) {
			caarray.push("Europe (excl. France)");
		}
	} else if (countryPerson === "Former SU (excl. RU & Geo)") {
		FormerSUNumber[0]++;
		if (country === "Belarus") {
			FormerSUNumber[4].Belarus[0]++;
			if (FormerSUNumber[4].Belarus[0] === FormerSUNumber[4].Belarus[1]) {
				caarray.push('Belarus');
			}
		} else if (country === "Kazakhstan") {
			FormerSUNumber[4].Kazakhstan[0]++;
			if (FormerSUNumber[4].Kazakhstan[0] === FormerSUNumber[4].Kazakhstan[1]) {
				caarray.push('Kazakhstan');
			}
		} else if (country === "Latvia") {
			FormerSUNumber[4].Latvia[0]++;
			if (FranceNumber[4].Latvia[0] === FormerSUNumber[4].Latvia[1]) {
				caarray.push('Latvia');
			}
		} else if (country === "Turkmenistan") {
			FormerSUNumber[4].Turkmenistan[0]++;
			if (FormerSUNumber[4].Turkmenistan[0] === FormerSUNumber[4].Turkmenistan[1]) {
				caarray.push('Turkmenistan');
			}
		} else if (country === "Ukraine") {
			FormerSUNumber[4].Ukraine[0]++;
			if (FormerSUNumber[4].Ukraine[0] === FormerSUNumber[4].Ukraine[1]) {
				caarray.push('Ukraine');
			}
		}
		if (FormerSUNumber[0] === FormerSUNumber[1]) {
			caarray.push("Former SU (excl. RU & Geo)");
		}
	} else if (countryPerson === "Middle East (excl. Tr & Ir)") {
		MiddleEastNumber[0]++;
		if (country === "Israel") {
			MiddleEastNumber[4].Israel[0]++;
			if (MiddleEastNumber[4].Israel[0] === MiddleEastNumber[4].Israel[1]) {
				caarray.push('Israel');
			}
		} else if (country === "Lebanon") {
			MiddleEastNumber[4].Lebanon[0]++;
			if (MiddleEastNumber[4].Lebanon[0] === MiddleEastNumber[4].Lebanon[1]) {
				caarray.push('Lebanon');
			}
		} else if (country === "UAE") {
			MiddleEastNumber[4].mUAE[0]++;
			if (MiddleEastNumber[4].mUAE[0] === MiddleEastNumber[4].mUAE[1]) {
				caarray.push('UAE');
			}
		}
		if (MiddleEastNumber[0] === MiddleEastNumber[1]) {
			caarray.push("Middle East (excl. Tr & Ir)");
		}
	} else if (countryPerson === "Latin America") {
		LatinAmericaNumber[0]++;
		if (country === "Argentina") {
			LatinAmericaNumber[4].Argentina[0]++;
			if (LatinAmericaNumber[4].Argentina[0] === LatinAmericaNumber[4].Argentina[1]) {
				caarray.push('Argentina');
			}
		} else if (country === "Brazil") {
			LatinAmericaNumber[4].Brazil[0]++;
			if (LatinAmericaNumber[4].Brazil[0] === LatinAmericaNumber[4].Brazil[1]) {
				caarray.push('Brazil');
			}
		}
		if (LatinAmericaNumber[0] === LatinAmericaNumber[1]) {
			caarray.push("Latin America");
		}
	} else if (countryPerson === "Other") {
		OtherNumber[0]++;
		if (country === "Anguilla") {
			OtherNumber[4].Anguilla[0]++;
			if (OtherNumber[4].Anguilla[0] === OtherNumber[4].Anguilla[1]) {
				caarray.push('Anguilla');
			}
		} else if (country === "Australia") {
			OtherNumber[4].Australia[0]++;
			if (OtherNumber[4].Australia[0] === OtherNumber[4].Australia[1]) {
				caarray.push('Australia');
			}
		} else if (country === "Canada") {
			OtherNumber[4].Canada[0]++;
			if (OtherNumber[4].Canada[0] === OtherNumber[4].Canada[1]) {
				caarray.push('Canada');
			}
		} else if (country === "Chile") {
			OtherNumber[4].Chile[0]++;
			if (OtherNumber[4].Chile[0] === OtherNumber[4].Chile[1]) {
				caarray.push('Chile');
			}
		} else if (country === "Colombia") {
			OtherNumber[4].Colombia[0]++;
			if (OtherNumber[4].Colombia[0] === OtherNumber[4].Colombia[1]) {
				caarray.push('Colombia');
			}
		} else if (country === "Egypt") {
			OtherNumber[4].Egypt[0]++;
			if (OtherNumber[4].Egypt[0] === OtherNumber[4].Egypt[1]) {
				caarray.push('Egypt');
			}
		} else if (country === "Ethiopia") {
			OtherNumber[4].Ethiopia[0]++;
			if (OtherNumber[4].Ethiopia[0] === OtherNumber[4].Ethiopia[1]) {
				caarray.push('Ethiopia');
			}
		} else if (country === "Ghana") {
			OtherNumber[4].Ghana[0]++;
			if (OtherNumber[4].Ghana[0] === OtherNumber[4].Ghana[1]) {
				caarray.push('Ghana');
			}
		} else if (country === "India") {
			OtherNumber[4].India[0]++;
			if (OtherNumber[4].India[0] === OtherNumber[4].India[1]) {
				caarray.push('India');
			}
		} else if (country === "Korea") {
			OtherNumber[4].Korea[0]++;
			if (OtherNumber[4].Korea[0] === OtherNumber[4].Korea[1]) {
				caarray.push('Korea');
			}
		} else if (country === "Saudi Arabia") {
			OtherNumber[4].SaudiArabia[0]++;
			if (OtherNumber[4].SaudiArabia[0] === OtherNumber[4].SaudiArabia[1]) {
				caarray.push('Saudi Arabia');
			}
		} else if (country === "Sri Lanka") {
			OtherNumber[4].SriLanka[0]++;
			if (OtherNumber[4].SriLanka[0] === OtherNumber[4].SriLanka[1]) {
				caarray.push('Sri Lanka');
			}
		} else if (country === "Saudi Arabia") {
			OtherNumber[4].SaudiArabia[0]++;
			if (OtherNumber[4].SaudiArabia[0] === OtherNumber[4].SaudiArabia[1]) {
				caarray.push('Saudi Arabia');
			}
		} else if (country === "Uruguay") {
			OtherNumber[4].Uruguay[0]++;
			if (OtherNumber[4].Uruguay[0] === OtherNumber[4].Uruguay[1]) {
				caarray.push('Uruguay');
			}
		} else if (country === "Western Sahara") {
			OtherNumber[4].WesternSahara[0]++;
			if (OtherNumber[4].WesternSahara[0] === OtherNumber[4].WesternSahara[1]) {
				caarray.push('Western Sahara');
			}
		}
		if (OtherNumber[0] === OtherNumber[1]) {
			caarray.push("Other");
		}
	} else if (countryPerson === "Turkey") {
		TurkeyNumber[0]++;
		if (TurkeyNumber[0] === TurkeyNumber[1]) {
			caarray.push("Turkey");
		}
	} else if (countryPerson === "Iran") {
		IranNumber[0]++;
		if (IranNumber[0] === IranNumber[1]) {
			caarray.push("Iran");
		}
	}
	if (educationPerson === "Secondary or unfinished secondary") {
		DSecondaryNumber[0]++;
		if (DSecondaryNumber[0] === DSecondaryNumber[1]) {
			edarray.push("Secondary or unfinished secondary");
		}
	} else if (educationPerson === "Professional or vocational") {
		DProfessionalNumber[0]++;
		if (DProfessionalNumber[0] === DProfessionalNumber[1]) {
			edarray.push("Professional or vocational");
		}
	} else if (educationPerson === "University or postgraduate") {
		DUniversityNumber[0]++;
		if (DUniversityNumber[0] === DUniversityNumber[1]) {
			edarray.push("University or postgraduate");
		}
	}

	if (agePerson === "18-30") {
		DAge18_30Number[0]++;
		if (DAge18_30Number[0] === DAge18_30Number[1]) {
			agearray.push("18-30");
		}
	} else if (agePerson === "31-45") {
		DAge31_45Number[0]++;
		if (DAge31_45Number[0] === DAge31_45Number[1]) {
			agearray.push("31-45");
		}
	} else if (agePerson === "46-60") {
		DAge46_60Number[0]++;
		if (DAge46_60Number[0] === DAge46_60Number[1]) {
			agearray.push("46-60");
		}
	} else if (agePerson === "61+") {
		DAge61Number[0]++;
		if (DAge61Number[0] === DAge61Number[1]) {
			agearray.push("61+");
		}
	}

	if (genderPerson === "Male") {
		DMale[0]++;
		var index = DiasporaCopy.findIndex(item => item.Code === percode);
		pushanddel(index);
		if (DFemale[0] === DFemale[1]) {
			gearray.push("Female");
		}
	} else {
		DFemale[0]++;
		var index = DiasporaCopy.findIndex(item => item.Code === percode);
		pushanddel(index);
		if (DMale[0] === DMale[1]) {
			gearray.push("Male");
		}
	}



	for (let i = 0; i < DiasporaCopy.length; i++) {
		if (caarray.includes(DiasporaCopy[i].CountryFinal) || caarray.includes(DiasporaCopy[i].Country) || edarray.includes(DiasporaCopy[i].Education) || agearray.includes(DiasporaCopy[i].AGEGroup) || gearray.includes(DiasporaCopy[i].Gender)) {
			exarray.push(i);
		}
	};
	deleteperson([...new Set(exarray)]);
	getNumbers();

}
function getAllIndexespushdell(arr, val) {
	let arr2 = arr.map(function (per) {
		return per.CountryFinal;
	});
	let indexes = [];
	let i = -1;
	while ((i = arr2.indexOf(val, i + 1)) !== -1) {
		indexes.push(i);
	}
	for (let i = 0; i < indexes.length; i++) {
		plus(Diaspora[indexes[i]].Code, Diaspora[indexes[i]].Gender, Diaspora[indexes[i]].Education, Diaspora[indexes[i]].AGEGroup, Diaspora[indexes[i]].CountryFinal, Diaspora[indexes[i]].country);

	}

}

function getMultipleRandom(allcou, couname, num) {
	let coudata = [];
	let i = -1;
	while ((i = allcou.indexOf(couname, i + 1)) !== -1) {
		coudata.push(i);
	}
	const shuffled = [...coudata].sort(() => 0.5 - Math.random());
	return shuffled.slice(0, num);
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
		getAllIndexespushdell(Diaspora, "Turkey");
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

	let arr = DiasporaCopy.map(function (per) {
		return per.Country;
	});

	let indexes = [];
	let indexesper = [];
	if (FormerSUNumber[4].Ukraine[0] !== FormerSUNumber[4].Ukraine[1]) {
		let randomUkraine = getMultipleRandom(arr, "Ukraine", FormerSUNumber[4].Ukraine[1]);
		indexes = indexes.concat(randomUkraine);
	} if (MiddleEastNumber[4].Lebanon[0] !== MiddleEastNumber[4].Lebanon[1]) {
		let randomLebanon = getMultipleRandom(arr, "Lebanon", MiddleEastNumber[4].Lebanon[1]);
		indexes = indexes.concat(randomLebanon);
	} if (LatinAmericaNumber[4].Argentina[0] !== LatinAmericaNumber[4].Argentina[1]) {
		let randomArgentina = getMultipleRandom(arr, "Argentina", LatinAmericaNumber[4].Argentina[1]);
		indexes = indexes.concat(randomArgentina);
	} if (OtherNumber[4].Anguilla[0] !== OtherNumber[4].Anguilla[1]) {
		let randomAnguilla = getMultipleRandom(arr, "Anguilla", OtherNumber[4].Anguilla[1]);
		indexes = indexes.concat(randomAnguilla);
	}if (OtherNumber[4].Canada[0] !== OtherNumber[4].Canada[1]) {
		let randomCanada = getMultipleRandom(arr, "Canada", OtherNumber[4].Canada[1]);
		indexes = indexes.concat(randomCanada);
	}

	for (let i = 0; i < indexes.length; i++) {
		indexesper.push(JSON.parse(`{"Code": "${DiasporaCopy[indexes[i]].Code}", "Gender": "${DiasporaCopy[indexes[i]].Gender}", "Education": "${DiasporaCopy[indexes[i]].Education}", "AGEGroup": "${DiasporaCopy[indexes[i]].AGEGroup}", "CountryFinal": "${DiasporaCopy[indexes[i]].CountryFinal}", "Country" :"${DiasporaCopy[indexes[i]].Country}"}`));
		/*hanel patadir*/check();
	}
	indexesper.forEach(element => plus(element.Code, element.Gender, element.Education, element.AGEGroup, element.CountryFinal, element.Country));
console.log(ChosenPeople)
}
function sortall() {
	Numbercoun.sort((a, b) => {
		return a.num - b.num;
	});
	Numbered.sort((a, b) => {
		return a.num - b.num;
	});
	Numberage.sort((a, b) => {
		return a.num - b.num;
	});
	Numbergender.sort((a, b) => {
		return a.num - b.num;
	});

}

closewindow('restart_Contenier');
closewindow('none_Contenier');
closewindow('confirm_Contenier');
check();

if (ChosenPeople.length === 0) {
	getNumbers();
	Print(DiasporaCopy);
}
