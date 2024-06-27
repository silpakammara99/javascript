//1. program to print before letters of a specific name.

let a = "hello";
let add = ""; 
for (let i = 0; i < a.length; i++) { 
   let x=a.charCodeAt(i)-1; 
   add+=String.fromCharCode(x);
}
y=add.split('');
console.log(add);


//2. program to print a word to reverse
let w="programming";
let x="";
for(i=w.length-1;i>=0;i--){
    x+=w[i];
}
console.log(x);

//or

let v="future";
let i=w.length-1;
let y="";
while(i>=0){
    y+=v[i];
   i--;
}
console.log(y);

//3. program to trim the space between the words

let m="         he ll ow or ld         ";

let s='';
for(i=0;i<m.length;i++){
    if(m[i]!=" ")
    s+=m[i];
}
console.log(s);

//or

let k=0;
let ad='';
while(k<m.length)
    { 
        if(m[k]!=' ') {
        add+=m[k];
    }i++
    }
    console.log(ad);





