class Logic {
    constructor() { }

    selectOne() {
        if (data.getValue() === '0')
            data.setValue('1')
        else
            data.setValue(data.getValue() + '1')
    }
    selectTwo() {
        if (data.getValue() === '0')
            data.setValue('2')
        else
            data.setValue(data.getValue() + '2')
    }
    selectThree() {
        if (data.getValue() === '0')
            data.setValue('3')
        else
            data.setValue(data.getValue() + '3')
    }
    selectFour() {
        if (data.getValue() === '0')
            data.setValue('4')
        else
            data.setValue(data.getValue() + '4')
    }
    selectFive() {
        if (data.getValue() === '0')
            data.setValue('5')
        else
            data.setValue(data.getValue() + '5')
    }
    selectSix() {
        if (data.getValue() === '0')
            data.setValue('6')
        else
            data.setValue(data.getValue() + '6')
    }
    selectSeven() {
        if (data.getValue() === '0')
            data.setValue('7')
        else
            data.setValue(data.getValue() + '7')
    }
    selectEight() {
        if (data.getValue() === '0')
            data.setValue('8')
        else
            data.setValue(data.getValue() + '8')
    }
    selectNine() {
        if (data.getValue() === '0')
            data.setValue('9')
        else
            data.setValue(data.getValue() + '9')
    }
    selectZero() {
        if (data.getValue() !== '0')
            data.setValue(data.getValue() + '0')
    }

    ClearAll() {
        data.setValue('0')
    }

    selectDivide() {
        data.setValue(data.getValue() + '÷')
    }
    selectMultiply() {
        data.setValue(data.getValue() + '×')
    }
    selectSubtract() {
        data.setValue(data.getValue() + '-')
    }
    selectAdd() {
        data.setValue(data.getValue() + '+')
    }

    calculate() {
        const operation = data.getValue().replaceAll('÷', '/').replaceAll('×', '*')

        const result = eval(operation)

        const newValue = String(result)

        data.setValue(newValue)
    }

    selectBackspace() {
        let newValue
        if (data.getValue().length === 1)
            newValue = '0'
        else
            newValue = data.getValue().slice(0, -1)

        data.setValue(newValue)
    }

    selectComma() {
        const lastCharacter = data.getValue().at(-1)

        if (lastCharacter === ',') return

        const lastIndexOfDivide = data.getValue().lastIndexOf('÷')
        const lastIndexOfMultiply = data.getValue().lastIndexOf('×')
        const lastIndexOfSubtract = data.getValue().lastIndexOf('-')
        const lastIndexOfAdd = data.getValue().lastIndexOf('+')

        const lastIndexOfOperation = Math.max(lastIndexOfDivide, lastIndexOfMultiply, lastIndexOfSubtract, lastIndexOfAdd)

        const lastIndex = data.getValue().length - 1

        let newValue

        if (lastIndexOfOperation === lastIndex)
            newValue = data.getValue() + '0,'
        else if (lastIndexOfOperation === -1) {
            if (data.getValue().includes(',')) return

            newValue = data.getValue() + ','
        } else {
            const lastOperand = data.getValue().slice(lastIndexOfOperation + 1)

            if (lastOperand.includes(',')) return

            newValue = data.getValue() + ','
        }

        data.setValue(newValue)
    }

    changeSign() {
        const operands = []
        const operators = []

        let operand = ''

        for (let i = 0; i < data.getValue().length; i++) {
            const char = data.getValue()[i]
            const prevChar = data.getValue()[i - 1]

            if (char === '-' && prevChar !== '(' || char === '+' || char === '÷' || char === '×') {
                operands.push(operand)
                operators.push(char)
                operand = ''
            } else {
                operand += char

                if (i === data.getValue().length - 1)
                    operands.push(operand)
            }
        }

        if (operands.length === operators.length) return

        let lastOperand = operands.at(-1)

        if (lastOperand === '0') return

        if (lastOperand.includes('('))
            lastOperand = lastOperand.slice(2, -1)
        else
            lastOperand = '(-' + lastOperand + ')'

        operands[operands.length - 1] = lastOperand

        let newValue = ''

        for (let i = 0; i < operands.length; i++) {
            const operand = operands[i]

            newValue += operand

            const operator = operators[i]

            if (operator)
                newValue += operator
        }

        data.setValue(newValue)
    }

    getCurrentValue() {
        return data.getValue()
    }
}

//instance

const logic = new Logic()