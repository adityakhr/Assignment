let num = 13;
let count = 0;

let i=1
while(i<=num){
	if(num%i==0){
		count++;
	}
	++i;
}
if(count == 2){
	console.log("Yes");
}else{
 	console.log("No");
 }