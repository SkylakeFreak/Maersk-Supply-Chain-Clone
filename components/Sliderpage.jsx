import React from 'react'
import Slider from '../components/Slider'


function Sliderpage() {
  return (
    <div className='h-auto flex flex-col items-center ml-20 md:p-10 mr-20 justify-center gap-3'>
    <p className='text-3xl justify-start w-full flex'>Industry Sectors</p>
    <div className='justify-start w-full flex'>
    <p className='w-[850px] '>Regardless of your industry, your commodity, or your key markets, Maersk offers global and local logistics solutions that enable small and large businesses to grow.</p>
    </div>

    <div className='flex flex-row lg:gap-30 xl:gap-10 w-full overflow-x-scroll'>
        <Slider link={'https://www.maersk.com/~/media_sc9/maersk/solutions/retail/icon-illustrations/home_furniture_96x96.svg?h=240&iar=0&w=240&hash=3809AC36E02F8A0C0E6B556FE33DE815'}/>
        <Slider link={'https://www.maersk.com/~/media_sc9/maersk/solutions/retail/icon-illustrations/home-decor_96x96.svg?h=240&iar=0&w=240&hash=70E522BF6E3FC7EF3DA6945BEEF4B949'}/>
        <Slider link={'https://www.maersk.com/~/media_sc9/maersk/solutions/retail/icon-illustrations/weekly-merchandise-products_96x96.svg?h=240&iar=0&w=240&hash=559B07C6FA1EF6CED6C449E4B4B91B69'}/>
        <Slider link={'https://www.maersk.com/~/media_sc9/maersk/solutions/retail/icon-illustrations/centre-store_96x96.svg?h=240&iar=0&w=240&hash=4103195A238749F0E1E1762CC2028646'}/>
        <Slider link={'https://www.maersk.com/~/media_sc9/maersk/solutions/retail/icon-illustrations/frozen-products_96x96_v2.svg?h=240&iar=0&w=240&hash=6FE360CC3A3967DA66465647031C18B6'}/>
        <Slider link={'https://www.maersk.com/~/media_sc9/maersk/solutions/retail/icon-illustrations/automotive_96x96_v1.svg?h=240&iar=0&w=240&hash=39410A51DCC883815867E9CAEBD00E7C'}/>
        <Slider link={'https://www.maersk.com/~/media_sc9/maersk/solutions/retail/icon-illustrations/pharma_and_healthcare_96x96_v1.svg?h=240&iar=0&w=240&hash=16D8AB4A12A56506FFFD84E833F28A35'}/>
        <Slider link={'https://www.maersk.com/~/media_sc9/maersk/solutions/retail/icon-illustrations/home_appliances_96x96.svg?h=240&iar=0&w=240&hash=9C569AF5E694A03C204094637D1458E7'}/>
    </div>
</div>
  )
}

export default Sliderpage