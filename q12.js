var arr = [[1,2],[3,4],[5,6]];
var N=3;
var M=2;

for(let i=0;i<N;i++){
  for(let j=0;j<M;j++){
    arr[i][j]=i+j;
  }
}
for(let i=0;i<N;i++){
  console.log(arr[i]);
}
