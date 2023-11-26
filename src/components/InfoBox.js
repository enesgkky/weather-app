import {FiWind} from "react-icons/fi";
import {FaTemperatureLow} from "react-icons/fa";
import {BsMoisture} from "react-icons/bs";
import {useState} from "react";

export default function InfoBox({data}) {

    const [toolBoxOpen, setToolBoxOpen] = useState(false);

    return (
        <div className='h-5/6 mt-6 w-full'>
            <div className={'text-center mt-12 text-white'}>
                <h1 className='text-6xl pb-3 font-extrabold'>{data.name}</h1>
                <h1 className='text-2xl opacity-50'>{data.sys.country}</h1>
            </div>
            <div className={'flex justify-center items-center h-64 gap-10'}>
                <img className={'h-[10rem]'} src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
                     alt='weather'/>
                <h1 className={'text-white text-6xl font-extrabold'}>{
                    ((data.main.temp - 273.15).toFixed(1))
                }°C</h1>
            </div>
            <div className={''}>
                <div className={'pb-5'}>
                    <h1 className={'text-white text-3xl font-extrabold text-center uppercase'}>{data.weather[0].description}</h1>
                </div>
                <div className={'flex w-full mx-auto cursor-default text-center text-white h-40 items-center'}>
                    <div className={'w-1/3 flex gap-1 items-center justify-center'}>
                        <BsMoisture size={50}/>
                        <h1 className={'text-3xl font-extrabold opacity-60 hover:opacity-100 transition-all'}>%{data.main.humidity}</h1>
                    </div>
                    <div className={'w-1/3 flex gap-1 items-center justify-center'}>
                        <FiWind size={50}/>
                        <h1 className={'text-3xl font-extrabold opacity-60 hover:opacity-100 transition-all'}>%{data.wind.speed}</h1>
                    </div>
                    <div className={'w-1/3 flex gap-1 items-center justify-center relative h-2/3'}
                    onMouseEnter={()=>setToolBoxOpen(true)}
                    onMouseLeave={()=> setToolBoxOpen(false)}>
                        <FaTemperatureLow size={40}/>
                        <h1 className={'text-3xl font-extrabold opacity-60 hover:opacity-100 transition-all'}>{(data.main.feels_like - 273.15).toFixed(2)}°C</h1>
                        {toolBoxOpen && <div className={'absolute bottom-0 uppercase opacity-50'}>felt temperature</div>}
                    </div>
                </div>
            </div>
        </div>
    )
}