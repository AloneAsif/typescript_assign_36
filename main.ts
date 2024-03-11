// Question no 37 

function describe_city(country:string[] = ['pakistan','egypt'], city: string []= ['karachi','cairo']){
    for(let i=0; i <= city.length-1; i++){
        console.log(`${city[i]} is in ${country[i]}`)
    }
} 

describe_city()

describe_city(['tornoto'],['canada'])
