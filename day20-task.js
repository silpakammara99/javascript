//1.)iterabe object values through for in loop

let obj={ 
    "Name":"silpa", 
    "place": "tirupati", 
    "skill": "html,css, js" ,
    "education":{
          "details":"MCA, Degree, Intermediate, SSC"
    }
} 
 
for(i in obj){ 
    console.log(obj[i]);
}

//2) iterabe object keys  through for in loop

// let i; 
// let obj={ 
//     "key1":"keyvalue", 
//     "key2": "keyvalue2", 
//     "key3": "keyvalue3" 
// } 
 
// for(i in obj){ 
//     console.log(i);
// }

//3)iterate object values and keys using entries , keys and values methods

//  let obj={ 
//         "Name":"silpa", 
//         "place": "tirupati", 
//         "skills": "html,css, js" ,
//         "education":{
//               "details":"MCA, Degree, Intermediate, SSC"
//         }
//     } 
     
//     for(i in obj){ 
//         console.log(i+ " : "+obj[i] );
//     }


// 1.)iterate object values and keys using for of loop entries , keys and values methods

// i. object entrries - keys and values


// let doc={
//     "country": "india",
//     "city":"tirupati",
//     "pincode":"517501"
// }
// for([key, values] of Object.entries(doc)){

//     console.log(key+" : "+values)
// }

// ii.object keys - keys and values

// let doc={
//     "country": "india",
//     "city":"tirupati",
//     "pincode":"517501"
// }

// for(key of Object.keys(doc)){
//     let value = doc[key];
//     console.log("keys: "+ key);
// }

//object values - we can get only values

let doc={
    "country": "india",
    "city":"tirupati",
    "pincode":"517501"
}

for(i of Object.values(doc)){
    console.log("values: "+ i);
}


