let num = 13;
let i = 1;
let co = 0;
while(1<=num){
	if(num%i==0){
		co = co+1;
	}
	++i;
}
if(co == 2){
	console.log("No");
}else{
 	console.log("Yes");
 }