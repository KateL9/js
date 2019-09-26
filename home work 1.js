//Clone array
let homeWorkArray2 = [1,2,'3',4,'ds1sd',5,'!',0];

let copyOfarray = new Array(8);

for (let i=0; i<8; i++)
  { 
    copyOfarray[i] = homeWorkArray2[i];
    console.log(copyOfarray[i]);
  };
  //Display all numbers
let homeWorkArray1 = [1,2,'3',4,'ds1sd',5,'!',0];

for (var i = 0; i <= homeWorkArray1.length - 1; i++) 
{
  	if ( typeof(homeWorkArray1[i]) == 'number')
  	{
    console.log(homeWorkArray1[i]);
	}
}

//Display all strings
let homeWorkArray1 = [1,2,'3',4,'ds1sd',5,'!',0];

for (var i = 0; i <= homeWorkArray1.length - 1; i++)
	{
  		if (typeof(homeWorkArray1[i]) == 'string')
  		{
    console.log(homeWorkArray1[i]);
 		}
	}

//Display array backwards
let homeWorkArray3 = [1,2,'3',4,'ds1sd',5,'!',0];

let newArr = new Array (8);

let a = newArr.length-1;

	for(let j = a; j>= 0; --j)
  	{
    newArr[a-j] = homeWorkArray3[j]
 	}
console.log(newArr);

//Sort array by ASC

let homeWorkArray2 = [0, -7, 8, 2, 7, -2, 8, 1, 78]

  
   for (let i = 0; i < homeWorkArray2.length; i++) {
          //Первый элемент миним
       let min = homeWorkArray2[i];
       let min_i = i;
       //Поиск элемента меньше чем наш минимум
       for (let j = i+1; j < homeWorkArray2.length; j++) {
          //В случаи нахождения- запоминаем индекс
           if (homeWorkArray2[j] < min) {
               min = homeWorkArray2[j];
               min_i = j;
           }
       }
       //Если найден элемен меньше,чем тепершний- меняем местами
       if (i != min_i) {
           tmp = homeWorkArray2[i];
           homeWorkArray2[i] = homeWorkArray2[min_i];
           homeWorkArray2[min_i] = tmp;
       }
    }
    console.log();
       for (let i = 0; i < homeWorkArray2.length; i++) {
           console.log( homeWorkArray2[i] + "; " );
       }
    
 //Sort array by DESC
let homeWorkArray2 = [0, -7, 8, 2, 7, -2, 8, 1, 78]

   for (let i = 0; i < homeWorkArray2.length; i++) {
          
       let max = homeWorkArray2[i];
       let max_i = i;
       for (let j = i+1; j < homeWorkArray2.length; j++) {
           if (homeWorkArray2[j] > max) {
               max = homeWorkArray2[j];
               max_i = j;
           }
       }
       if (i != max_i) {
           tmp = homeWorkArray2[i];
           homeWorkArray2[i] = homeWorkArray2[max_i];
           homeWorkArray2[max_i] = tmp;
       }
    }
    console.log();
       for (let i = 0; i < homeWorkArray2.length; i++) {
           console.log( homeWorkArray2[i] + "; " );
           }
           


//Find element using a binary search
let homeWorkArray2 = [1, 2, 3, 5, 7, 8, 0, 9, 11, 13, 12, 14, 15, 17]
homeWorkArray2.sort(function(a,b){ 
  return a-b
})
let min = 0;
let max = homeWorkArray2.length-1;
let value = 9

	while (min<=max)
{
	middle = Math.floor((max+min) / 2);
		if (value === homeWorkArray2[middle]){
				console.log ("gvhbj " + homeWorkArray2[middle]);
				break;
		} else if (value >= homeWorkArray2[middle]) {
				min = middle-1;
		} else {
				max = middle+1;
		}
}


