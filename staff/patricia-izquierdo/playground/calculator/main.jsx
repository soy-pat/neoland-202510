const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

const useState = React.useState

function App() {

    const displayState = useState('0')
    const displayValue = displayState[0]
    const setDisplayValue = displayState[1]


    const handleDeleteClicked = () => {
        let newValue
        if (displayValue.length === 1)
            newValue = '0'
        else
            newValue = displayValue.slice(0, -1)

        setDisplayValue(newValue)
    }
    const handleAllClearClicked = () => setDisplayValue('0')

    const handleZeroClicked = () => {
        if (displayValue !== '0') {
            const newValue = displayValue + '0'
            setDisplayValue(newValue)
        }
    }
    const handleOneClicked = () => {
        if (displayValue === '0')
            setDisplayValue('1')
        else {
            const newValue = displayValue + '1'
            setDisplayValue(newValue)
        }
    }
    const handleTwoClicked = () => {
        if (displayValue === '0')
            setDisplayValue('2')
        else {
            const newValue = displayValue + '2'
            setDisplayValue(newValue)
        }
    }
    const handleThreeClicked = () => {
        if (displayValue === '0')
            setDisplayValue('3')
        else {
            const newValue = displayValue + '3'
            setDisplayValue(newValue)
        }
    }
    const handleFourClicked = () => {
        if (displayValue === '0')
            setDisplayValue('4')
        else {
            const newValue = displayValue + '4'
            setDisplayValue(newValue)
        }
    }
    const handleFiveClicked = () => {
        if (displayValue === '0')
            setDisplayValue('5')
        else {
            const newValue = displayValue + '5'
            setDisplayValue(newValue)
        }
    }
    const handleSixClicked = () => {
        if (displayValue === '0')
            setDisplayValue('6')
        else {
            const newValue = displayValue + '6'
            setDisplayValue(newValue)
        }
    }
    const handleSevenClicked = () => {
        if (displayValue === '0')
            setDisplayValue('7')
        else {
            const newValue = displayValue + '7'
            setDisplayValue(newValue)
        }
    }
    const handleEightClicked = () => {
        if (displayValue === '0')
            setDisplayValue('8')
        else {
            const newValue = displayValue + '8'
            setDisplayValue(newValue)
        }
    }
    const handleNineClicked = () => {
        if (displayValue === '0')
            setDisplayValue('9')
        else {
            const newValue = displayValue + '9'
            setDisplayValue(newValue)
        }
    }

    const handleDivideClicked = () => setDisplayValue(displayValue + '÷')

    const handleMultiplyClicked = () => setDisplayValue(displayValue + '×')

    const handleSubtractClicked = () => setDisplayValue(displayValue + '-')

    const handleAddClicked = () => setDisplayValue(displayValue + '+')

    const handleResultClicked = () => {
        const operation = displayValue.replaceAll('÷', '/').replaceAll('×', '*')

        const result = eval(operation)

        const newValue = String(result)

        setDisplayValue(newValue)
    }

    const handleCommaClicked = () => {
        const lastCharacter = displayValue.at(-1)

        if (lastCharacter === ',') return

        const lastIndexOfDivide = displayValue.lastIndexOf('÷')
        const lastIndexOfMultiply = displayValue.lastIndexOf('×')
        const lastIndexOfSubtract = displayValue.lastIndexOf('-')
        const lastIndexOfAdd = displayValue.lastIndexOf('+')

        const lastIndexOfOperation = Math.max(lastIndexOfDivide, lastIndexOfMultiply, lastIndexOfSubtract, lastIndexOfAdd)

        const lastIndex = displayValue.length - 1

        let newValue

        if (lastIndexOfOperation === lastIndex)
            newValue = displayValue + '0,'
        else if (lastIndexOfOperation === -1) {
            if (displayValue.includes(',')) return

            newValue = displayValue + ','
        } else {
            const lastOperand = displayValue.slice(lastIndexOfOperation + 1)

            if (lastOperand.includes(',')) return

            newValue = displayValue + ','
        }

        setDisplayValue(newValue)
    }

    const handleChangeSignClicked = () => {
        /*
        const lastIndexOfDivide = displayValue.lastIndexOf('÷')
        const lastIndexOfMultiply = displayValue.lastIndexOf('×')
        const lastIndexOfSubtract = displayValue.lastIndexOf('-')
        const lastIndexOfAdd = displayValue.lastIndexOf('+')

        const lastIndexOfOperation = Math.max(lastIndexOfDivide, lastIndexOfMultiply, lastIndexOfSubtract, lastIndexOfAdd)

        let newValue

        if (lastIndexOfOperation === -1) {
            if (displayValue === '0') return

            if (!displayValue.includes('(')) {
                newValue = '(-' + displayValue + ')'
            } else {
                const operand = displayValue.slice(2, displayValue.length - 1)

                newValue = operand
            }
        }

        setDisplayValue(newValue)
        */

        const operands = []
        const operators = []

        let operand = ''

        for (let i = 0; i < displayValue.length; i++) {
            const char = displayValue[i]
            const prevChar = displayValue[i - 1]

            if (char === '-' && prevChar !== '(' || char === '+' || char === '÷' || char === '×') {
                operands.push(operand)
                operators.push(char)
                operand = ''
            } else {
                operand += char

                if (i === displayValue.length - 1)
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

        setDisplayValue(newValue)
    }

    console.log('App -> render')

    return <div className="border-2 m-2 p-2 rounded-2xl bg-gray-800 text-white">
        <div className="flex justify-end px-4 text-3xl">{displayValue}</div>

        <div className="p-2 flex flex-col gap-2">
            <div className="flex justify-between">
                <div className="bg-gray-400 p-2 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer" onClick={handleDeleteClicked}>⌫</div>
                <div className="bg-gray-400 p-2 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer" onClick={handleAllClearClicked}>AC</div>
                <div className="bg-gray-400 p-2 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer">%</div>
                <div className="bg-orange-400 p-2 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer" onClick={handleDivideClicked}>÷</div>
            </div>
            <div className="flex justify-between">
                <div className="bg-gray-600 p-2 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer" onClick={handleSevenClicked}>7</div>
                <div className="bg-gray-600 p-2 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer" onClick={handleEightClicked}>8</div>
                <div className="bg-gray-600 p-2 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer" onClick={handleNineClicked}>9</div>
                <div className="bg-orange-400 p-2 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer" onClick={handleMultiplyClicked}>×</div>
            </div>
            <div className="flex justify-between">
                <div className="bg-gray-600 p-2 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer" onClick={handleFourClicked}>4</div>
                <div className="bg-gray-600 p-2 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer" onClick={handleFiveClicked}>5</div>
                <div className="bg-gray-600 p-2 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer" onClick={handleSixClicked}>6</div>
                <div className="bg-orange-400 p-2 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer" onClick={handleSubtractClicked}>-</div>
            </div>
            <div className="flex justify-between">
                <div className="bg-gray-600 p-2 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer" onClick={handleOneClicked}>1</div>
                <div className="bg-gray-600 p-2 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer" onClick={handleTwoClicked}>2</div>
                <div className="bg-gray-600 p-2 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer" onClick={handleThreeClicked}>3</div>
                <div className="bg-orange-400 p-2 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer" onClick={handleAddClicked}>+</div>
            </div>
            <div className="flex justify-between">
                <div className="bg-gray-600 p-2 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer" onClick={handleChangeSignClicked}>+/-</div>
                <div className="bg-gray-600 p-2 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer" onClick={handleZeroClicked}>0</div>
                <div className="bg-gray-600 p-2 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer" onClick={handleCommaClicked}>,</div>
                <div className="bg-orange-400 p-2 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer" onClick={handleResultClicked}>=</div>
            </div>
        </div>
    </div>
}