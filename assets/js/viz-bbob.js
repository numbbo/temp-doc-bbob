/* Define some global variables */
var labelsTyp = ["Level sets", "Normalized rank heatmap", "Surface plot", "Search space cuts: lin-lin", "Search space cuts: lin-log", 
	"Search space cuts: log-log"];
var valuesTyp = ["level-sets", "heatmap-rank", "surface", "cuts-lin-lin", "cuts-lin-log", "cuts-log-log"];
var allNodes = ["dimAll", "funAll", "insAll", "typAll"];
var selectedNode = "typAll";
var valuesDim = ["2", "3", "5", "10", "20", "40"];
var valuesFun = [];
for (var i = 1; i <= 24; i++) {valuesFun.push(i);}
var labelsFun = [
	"f1 - Sphere",
	"f2 - Ellipsoid separable",
	"f3 - Rastrigin separable",
	"f4 - Skew Rastrigin-Bueche",
	"f5 - Linear slope",
	"f6 - Attractive sector",
	"f7 - Step-ellipsoid",
	"f8 - Rosenbrock original",
	"f9 - Rosenbrock rotated",
	"f10 - Ellipsoid",
	"f11 - Discus",
	"f12 - Bent cigar",
	"f13 - Sharp ridge",
	"f14 - Sum of different powers",
	"f15 - Rastrigin",
	"f16 - Weierstrass",
	"f17 - Schaffer F7, condition 10",
	"f18 - Schaffer F7, condition 1000",
	"f19 - Griewank-Rosenbrock F8F2",
	"f20 - Schwefel x*sin(x)",
	"f21 - Gallagher 101 peaks",
	"f22 - Gallagher 21 peaks",
	"f23 - Katsuura",
	"f24 - Lunacek bi-Rastrigin"
];
var valuesIns = [];
for (var i = 1; i <= 15; i++) {valuesIns.push(i);}
var valuesCol = [];
for (var i = 1; i <= 10; i++) {valuesCol.push(i);}
var params = ["col", "dim", "fun", "ins", "typ"];

/* Fill the table with values from the URL parameters. If any are missing, use the defaults (all plot types are shown,
   there are five plots per row, the first option is chosen for all other select elements) */
window.onload=function() {
    /* Fill the dropdowns with values */
    fill_options("col", valuesCol, valuesCol, "3");
    fill_options("dim", valuesDim, valuesDim, "2");
    fill_options("fun", valuesFun, labelsFun, "1");
    fill_options("ins", valuesIns, valuesIns, "1");
    fill_options("typ", valuesTyp, labelsTyp, "level-sets");

    for (var i = 0; i < params.length; i++) {
        var value = getParam(params[i]);
        if (value == "all") {
            selectedNode = params[i] + "All";
        }
    }
    selectNode(document.getElementById(selectedNode));

    /* Hide all groups 
	*** No longer needed as we are not showing the function definitions below ***
	for (var i = 1; i <= 5; i++) {
		textName = "text-g" + i;
		document.getElementById(textName).setAttribute("style", "display:none;");
	} */
}

/* Create a string with all options according to the given subject, values, labels and default value */
function fill_options(name, values, labels, default_value) {
    var contents = "";
    var value = getParam(name);
    if ((!value) || (value === "all")) {
        value = default_value;
    }
    for (var i = 0; i < values.length; i++) {
        contents += "<option value=\"" + values[i] + "\">" + labels[i] + "</option>";
    }
    document.getElementById(name).innerHTML = contents;
    document.getElementById(name).value = value;
}

/* Adds the plot to the div */
function addPlot(plotName) {
	var plotWidth = 100 / col.value;
	var elemDiv = document.createElement('div');
	var elemA = document.createElement('a');
	var elemImg = document.createElement("img");
	elemDiv.setAttribute("style", "display:inline-block; width:" + plotWidth + "%;");
	elemA.setAttribute("href", plotPath + plotName);
	elemImg.setAttribute("src", plotPath + plotName);
	elemImg.setAttribute("style", "width:100%;");
	elemA.appendChild(elemImg);
	elemDiv.appendChild(elemA);
	document.getElementById("images").appendChild(elemDiv);
}

