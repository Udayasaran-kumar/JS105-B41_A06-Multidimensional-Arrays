var arr=[[1,2,3],
[4,5,6],
[7,8,9]];
var bottom=arr.length-1;
var right=arr[0].length-1;
var top=0;
var left=0;
var res=""
for(let i=bottom;i>=top;i--){
  res=res+arr[i][left]+" ";
}for(let i=left+1;i<=right;i++){
  res=res+arr[top][i]+" ";
}for(let i=top+1;i<=bottom;i++){
  res=res+arr[i][right]+" ";
}for(let i=right-1;i>left;i--){
  res=res+arr[bottom][i];
}
console.log(res);
