// WAP to swap values of two variables.
// //LOGIC
// var a =120
// var b =140

// var c     
// c=a
// a=(a*b)/a
// b=c
// console.log(a,b)   


// >>>   WAP to swap values of two variables without using third variable.
// //LOGIC 
// var a =120
// var b =140

// a= a+b
// b=a-b
// a=a-b
// console.log(a,b) 

// >>>     Write a  program to find maximum between two numbers.
// var a= 12000000000  
// var b = 15000000
// var big
// if(a>b){
// big=a
// }else{
//     big=b
// }
// console.log(big)

// >>>     Write a  program to find maximum between three numbers.


// var a =120000
// var b =1500
// var c=180
// var bigNumber
// if(a>b && b>c){bigNumber=a}
// else if(b>c && b>a){bigNumber=b}
// else{bigNumber=c}
// console.log(bigNumber)



// var a =120000
//  var b =15000000
//  var c=18000000000
// var bigNumber
// (a>b)?((b>c)?(bigNumber=a) :(bigNumber=c)): ((b>c)?(bigNumber=b):(bigNumber=c))
// console.log(bigNumber) 





// >>>     Write a  program to check whether a number is negative, positive or zero.
// var a=-2
// a>0?(console.log("a is +ve")):((a<0)?(console.log("a is -ve")):(console.log("a is neutral")))






// >>>     Write a  program to check whether a number is divisible by 5 and 11 or not.
// var a=2531
// a%55==0?(console.log("a is divisible by 5 and 11")):(console.log("a is not divisible by 5 and 11"))





// >>>     Write a  program to check whether a number is even or odd.
// var a = 26
// a%2==0?(console.log("a is even")):(console.log("a is odd"))





// >>>     Write a  program to check whether a year is leap year or not.
// 4 100 400

// var   a = 2016;
// a%4==0 ? ( (a%100!=0) ? (console.log("its a normal leap year")) : ((a%400==0) ? (console.log("its a centurial leap year")) : (console.log("its not a leap year"))) ) : (console.log("its  not a leap year"))




// >>>     Write a  program to input any alphabet and check whether it is vowel or consonant.	

// var char = "f"
// if(char=="a"){console.log("vowel")}
//  else if(char=="e"){console.log("vowel")}
//  else if(char=="i"){console.log("vowel")}
//   else if(char=="o"){console.log("vowel")}
//    else if(char=="u"){console.log("vowel")} 
//    else {console.log("it is  a consonant")}




// >>>     Write a  program to input week number and print week day.
// day = 1

// 1 => monday
// 2 => tuesday
// 3 => wednesday
// 4 => thursday
// 5 => friday
// 6 => saturday
// 7 => sunday

// var a = 6
// if (a ==1) { console.log("monday") }
//  else if (a == 2) { console.log("tuesday") }
//   else if (a == 3) { console.log("wednesday") }
// else if (a == 4) { console.log("thursday") }
//  else if (a == 5) { console.log("friday") }
//   else if (a == 6) { console.log("saturday") }

// else if (a == 7) { console.log("sunday") }
//  else { console.log("wrong input") }


// >>>     Write a  program to input month number and print number of days in that month.
// var a ="31 days"
// var b ="30 days"
// var c = 5
// if (c==1){console.log(a)}
// else if (c==2){console.log("28 days")}
// else if (c==3){console.log(a)}
// else if (c==4){console.log(b)}
// else if (c==5){console.log(a)}
// else if (c==6){console.log(b)}


// >>>     Write a  program to count total number of notes in given amount.

// var amount = 15000;
// var rem
// var value
// var notes

