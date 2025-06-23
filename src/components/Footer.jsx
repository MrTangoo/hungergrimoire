import BuyMeACoffee from '../img/buymecoffee.png'

function Footer() {
  return (
    <>
        <div className="bg-dark2-grey h-96 w-full py-[10%] flex flex-col justify-center items-center pt-[14%]">
            <div className='w-2/3 h-96 flex justify-center'>
                <div className="w-1/4 flex flex-col items-start">
                    <h1 className="text-xl  mb-5" style={{ fontFamily: 'Megrim'}}>The Hunger Grimoire</h1>
                    <div className='flex flex-col items-start'>
                        <h2 className='text-md' style={{}}>Simple, rapide, efficace.</h2>
                        <h3 style={{ fontFamily: 'Inria_Sans-Light'}} className='text-xs'>Bon appétit!</h3>
                    </div>
                </div>
                {/* separateur */}
                <div className="bg-medium-grey h-32 w-0.5 -grey" />

                <div className="w-1/4 flex justify-end">
                    <div className='flex flex-col justify-center'>
                        <h1 className="font-bold text-base mb-4 text-center">Notre équipe</h1>
                        <div className="flex text-xl gap-2 transition-all duration-1000 ease-in-out hover:scale-110">
                            <a className='transition-all duration-900 ease-in-out hover:scale-110 bg-dark-green h-10 w-10 rounded-full flex justify-center items-center' href="https://github.com/MathieuBurnat">M</a>
                            <a className='transition-all duration-900 ease-in-out hover:scale-110 bg-yellow h-10 w-10 rounded-full flex justify-center items-center' href="https://github.com/AnduanBerisha">An</a>
                            <a className='transition-all duration-900 ease-in-out hover:scale-110 bg-light-green h-10 w-10 rounded-full flex justify-center items-center' href="https://github.com/lexas220">Al</a>
                            <a className='transition-all duration-900 ease-in-out hover:scale-110 bg-orange h-10 w-10 rounded-full flex justify-center items-center' href="https://github.com/IlP4rAd0xlI">E</a>
                        </div>
                    </div>
                </div>
            </div>
            <h4 style={{ fontFamily: 'Inria_Sans-Light'}} className="mt-10 text-xs w-full text-center">ICT-START © 2025</h4>
            <div className="flex w-2/3 justify-end">
                <a className="transition-all duration-1000 ease-in-out hover:scale-110" href="https://www.buymeacoffee.com/P4rAd0x"><img src={BuyMeACoffee} alt="Buymeacoffee" className="w-16 h-auto" /></a>
            </div>
        </div>
    </>
  );
}

export default Footer;