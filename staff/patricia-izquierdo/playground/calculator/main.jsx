const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

const useState = React.useState

function App() {

    const displayState = useState('0')
    const displayValue = displayState[0]
    const setDisplayValue = displayState[1]


    const handleDeleteClicked = () => {
        let result
        if (displayValue.length === 1)
            result = '0'
        else
            result = displayValue.slice(0, -1)

        setDisplayValue(result)
    }
    const handleACClicked = () => {
        setDisplayValue('0')
    }

    const handleZeroClicked = () => {
        if (displayValue != '0')
            setDisplayValue(displayValue + '0')
    }
    const handleOneClicked = () => {
        if (displayValue === '0')
            setDisplayValue('1')
        else
            setDisplayValue(displayValue + '1')
    }
    const handleTwoClicked = () => {
        if (displayValue === '0')
            setDisplayValue('2')
        else
            setDisplayValue(displayValue + '2')
    }
    const handleThreeClicked = () => {
        if (displayValue === '0')
            setDisplayValue('3')
        else
            setDisplayValue(displayValue + '3')
    }
    const handleFourClicked = () => {
        if (displayValue === '0')
            setDisplayValue('4')
        else
            setDisplayValue(displayValue + '4')
    }
    const handleFiveClicked = () => {
        if (displayValue === '0')
            setDisplayValue('5')
        else
            setDisplayValue(displayValue + '5')
    }
    const handleSixClicked = () => {
        if (displayValue === '0')
            setDisplayValue('6')
        else
            setDisplayValue(displayValue + '6')
    }
    const handleSevenClicked = () => {
        if (displayValue === '0')
            setDisplayValue('7')
        else
            setDisplayValue(displayValue + '7')
    }
    const handleEightClicked = () => {
        if (displayValue === '0')
            setDisplayValue('8')
        else
            setDisplayValue(displayValue + '8')
    }
    const handleNineClicked = () => {
        if (displayValue === '0')
            setDisplayValue('9')
        else
            setDisplayValue(displayValue + '9')
    }


    return <div className="border-2 m-2 p-2 rounded-2xl bg-gray-800 text-white">
        <div className="flex justify-end px-4 text-3xl">{displayValue}</div>

        <div className="p-2 flex flex-col gap-2">
            <div className="flex justify-between">
                <div className="bg-gray-400 p-2 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer" onClick={handleDeleteClicked}>⌫</div>
                <div className="bg-gray-400 p-2 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer" onClick={handleACClicked}>AC</div>
                <div className="bg-gray-400 p-2 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer">%</div>
                <div className="bg-orange-400 p-2 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer">÷</div>
            </div>
            <div className="flex justify-between">
                <div className="bg-gray-600 p-2 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer" onClick={handleSevenClicked}>7</div>
                <div className="bg-gray-600 p-2 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer" onClick={handleEightClicked}>8</div>
                <div className="bg-gray-600 p-2 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer" onClick={handleNineClicked}>9</div>
                <div className="bg-orange-400 p-2 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer">×</div>
            </div>
            <div className="flex justify-between">
                <div className="bg-gray-600 p-2 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer" onClick={handleFourClicked}>4</div>
                <div className="bg-gray-600 p-2 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer" onClick={handleFiveClicked}>5</div>
                <div className="bg-gray-600 p-2 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer" onClick={handleSixClicked}>6</div>
                <div className="bg-orange-400 p-2 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer">-</div>
            </div>
            <div className="flex justify-between">
                <div className="bg-gray-600 p-2 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer" onClick={handleOneClicked}>1</div>
                <div className="bg-gray-600 p-2 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer" onClick={handleTwoClicked}>2</div>
                <div className="bg-gray-600 p-2 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer" onClick={handleThreeClicked}>3</div>
                <div className="bg-orange-400 p-2 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer">+</div>
            </div>
            <div className="flex justify-between">
                <div className="bg-gray-600 p-2 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer">+/-</div>
                <div className="bg-gray-600 p-2 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer" onClick={handleZeroClicked}>0</div>
                <div className="bg-gray-600 p-2 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer">,</div>
                <div className="bg-orange-400 p-2 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer">=</div>
            </div>
        </div>
    </div>
}