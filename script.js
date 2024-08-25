
//1)anonymous and IIFE
//a)anonymous
var odd=function(arr){
    for(var i=0;i<arr.length;i++){
     if(arr[i]%2!==0){
        result.push(arr[i]) 
     }
    }
    }
    var result=[];
    odd([1,2,3,4,5,6,7,8,9]);
    console.log(result)
    //IIFE
    var result=[];
(function(arr){
  for(var i=0;i<arr.length;i++){
   if(arr[i]%2!==0){
      result.push(arr[i]) 
   }
  }
  console.log(result);
  }([1,2,3,4,5,6,7,8,9]))

  //b)conver to caps -anonymous

var caps=function(arr){
    for(var i=0;i<arr.length;i++){
      var arr2=arr[i].split("")
     upper[i]=arr2[0].charAt(0).toUpperCase()
     result.push(upper[i] + arr[i].slice(1));
    }
    
    }
    var result=[];
  var upper=[];
    caps(["hello","hi","welcome"])
    console.log(result);


  //IIFE
  var result=[];
var upper=[];
(function(arr){
  for(var i=0;i<arr.length;i++){
    var arr2=arr[i].split("")
   upper[i]=arr2[0].charAt(0).toUpperCase()
   result.push(upper[i] + arr[i].slice(1));
  }
  console.log(result);
  }(["hello","hi","welcome"]))

  //c)sum of all numbers in array
  //anonymous
  var sum=0;
var add=function(arr){
  for(var i=0;i<arr.length;i++){
    sum=sum+arr[i]
   
  }
  console.log(sum);
  }
  

  add([1,2,3,4,5,6])
  //IIFE
  var sum=0;
(function(arr){
  for(var i=0;i<arr.length;i++){
    sum=sum+arr[i]
   
  }
  console.log(sum);
  }([1,2,3,4,5,6]))

  //d)prime num
  //anonymous
  var sum=0;
  var count=0;
  var prime=function(arr){
    for(var i=0;i<arr.length;i++){
      for(var j=2;j<i;j++)
      {
        if(arr[i]==1){
        count=1;
        }
        if(arr[i]%j==0)
        {
          count=1
          }}
      if(count==0){
        console.log("prime number", arr[i])
      }
      count=0;
      
     
    }
    
    }
    prime([1,2,3,4,5,6,7,8,9,10,11])

  //iife
  var sum=0;
var count=0;
(function(arr){
  for(var i=0;i<arr.length;i++){
    for(var j=2;j<i;j++)
    {
      if(arr[i]==1){
      count=1;
      }
      if(arr[i]%j==0)
      {
        count=1
        }}
    if(count==0){
      console.log("prime number", arr[i])
    }
    count=0;
    
   
  }
  
  }([1,2,3,4,5,6,7,8,9,10,11]))

  //e)pallindrome
  //anonymous
  var result=[];
var rev="";
var pallin=function(arr){
  for(var i=0;i<arr.length;i++){
    rev="";
    var arr2=arr[i]
    for(var j=(arr2.length-1);j>=0;j--){
    rev=rev+arr2[j]
    
    }
  if(arr[i]==rev){
      result.push(arr[i])
      
    }
    
  }
  
}
  pallin(["aba","dcd","ghh","dod"]);
  console.log(result)

  //iife
  var result=[];
var rev="";
(function(arr){
  for(var i=0;i<arr.length;i++){
    rev="";
    var arr2=arr[i]
    for(var j=(arr2.length-1);j>=0;j--){
    rev=rev+arr2[j]
    
    }
  if(arr[i]==rev){
      result.push(arr[i])
      
    }
    
  }
  
}(["aba","dcd","ghh","dod"]))
  
  console.log(result)

  //f)median

var getMedian=function(ar1, ar2)
{
    var n=ar2.length;
    var i = 0; 
    var j = 0; 
    var count;
    var m1 = -1, m2 = -1;
 
    for (count = 0; count <= n; count++)
    {
        if (i == n)
        {
            m1 = m2;
            m2 = ar2[0];
            break;
        }
 
        else if (j == n)
        {
            m1 = m2;
            m2 = ar1[0];
            break;
        }
       
        if (ar1[i] <= ar2[j])
        {
            m1 = m2; 
            m2 = ar1[i];
            i++;
        }
        else
        {
            m1 = m2; 
            m2 = ar2[j];
            j++;
        }
    }
 
    console.log((m1+m2/2))
}
getMedian(([1, 12, 15, 26, 38]),([2, 13, 17, 30, 45]));

