const fs = require('fs');
const xlsx = require('xlsx');

let rawdata = fs.readFileSync('src/data/diaspora.json');
let DiasporaData = JSON.parse(rawdata);
let Diaspora = JSON.parse(JSON.stringify(DiasporaData[0]));
let DiasporaCopy = JSON.parse(JSON.stringify(DiasporaData[0]));
let ChosenPeople = JSON.parse(JSON.stringify(DiasporaData[1]));
let Refusers = JSON.parse(JSON.stringify(DiasporaData[2]));
//Armenia
let Armrawdata = fs.readFileSync('src/data/armenia.json');
let ArmeniaData = JSON.parse(Armrawdata);
let Armenia = JSON.parse(JSON.stringify(ArmeniaData[0]));
let ArmeniaCopy = JSON.parse(JSON.stringify(ArmeniaData[0]));
let ArmChosenPeople = JSON.parse(JSON.stringify(ArmeniaData[1]));
let ArmRefusers = JSON.parse(JSON.stringify(ArmeniaData[2]));



//Armenia//
let ArmUrbanNumber = [0, 27, 0, 0];
let ArmCountryNumber = [0, 36, 0, 0];
let YerevanNumber = [0, 37, 0, 0];
//Armenia//

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
//Armenia
let ArmSecondaryNumber = [0, 21, 0, 0];
let ArmProfessionalNumber = [0, 55, 0, 0];
let ArmUniversityNumber = [0, 24, 0, 0];
let ArmAge18_30Number = [0, 22, 0, 0];
let ArmAge31_45Number = [0, 31, 0, 0];
let ArmAge46_60Number = [0, 23, 0, 0];
let ArmAge61Number = [0, 24, 0, 0];
let ArmFemale = [0, 53, 0, 0];
let ArmMale = [0, 47, 0, 0];

function getNumberChosenPeople() {
	/*	RussiaNumber[2] = 0;
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
		FormerSUNumber[4].Ukraine[2] = 0;
		MiddleEastNumber[4].Lebanon[2] = 0;
		OtherNumber[4].Anguilla[2] = 0;
		OtherNumber[4].Anguilla[2] = 0;
		RussiaNumber[0] = 0;
		USANumber[0] = 0;
		FranceNumber[0] = 0;
		GeorgiaNumber[0] = 0;
		EuropeNumber[0] = 0;
		FormerSUNumber[0] = 0;
		MiddleEastNumber[0] = 0;
		LatinAmericaNumber[0] = 0;
		OtherNumber[0] = 0;
		TurkeyNumber[0] = 0;
		IranNumber[0] = 0;
		DSecondaryNumber[0] = 0;
		DProfessionalNumber[0] = 0;
		DUniversityNumber[0] = 0;
		DAge18_30Number[0] = 0;
		DAge31_45Number[0] = 0;
		DAge46_60Number[0] = 0;
		DAge61Number[0] = 0;
		DMale[0] = 0;
		DFemale[0] = 0;
		FormerSUNumber[4].Ukraine[0] = 0;
		MiddleEastNumber[4].Lebanon[0] = 0;
		OtherNumber[4].Anguilla[0] = 0;
		OtherNumber[4].Anguilla[0] = 0; */

	for (let i = 0; ChosenPeople.length > i; i++) {
		const index = ChosenPeople.indexOf(undefined);
		if (index > -1) {
			ChosenPeople.splice(index, 1);
		}
	}

	DiasporaCopy = getDifference(Diaspora, ChosenPeople);

	for (let i = 0; ChosenPeople.length > i; i++) {
		if (ChosenPeople[i].CountryFinal === "Russia") {
			RussiaNumber[0]++;
		} else if (ChosenPeople[i].CountryFinal === "USA") {
			USANumber[0]++;
		} else if (ChosenPeople[i].CountryFinal === "France") {
			FranceNumber[0]++;
		} else if (ChosenPeople[i].CountryFinal === "Georgia") {
			GeorgiaNumber[0]++;
		} else if (ChosenPeople[i].CountryFinal === "Europe (excl. France)") {
			EuropeNumber[0]++;
		} else if (ChosenPeople[i].CountryFinal === "Former SU (excl. RU & Geo)") {
			FormerSUNumber[0]++;
			if (ChosenPeople[i].Country === "Ukraine") {
				FormerSUNumber[4].Ukraine[0]++;
			}
		} else if (ChosenPeople[i].CountryFinal === "Middle East (excl. Tr & Ir)") {
			MiddleEastNumber[0]++;
			if (ChosenPeople[i].Country === "Lebanon") {
				MiddleEastNumber[4].Lebanon[0]++;
			}
		} else if (ChosenPeople[i].CountryFinal === "Latin America") {
			LatinAmericaNumber[0]++;
			if (ChosenPeople[i].Country === "Argentina") {
				LatinAmericaNumber[4].Argentina[0]++;
			}
		} else if (ChosenPeople[i].CountryFinal === "Other") {
			OtherNumber[0]++;
			if (ChosenPeople[i].Country === "Anguilla") {
				OtherNumber[4].Anguilla[0]++;
			} else if (ChosenPeople[i].Country === "Canada") {
				OtherNumber[4].Canada[0]++;
			}
		} else if (ChosenPeople[i].CountryFinal === "Turkey") {
			TurkeyNumber[0]++;
		} else if (ChosenPeople[i].CountryFinal === "Iran") {
			IranNumber[0]++;
		}
		if (ChosenPeople[i].Education === "Secondary or unfinished secondary") {
			DSecondaryNumber[0]++;
		} else if (ChosenPeople[i].Education === "Professional or vocational") {
			DProfessionalNumber[0]++;
		} else if (ChosenPeople[i].Education === "University or postgraduate") {
			DUniversityNumber[0]++;
		}

		if (ChosenPeople[i].AGEGroup === "31-45") {
			DAge31_45Number[0]++;

		} else if (ChosenPeople[i].AGEGroup === "18-30") {
			DAge18_30Number[0]++;

		} else if (ChosenPeople[i].AGEGroup === "46-60") {
			DAge46_60Number[0]++;
		} else if (ChosenPeople[i].AGEGroup === "61+") {
			DAge61Number[0]++;
		}

		if (ChosenPeople[i].Gender === "Male") {
			DMale[0]++;

		} else {
			DFemale[0]++;
		}
	}
}

