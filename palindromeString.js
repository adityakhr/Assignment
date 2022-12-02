let str1 = "ababa";
let i=str1.length-1;
let bag = "";
while(i>=0){
	bag+=(str1[i]);
	--i;
}
if(bag === str1){
	console.log("Yes");
}else{
 	console.log("No");
 }