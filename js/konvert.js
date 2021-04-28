function Convert()
{
    var valOne = $('#firstNum').val();
    var valTwo = $('#secondNum').val();

    if(valTwo == "")
    {
        if($('#selectOne').val() == "euro" && $('#selectTwo').val() == "Amdolar")
        {
            $('#secondNum').val(valOne * 1.21);
        }
        else if($('#selectOne').val() == "Amdolar" && $('#selectTwo').val() == "euro")
        {
            $('#secondNum').val(valOne * 0.83);
        }
        else
        {
            alert("Valute su iste");
        }
    }  
    
    else if(valOne == "")
    {
        if($('#selectTwo').val() == "euro" && $('#selectTwo').val() == "Amdolar")
        {
            $('#firstNum').val(valTwo * 1.21);
        }
        else if($('#selectTwo').val() == "Amdolar" && $('#selectOne').val() == "euro")
        {
            $('#firstNum').val(valTwo * 0.83);
        }
        else
        {
            alert("Valute su iste");
        }
    } 
}