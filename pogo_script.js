var pokeTypes = [
	{
		type : "bug",
		weakAgainst : [
			{
				type : "fire",
				status : "super effective",
			},
			{
				type : "flying",
				status : "super effective",
			},
			{
				type : "rock",
				status : "super effective",
			}
		],
		strongAgainst : [
			{
				type : "fighting",
				status : "not very effective",
			},
			{
				type : "grass",
				status : "not very effective",
			},
			{
				type : "ground",
				status : "not very effective",
			}
		]
	},
	{
		type : "dark",
		weakAgainst : [
			{
				type : "bug",
				status : "super effective",
			},
			{
				type : "fairy",
				status : "super effective",
			},
			{
				type : "fighting",
				status : "super effective",
			}

		],
		strongAgainst : [
			{
				type : "dark",
				status : "not very effective",
			},
			{
				type : "ghost",
				status : "not very effective",
			},
			{
				type : "psychic",
				status : "no effect",
			}
		]
	},
	{
		type : "dragon",
		weakAgainst : [
			{
				type : "dragon",
				status : "super effective",
			},
			{
				type : "fairy",
				status : "super effective",
			},
			{
				type : "ice",
				status : "super effective",
			}
		],
		strongAgainst : [
			{
				type : "electric",
				status : "not very effective",
			},
			{
				type : "fire",
				status : "not very effective",
			},
			{
				type : "grass",
				status : "not very effective",
			},
			{
				type : "water",
				status : "not very effective",
			}
		]
	},
	{
		type : "electric",
		weakAgainst : [
			{
				type : "ground",
				status : "super effective",
			}
		],
		strongAgainst : [
			{
				type : "electric",
				status : "not very effective",
			},
			{
				type : "flying",
				status : "not very effective",
			},
			{
				type : "steel",
				status : "not very effective",
			}
		]
	},
	{
		type : "fairy",
		weakAgainst : [
			{
				type : "poison",
				status : "super effective",
			},
			{
				type : "steel",
				status : "super effective",
			}								
		],
		strongAgainst : [
			{
				type : "bug",
				status : "not very effective",
			},
			{
				type : "dark",
				status : "not very effective",
			},
			{
				type : "dragon",
				status : "no effect",
			},
			{
				type : "fighting",
				status : "not very effective",
			}

		]
	},	
	{
		type : "fighting",
		weakAgainst : [
			{
				type : "fairy",
				status : "super effective",
			},
			{
				type : "flying",
				status : "super effective",
			},
			{
				type : "psychic",
				status : "super effective",
			}								
		],
		strongAgainst : [
			{
				type : "bug",
				status : "not very effective",
			},
			{
				type : "dark",
				status : "not very effective",
			},
			{
				type : "rock",
				status : "no effect",
			}
		]
	},	
	{
		type : "fire",
		weakAgainst : [
			{
				type : "ground",
				status : "super effective",
			},
			{
				type : "rock",
				status : "super effective",
			},
			{
				type : "water",
				status : "super effective",
			}								
		],
		strongAgainst : [
			{
				type : "bug",
				status : "not very effective",
			},
			{
				type : "fairy",
				status : "not very effective",
			},
			{
				type : "fire",
				status : "no effect",
			},
			{
				type : "steel",
				status : "no effect",
			}

		]
	},	
	{
		type : "flying",
		weakAgainst : [
			{
				type : "electric",
				status : "super effective",
			},
			{
				type : "ice",
				status : "super effective",
			},
			{
				type : "rock",
				status : "super effective",
			}								
		],
		strongAgainst : [
			{
				type : "bug",
				status : "not very effective",
			},
			{
				type : "fighting",
				status : "not very effective",
			},
			{
				type : "grass",
				status : "no effect",
			},
			{
				type : "ground",
				status : "no effect",
			}

		]
	},
	{
		type : "ghost",
		weakAgainst : [
			{
				type : "dark",
				status : "super effective",
			},
			{
				type : "ghost",
				status : "super effective",
			}								
		],
		strongAgainst : [
			{
				type : "bug",
				status : "not very effective",
			},
			{
				type : "fighting",
				status : "no effect",
			},
			{
				type : "normal",
				status : "no effect",
			},
			{
				type : "poison",
				status : "not very effective",
			}

		]
	},
	{
		type : "grass",
		weakAgainst : [
			{
				type : "bug",
				status : "super effective",
			},
			{
				type : "fire",
				status : "super effective",
			},
			{
				type : "flying",
				status : "super effective",
			},
			{
				type : "ice",
				status : "super effective",
			},
			{
				type : "poison",
				status : "super effective",
			}

		],
		strongAgainst : [
			{
				type : "electric",
				status : "not very effective",
			},
			{
				type : "grass",
				status : "not very effective",
			},
			{
				type : "ground",
				status : "not very effective",
			},
			{
				type : "water",
				status : "not very effective",
			}

		]
	},
	{
		type : "ground",
		weakAgainst : [
			{
				type : "grass",
				status : "super effective",
			},
			{
				type : "ice",
				status : "super effective",
			},
			{
				type : "water",
				status : "super effective",
			}
		],
		strongAgainst : [
			{
				type : "electric",
				status : "not effect",
			},
			{
				type : "poison",
				status : "not very effective",
			},
			{
				type : "rock",
				status : "not very effective",
			}
		]
	},
	{
		type : "ice",
		weakAgainst : [
			{
				type : "fighting",
				status : "super effective",
			},
			{
				type : "fire",
				status : "super effective",
			},
			{
				type : "rock",
				status : "super effective",
			},
			{
				type : "steel",
				status : "super effective",
			}
		],
		strongAgainst : [
			{
				type : "ice",
				status : "not very effective",
			}
		]
	},					
	{
		type : "normal",
		weakAgainst : [
			{
				type : "fighting",
				status : "super effective",
			}
		],
		strongAgainst : [
			{
				type : "ghost",
				status : "no effect",
			}
		]
	},
	{
		type : "poison",
		weakAgainst : [
			{
				type : "ground",
				status : "super effective",
			},
			{
				type : "psychic",
				status : "super effective",
			}
		],
		strongAgainst : [
			{
				type : "bug",
				status : "not very effective",
			},
			{
				type : "fairy",
				status : "not very effective",
			},
			{
				type : "fighting",
				status : "not very effective",
			},
			{
				type : "grass",
				status : "not very effective",
			},
			{
				type : "poison",
				status : "not very effective",
			}
		]
	},
	{
		type : "psychic",
		weakAgainst : [
			{
				type : "bug",
				status : "super effective",
			},
			{
				type : "dark",
				status : "super effective",
			},
			{
				type : "ghost",
				status : "super effective",
			}
		],
		strongAgainst : [
			{
				type : "fighting",
				status : "not very effective",
			},
			{
				type : "psychic",
				status : "not very effective",
			}
		]
	},
	{
		type : "rock",
		weakAgainst : [
			{
				type : "fighting",
				status : "super effective",
			},
			{
				type : "grass",
				status : "super effective",
			},
			{
				type : "ground",
				status : "super effective",
			},
			{
				type : "steel",
				status : "super effective",
			},
			{
				type : "water",
				status : "super effective",
			}
		],
		strongAgainst : [
			{
				type : "fire",
				status : "not very effective",
			},
			{
				type : "flying",
				status : "not very effective",
			},
			{
				type : "normal",
				status : "not very effective",
			},
			{
				type : "poison",
				status : "not very effective",
			}

		]
	},
	{
		type : "steel",
		weakAgainst : [
			{
				type : "fighting",
				status : "super effective",
			},
			{
				type : "fire",
				status : "super effective",
			},
			{
				type : "ground",
				status : "super effective",
			}
		],
		strongAgainst : [
			{
				type : "bug",
				status : "not very effective",
			},
			{
				type : "dragon",
				status : "not very effective",
			},
			{
				type : "fairy",
				status : "not very effective",
			},
			{
				type : "flying",
				status : "not very effective",
			},
			{
				type : "grass",
				status : "not very effective",
			},
			{
				type : "ice",
				status : "not very effective",
			},
			{
				type : "normal",
				status : "not very effective",
			},
			{
				type : "poison",
				status : "no effect",
			},
			{
				type : "psychic",
				status : "not very effective",
			},
			{
				type : "rock",
				status : "not very effective",
			},
			{
				type : "steel",
				status : "not very effective",
			}

		]
	},
	{
		type : "water",
		weakAgainst : [
			{
				type : "electric",
				status : "super effective",
			},
			{
				type : "grass",
				status : "super effective",
			}
		],
		strongAgainst : [
			{
				type : "fire",
				status : "not very effective",
			},
			{
				type : "ice",
				status : "not very effective",
			},
			{
				type : "steel",
				status : "not very effective",
			},
			{
				type : "water",
				status : "not very effective",
			}

		]
	},	
]

