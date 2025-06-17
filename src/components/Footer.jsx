import BuyMeACoffee from '../img/buymecoffee.png'

function Footer() {
  return (
    <>
        <div className="bg-gray-200 fixed bottom-0 left-0 w-full text-center py-4 shadow">
            <div className="flex justify-center">
                <div className="pe-10">
                    <div className="text-3xl">
                        <h1 style={{ fontFamily: 'Megrim'}}>The Hunger Grimoire</h1>
                    </div>
                    <h4>Simple, rapide, efficace.</h4>
                    <p>Bon appétit!</p>
                </div>
                
                <div className="h-32 w-0.5 bg-white"/>

                <div className="ps-10">
                    <div className="font-bold flex justify-center text-2xl">
                        <h1>Développeurs :</h1>
                    </div>
                    <p>Mathieu Burnat: <a href="https://github.com/MathieuBurnat">https://github.com/MathieuBurnat</a></p>
                    <p>Anduan Berisha: <a href="https://github.com/AnduanBerisha">https://github.com/AnduanBerisha</a></p>
                    <p>Aleksa Mihajlovic: <a href="https://github.com/lexas220">https://github.com/lexas220</a></p>
                    <p>Elia Portela: <a href="https://github.com/IlP4rAd0xlI">https://github.com/IlP4rAd0xlI</a></p>
                </div>
            </div>

            <div className="relative pt-10 px-10 flex items-center">
                <h4 className="absolute left-1/2 transform -translate-x-1/2">ICT-START © 2025</h4>
                <div className="ml-auto">
                    <a href="https://www.buymeacoffee.com/lexas220"><img src={BuyMeACoffee} alt="Buymeacoffee" className="w-16 h-auto" /></a>
                </div>
            </div>
        </div>
    </>
  );
}

export default Footer;