			var obj1 = {
				name: 'mad',
				age: 23
			};

			var obj2 = {
				name: 'mad',
				age: 23,
				likes: 2
			};

			function deepCompare(obj1, obj2){
				if(!(typeof(obj1) == 'object' && typeof(obj2) == 'object')){
					if(obj1 == obj2){
						return true;
					}else{
						return false;
					}
				}else{
					//if(Object.keys(obj1).length >= Object.keys(obj2).length){
						for(var x in obj1){
							if(obj1.hasOwnProperty(x)){
								if(obj2.hasOwnProperty(x)){
									// if(obj1[x] == obj2[x]){
									// 	return true;
									// }
									deepCompare(obj1[x], obj2[x]);
								}
								else{
										return false;
									}
								
							}
						}						
					//}

					//if(Object.keys(obj2).length >= Object.keys(obj1).length){
						for(var y in obj2){
							if(obj2.hasOwnProperty(y)){
								if(obj1.hasOwnProperty(y)){
									// if(obj2[y] == obj1[y]){
									// 	return true;
									// }
									deepCompare(obj2[y], obj1[y]);
								}
									else{
										return false;
									}
														
							}
						}						
					//}
					return true;

				}
			}

			console.log(deepCompare(obj1, obj2));