//iife

(function(ar1, ar2)
{
    var n=ar2.length;
    var i = 0; 
    var j = 0; 
    var count;
    var m1 = -1, m2 = -1;
 
    for (count = 0; count <= n; count++)
    {
        if (i == n)
        {
            m1 = m2;
            m2 = ar2[0];
            break;
        }
 
        else if (j == n)
        {
            m1 = m2;
            m2 = ar1[0];
            break;
        }
       
        if (ar1[i] <= ar2[j])
        {
            m1 = m2; 
            m2 = ar1[i];
            i++;
        }
        else
        {
            m1 = m2; 
            m2 = ar2[j];
            j++;
        }
    }
 
    console.log((m1+m2/2))
}
(([1, 12, 15, 26, 38]),([2, 13, 17, 30, 45])))

//g)unique array
//anonymous

var arr=function(arr) { 
    let unique = []; 
    for (var i = 0; i < arr.length; i++) { 
        if (unique.indexOf(arr[i]) === -1) { 
            unique.push(arr[i]); 
        } 
    } 
    console.log(unique) 
} 
arr(["apple", "mango","apple", "orange", "mango", "mango"])

//iife

(function(arr) { 
    let unique = []; 
    for (var i = 0; i < arr.length; i++) { 
        if (unique.indexOf(arr[i]) === -1) { 
            unique.push(arr[i]); 
        } 
    } 
    console.log(unique) 
} 
(["apple", "mango","apple", "orange", "mango", "mango"]))
//h)rotate
//anonyms
var rotate=function(arr,n)
{
 for(var i=0;i<n;i++){
  arr.push(arr.shift()) 
 }
 console.log(arr)
}
rotate([1,2,3,4,5],2)

//iife
(function(arr,n)
{
 for(var i=0;i<n;i++){
  arr.push(arr.shift()) 
 }
 console.log(arr)
}
([1,2,3,4,5],2))


//2)arrow function
//a)odd number
var odd=(arr)=>{
    for(var i=0;i<arr.length;i++){
     if(arr[i]%2!==0){
        result.push(arr[i]) 
     }
    }
    }
    var result=[];
    odd([1,2,3,4,5,6,7,8,9]);
    console.log(result)

 //b)  
 var caps=(arr)=>{
    for(var i=0;i<arr.length;i++){
      var arr2=arr[i].split("")
     upper[i]=arr2[0].charAt(0).toUpperCase()
     result.push(upper[i] + arr[i].slice(1));
    }
    
    }
    var result=[];
  var upper=[];
    caps(["hello","hi","welcome"])
    console.log(result); 

  //c)
  var sum=0;
var add=(arr)=>{
  for(var i=0;i<arr.length;i++){
    sum=sum+arr[i]
   
  }
  console.log(sum);
  }
  

  add([1,2,3,4,5,6])  

//d)
var sum=0;
  var count=0;
  var prime=(arr)=>{
    for(var i=0;i<arr.length;i++){
      for(var j=2;j<i;j++)
      {
        if(arr[i]==1){
        count=1;
        }
        if(arr[i]%j==0)
        {
          count=1
          }}
      if(count==0){
        console.log("prime number", arr[i])
      }
      count=0;
      
     
    }
    
    }
    prime([1,2,3,4,5,6,7,8,9,10,11])

//e)
var result=[];
var rev="";
var pallin=function(arr){
  for(var i=0;i<arr.length;i++){
    rev="";
    var arr2=arr[i]
    for(var j=(arr2.length-1);j>=0;j--){
    rev=rev+arr2[j]
    
    }
  if(arr[i]==rev){
      result.push(arr[i])
      
    }
    
  }
  
}
  pallin(["aba","dcd","ghh","dod"]);
  console.log(result)