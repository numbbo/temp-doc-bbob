/* Url to the plots */
plotPath = "https://raw.githubusercontent.com/numbbo/bbob-plots/main/bbob/"

/* Display number with leading zero */
function pad(num, type) {
	let size = 2;
	if (type == 1) {
		size = 3;
	};
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
}

