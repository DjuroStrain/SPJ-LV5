var btn = $('#btn');

counter = 0;
btn.click(function(){
    var task = $('#input').val();
    console.log(task);

    $('#list').append(`<li id=${counter}><input type="checkbox"><button type="button" class="btnDelete" onclick="Delete(`+counter+`)"><span class="fas fa-trash-alt"/></button>`+task+`</li>`);
    counter += 1;
})

function Delete(counter)
 {
     $(`#list #${counter}`).remove();
 }