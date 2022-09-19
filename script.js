
    function calc(op){
        
        var num1 = parseFloat (document.getElementById("num1").value);
        var num2 = parseFloat (document.getElementById("num2").value);
       
        
        if (op == '+'){
        var soma = num1 + num2;
        document.getElementById("result").value = soma;
        console.log(result);
        document.getElementById("history").innerHTML += "<br>" + soma;
     
        }
         
        
        if (op == '-'){
        var sub = num1 - num2;
        document.getElementById("result").value = sub;
        console.log(result);
        document.getElementById("history").innerHTML += "<br>" + sub;
        }
         
        if (op == '*'){
        var mult = num1 * num2;
        document.getElementById("result").value = mult;
        console.log(result);
        document.getElementById("history").innerHTML += "<br>" + mult;
        }
        
         
        if (op == '/'){
        var div = num1 / num2;
        document.getElementById("result").value = div;
        console.log(result);
        document.getElementById("history").innerHTML += "<br>" + div;
        }
         


    }
    



