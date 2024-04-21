function gotoRecipe(){
    var radios = document.getElementsByName('recipe'), 
        value  = '';

    for (var i = radios.length; i--;) {
        if (radios[i].checked) {
            value = radios[i].value;
            break;
        }
    }

             window.location.href= value
        }