// if (amount >= 2000) {
//     rem = amount % 2000;
//     value = amount - rem;
//     notes = value / 2000
//     console.log("Required 2000 notes :", notes)
//     amount = rem;
// }
// if (amount >= 500) {
//     rem = amount % 500;
//     value = amount - rem;
//     notes = value / 500
//     console.log("Required 500 notes :", notes)
//     amount = rem;
// }
// if (amount >= 200) {
//     rem = amount % 200;
//     value = amount - rem;
//     notes = value / 200
//     console.log("Required 200 notes :", notes)
//     amount = rem;
// }
// if (amount >= 100) {
//     rem = amount % 100;
//     value = amount - rem;
//     notes = value / 100
//     console.log("Required 100 notes :", notes)
//     amount = rem;
// }
// if (amount >= 50) {
//     rem = amount % 50;
//     value = amount - rem;
//     notes = value / 50
//     console.log("Required 50 notes :", notes)
//     amount = rem;
// }
// if (amount >= 20) {
//     rem = amount % 20;
//     value = amount - rem;
//     notes = value / 20
//     console.log("Required 20 notes :", notes)
//     amount = rem;
// }
// if (amount >= 10) {
//     rem = amount % 10;
//     value = amount - rem;
//     notes = value / 10
//     console.log("Required 10 notes :", notes)
//     amount = rem;
// }
// if (amount >= 5) {
//     rem = amount % 5;
//     value = amount - rem;
//     notes = value / 5
//     console.log("Required 5 notes :", notes)
//     amount = rem;
// }
// if (amount >= 2) {
//     rem = amount % 2;
//     value = amount - rem;
//     notes = value / 2
//     console.log("Required 2 notes :", notes)
//     amount = rem;
// }
// if (amount >= 1) {
//     rem = amount % 1;
//     value = amount - rem;
//     notes = value / 1
//     console.log("Required 1 notes :", notes)
//     amount = rem;
// }







// >>>     Write a  program to input angles of a triangle and check whether triangle is valid or not.


// var a =10;
// var b =20;
// var c =150;
// var d = a+b+c;
// (d>=180) ? (console.log("perfect ")) : (console.log("something went wrong"))




// >>>     Write a  program to input all sides of a triangle and check whether triangle is valid or not.


//  var ab= 20;
// var bc = 30;
// var ca= 40;
// (ab+bc > ca) ? (console.log("perfect")) : (console.log("something went wrong"))




// >>>     Write a  program to check whether the triangle is equilateral, isosceles or scalene triangle.

// var ab= 30 ;
// var bc = 40 ; 
// var ca= 35 ;
// if (ab==bc && bc==ca){
//     console.log("equilateral")
// }
// else if (ab==bc || bc==ca || ab==ca ){
//     console.log("isosceles")
// }
// else {
//     console.log("scalene")
// }




// >>>     Write a  program to find all roots of a quadratic equation.

// var a = 2
// var b = 90
// var c = 10
// var x
// var y
// var root_1
// var root_2
// var eq = a*x*x + b*y*y + c ;

// var d = (b-(4*a*c));

// if(d>0){ 
//     root_1 =( (-b)+ Math.sqrt((b*b-4*a*c)) )/2*a;
//     root_2= ( (-b)- Math.sqrt((b*b-4*a*c)) )/2*a;
//     console.log("First root of eq. is" , root_1);
//     console.log("Second root of eq. is" , root_2);
// }else {
//     console.log("roots are imaginary");
// }


// >>>     Write a  program to calculate profit or loss.

// var cp = 8000;
// var sp = 5000;
// var profit = sp-cp;
// var loss = cp-sp;
// if(sp>cp){
//     console.log("profit is :", profit);
// }else {
//     console.log("loss is :", loss);
// }


// >>>     Write a  program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and 
// Computer. Calculate percentage and grade according to following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F

// var p = 80
// var m = 80
// var c = 80
// var b = 80
// var com = 80
// var per= (p+m+c+b+com)/5;
// if (per >= 90){
//     console.log("congrats you have passed with Grade A")
// }else if (per >= 80){
//     console.log("congrats you have passed with Grade B")
// }else if(per >= 70){
//     console.log("congrats you have passed with Grade C")
// }else if (per >= 60){
//     console.log("congrats you have passed with Grade D")
// }else if (per >= 40){
//     console.log("congrats you have passed with Grade E")
// } else {
//     console.log("your Grade is F")
// }

