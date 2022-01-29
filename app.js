
class Calc {
    constructor(inputOne, inputSecond) {
        this.inputOne = Number(inputOne);
        this.inputSecond = Number(inputSecond);
    }

    soma() {
        const total = this.inputOne + this.inputSecond;


        return total;
    }
    subtracao(){
        const total = this.inputOne - this.inputSecond;


        return total;
    }
    divisao() {
        const total = this.inputOne / this.inputSecond;


        return total;
    }
    multiplicacao() {
        const total = this.inputOne * this.inputSecond;


        return total;
    }
}
const Display = {
    current: document.querySelector('p.current'),


    calculator(value) {
        Display.current.innerHTML = value;
    }
}

const Form = {
    inputOne: document.querySelector('input#input-first'),
    inputSecond: document.querySelector('input#input-second'),
    operators: document.querySelector('select#operators'),

    clearFields() {
        Form.inputOne.value = 0;
        Form.inputSecond.value = 0;
        Form.operators.value = "";
    },
    getValues() {
        return {
            inputOne: Form.inputOne.value,
            inputSecond: Form.inputSecond.value,
            operator: Form.operators.value
        }
    },
    submit(event) {
        try {
            event.preventDefault()
            const {inputOne, inputSecond, operator} = Form.getValues();
            let calculator = new Calc(inputOne,inputSecond);
            
            let result = calculator[operator]();
            console.log(result)
            Display.calculator(result)
            Form.clearFields();
        } catch (err) {
            alert("Selecione o operador")
        }
        
    }
}
