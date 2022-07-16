const saldoInsuficienteError = new Error('Saldo Insuficiente!');
saldoInsuficienteError.name = 'saldoInsuficienteException';

const saqueUniversitarioError = new Error('Seu saque foi maior que 500R$');
saqueUniversitarioError.name = 'saqueUniversitarioException';

class ContaBancaria{
    constructor(agencia,numero,tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get getSaldo(){
        return this._saldo;
    }

    set setSaldo(novoSaldo){
        this._saldo = novoSaldo;
    }

    sacar(valorSaque){
        try{
            if(this.getSaldo < valorSaque)
                throw saldoInsuficienteError;
            
            this.setSaldo = valorSaque-this.getSaldo;
            console.log(`Saque de ${valorSaque}R$ feito com sucesso!`);
        } catch(err){
            console.log(err.name + ': ' + err.message);
        }
    }

    depositar(valorDeposito){
        this.setSaldo = valorDeposito + this.getSaldo ;
        console.log(`Deposito de ${valorDeposito}R$ feito com sucesso\nNovo saldo de ${this.getSaldo}R$`);
    }
}

class ContaCorrente extends ContaBancaria{
    constructor(agencia,numero,cartaoCredito){
        super(agencia,numero);
        this.tipo = 'corrente'
        this._cartaoCredito = cartaoCredito;
    }

    get getCartaoCredito(){
        return this._cartaoCredito;
    }

    set setCartaoCredito(novoCartaoCredito){
        this._cartaoCredito = novoCartaoCredito;
    }
}

class ContaPoupanca extends ContaBancaria{
    constructor(agencia,numero){
        super(agencia,numero);
        this.tipo = 'poupança'
    }
}

class ContaUniversitaria extends ContaBancaria{
    constructor(agencia,numero){
        super(agencia,numero);
        this.tipo = 'universitaria'
    }

    sacar(valorSaque){
        try{
            if(this.getSaldo<valorSaque)
                throw saldoInsuficienteError;
            
            if(valorSaque > 500)
                throw saqueUniversitarioError;
        
            this.setSaldo = valorSaque - this.getSaldo;
            console.log(`Saque de ${valorSaque}R$ feito com sucesso\nNovo saldo de ${this.getSaldo}`);
        } catch (err){
            console.log(err.name + ': ' + err.message);
        } 

    }
}