/* Show the plots wrt the chosen dimension, function, instance and plot type.
Exactly one of these categories contains all possible values, the rest only the
chosen one. */
function changePlot() {
	var plotName;
	var chosenDim = [dim.value];
	var chosenFun = [fun.value];
	var chosenIns = [ins.value];
	var chosenTyp = [typ.value];
	var textName;
	if (selectedNode === "dimAll") {
		chosenDim = [...valuesDim];
	} else if (selectedNode === "funAll") {
		chosenFun = [...valuesFun];
	} else if (selectedNode === "insAll") {
		chosenIns = [...valuesIns];
	} else if (selectedNode === "typAll") {
		chosenTyp = [...valuesTyp];
	}
	document.getElementById("images").innerHTML = "";
	for (var iDim = 0; iDim < chosenDim.length; iDim++) {
		for (var iFun = 0; iFun < chosenFun.length; iFun++) {
			for (var iIns = 0; iIns < chosenIns.length; iIns++) {
				for (var iTyp = 0; iTyp < chosenTyp.length; iTyp++) {
					plotName = chosenTyp[iTyp] + "-500/bbob_f" + pad(chosenFun[iFun], 1) + "_i" + pad(chosenIns[iIns], 0) + "_d" + pad(chosenDim[iDim], 0) + "_" + pad(chosenTyp[iTyp], 0) + ".png";
					addPlot(plotName);
				}
			}
		}
	}
	/* Make sure only the correct plot descriptions are shown */
	var allTextNames = ["text-cuts", "text-level-sets", "text-heatmap-rank", "text-surface"];
	var chosenTextName = chosenTyp[0].includes("cuts") ? "text-cuts" : "text-" + chosenTyp[0];

	allTextNames.forEach(textName => {
		document.getElementById(textName).style.display = (selectedNode === "typAll" || textName === chosenTextName) ? "block" : "none";
	});

	/* Make sure only the correct function description is shown 
	*** No longer needed as we are not showing the function definitions below ***
	for (var iFun = 0; iFun < valuesFun.length; iFun++) {
		textName = "text-f" + valuesFun[iFun];
		if ((selectedNode === "funAll") || (valuesFun[iFun] == chosenFun[0])) {
			document.getElementById(textName).setAttribute("style", "display:block;");
		}
		else {
			document.getElementById(textName).setAttribute("style", "display:none;");
		}
	} */
	
	/* Reflect the current state in the URL parameters */
	setAllParams();
}

/* Move the dropdown selection to the previous item in the list */
function getPrev(ele) {
	var select = document.getElementById(ele.id.substring(0, 3));
	var len = select.length;
	var curr_index = select.selectedIndex;
	if (curr_index > 0) {
		select.selectedIndex--;
	} else {
		select.selectedIndex = len-1;
	}
	changePlot();
}

/* Move the dropdown selection to the next item in the list */
function getNext(ele) {
	var select = document.getElementById(ele.id.substring(0, 3));
	var len = select.length;
	var curr_index = select.selectedIndex;
	if (curr_index < len - 1) {
		select.selectedIndex++;
	} else {
		select.selectedIndex = 0;
	}
	changePlot();
}

/* Disable (or enable) the element */
function disableElements(ele, mode) {
	document.getElementById(ele + "Prev").disabled = mode;
	document.getElementById(ele).disabled = mode;
	document.getElementById(ele + "Next").disabled = mode;
	if (mode == false) {
		document.getElementById(ele + "Prev").style.cursor = "pointer";
		document.getElementById(ele).style.cursor = "pointer"
		document.getElementById(ele + "Next").style.cursor = "pointer"
	} else {
		document.getElementById(ele + "Prev").style.cursor = "default";
		document.getElementById(ele).style.cursor = "default"
		document.getElementById(ele + "Next").style.cursor = "default"
	}
}

/* Select the table cell */
function selectNode(node) {
  	selectedNode = node.id;
	for (var i = 0; i < allNodes.length; i++) {
		if (selectedNode === allNodes[i]) {
			document.getElementById(allNodes[i]).className = "on";
		  disableElements(allNodes[i].substring(0, 3), true);
		} else {
			document.getElementById(allNodes[i]).className = "off";
		  disableElements(allNodes[i].substring(0, 3), false);
		}
	}
	changePlot();
}

/* Get the value of the URL parameter */
function getParam(param) {
    return new URLSearchParams(window.location.search).get(param);
}

/* Sets the value of all URL parameters according to the current view */
function setAllParams() {
    const urlParams = new URLSearchParams(window.location.search);
    for (var i = 0; i < params.length; i++) {
		var value = document.getElementById(params[i]).value;
		if (selectedNode === (params[i] + "All")) {
            value = "all";
        }
        urlParams.set(params[i], value);
    }
    window.history.replaceState({}, '', `${location.pathname}?${urlParams}`);
}