function appendOptions(id){
	for (var i = 0; i < pokeTypes.length; i++) {
		$(id).append("<option value='" + pokeTypes[i].type + "'>" + pokeTypes[i].type + "</option")
	}
}
function find_duplicate_in_array(arra1) {
    const object = {};
    const result = [];

    arra1.forEach(item => {
      if(!object[item])
          object[item] = 0;
        object[item] += 1;
    })

    for (const prop in object) {
       if(object[prop] >= 2) {
           result.push(prop);
       }
    }

    return result;
}

function searchType(type1, type2){

	var strong1 = []
	var weak1 = []

	var strong2 = []
	var weak2 = []

	for (var i = 0; i < pokeTypes.length; i++) {
		
		if (type1 && pokeTypes[i].type == type1) { //type 1 query
			for (var j = 0; j < pokeTypes[i].weakAgainst.length; j++) {
				if ( pokeTypes[i].weakAgainst[j].status == "super effective" ) {
					pokeTypes[i].weakAgainst[j].multiplier = 1.4;
				}			
				weak1.push(pokeTypes[i].weakAgainst[j])
			}

			for (var k = 0; k < pokeTypes[i].strongAgainst.length; k++) {
				if ( pokeTypes[i].strongAgainst[k].status == "no effect" ) {
					pokeTypes[i].strongAgainst[k].multiplier = 0.51;
				}else{
					pokeTypes[i].strongAgainst[k].multiplier = 0.714;
				}
				strong1.push(pokeTypes[i].strongAgainst[k])
			}
		}

		if (type2 && pokeTypes[i].type == type2) { //type 2 query
			for (var j = 0; j < pokeTypes[i].weakAgainst.length; j++) {
				if ( pokeTypes[i].weakAgainst[j].status == "super effective" ) {
					pokeTypes[i].weakAgainst[j].multiplier = 1.4;
				}			
				weak2.push(pokeTypes[i].weakAgainst[j])
			}

			for (var k = 0; k < pokeTypes[i].strongAgainst.length; k++) {
				if ( pokeTypes[i].strongAgainst[k].status == "no effect" ) {
					pokeTypes[i].strongAgainst[k].multiplier = 0.51;
				}else{
					pokeTypes[i].strongAgainst[k].multiplier = 0.714;
				}
				strong2.push(pokeTypes[i].strongAgainst[k])
			}
		}
	}



	var type1Result = {
		result : strong1.concat(weak1)
	}

	var type2Result = {
		result : strong2.concat(weak2)
	}

	// conso
	// console.log(type1Result)

	var types = mergeArrays(type1, type1Result.result, type2, type2Result.result)
	return types;
}

