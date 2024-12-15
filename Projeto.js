        function calcularGorjeta() {

            let ValordaConta = parseFloat(document.getElementById('ValordaConta').value);
            let percentualGorjeta = parseFloat(document.getElementById('percentualGorjeta').value);

            if (isNaN(ValordaConta) || isNaN(percentualGorjeta) || ValordaConta <= 0 || percentualGorjeta < 0) {
                alert('Por favor, insira um valor!');
                return;
            }

            let gorjeta = (ValordaConta * percentualGorjeta) / 100;
            let total = ValordaConta + gorjeta;

            document.getElementById('resultado').innerHTML = `
                <p>Valor da Gorjeta: R$ ${gorjeta.toFixed(2)}</p>
                <p>Total da conta + Gorjeta: R$ ${total.toFixed(2)}</p>
            `;
        }