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