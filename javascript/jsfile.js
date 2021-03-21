alert("hello! welcome to my website")

var house = prompt("how much appartment do you have?")
if(house==1){
document.write('<h2>'+ "we recommend you to choose the cottage decoration"+'<h2>')
}else{
    document.write('<h2>'+"we recommend you to choose appartment decoration"+'<h2>')
}
//console.log(house)
document.write(house)



if(house==1){alert("we can help you also decorate your backyard")
}else{
    alert("your appartment will be nice by working with us")
}
if (confirm('Are you sure you want tthese service?')) {
    
    alert("we have an honor to work with us")
  } else {
      alert("we hope you to choose on of our service")
  }



  var need = prompt("what kind of service do you need? build/maintainance");
  while(need !="Maintainance" && need != "Build")
  {
      alert("please write 'Build' fot building service and 'Maintainance' for maintainance service.")
      need = prompt("what kind of service do you need? ")
  }



  var nomberOfAppartment = prompt("how many appartment do you want to build");

  var appartment ='';
  var result ='';

  if(need=="Build"){
      appartment=' <img src="https://cf.bstatic.com/images/hotel/max1024x768/217/217203339.jpg" alt="cottage pic">'
  } else if (need=="Maintainance") {
      appartment='<img src="https://i.pinimg.com/564x/29/61/2f/29612fc4db79125ee7c81910e1cace1f.jpg" alt="appartment pic">'
  }

for(var  i=0 ; i < nomberOfAppartment ; i++ ){
    result+=appartment;
}
document.write(result);