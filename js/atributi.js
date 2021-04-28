var option = $('#inputType');

function Input()
{
    if(option.val() == "email")
    {
        $('#div').empty();
        $('#div').append('<br><input type="email" id="email"><br><br><button type="submit" onclick="JSON()">Spremi</button>');
    }
    else if(option.val() == "number")
    {
        $('#div').empty();
        $('#div').append('<br><input type="number" id="number"><br><br><button type="button" onclick="JSON()">Spremi</button>');
    }
    else if(option.val() == "password")
    {
        $('#div').empty();
        $('#div').append('<br><input type="password id="password"><br><br><button type="button" onclick="JSON()">Spremi</button>');
    }
    else if(option.val() == "text")
    {
        $('#div').empty();
        $('#div').append('<br><input type="text" id="text"><br><br><button type="button" onclick="JSON()">Spremi</button>');
    }
    else if(option.val() == "odaberi")
    {
        $('#div').empty();
    }
}

function JSON()
{
    if(option.val() == "email")
    {
        var input = $('#email').val();
        download("email.json",'{"email": "'+input+'"}');
    }
    else if(option.val() == "number")
    {
        var input = $('#number').val();
        download("number.json",'{"number": '+input+'}');
    }
    else if(option.val() == "password")
    {
        var input = $('#password').val();
        download("password.json",'{"password": "'+input+'"}');
    }
    else if(option.val() == "text")
    {
        var input = $('#text').val();
        download("text.json",'{"text": "'+input+'"}');
    }
    else if(option.val() == "odaberi")
    {
        $('#div').empty();
    }
}

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }
  
