import { useState } from 'react'

const TipCalculator = () => {
    const [bill, setBill] = useState('')
    const [person, setPerson] = useState('')
    const [custom] = useState('')
    const [errorMsg, setErrorMsg] = useState('')
    const [num, setNum] = useState('')
  
    const handle5 = (e) => {
        e.preventDefault()
        setNum(5)
    }

    const handle10 = (e) => {
        e.preventDefault()
        setNum(10)
    }

    const handle15 = (e) => {
        e.preventDefault()
        setNum(15)
    }

    const handle25 = (e) => {
        e.preventDefault()
        setNum(25)
    }

    const handle50 = (e) => {
        e.preventDefault()
        setNum(50)
    }

    const clearFields = (e) => {
        e.preventDefault()

        setBill('')
        setPerson('')
        setNum('')
    }

    let defaultNum = 0

    const validatePerson = () => {
        {person ? setErrorMsg('') : setErrorMsg('can\'t be zero') }
    }

    const validatePerson2 = () => {
        {person.length > 0 ? setErrorMsg('') : setErrorMsg('can\'t be zero') }
    }


    return (
        <div>
            <div className="md:w-1/12 w-2/12 mx-auto md:text-center font-bold text-left md:mt-16 mb-5 mt-4 top">SPLI <br></br> TTER </div>
        <div className="xl:w-7/12 lg:w-9/12 w-11/12 mx-auto bg-white rounded-2xl sm:mb-0 mb-10 sm:px-8 px-4 md:py-4 py-0">
            <form className="container py-6 grid md:grid-cols-2 grid-cols-1 gap-6">
                <div className="Input-area">
                    <h1>Bill</h1>
                    <div className="input-holder flex items-center mt-1 mb-8">
                        <img className="pl-2" src={process.env.PUBLIC_URL + '/images/icon-dollar.svg'} alt="dollar-sign"/>
                        <input type="number" onKeyUp={validatePerson}
                         value={bill} onChange={(e) => setBill(e.currentTarget.value)}
                        placeholder="0.00" className="input-group focus:outline-none"/>
                    </div>

                    <h1>Select tip {num}% </h1>
                    <div className="mt-2 grid grid-cols-3 gap-8 mb-8">
                        <button onClick={handle5}  className="percent-boxes">5%</button>
                        <button onClick={handle10} className="percent-boxes">10%</button>
                        <button onClick={handle15} className="percent-boxes">15%</button>
                        <button onClick={handle25} className="percent-boxes">25%</button>
                        <button onClick={handle50} className="percent-boxes">50%</button>
                        <input type="text" 
                        value={num} onChange={(e) => setNum(e.currentTarget.value)}
                        placeholder="Custom" className="custom"/>
                    </div>

                    <div className="flex justify-between items-center">
                        <h1>Number of People</h1>
                        <p className="error">{ errorMsg }</p>
                    </div>
                    <div className={ errorMsg ? "errorB" : "input-holder" }>
                        <div className="flex items-center nt-1">
                            <img className="pl-2" src={process.env.PUBLIC_URL + '/images/icon-person.svg'} alt="person-sign"/>
                            <input type="number" onKeyUp={validatePerson2}
                            value={person} onChange={(e) => setPerson(e.currentTarget.value)}
                            placeholder="0" className="input-group focus:outline-none"/>
                        </div>
                    </div>
                </div>

                <div className="results-area px-4 py-6 rounded-2xl">
                    <div className="w-11/12 mx-auto">
                    <div className="grid grid-cols-2 items-center mb-4">
                        <div>
                            <h1>Tip Amount</h1>
                            <p className="text-base opacity-50">/ per person</p>
                        </div>
                        <div className="results">${ num && person ? ((bill*( (num ? num : custom) /100)) / person).toFixed(2) : defaultNum.toFixed(2) }</div>
                    </div>

                    <div className="grid grid-cols-2 items-center mb-40">
                        <div>
                            <h1>Total</h1>
                            <p className="text-base opacity-50">/ per person</p>
                        </div>
                        <div className="results">${ num && person ? ((((bill*( (num ? num : custom) /100)) / person) + (bill/person)).toFixed(2)) : defaultNum.toFixed(2) }</div>
                    </div>

                    <button onSubmit={clearFields} className="py-3 reset-btn text-center text-bold text-2xl rounded-xl w-full">RESET</button>
                    </div>
                </div>
            </form>
            <h6 class="text-black font-semibold text-right">| Coded by <a class="attr" href="https://twitter.com/Emmy31087589">Em_codes</a></h6>
        </div>
        </div>
    )
}

export default TipCalculator