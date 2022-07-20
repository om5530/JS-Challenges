 let products = [
{
  title:"Iphone 8",
  company:"apple"
},
{
  title:"Galaxy",
  company:"samsung"
},
{
  title:"Iphone 7",
  company:"apple"
},
{
  title:"Iphone Xs",
  company:"apple"
},
{
  title:"HTC Phone",
  company:"htc"
},
{
  title:"Iphone 10",
  company:"apple"
}
 ]

 function getUnique(arr){
  let tempArr =[...new Set(arr)].map(item => item.company)
  return [...new Set(tempArr)]
 }


//  function getUnique(arr){
//   return [...arr.reduce((acc,curr)=>{
// return acc.add(curr.company)
//   },new Set())]
//  }

 console.log(getUnique(products))