
let b = "</br>";
let names3 = ["Mary", "Tess", "Jhon", "Joy"];
let numbers2 = [1,2,3,4,5,6,7,8]
let mixed = ["Salomon", 99, 6.34, true];


//add and assign in array
names3[0] = "Sam";
names3[names3.length]= "Johhny";
names3[names3.length]= "Garcia";

//pop-delete the last element
//push-add at the end 
//shift-delete 1st element 
//unshift-add element at the beginning

//slice(start,end) -> gets a part of the array
//join replace the ","
names3.unshift("Charlu");

//print
names3 = names3.slice(1,3);
document.writeln(names3.join("*"));


document.writeln(`${names3[0]} and ${names3[1]} </br>`);
document.writeln(names3 + b);
document.writeln(names3.length + b);
document.writeln(mixed + b);