//Armenia
function getNumberArmChosenPeople() {

	for (let i = 0; ArmChosenPeople.length > i; i++) {
		const index = ArmChosenPeople.indexOf(undefined);
		if (index > -1) {
			ArmChosenPeople.splice(index, 1);
		}
	}

	ArmeniaCopy = getDifference(Armenia, ArmChosenPeople);

	for (let i = 0; ArmChosenPeople.length > i; i++) {
		if (ArmChosenPeople[i].CountryFinal === "Urban") {
			ArmUrbanNumber[0]++;
		} else if (ArmChosenPeople[i].CountryFinal === "ACountry") {
			ArmCountryNumber[0]++;
		} else if (ArmChosenPeople[i].CountryFinal === "Yerevan") {
			YerevanNumber[0]++;
	
		if (ArmChosenPeople[i].Education === "Secondary or unfinished secondary") {
			ArmSecondaryNumber[0]++;
		} else if (ArmChosenPeople[i].Education === "Professional or vocational") {
			ArmProfessionalNumber[0]++;
		} else if (ArmChosenPeople[i].Education === "University or postgraduate") {
			ArmUniversityNumber[0]++;
		}

		if (ArmChosenPeople[i].AGEGroup === "31-45") {
			ArmAge31_45Number[0]++;

		} else if (ArmChosenPeople[i].AGEGroup === "18-30") {
			ArmAge18_30Number[0]++;

		} else if (ArmChosenPeople[i].AGEGroup === "46-60") {
			ArmAge46_60Number[0]++;
		} else if (ArmChosenPeople[i].AGEGroup === "61+") {
			ArmAge61Number[0]++;
		}

		if (ArmChosenPeople[i].Gender === "Male") {
			ArmMale[0]++;

		} else {
			ArmFemale[0]++;
		}
	}
}
function getNumbers() {
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
	FormerSUNumber[4].Ukraine[2] = 0;
	MiddleEastNumber[4].Lebanon[2] = 0;
	OtherNumber[4].Anguilla[2] = 0;
	OtherNumber[4].Anguilla[2] = 0;
	for (let i = 0; i < DiasporaCopy.length; i++) {
		if (DiasporaCopy[i].CountryFinal === "Russia") {
			RussiaNumber[2]++;
			RussiaNumber[3] = RussiaNumber[2] - RussiaNumber[1] + RussiaNumber[0];
		} else if (DiasporaCopy[i].CountryFinal === "USA") {
			USANumber[2]++;
			USANumber[3] = USANumber[2] - USANumber[1] + USANumber[0];
		} else if (DiasporaCopy[i].CountryFinal === "France") {
			FranceNumber[2]++;
			FranceNumber[3] = FranceNumber[2] - FranceNumber[1] + FranceNumber[0];
		} else if (DiasporaCopy[i].CountryFinal === "Georgia") {
			GeorgiaNumber[2]++;
			GeorgiaNumber[3] = GeorgiaNumber[2] - GeorgiaNumber[1] + GeorgiaNumber[0];
		} else if (DiasporaCopy[i].CountryFinal === "Europe (excl. France)") {
			EuropeNumber[2]++;
			EuropeNumber[3] = EuropeNumber[2] - EuropeNumber[1] + EuropeNumber[0];
		} else if (DiasporaCopy[i].CountryFinal === "Former SU (excl. RU & Geo)") {
			FormerSUNumber[2]++;
			FormerSUNumber[3] = FormerSUNumber[2] - FormerSUNumber[1] + FormerSUNumber[0];
			if (DiasporaCopy[i].Country === "Ukraine") {
				FormerSUNumber[4].Ukraine[2]++;
				FormerSUNumber[4].Ukraine[3] = FormerSUNumber[4].Ukraine[2] - FormerSUNumber[4].Ukraine[1] + FormerSUNumber[4].Ukraine[0];
			}
		} else if (DiasporaCopy[i].CountryFinal === "Middle East (excl. Tr & Ir)") {
			MiddleEastNumber[2]++;
			MiddleEastNumber[3] = MiddleEastNumber[2] - MiddleEastNumber[1] + MiddleEastNumber[0];
			if (DiasporaCopy[i].Country === "Lebanon") {
				MiddleEastNumber[4].Lebanon[2]++;
				MiddleEastNumber[4].Lebanon[3] = MiddleEastNumber[4].Lebanon[2] - MiddleEastNumber[4].Lebanon[1] + MiddleEastNumber[4].Lebanon[0];
			}
		} else if (DiasporaCopy[i].CountryFinal === "Latin America") {
			LatinAmericaNumber[2]++;
			LatinAmericaNumber[3] = LatinAmericaNumber[2] - LatinAmericaNumber[1] + LatinAmericaNumber[0];
			if (DiasporaCopy[i].Country === "Argentina") {
				LatinAmericaNumber[4].Argentina[2]++;
				LatinAmericaNumber[4].Argentina[3] = LatinAmericaNumber[4].Argentina[2] - LatinAmericaNumber[4].Argentina[1] + LatinAmericaNumber[4].Argentina[0];
			}
		} else if (DiasporaCopy[i].CountryFinal === "Other") {
			OtherNumber[2]++;
			OtherNumber[3] = OtherNumber[2] - OtherNumber[1] + OtherNumber[0];
			if (DiasporaCopy[i].Country === "Anguilla") {
				OtherNumber[4].Anguilla[2]++;
				OtherNumber[4].Anguilla[3] = OtherNumber[4].Anguilla[2] - OtherNumber[4].Anguilla[1] + OtherNumber[4].Anguilla[0];
			} else if (DiasporaCopy[i].Country === "Canada") {
				OtherNumber[4].Canada[2]++;
				OtherNumber[4].Canada[3] = OtherNumber[4].Canada[2] - OtherNumber[4].Canada[1] + OtherNumber[4].Canada[0];
			}
		} else if (DiasporaCopy[i].CountryFinal === "Turkey") {
			TurkeyNumber[2]++;
			TurkeyNumber[3] = TurkeyNumber[2] - TurkeyNumber[1] + TurkeyNumber[0];
		} else if (DiasporaCopy[i].CountryFinal === "Iran") {
			IranNumber[2]++;
			IranNumber[3] = IranNumber[2] - IranNumber[1] + IranNumber[0];
		}
		if (DiasporaCopy[i].Education === "Secondary or unfinished secondary") {
			DSecondaryNumber[2]++;
			DSecondaryNumber[3] = DSecondaryNumber[2] - DSecondaryNumber[1] + DSecondaryNumber[0];
		} else if (DiasporaCopy[i].Education === "Professional or vocational") {
			DProfessionalNumber[2]++;
			DProfessionalNumber[3] = DProfessionalNumber[2] - DProfessionalNumber[1] + DProfessionalNumber[0];
		} else if (DiasporaCopy[i].Education === "University or postgraduate") {
			DUniversityNumber[2]++;
			DUniversityNumber[3] = DUniversityNumber[2] - DUniversityNumber[1] + DUniversityNumber[0];
		}

		if (DiasporaCopy[i].AGEGroup === "31-45") {
			DAge31_45Number[2]++;
			DAge31_45Number[3] = DAge31_45Number[2] - DAge31_45Number[1] + DAge31_45Number[0];

		} else if (DiasporaCopy[i].AGEGroup === "18-30") {
			DAge18_30Number[2]++;
			DAge18_30Number[3] = DAge18_30Number[2] - DAge18_30Number[1] + DAge18_30Number[0];

		} else if (DiasporaCopy[i].AGEGroup === "46-60") {
			DAge46_60Number[2]++;
			DAge46_60Number[3] = DAge46_60Number[2] - DAge46_60Number[1] + DAge46_60Number[0];
		} else if (DiasporaCopy[i].AGEGroup === "61+") {
			DAge61Number[2]++;
			DAge61Number[3] = DAge61Number[2] - DAge61Number[1] + DAge61Number[0];
		}

		if (DiasporaCopy[i].Gender === "Male") {
			DMale[2]++;
			DMale[3] = DMale[2] - DMale[1] + DMale[0];

		} else {
			DFemale[2]++;
			DFemale[3] = DFemale[2] - DFemale[1] + DFemale[0];
		}
	}

}

//Armenia
function getNumbers() {
	ArmUrbanNumber[2] = 0;
	ArmCountryNumber[2] = 0;
	YerevanNumber[2] = 0;
	for (let i = 0; i < ArmeniaCopy.length; i++) {
		if (ArmeniaCopy[i].CountryFinal === "Urban") {
			ArmUrbanNumber[2]++;
			ArmUrbanNumber[3] = ArmUrbanNumber[2] - ArmUrbanNumber[1] + ArmUrbanNumber[0];
		} else if (ArmeniaCopy[i].CountryFinal === "Country") {
			ArmCountryNumber[2]++;
			ArmCountryNumber[3] = ArmCountryNumber[2] - ArmCountryNumber[1] + ArmCountryNumber[0];
		} else if (ArmeniaCopy[i].CountryFinal === "Yerevan") {
			YerevanNumber[2]++;
			YerevanNumber[3] = YerevanNumber[2] - YerevanNumber[1] + YerevanNumber[0];
		
		if (ArmeniaCopy[i].Education === "Secondary or unfinished secondary") {
			ArmSecondaryNumber[2]++;
			ArmSecondaryNumber[3] = ArmSecondaryNumber[2] - ArmSecondaryNumber[1] + ArmSecondaryNumber[0];
		} else if (ArmeniaCopy[i].Education === "Professional or vocational") {
			ArmProfessionalNumber[2]++;
			ArmProfessionalNumber[3] = ArmProfessionalNumber[2] - ArmProfessionalNumber[1] + ArmProfessionalNumber[0];
		} else if (ArmeniaCopy[i].Education === "University or postgraduate") {
			ArmUniversityNumber[2]++;
			ArmUniversityNumber[3] = ArmUniversityNumber[2] - ArmUniversityNumber[1] + DUniverArmUniversityNumberityNumber[0];
		}

		if (ArmeniaCopy[i].AGEGroup === "31-45") {
			ArmAge31_45Number[2]++;
			ArmAge31_45Number[3] = ArmAge31_45Number[2] - ArmAge31_45Number[1] + ArmAge31_45Number[0];

		} else if (ArmeniaCopy[i].AGEGroup === "18-30") {
			ArmAge18_30Number[2]++;
			ArmAge18_30Number[3] = ArmAge18_30Number[2] - ArmAge18_30Number[1] + ArmAge18_30Number[0];

		} else if (ArmeniaCopy[i].AGEGroup === "46-60") {
			ArmAge46_60Number[2]++;
			ArmAge46_60Number[3] = ArmAge46_60Number[2] - ArmAge46_60Number[1] + ArmAge46_60Number[0];
		} else if (ArmeniaCopy[i].AGEGroup === "61+") {
			ArmAge61Number[2]++;
			ArmAge61Number[3] = ArmAge61Number[2] - ArmAge61Number[1] + ArmAge61Number[0];
		}

		if (ArmeniaCopy[i].Gender === "Male") {
			ArmMale[2]++;
			ArmMale[3] = ArmMale[2] - ArmMale[1] + ArmMale[0];

		} else {
			ArmFemale[2]++;
			ArmFemale[3] = ArmFemale[2] - ArmFemale[1] + ArmFemale[0];
		}
	}

}
/*Start Functional*/
function check() {////////////////////////////
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

	if (ChosenPeople.length !== 0) {
		document.getElementById("openrestart").classList.remove("hide");
		document.getElementById("openrestart").classList.add("restart");
		document.getElementById("openprint").classList.remove("hide");
		document.getElementById("openprint").classList.add("print");
	} else {
		document.getElementById("openrestart").classList.add("hide");
		document.getElementById("openrestart").classList.remove("restart");
		document.getElementById("openprint").classList.add("hide");
		document.getElementById("openprint").classList.remove("print");
	}
}
function closewindow(winid) {////////////////////////////
	document.getElementById(winid).classList.add("hide");
}
function openrestart(winid) {////////////////////////////
	document.getElementById(winid).classList.remove("hide");
}
function saveDataDiaspora() {////////////////////////////
	DiasporaData[1] = ChosenPeople;
	DiasporaData[2] = Refusers;
	let data = JSON.stringify(DiasporaData);
	fs.writeFileSync('src/data/diaspora.json', data);

}
function clearstorage() {////////////////////////////
	DiasporaData[1] = [];
	DiasporaData[2] = [];
	let data = JSON.stringify(DiasporaData);
	fs.writeFileSync('src/data/diaspora.json', data);
	closewindow("confirm_Contenier");
	localStorage.clear();
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

function getDifference(a, b) {////////////////////////////
	const isSameUser = (a, b) => a.Code === b.Code && a.Gender === b.Gender && a.Education === b.Education && a.AGEGroup === b.AGEGroup && a.CountryFinal === b.CountryFinal;
	const onlyInLeft = (left, right, compareFunction) =>
		left.filter(leftValue =>
			!right.some(rightValue =>
				compareFunction(leftValue, rightValue)));
	const onlyInA = onlyInLeft(a, b, isSameUser);
	const onlyInB = onlyInLeft(b, a, isSameUser);
	return [...onlyInA, ...onlyInB];
}

function Print(people, idname) {////////////////////////////
	let id = 1;
	document.getElementById(idname).innerHTML = people
		.map(
			person =>
				`
					<tr id="${id++}">
						<td>${id - 1}</td>
						<td>${person.Code}</td>
						<td>${person.CountryFinal}</td>
						<td>${person.Country}</td>
						<td>${person.Gender}</td>
						<td>${person.AGEGroup}</td>
						<td>${person.Education}</td>
						<td>
							<button class="butt_changing" onclick="changeConfirm('${id - 1}','${person.Code}', '${person.CountryFinal}', '${person.Gender}', '${person.AGEGroup}', '${person.Education}', '${person.Country}')">Փոխարինել</button>
						</td>
					</tr >
	`
		)
		.join("");
}
function PrintChange(people, idname, id2, code2, country2, gender2, age2, education2, percountry2) {////////////////////////////
	let id = 1;
	document.getElementById(idname).innerHTML = people
		.map(
			person =>
				`
					<tr id="${'myid' + id++}">
						<td>${id - 1}</td>
						<td>${person.Code}</td>
						<td>${person.CountryFinal}</td>
						<td>${person.Country}</td>
						<td>${person.Gender}</td>
						<td>${person.AGEGroup}</td>
						<td>${person.Education}</td>
						<td>
							<button class="butt_changing" onclick="change('${id - 1}','${person.Code}', '${person.CountryFinal}', '${person.Gender}', '${person.AGEGroup}', '${person.Education}', '${person.Country}', '${id2}', '${code2}', '${country2}', '${gender2}', '${age2}', '${education2}', '${percountry2}')">Փոխարինել</button>
						</td>
					</tr >
	`
		)
		.join("");
}

function changeConfirm(id, code, country, gender, age, education, percountry, ifpayman) {////////////////////////////
	//document.getElementById("confirmbutt").setAttribute("onclick", `change('${id}','${code}', '${country}', '${gender}', '${age}', '${education}')`);
	document.getElementById("confirm_Contenier").classList.remove("hide");
	document.getElementById("confirmCode").innerHTML = code + ", " + country + ", " + percountry + ", " + gender + ", " + age + ", " + education;
	if (country === "Armenia") {
		/**/let arrayDifference = getDifference(getDifference(Diaspora, Refusers), ChosenPeople);
	}else if (ifpayman === "Artsakh"){
		/**/let arrayDifference = getDifference(getDifference(Diaspora, Refusers), ChosenPeople);
	}else{
		let arrayDifference = getDifference(getDifference(Diaspora, Refusers), ChosenPeople);
	}
	

	let changeArr = [];
	let changeArr1 = [];
	let changeArr2 = [];
	let changeArr3 = [];
	let changeArr4 = [];
	let changeArr5 = [];
	let changeArr6 = [];
	let changeArr7 = [];
	for (let i = 0; arrayDifference.length > i; i++) {
		if (arrayDifference[i].AGEGroup === age && arrayDifference[i].Gender === gender && arrayDifference[i].Education === education && arrayDifference[i].CountryFinal === country && arrayDifference[i].Country === percountry) {
			changeArr1.push(arrayDifference[i]);
		} if (arrayDifference[i].AGEGroup !== age && arrayDifference[i].Gender === gender && arrayDifference[i].Education === education && arrayDifference[i].CountryFinal === country && arrayDifference[i].Country === percountry) {
			changeArr3.push(arrayDifference[i]);
		} if (arrayDifference[i].AGEGroup === age && arrayDifference[i].Gender !== gender && arrayDifference[i].Education === education && arrayDifference[i].CountryFinal === country && arrayDifference[i].Country === percountry) {
			changeArr4.push(arrayDifference[i]);
		} if (arrayDifference[i].AGEGroup === age && arrayDifference[i].Gender === gender && arrayDifference[i].Education !== education && arrayDifference[i].CountryFinal === country && arrayDifference[i].Country === percountry) {
			changeArr5.push(arrayDifference[i]);
		} if (arrayDifference[i].AGEGroup === age && arrayDifference[i].Gender === gender && arrayDifference[i].Education === education && arrayDifference[i].CountryFinal === country && arrayDifference[i].Country !== percountry) {
			changeArr6.push(arrayDifference[i]);
		} if (arrayDifference[i].AGEGroup === age && arrayDifference[i].Gender === gender && arrayDifference[i].Education === education && arrayDifference[i].CountryFinal !== country) {
			changeArr7.push(arrayDifference[i]);
		}
	}
	changeArr = [...changeArr1, ...changeArr2, ...changeArr3, ...changeArr4, ...changeArr5, ...changeArr6, ...changeArr7];
	PrintChange(changeArr, "changetable", id, code, country, gender, age, education, percountry);
}

function change(id, code, country, gender, age, education, percountry, id2, code2, country2, gender2, age2, education2, percountry2) {////////////////////////////
	document.getElementById(id2).innerHTML = `
		<tr id="${id2}">
			<td>${id2}</td>
			<td>${code}</td>
			<td>${country}</td>
			<td>${percountry}</td>
			<td>${gender}</td>
			<td>${age}</td>
			<td>${education}</td>
			<td>
				<button class="butt_changing" onclick="changeConfirm('${id2}','${code}', '${country}', '${gender}', '${age}', '${education}', '${percountry}')">Փոխարինել</button>
			</td>
		</tr >
		`;
	let refData = {
		"Code": code,
		"Gender": gender,
		"Education": education,
		"AGEGroup": age,
		"CountryFinal": country,
	};
	Refusers.push(refData);
	saveDataDiaspora();
	closewindow('confirm_Contenier');
}

function deleteperson(array) {
	for (let i = 0; i < array.length; i++) {
		DiasporaCopy.splice(array[i], 1);
	}
}

function armdeleteperson(array) {
	for (let i = 0; i < array.length; i++) {
		ArmeniaCopy.splice(array[i], 1);
	}
}

function pushanddel(index) {
	ChosenPeople.push(DiasporaCopy[index]);
	DiasporaCopy.splice(index, 1);
}

function armpushanddel(index) {
	ChosenPeople.push(ArmeniaCopy[index]);
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
			if (FormerSUNumber[4].Latvia[0] === FormerSUNumber[4].Latvia[1]) {
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
function armeniaplus(percode, genderPerson, educationPerson, agePerson, countryPerson, country) { 
	let exarray = [];
	let caarray = [];
	let caarray2 = [];
	let edarray = [];
	let agearray = [];
	let gearray = [];
	if (countryPerson === "Urban") {
		ArmUrbanNumber[0]++;
		if (ArmUrbanNumber[0] === ArmUrbanNumber[1]) {
			caarray.push("Urban");
		}
	} else if (countryPerson === "Country") {
		ArmCountryNumber[0]++;
		if (ArmCountryNumber[0] === ArmCountryNumber[1]) {
			caarray.push("Country");
		}
	} else if (countryPerson === "Yerevan") {
		YerevanNumber[0]++;
		if (YerevanNumber[0] === YerevanNumber[1]) {
			caarray.push("Yerevan");
		}
	
	if (educationPerson === "Secondary or unfinished secondary") {
		ArmSecondaryNumber[0]++;
		if (ArmSecondaryNumber[0] === ArmSecondaryNumber[1]) {
			edarray.push("Secondary or unfinished secondary");
		}
	} else if (educationPerson === "Professional or vocational") {
		ArmProfessionalNumber[0]++;
		if (ArmProfessionalNumber[0] === ArmProfessionalNumber[1]) {
			edarray.push("Professional or vocational");
		}
	} else if (educationPerson === "University or postgraduate") {
		ArmUniversityNumber[0]++;
		if (ArmUniversityNumber[0] === ArmUniversityNumber[1]) {
			edarray.push("University or postgraduate");
		}
	}

	if (agePerson === "18-30") {
		ArmAge18_30Number[0]++;
		if (ArmAge18_30Number[0] === ArmAge18_30Number[1]) {
			agearray.push("18-30");
		}
	} else if (agePerson === "31-45") {
		ArmAge31_45Number[0]++;
		if (ArmAge31_45Number[0] === ArmAge31_45Number[1]) {
			agearray.push("31-45");
		}
	} else if (agePerson === "46-60") {
		ArmAge46_60Number[0]++;
		if (ArmAge46_60Number[0] === ArmAge46_60Number[1]) {
			agearray.push("46-60");
		}
	} else if (agePerson === "61+") {
		ArmAge61Number[0]++;
		if (ArmAge61Number[0] === ArmAge61Number[1]) {
			agearray.push("61+");
		}
	}

	if (genderPerson === "Male") {
		ArmMale[0]++;
		var index = ArmeniaCopy.findIndex(item => item.Code === percode);
		pushanddel(index);
		if (ArmFemale[0] === ArmFemale[1]) {
			gearray.push("Female");
		}
	} else {
		ArmFemale[0]++;
		var index = ArmeniaCopy.findIndex(item => item.Code === percode);
		pushanddel(index);
		if (ArmMale[0] === ArmMale[1]) {
			gearray.push("Male");
		}
	}



	for (let i = 0; i < ArmeniaCopy.length; i++) {
		if (caarray.includes(ArmeniaCopy[i].CountryFinal) || caarray.includes(ArmeniaCopy[i].Country) || edarray.includes(ArmeniaCopy[i].Education) || agearray.includes(ArmeniaCopy[i].AGEGroup) || gearray.includes(ArmeniaCopy[i].Gender)) {
			exarray.push(i);
		}
	};
	deleteperson([...new Set(exarray)]);

	getNumbers();
}
/* function getAllIndexespushdell(arr, val) {
	let arr2 = arr.map(function (per) {
		return per.CountryFinal;
	});
	let indexes = [];
	let i = -1;
	while ((i = arr2.indexOf(val, i + 1)) !== -1) {
		indexes.push(i);
	}

	for (let i = 0; i < indexes.length; i++) {
		console.log(Diaspora[indexes[i]]);
		plus(Diaspora[indexes[i]].Code, Diaspora[indexes[i]].Gender, Diaspora[indexes[i]].Education, Diaspora[indexes[i]].AGEGroup, Diaspora[indexes[i]].CountryFinal, Diaspora[indexes[i]].country);
	}
}
 */
function getMultipleRandom(allcou, couname, num) {/*petq chi*/
	let winer;
	while (true) {
		let coudata = [];
		let i = -1;
		while ((i = allcou.indexOf(couname, i + 1)) !== -1) {
			coudata.push(i);
		}
		const shuffled = [...coudata].sort(() => 0.5 - Math.random());
		winer = shuffled.slice(0, num);
		if (winer.length === num) {
			break;
		}
	}
	return winer;
}
function randomPerson(allcou) {////////////////////////////
	let array = [];

	for (let i = 0; allcou.length > i; i++) {
		if (allcou[i] !== undefined) {
			array.push(allcou[i]);
		}
	}
	const shuffled = [...array].sort(() => 0.5 - Math.random());
	return shuffled.slice(0, 1);
}
function diasporaExport() { /////////////????????????????????????????????????????????????????????????
	function addZero(i) {
		if (i < 10) { i = "0" + i; }
		return i;
	}
	var date = new Date();
	let h = addZero(date.getHours());
	let m = addZero(date.getMinutes());
	let s = addZero(date.getSeconds());
	let month = date.getMonth() + 1;
	month = (month < 10 ? '0' : '') + month;
	let day = date.getDate();
	day = (day < 10 ? '0' : '') + day;
	let filename = process.env.USERPROFILE + "/Downloads/" + "Diaspora Results " + date.getFullYear() + '-' + month + '-' + day + " " + h + "_" + m + "_" + s + ".xlsx";

	var workBook = xlsx.utils.book_new();
	var workShet = xlsx.utils.json_to_sheet(ChosenPeople);
	xlsx.utils.book_append_sheet(workBook, workShet);
	xlsx.writeFile(workBook, filename);
	closewindow('print_Contenier');
	openrestart('thesave_Contenier');
};

function button_Diaspora() {
	DiasporaCopy = JSON.parse(JSON.stringify(Diaspora));
	ChosenPeople = [];

	while (true) {
		Diaspora = JSON.parse(JSON.stringify(DiasporaData[0]));
		DiasporaCopy = JSON.parse(JSON.stringify(DiasporaData[0]));
		ChosenPeople = [];
		RussiaNumber = [0, 39, 0, 0];
		USANumber = [0, 20, 0, 0];
		FranceNumber = [0, 9, 0, 0];
		GeorgiaNumber = [0, 6, 0, 0];
		EuropeNumber = [0, 6, 0, 0, {
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
		FormerSUNumber = [0, 6, 0, 0, {
			"Belarus": [0, 1, 0, 0, false],
			"Kazakhstan": [0, 1, 0, 0, false],
			"Latvia": [0, 1, 0, 0, false],
			"Turkmenistan": [0, 1, 0, 0, false],
			"Ukraine": [0, 3, 0, 0, true]
		}];
		MiddleEastNumber = [0, 4, 0, 0, {
			"Israel": [0, 1, 0, 0, false],
			"Lebanon": [0, 2, 0, 0, true],
			"mUAE": [0, 1, 0, 0, false]
		}];
		LatinAmericaNumber = [0, 3, 0, 0, {
			"Argentina": [0, 2, 0, 0, true],
			"Brazil": [0, 1, 0, 0, false]
		}];
		OtherNumber = [0, 3, 0, 0, {
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
		TurkeyNumber = [0, 2, 0, 0];
		IranNumber = [0, 2, 0, 0];
		DSecondaryNumber = [0, 25, 0, 0];
		DProfessionalNumber = [0, 25, 0, 0];
		DUniversityNumber = [0, 50, 0, 0];
		DAge18_30Number = [0, 28, 0, 0];
		DAge31_45Number = [0, 30, 0, 0];
		DAge46_60Number = [0, 24, 0, 0];
		DAge61Number = [0, 18, 0, 0];
		DFemale = [0, 50, 0, 0];
		DMale = [0, 50, 0, 0];
		getNumbers();
		/* if (RussiaNumber[3] === 0) {
			console.log("1");
			getAllIndexespushdell(DiasporaCopy, "Russia");
		} if (USANumber[3] === 0) {
			console.log("2");
			getAllIndexespushdell(DiasporaCopy, "USA");
		} if (FranceNumber[3] === 0) {
			console.log("3");
			getAllIndexespushdell(DiasporaCopy, "France");
		} if (GeorgiaNumber[3] === 0) {
			console.log("4");
			getAllIndexespushdell(DiasporaCopy, "Georgia");
		} if (EuropeNumber[3] === 0) {
			console.log("5");
			getAllIndexespushdell(DiasporaCopy, "Europe (excl. France)");
		} if (FormerSUNumber[3] === 0) {
			console.log("6");
			getAllIndexespushdell(DiasporaCopy, "Former SU (excl. RU & Geo)");
		} if (MiddleEastNumber[3] === 0) {
			console.log("7");
			getAllIndexespushdell(DiasporaCopy, "Middle East (excl. Tr & Ir)");
		} if (LatinAmericaNumber[3] === 0) {
			console.log("8");
			getAllIndexespushdell(DiasporaCopy, "Latin America");
		} if (OtherNumber[3] === 0) {
			console.log("9");
			getAllIndexespushdell(DiasporaCopy, "Other");
		} if (TurkeyNumber[3] === 0) {
			console.log("10");
			getAllIndexespushdell(Diaspora, "Turkey");
		} if (IranNumber[3] === 0) {
			console.log("11");
			getAllIndexespushdell(DiasporaCopy, "Iran");
		}
		if (DSecondaryNumber[3] === 0) {
			console.log("12");
		} if (DProfessionalNumber[3] === 0) {
			getAllIndexespushdell(DiasporaCopy, "Secondary or unfinished secondary");
			console.log("13");
			getAllIndexespushdell(DiasporaCopy, "Professional or vocational");
		} if (DUniversityNumber[3] === 0) {
			console.log("14");
			getAllIndexespushdell(DiasporaCopy, "University or postgraduate");
		}
		if (DAge18_30Number[3] === 0) {
			console.log("15");
			getAllIndexespushdell(DiasporaCopy, "18-30");
		} if (DAge31_45Number[3] === 0) {
			console.log("16");
			getAllIndexespushdell(DiasporaCopy, "31-40");
		} if (DAge46_60Number[3] === 0) {
			console.log("17");
			getAllIndexespushdell(DiasporaCopy, "46-60");
		} if (DAge61Number[3] === 0) {
			console.log("18");
			getAllIndexespushdell(DiasporaCopy, "61+");

		}
		if (DFemale[3] === 0) {
			getAllIndexespushdell(DiasporaCopy, "Female");
		} if (DMale[3] === 0) {
			getAllIndexespushdell(DiasporaCopy, "Male");
		} */
		let arr = DiasporaCopy.map(function (per) {
			return per.Country;
		});
		let arred = DiasporaCopy.map(function (per) {
			return per.Education;
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
		} if (OtherNumber[4].Canada[0] !== OtherNumber[4].Canada[1]) {
			let randomCanada = getMultipleRandom(arr, "Canada", OtherNumber[4].Canada[1]);
			indexes = indexes.concat(randomCanada);
		} if (IranNumber[0] !== IranNumber[1]) {
			let randomIran = getMultipleRandom(arr, "Iran", IranNumber[1]);
			indexes = indexes.concat(randomIran);
		} if (TurkeyNumber[0] !== TurkeyNumber[1]) {
			let randomTurkey = getMultipleRandom(arr, "Turkey", TurkeyNumber[1]);
			indexes = indexes.concat(randomTurkey);
		} if (DSecondaryNumber[0] !== DSecondaryNumber[1]) {
			let randomSe = getMultipleRandom(arred, "Secondary or unfinished secondary", DSecondaryNumber[1]);
			indexes = indexes.concat(randomSe);

		}

		for (let i = 0; i < indexes.length; i++) {
			indexesper.push(JSON.parse(`{"Code": "${DiasporaCopy[indexes[i]].Code}", "Gender": "${DiasporaCopy[indexes[i]].Gender}", "Education": "${DiasporaCopy[indexes[i]].Education}", "AGEGroup": "${DiasporaCopy[indexes[i]].AGEGroup}", "CountryFinal": "${DiasporaCopy[indexes[i]].CountryFinal}", "Country" :"${DiasporaCopy[indexes[i]].Country}"}`));
		}

		indexesper.forEach(element => plus(element.Code, element.Gender, element.Education, element.AGEGroup, element.CountryFinal, element.Country));

		while (ChosenPeople.length !== 100) {
			if ((RussiaNumber[0] !== RussiaNumber[1] && RussiaNumber[3] < 0) || (USANumber[0] !== USANumber[1] && USANumber[3] < 0) || (FranceNumber[0] !== FranceNumber[1] && FranceNumber[3] < 0) || (GeorgiaNumber[0] !== GeorgiaNumber[1] && GeorgiaNumber[3] < 0) || (TurkeyNumber[0] !== TurkeyNumber[1] && TurkeyNumber[3] < 0) || (IranNumber[0] !== IranNumber[1] && IranNumber[3] < 0) || (EuropeNumber[0] !== EuropeNumber[1] && EuropeNumber[3] < 0) || (FormerSUNumber[0] !== FormerSUNumber[1] && FormerSUNumber[3] < 0) || (MiddleEastNumber[0] !== MiddleEastNumber[1] && MiddleEastNumber[3] < 0) || (LatinAmericaNumber[0] !== LatinAmericaNumber[1] && LatinAmericaNumber[3] < 0) || (OtherNumber[0] !== OtherNumber[1] && OtherNumber[3] < 0) || (DSecondaryNumber[0] !== DSecondaryNumber[1] && DSecondaryNumber[3] < 0) || ([0] !== DProfessionalNumber[1] && DProfessionalNumber[3] < 0) || ([0] !== DUniversityNumber[1] && DUniversityNumber[3] < 0)) {
				break;
			}
			if (DiasporaCopy.length === 0) {
				break;
			}
			let winPerson = randomPerson(DiasporaCopy);
			plus(winPerson[0].Code, winPerson[0].Gender, winPerson[0].Education, winPerson[0].AGEGroup, winPerson[0].CountryFinal, winPerson[0].Country);
		}

		if (ChosenPeople.length === 100) {
			while (true) {
				if (ChosenPeople.length === 100) {
					if (ChosenPeople.indexOf(undefined) === -1) {
						break;
					} else {
						getNumberChosenPeople();
						while (ChosenPeople.length !== 100) {
							if ((RussiaNumber[0] !== RussiaNumber[1] && RussiaNumber[3] < 0) || (USANumber[0] !== USANumber[1] && USANumber[3] < 0) || (FranceNumber[0] !== FranceNumber[1] && FranceNumber[3] < 0) || (GeorgiaNumber[0] !== GeorgiaNumber[1] && GeorgiaNumber[3] < 0) || (TurkeyNumber[0] !== TurkeyNumber[1] && TurkeyNumber[3] < 0) || (IranNumber[0] !== IranNumber[1] && IranNumber[3] < 0) || (EuropeNumber[0] !== EuropeNumber[1] && EuropeNumber[3] < 0) || (FormerSUNumber[0] !== FormerSUNumber[1] && FormerSUNumber[3] < 0) || (MiddleEastNumber[0] !== MiddleEastNumber[1] && MiddleEastNumber[3] < 0) || (LatinAmericaNumber[0] !== LatinAmericaNumber[1] && LatinAmericaNumber[3] < 0) || (OtherNumber[0] !== OtherNumber[1] && OtherNumber[3] < 0) || (DSecondaryNumber[0] !== DSecondaryNumber[1] && DSecondaryNumber[3] < 0) || ([0] !== DProfessionalNumber[1] && DProfessionalNumber[3] < 0) || ([0] !== DUniversityNumber[1] && DUniversityNumber[3] < 0)) {
								break;
							}
							if (DiasporaCopy.length === 0) {
								break;
							}
							let winPerson = randomPerson(DiasporaCopy);
							plus(winPerson[0].Code, winPerson[0].Gender, winPerson[0].Education, winPerson[0].AGEGroup, winPerson[0].CountryFinal, winPerson[0].Country);
						}
					}
				}
			}
			if (ChosenPeople.length === 100) {
				break;
			}
		}

	}

	Print(ChosenPeople, "diasporatable");
	saveDataDiaspora();
	check();

}

function button_Armenia() {
	ArmeniaCopy = JSON.parse(JSON.stringify(Armenia));
	ArmChosenPeople = [];

	while (true) {
		Armenia = JSON.parse(JSON.stringify(ArmeniaData[0]));
		ArmeniaCopy = JSON.parse(JSON.stringify(ArmeniaData[0]));
		ArmChosenPeople = [];
		let ArmUrbanNumber = [0, 27, 0, 0];
		let ArmCountryNumber = [0, 36, 0, 0];
		let YerevanNumber = [0, 37, 0, 0];
		
		let ArmSecondaryNumber = [0, 21, 0, 0];
		let ArmProfessionalNumber = [0, 55, 0, 0];
		let ArmUniversityNumber = [0, 24, 0, 0];
		let ArmAge18_30Number = [0, 22, 0, 0];
		let ArmAge31_45Number = [0, 31, 0, 0];
		let ArmAge46_60Number = [0, 23, 0, 0];
		let ArmAge61Number = [0, 24, 0, 0];
		let ArmFemale = [0, 53, 0, 0];
		let ArmMale = [0, 47, 0, 0];
		getNumbers();
		/* if (RussiaNumber[3] === 0) {
			console.log("1");
			getAllIndexespushdell(DiasporaCopy, "Russia");
		} if (USANumber[3] === 0) {
			console.log("2");
			getAllIndexespushdell(DiasporaCopy, "USA");
		} if (FranceNumber[3] === 0) {
			console.log("3");
			getAllIndexespushdell(DiasporaCopy, "France");
		} if (GeorgiaNumber[3] === 0) {
			console.log("4");
			getAllIndexespushdell(DiasporaCopy, "Georgia");
		} if (EuropeNumber[3] === 0) {
			console.log("5");
			getAllIndexespushdell(DiasporaCopy, "Europe (excl. France)");
		} if (FormerSUNumber[3] === 0) {
			console.log("6");
			getAllIndexespushdell(DiasporaCopy, "Former SU (excl. RU & Geo)");
		} if (MiddleEastNumber[3] === 0) {
			console.log("7");
			getAllIndexespushdell(DiasporaCopy, "Middle East (excl. Tr & Ir)");
		} if (LatinAmericaNumber[3] === 0) {
			console.log("8");
			getAllIndexespushdell(DiasporaCopy, "Latin America");
		} if (OtherNumber[3] === 0) {
			console.log("9");
			getAllIndexespushdell(DiasporaCopy, "Other");
		} if (TurkeyNumber[3] === 0) {
			console.log("10");
			getAllIndexespushdell(Diaspora, "Turkey");
		} if (IranNumber[3] === 0) {
			console.log("11");
			getAllIndexespushdell(DiasporaCopy, "Iran");
		}
		if (DSecondaryNumber[3] === 0) {
			console.log("12");
		} if (DProfessionalNumber[3] === 0) {
			getAllIndexespushdell(DiasporaCopy, "Secondary or unfinished secondary");
			console.log("13");
			getAllIndexespushdell(DiasporaCopy, "Professional or vocational");
		} if (DUniversityNumber[3] === 0) {
			console.log("14");
			getAllIndexespushdell(DiasporaCopy, "University or postgraduate");
		}
		if (DAge18_30Number[3] === 0) {
			console.log("15");
			getAllIndexespushdell(DiasporaCopy, "18-30");
		} if (DAge31_45Number[3] === 0) {
			console.log("16");
			getAllIndexespushdell(DiasporaCopy, "31-40");
		} if (DAge46_60Number[3] === 0) {
			console.log("17");
			getAllIndexespushdell(DiasporaCopy, "46-60");
		} if (DAge61Number[3] === 0) {
			console.log("18");
			getAllIndexespushdell(DiasporaCopy, "61+");

		}
		if (DFemale[3] === 0) {
			getAllIndexespushdell(DiasporaCopy, "Female");
		} if (DMale[3] === 0) {
			getAllIndexespushdell(DiasporaCopy, "Male");
		} */
		let arr = ArmeniaCopy.map(function (per) { ////??????????????????????????????????????????????????????????????????
			return per.Country;
		});
		let arred = ArmeniaCopy.map(function (per) {
			return per.Education;
		});

		let indexes = [];
		let indexesper = [];
		if (ArmUrbanNumber[4].Urban[0] !== ArmUrbanNumber[4].Urban[1]) {
			let randomUrban = getMultipleRandom(arr, "Urban", ArmUrbanNumber[4].Urban[1]);
			indexes = indexes.concat(randomUrban);
		} if (ArmCountryNumber[4].Country[0] !== ArmCountryNumber[4].Country[1]) {
			let randomCountry = getMultipleRandom(arr, "Country", ArmCountryNumber[4].Country[1]);
			indexes = indexes.concat(randomCountry);
		} if (YerevanNumber[4].Yerevan[0] !== YerevanNumber[4].Yerevan[1]) {
			let randomYerevan = getMultipleRandom(arr, "Yerevan", YerevanNumber[4].Yerevan[1]);
			indexes = indexes.concat(randomYerevan);
		
		} if (ArmSecondaryNumber[0] !== ArmSecondaryNumber[1]) {
			let randomArmSe = getMultipleRandom(arred, "Secondary or unfinished secondary", ArmSecondaryNumber[1]);
			indexes = indexes.concat(randomArmSe);

		}

		for (let i = 0; i < indexes.length; i++) {
			indexesper.push(JSON.parse(`{"Code": "${ArmeniaCopy[indexes[i]].Code}", "Gender": "${ArmeniaCopy[indexes[i]].Gender}", "Education": "${ArmeniaCopy[indexes[i]].Education}", "AGEGroup": "${ArmeniaCopy[indexes[i]].AGEGroup}", "CountryFinal": "${ArmeniaCopy[indexes[i]].CountryFinal}", "Country" :"${ArmeniaCopy[indexes[i]].Country}"}`));
		}

		indexesper.forEach(element => plus(element.Code, element.Gender, element.Education, element.AGEGroup, element.CountryFinal, element.Country));

		while (ArmChosenPeople.length !== 45) {
			if ((ArmUrbanNumber[0] !== ArmUrbanNumber[1] && ArmUrbanNumber[3] < 0) || (ArmCountryNumber[0] !== ArmCountryNumber[1] && ArmCountryNumber[3] < 0) || (YerevanNumber[0] !== YerevanNumber[1] && YerevanNumber[3] < 0) || (ArmSecondaryNumber[0] !== ArmSecondaryNumber[1] && ArmSecondaryNumber[3] < 0) || ([0] !== ArmProfessionalNumber[1] && ArmProfessionalNumber[3] < 0) || ([0] !== ArmUniversityNumber[1] && ArmUniversityNumber[3] < 0)) {
				break;
			}
			if (ArmeniaCopy.length === 0) {
				break;
			}
			let winPerson = randomPerson(ArmeniaCopy);
			plus(winPerson[0].Code, winPerson[0].Gender, winPerson[0].Education, winPerson[0].AGEGroup, winPerson[0].CountryFinal, winPerson[0].Country);
		}

		if (ArmChosenPeople.length === 45) {
			while (true) {
				if (ArmChosenPeople.length === 45) {
					if (ArmChosenPeople.indexOf(undefined) === -1) {
						break;
					} else {
						getNumberChosenPeople();
						while (ArmChosenPeople.length !== 100) {
							if ((ArmUrbanNumber[0] !== ArmUrbanNumber[1] && ArmUrbanNumber[3] < 0) || (ArmCountryNumber[0] !== ArmCountryNumber[1] && ArmCountryNumber[3] < 0) || (YerevanNumber[0] !== YerevanNumber[1] && YerevanNumber[3] < 0)  || (ArmSecondaryNumber[0] !== ArmSecondaryNumber[1] && ArmSecondaryNumber[3] < 0) || ([0] !== ArmProfessionalNumber[1] && ArmProfessionalNumber[3] < 0) || ([0] !== ArmUniversityNumber[1] && ArmUniversityNumber[3] < 0)) {
								break;
							}
							if (ArmeniaCopy.length === 0) {
								break;
							}
							let winPerson = randomPerson(ArmeniaCopy);
							plus(winPerson[0].Code, winPerson[0].Gender, winPerson[0].Education, winPerson[0].AGEGroup, winPerson[0].CountryFinal, winPerson[0].Country);
						}
					}
				}
			}
			if (ArmChosenPeople.length === 100) {
				break;
			}
		}

	}

	Print(ArmChosenPeople, "armeniatable");
	saveDataArmenia();
	check();

}
closewindow('restart_Contenier');////////////////////////////
closewindow('none_Contenier');////////////////////////////
closewindow('confirm_Contenier');////////////////////////////
closewindow('print_Contenier');////////////////////////////
closewindow('thesave_Contenier');////////////////////////////
check();

if (ArmChosenPeople.length === 0) {
	getNumbers();
} else {
	Print(ArmChosenPeople, "armeniatable");
}







