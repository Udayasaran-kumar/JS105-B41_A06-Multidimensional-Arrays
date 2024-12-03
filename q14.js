var N=5;
for(let i=0;i<N;i++){
let temp=""
for(let j=0;j<i;j++){
  temp=temp+" ";
}temp=temp+"\\";
for(let j=0;j<2*(N-i)-1;j++){
  temp=temp+" ";
}temp=temp+"/";
for(let j=0;j<2*i;j++){
  temp=temp+" ";
}temp=temp+"\\";
for(let j=0;j<2*(N-i)-1;j++){
  temp=temp+" ";
}temp=temp+"/";
console.log(temp);
}
