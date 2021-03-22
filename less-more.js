var paragraph = document.getElementById('paragraph');
var less = document.getElementById('seeLess');
var more = document.getElementById('seeMore');
// Additional
var lessIndicator = document.getElementById('lessIndi');
var moreIndicator = document.getElementById('moreIndi');
var limit = 200;
var res, rest;

checkLimit(limit);

function checkLimit(limit){
if(paragraph.innerHTML.length > limit){
	res = paragraph.innerHTML.substr(0, limit);
	rest = paragraph.innerHTML.substr(limit);
	paragraph.innerHTML = res + '...';
	more.style.display = 'block';
}
};

document.getElementById('seeMore').addEventListener('click',()=>{
	paragraph.innerHTML = res + rest;
	less.style.display = 'block';
	more.style.display = 'none';
});

less.addEventListener('click',()=>{
	less.style.display = 'none';
	checkLimit(limit);
});