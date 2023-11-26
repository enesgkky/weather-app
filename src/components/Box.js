import {IoSearch} from "react-icons/io5";
import {useState} from "react";
import classNames from "classnames";
import InfoBox from "./InfoBox";


export default function Box() {
    const [inputValue, setInputValue] = useState()
    const [weatherData, setWeatherData] = useState(false)
    const [open, setOpen] = useState(false)
    const myApiKey = '5495788c0faa9c7cfe8857f1c6426fac';

    function submitHandle(e) {
        e.preventDefault();
        setOpen(true);
        inputValue !== '' &&
        (async () => {
            await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${myApiKey}`)
                .then(res => res.ok && res.json())
                .then(data => setWeatherData(data))
                .catch(e => console.log(e))
        })()
        setInputValue('')
    }

    return (
        <div
            className={classNames({
                'w-[40rem] border-2 bg-gradient-to-b from-indigo-500 rounded-3xl border-indigo-500 overflow-hidden p-3 transition-all duration-500': true,
                'h-[45rem]': open === true,
                'h-[5rem]': open === false
            })}
        >
            <form className={classNames({
                'flex items-center': true,
                'h-full': open === false
            })} onSubmit={submitHandle}>
                <input type={'text'} placeholder={'City'}
                       className={classNames({
                           'w-5/6 bg-transparent border-indigo-300 pt-2 pl-2 focus:border-indigo-100 focus:outline-0 transition-colors text-white text-2xl font-extrabold placeholder-indigo-300 selection:bg-gray-950': true,
                           'border-b-2 h-16': open === true
                       })}
                       value={inputValue}
                       onChange={(e) => setInputValue(e.target.value)}
                />
                <button
                    type={"submit"}
                    className='w-1/6 flex justify-center items-center text-indigo-400
                transition-colors hover:text-indigo-300 h-full'>
                    <IoSearch size={'35'}/>
                </button>
            </form>
            {weatherData && <InfoBox data={weatherData}/>}
        </div>
    )
}