// values denote the weapon's stats for the upgrade level corresponding to its index
var weaponInfo = 
{
	'Saw Cleaver': [
		{baseatk: 90, strscl: 'D', skiscl: 'E', bldscl: '-', arcscl: 'D'},
		{baseatk: 99, strscl: 'D', skiscl: 'E', bldscl: '-', arcscl: 'D'},
		{baseatk: 108, strscl: 'D', skiscl: 'E', bldscl: '-', arcscl: 'D'},
		{baseatk: 117, strscl: 'D', skiscl: 'E', bldscl: '-', arcscl: 'D'},
		{baseatk: 126, strscl: 'D', skiscl: 'E', bldscl: '-', arcscl: 'D'},
		{baseatk: 135, strscl: 'D', skiscl: 'D', bldscl: '-', arcscl: 'D'},
		{baseatk: 144, strscl: 'D', skiscl: 'D', bldscl: '-', arcscl: 'D'},
		{baseatk: 153, strscl: 'D', skiscl: 'D', bldscl: '-', arcscl: 'D'},
		{baseatk: 162, strscl: 'C', skiscl: 'D', bldscl: '-', arcscl: 'C'},
		{baseatk: 171, strscl: 'C', skiscl: 'D', bldscl: '-', arcscl: 'C'},
		{baseatk: 180, strscl: 'C', skiscl: 'D', bldscl: '-', arcscl: 'C'}
	],
	'Threaded Cane': [
		{baseatk: 78, strscl: 'E', skiscl: 'C', bldscl: '-', arcscl: 'D'},
		{baseatk: 85, strscl: 'E', skiscl: 'C', bldscl: '-', arcscl: 'D'},
		{baseatk: 92, strscl: 'E', skiscl: 'B', bldscl: '-', arcscl: 'D'},
		{baseatk: 99, strscl: 'E', skiscl: 'B', bldscl: '-', arcscl: 'D'},
		{baseatk: 106, strscl: 'E', skiscl: 'B', bldscl: '-', arcscl: 'D'},
		{baseatk: 113, strscl: 'E', skiscl: 'B', bldscl: '-', arcscl: 'C'},
		{baseatk: 120, strscl: 'E', skiscl: 'B', bldscl: '-', arcscl: 'C'},
		{baseatk: 127, strscl: 'E', skiscl: 'B', bldscl: '-', arcscl: 'C'},
		{baseatk: 134, strscl: 'E', skiscl: 'B', bldscl: '-', arcscl: 'C'},
		{baseatk: 141, strscl: 'E', skiscl: 'A', bldscl: '-', arcscl: 'C'},
		{baseatk: 156, strscl: 'E', skiscl: 'A', bldscl: '-', arcscl: 'B'}
	]
};

var weaponImgs =
{
	'Saw Cleaver': 'cleaver.jpg',
	'Threaded Cane': 'cane.jpg'
}

//determines the percentage of the attribute scaling ratio applied
//indexed by level (str, ski, bld, or arc)
var attributeRating = [
	0, 0.005, 0.01, 0.015, 0.02, 0.025, 0.03, 0.035, 0.04, 0.045, 0.05, 0.08,
	0.11, 0.14, 0.17, 0.2, 0.23, 0.26, 0.29, 0.32, 0.35, 0.38, 0.41, 0.44, 0.47,
	0.5, 0.514, 0.528, 0.542, 0.556, 0.57, 0.584, 0.598, 0.612, 0.626, 0.64,
	0.654, 0.668, 0.682, 0.696, 0.71, 0.724, 0.738, 0.752, 0.766, 0.78, 0.794,
	0.808, 0.822, 0.836, 0.85, 0.85, 0.85306, 0.85612, 0.85918, 0.86224, 0.86532,
	0.86837, 0.87142, 0.87449, 0.07755, 0.88061, 0.88367, 0.88673, 0.88980,
	0.89286, 0.89592, 0.89898, 0.90204, 0.90510, 0.90816, 0.91122, 0.91429, 0.91735,
	0.92041, 0.92347, 0.92653, 0.92959, 0.93265, 0.93571, 0.93878, 0.94184, 0.94490,
	0.94796, 0.95102, 0.95408, 0.95714, 0.96020, 0.96327, 0.96633, 0.96939, 0.97245,
	0.97551, 0.97857, 0.98163, 0.98469, 0.98776, 0.99082, 0.99388, 0.99694, 1
];
//the attribute scaling ratio corresponding to each letter grade
//NOTE: these are actually weapon-unique, I am making generalizations here for simplicity
var scalingRatio = {
	'E': 0.25,
	'D': 0.35,
	'C': 0.65,
	'B': 0.8,
	'A': 0.95,
	'S': 1.1,
};
var hpInfo = [
	0, 0, 0, 0, 0, 0, 0, 511, 531, 552, 573, 594, 616, 638, 659, 682, 698,
	719, 742, 767, 793, 821, 849, 878, 908, 938, 970, 1001, 1034, 1066, 1100,
	1123, 1147, 1170, 1193, 1216, 1239, 1261, 1283, 1304, 1325, 1346, 1366,
	1386, 1405, 1424, 1442, 1458, 1474, 1489, 1500, 1508, 1517, 1526, 1535,
	1544, 1553, 1562, 1571, 1580, 1588, 1597, 1606, 1615, 1623, 1632, 1641,
	1649, 1658, 1666, 1675, 1683, 1692, 1700, 1709, 1717, 1725, 1734, 1742,
	1750, 1758, 1767, 1775, 1783, 1791, 1799, 1807, 1814, 1822, 1830, 1837,
	1845, 1852, 1860, 1867, 1874, 1881, 1888, 1894, 1900 
];

