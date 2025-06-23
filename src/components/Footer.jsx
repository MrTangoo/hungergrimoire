import BuyMeACoffee from '../img/buymecoffee.png'

function Footer() {
  return (
    <>
        <div className="bg-dark2-grey h-96 w-full text-center py-20 shadow flex flex-col justify-center items-center">
            <div className='w-2/3'>
                <div className="flex justify-center">
                    <div className="w-1/4 flex flex-col items-start">
                        <h1 className="text-xl  mb-5" style={{ fontFamily: 'Megrim'}}>The Hunger Grimoire</h1>
                        <div className='flex flex-col items-start'>
                            <h2 className='text-md' style={{}}>Simple, rapide, efficace.</h2>
                            <h3 className='text-xs'>Bon appétit!</h3>
                        </div>
                    </div>
                    
                    <div className="bg-medium-grey h-32 w-0.5 -grey"/>

                    <div className="w-1/4 flex justify-end">
                        <div className=''>
                            <h1 className="font-bold text-base mb-4">Développeurs</h1>
                            <div className="flex text-xs flex-col gap-2">
                                <a href="https://github.com/MathieuBurnat">Mathieu Burnat</a>
                                <a href="https://github.com/AnduanBerisha">Anduan Berisha</a>
                                <a href="https://github.com/lexas220">Aleksa Mihajlovic</a>
                                <a href="https://github.com/IlP4rAd0xlI">Elia Portela</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative flex items-center">
                    <h4 className="absolute left-1/2 transform -translate-x-1/2 text-xs">ICT-START © 2025</h4>
                    <div className="ml-auto">
                        <a href="https://www.buymeacoffee.com/P4rAd0x"><img src={BuyMeACoffee} alt="Buymeacoffee" className="w-16 h-auto" /></a>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default Footer;