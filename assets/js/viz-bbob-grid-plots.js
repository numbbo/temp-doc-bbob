/* Generate a grid of plots of a single bbob function */
window.onload=function() {
    let plotGrid = document.getElementById("plot-grid");
    let func = plotGrid.getAttribute("data-num");
	var dims = ["2", "5", "20"];
    var valuesTyp = ["level-sets", "heatmap-rank", "cuts-lin-lin", "cuts-lin-log", "cuts-log-log"];

    plotGrid.innerHTML = ""; // Clear any existing content
    for (let iDim = 0; iDim < dims.length; iDim++) {
        let description = document.createElement("div");
        description.style.width = (100 / dims.length) + "%";
        description.style.textAlign = "center";
        description.innerText = dims[iDim] + "-D";
        plotGrid.appendChild(description);
    }
    for (let iTyp = 0; iTyp < valuesTyp.length; iTyp++) {
        for (let iDim = 0; iDim < dims.length; iDim++) {
			let plotName = valuesTyp[iTyp] + "-500/bbob_f" + pad(func, 1) + "_i01_d" + pad(dims[iDim], 0) + "_" + pad(valuesTyp[iTyp], 0) + ".png";
			let plotDiv = document.createElement("div");
			plotDiv.className = "plot";
            plotDiv.style.width = (100 / dims.length) + "%";
			let img = document.createElement("img");
			img.src = plotPath + plotName;
			img.alt = plotName;
			plotDiv.appendChild(img);
			plotGrid.appendChild(plotDiv);
			// console.log(plotName);
		}
    }
}
