function sum(a: any, b: number): number{
    if(typeof a == 'string'){
        a = parseInt(a);
    }
    if(typeof b != 'number'){
        b = parseInt(b);
    }    
    return a + b;
}

function isCheck(a, b){
	check(a, b);
}

function check(a, b){
	if(a > b){
		return 'a is greater';
	}else{
		return 'b is greater';
	}
}



console.log(sum('5', 6));