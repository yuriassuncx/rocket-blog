import codeImage from "../assets/images/featured-image.png";
import arrowRight from "../assets/images/arrow-right.svg";

export function Main() {
    return (
        <div className="pt-[61px] border-b-8 border-green pb-[100px]">
            <div className="flex flex-col px-2 xl:px-0 lg:flex-row ml-auto mr-auto justify-center items-center gap-28 max-w-[1200px]">
                <div className="items-stretch flex flex-col">
                    <h1 className="leading-[54px] font-bold text-button-bg text-4xl pb-4">
                        Veja o guia definitivo para conquistar seus objetivos <br /> como DEV em 2022
                    </h1>

                    <p className="text-white pb-6">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima debitis, perferendis excepturi magni suscipit optio, vitae, omnis corporis sunt velit impedit. Voluptatum iure nemo qui temporibus fugiat quaerat ex modi?
                    </p>

                    <button className="flex gap-4 hover:opacity-80 transition-colors duration-150">
                        <span className="text-button-bg font-bold">
                            Veja mais
                        </span>

                        <img src={arrowRight} alt="Imagem seta direita" />
                    </button>
                </div>

                <aside className="w-full">
                    <img src={codeImage} alt="Imagem de código" className="w-[570px] h-[346px]" />
                </aside>
            </div>
        </div>
    )
}