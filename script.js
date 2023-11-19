var ifal = new XMLHttpRequest
ifal.open("GET" , "http://comperve.ufrn.br/");
ifal.send(null);

        ifal.onreadystatechange = function() {
            if (ifal.readyState === 4)
                if (ifal.status === 200)
                document.write (ifal.responseText);

        };