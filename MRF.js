var request= new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send();
request.onload = function(){
    var result = JSON.parse(request.response);
    console.log(result);
    //1a//get all countries in the asia region using filter method 
    var filter_data= result.filter((ele)=>ele.region == "Asia");
    console.log(filter_data);
    //1b//get all coutries with population less than 200000 using filter method
    var pop_data=result.filter((ele)=>ele.population<200000);
    console.log(pop_data);
    //1c//print the name,capital&flags of all countries using forEach method 
    result.forEach((ele)=>console.log(ele.name.common,ele.capital,ele.flags.png));
    //1d//print the total population of countries using reduce method
    var sum_pop=result.reduce((acc,cv)=>acc+cv.population,0);
    console.log(sum_pop);
    //1e//print the countries that uses US dollar as currency
    var filter_data1= result.filter((ele)=>ele.currencies== "United States dollar").map((ele)=>ele.name.common);
    console.log(filter_data1);
}