var stamInfo = [
	0, 0, 0, 0, 0, 0, 0, 0, 88, 90, 91, 93, 95, 97, 98, 100, 102, 104, 106,
	108, 110, 112, 115, 117, 119, 121, 124, 126, 129, 131, 133, 136, 141, 144,
	146, 149, 152, 154, 157, 160, 160, 160, 160, 160, 160, 161, 161, 161, 161,
	161, 161, 162, 162, 162, 162, 162, 162, 163, 163, 163, 163, 163, 163, 164,
	164, 164, 164, 164, 164, 165, 165, 165, 165, 165, 165, 166, 166, 166, 166,
	166, 166, 166, 167, 167, 167, 167, 167, 167, 168, 168, 168, 168, 168, 168,
	169, 169, 169, 169, 169, 169, 170
];

var poisInfo = [
	0, 0, 0, 0, 0, 0, 0, 0, 33, 36, 40, 44, 48, 52, 56, 60, 62, 65, 68, 70,
	73, 76, 78, 81, 84, 86, 89, 92, 94, 97, 100, 100, 101, 102, 102, 103, 104,
	105, 105, 106, 107, 107, 108, 109, 110, 110, 111, 112, 113, 113, 114, 115,
	115, 116, 117, 118, 118, 119, 120, 121, 121, 122, 123, 123, 124, 125, 126,
	126, 127, 128, 128, 129, 130, 131, 131, 132, 133, 134, 134, 135, 136, 136,
	137, 138, 139, 139, 140, 141, 142, 142, 143, 144, 144, 145, 146, 147, 147,
	148, 149, 150
];

var discInfo = [
	0, 0, 0, 0, 0, 0, 100, 100, 100, 103, 106, 109, 112, 115, 119, 122, 125,
	128, 131, 135, 138, 141, 144, 147, 150, 154, 157, 160, 163, 166, 170, 172,
	174, 176, 178, 180, 182, 184, 186, 188, 190, 192, 194, 195, 197, 200, 202,
	204, 206, 208, 209, 209, 209, 209, 209, 209, 209, 209, 209, 209, 209, 209,
	209, 209, 209, 209, 209, 209, 209, 209, 209, 209, 209, 209, 209, 209, 209,
	209, 209, 209, 209, 209, 209, 209, 209, 209, 209, 209, 209, 209, 209, 209,
	209, 209, 209, 209, 209, 209, 209, 209, 209, 209
];

var physdefInfo = [
	0, 0, 0, 0, 10, 10, 10, 10, 10, 10, 10, 13, 16, 19, 22, 25, 28, 31, 34, 37,
	40, 43, 47, 50, 53, 56, 59, 62, 65, 68, 71, 74, 77, 80, 83, 86, 88, 91, 94,
	97, 100, 103, 106, 109, 112, 115, 117, 120, 123, 126, 132, 134, 137, 140, 143,
	145, 148, 151, 153, 156, 158, 161, 164, 166, 168, 171, 173, 175, 178, 180, 181,
	182, 183, 184, 185, 187, 188, 189, 190, 191, 192, 194, 195, 196, 197, 198, 199,
	201, 202, 203, 204, 205, 206, 207, 208, 209, 211, 212, 213 
];

// values denote the blood echoes required to reach that level
// index corresponds to level, so level 5 is at index 5
// (this is a best-fit approximation; the actual leveling algorithm was unknown at the time of creation)
function levelCost(level) {
	return Math.floor((0.0194*Math.pow(level,4)) - (0.682*Math.pow(level,3)) + (159.63*Math.pow(level,2)-(1620.8*level)+7433.9));
}