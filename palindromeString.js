let str1 = "ababa";
let i=str.length-1;
let bag = "";
while(i>=0){
	bag+=(str1[i]);
	--i;
}
if(bag === str1){
	console.log("No");
}else{
 	console.log("Yes");
 }