// >>>     Write a  program to input basic salary of an employee and calculate its Gross salary according to following:
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%


// var Gross_Salary = 0;
// var salary = 40000;
// if (salary<=10000){
//     Gross_Salary= (10*salary)/5
//     console.log(Gross_Salary);
// }else if (salary <= 20000){
//     Gross_Salary=(43*salary)/20
//     console.log(Gross_Salary);
// }else {
//     Gross_Salary= (9*salary)/4
//     console.log(Gross_Salary);
// }


// >>>     Write a  program to input electricity unit charges and calculate total electricity bill 
// according to the given condition:
// For first 50 units Rs. 0.50/unit = meter1 50
// For next 100 units Rs. 0.75/unit = meter2 150
// For next 100 units Rs. 1.20/unit = meter 3 250
// For unit above 250 Rs. 1.50/unit = meter 4 
// An additional surcharge of 20% is added to the bill



// var unit = 255;
// var amount= 0.0;
// var Gross_amount= 0.0;


// if (unit <=50 ){
//     amount = (unit)/2;
//     Gross_amount = amount+ (amount/5);
//     console.log(Gross_amount);
// }
// else if( unit >=51 && unit <= 150){
//     amount = 50/2 + ((unit-50)*3)/4
//     Gross_amount= amount + amount/5;
//     console.log(Gross_amount);
// }
// else if (unit>=151 && unit <=250){
//     amount = 50/2 + 150/2 + (((unit-150)*6)/5);
//     Gross_amount= amount + amount/5;
//     console.log(Gross_amount);
// }
// else {
//     amount = 50/2 + 150/2 + 120 + ((unit-250)*3)/2;
//     Gross_amount = amount + amount/5;
//     console.log(Gross_amount);
// }


// >>> tax calculator



// var income = 1500001;
// var tax = 0.0;
// if (income>=250001 && income <=500000){
//    tax=  (income)/20 
//    console.log("your Tax will be ", tax); 
// } else if (income>=500001 && income <= 750000){
//     tax= (income)/10;
//     console.log("your Tax will be ", tax);

// } else if (income>=750001 && income <=1000000){
//     tax= (income*3)/20;
//     console.log("your Tax will be ", tax);
// }else if (income>=1000001 && income <= 1250000){
//     tax= (income)/5;
//     console.log("your Tax will be ", tax);
// }else if (income>=1250001 && income <=1500000) {
//     tax= (income)/4;
//     console.log("your Tax will be ", tax);
// }else if (income>=1500001){
//     tax= (income*3)/10
//     console.log("your Tax will be ", tax);
// }else {
//     console.log("you don't have to pay any penny");
// }



// >>> calculate no. of years months day in a given input seconds . 
 var seconds = 864454580
 var year = 31536000 
 var month = 2629746
 var day = 86400
 var hour= 3600
 var min = 60
 var rem
 var Total_year
 var Total_month
 var Total_day
 var Total_hour
 var Total_min
 var sec
 if (seconds>=year){
    rem = seconds%year
    Total_year = (seconds-rem)/year
    console.log("Total number of Years :" ,Total_year);
    month=rem;
}
if (seconds>=month){
    rem = seconds%month
    Total_month = (seconds-rem)/month
    console.log("Total number of Months :" ,Total_month);
    day=rem;
}
if (seconds>=day){
    rem = seconds%day
    Total_day = (seconds-rem)/day
    console.log("Total number of Days :" ,Total_day);
    hours=rem;
}
if (seconds>=hours){
    rem = seconds%hours
    Total_hours = (seconds-rem)/hours
    console.log("Total number of Hours :" ,Total_hours);
    min=rem;
}
if (seconds>=min){
    rem = seconds%min
    Total_min = (seconds-rem)/min
    console.log("Total number of Minutes :" ,Total_min);
    
}

