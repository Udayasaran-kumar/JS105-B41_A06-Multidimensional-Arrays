var arr = [[1,2,3,4,5],
[6,7,8,9,1],
[3,2,5,4,6],
[7,8,9,1,2]];
var bottom=arr.length-1;
var right=arr[0].length-1;
var top=0;
var left=0;
var res=""
for(let i=right;i>=left;i--){
  res=res+arr[top][i]+" ";
}
for(let i=left;i<=right;i++){
  res=res+arr[top+1][i]+" ";
}
for(let i=right;i>=left;i--){
  res=res+arr[top+2][i]+" ";
}
for(let i=left;i<=right;i++){
  res=res+arr[top+3][i]+" ";
}console.log(res);