function mergeArrays(type1, ary1, type2, ary2){
	var resultArr = []
	var removeArr1 = []
	var removeArr2 = []

	for (var i = 0; i < ary1.length; i++) {
		for (var j = 0; j < ary2.length; j++) {
			if (ary1[i].type == ary2[j].type){

				removeArr1.push(i)
				removeArr2.push(j)

				var combineMultiplier = ary1[i].multiplier*ary2[j].multiplier

				var newMultiplier = Math.round(combineMultiplier*1000)/1000

				if (newMultiplier != 1) {
					var obj = {
						type: ary1[i].type,
						multiplier: newMultiplier
					}

					if (obj.multiplier >= 1.4 ) {
						obj.status = "super effective"
					}else if (obj.multiplier >= 0.714){
						obj.status = "not very effective"
					}else if (obj.multiplier >=0.51){
						obj.status = "no effect"
					}

					resultArr.push(obj)
				}
			}
		}
	}

	// console.log(resultArr)

	for (var a = removeArr1.length-1; a >= 0; a--){
		ary1.splice(removeArr1[a], 1)
	}

	for (var b = removeArr2.length-1; b >= 0; b--){
		ary2.splice(removeArr2[b], 1)
	}

	resultArr = resultArr.concat(ary1, ary2)

	var weakArr = []
	var strongArr = []
	for (var i = 0; i < resultArr.length; i++) {
		if( resultArr[i].status == "super effective"){
			weakArr.push(resultArr[i])
		}else{
			strongArr.push(resultArr[i])
		}
	}

	var finalObj = {
		weakAgainst : weakArr,
		strongAgainst : strongArr
	}

	return finalObj
}