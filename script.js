
     function calcular() {
                let tasaEntero = parseInt(document.getElementById("tasa").value);
                let semanas = parseInt(document.getElementById("semanas").value);
                let montoInicia = parseInt(document.getElementById("montoInicial").value);
                let monto = parseInt(document.getElementById("monto").value);
 
                let tasa = tasaEntero / 100;
                let sb =  document.getElementById("periodo");
                let index = sb.value;
                let saldo = montoInicia + monto;
                let interes = saldo * (tasa/365*index) / 52;
                console.log(index);
                let ultMonto, ultSaldo, ultInteres;
                
                let totalMontos = montoInicia;

                for (let i = 2; i <= semanas; i++) {
                    saldo = saldo + interes + monto;
                    interes = saldo * (tasa/365*index) / 52;
                    ultMonto = monto.toFixed(2);
                    ultSaldo = saldo.toFixed(2);
                    ultInteres = interes.toFixed(3);
                    totalMontos += monto;
                }
                let saldoInteres = (parseFloat(ultSaldo) + parseFloat(ultInteres)).toFixed(3) - totalMontos;

                document.getElementById("invertidoTotal").innerHTML ="$" + totalMontos;
                document.getElementById("saldoTotal").innerHTML ="$" + ultSaldo;
                document.getElementById("interesTotal").innerHTML ="$" + saldoInteres.toFixed(2);
            }