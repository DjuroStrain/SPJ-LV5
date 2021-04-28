$(document).ready(function()
{

});

var btnDodaj = $('#btnDodaj');

function CheckDate(input){
    var reg = /(0[1-9]|[12][0-9]|3[01])[- -.](0[1-9]|1[012])[- -.](19|20)\d\d/;
    if (input.match(reg)) {
     // alert("Input matched");
    }
    else {
      alert("Please enter dd-mm-yyyy");
    }
  }

btnDodaj.click(function()
{
    var name = $('#name').val();
    var lastname = $('#lastname').val();
    var jmbag = $('#jmbag').val();
    var oib = $('#oib').val();
    var birthdate = $('#birthDate').val();
    var address = $('#address').val();
    var postNum = $('#postNum').val();
    var city = $('#city').val();

    if(name == "" || lastname == "" || jmbag == "" || oib == "" || birthdate == "" || address == "" || postNum == "" || city == "" )
    {
        alert("Nisu popunjena sva polja");
    }
    else
    {
        CheckDate(birthdate);

        var newDate = birthdate.split("-").reverse().join("-");
        
        var newObject = 
        {
            firstName : name,
            lastName : lastname,
            Jmbag : jmbag,
            Oib : oib, 
            BirthDate : newDate,
            Address : address,
            PostNum : postNum,
            City : city
        }

        console.log(newObject);
    }
})