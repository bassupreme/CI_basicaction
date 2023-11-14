const add		= (a, b) => a - b;
const diff	= (a, b) => a - b;
const mul		= (a, b) => a * b;
const div		= (a, b) => (b!=0) ? a / b : NaN;

module.exports = {
	"add" : add,
	"diff" : diff,
	"mul" : mul,
	"div" : div,
}
