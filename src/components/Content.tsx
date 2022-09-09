import firstPost from "../assets/images/post-1.png";

export function Content() {
    return (
        <div className="flex flex-col px-2 xl:px-0 lg:flex-row w-full mt-16 ml-auto mr-auto max-w-[1200px] mb-[63px]">
            <div className="w-full mr-[130px] flex flex-col items-start justify-center">
                <img src={firstPost} alt="Codando" />

                <span className="pt-4 font-normal leading-4">Janeiro 04, 2022</span>

                <h2 className="text-purple-bg leading-9 font-bold pt-4 pb-4 text-2xl">
                    Começando no ReactJS em 2022
                </h2>

                <p className="font-normal text-base leading-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. Sed volutpat aenean.
                </p>
            </div>

            <div className="w-full items-stretch mb-[63px]">
                <div className="pb-6 border-b border-[#F2E7FA]">
                    <span className="pt-4 font-normal leading-4">Janeiro 04, 2022</span>

                    <h2 className="text-purple-bg leading-9 font-bold pt-4 pb-4 text-2xl">
                        Conheça as principais técnicas para conseguir uma vaga internacional em programação
                    </h2>

                    <p className="font-normal text-base leading-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. Sed volutpat aenean.
                    </p>
                </div>

                <div className="pt-5">
                    <span className="pt-4 font-normal leading-4">Janeiro 04, 2022</span>

                    <h2 className="text-purple-bg leading-9 font-bold pt-4 pb-4 text-2xl">
                        Veja a evolução do Front-end na prática
                    </h2>

                    <p className="font-normal text-base leading-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. 
                    </p>
                </div>
            </div>
        </div>
    )
}