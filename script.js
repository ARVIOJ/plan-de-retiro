function calcular() {
                let tasaEntero = parseInt(document.getElementById("tasa").value);
                let semanas = parseInt(document.getElementById("semanas").value);
                let montoInicia = parseInt(document.getElementById("montoInicial").value);
                let monto = parseInt(document.getElementById("monto").value);

                let tasa = tasaEntero / 100;
                let sb =  document.getElementById("periodo");
                let index = sb.value;
                let saldo = montoInicia;
                let interes = (saldo+monto) * tasa/360*index;
                console.log(index);
                let ultMonto, ultSaldo, ultInteres;

                let totalMontos = montoInicia;

                for (let i = 1; i <= semanas; i++) {

                    saldo = saldo + interes + monto;

                    interes = (saldo+monto) * tasa/360*index;

                    ultMonto = monto;
                    ultSaldo = saldo;
                    ultInteres = interes;
                    totalMontos += monto;
                }
                let saldoInteres = ultSaldo - totalMontos ;

                document.getElementById("invertidoTotal").innerHTML ="$" + totalMontos.toFixed(3);
                document.getElementById("saldoTotal").innerHTML ="$" + ultSaldo.toFixed(3);
                document.getElementById("interesTotal").innerHTML ="$" + saldoInteres.toFixed(3)  ;
            }
