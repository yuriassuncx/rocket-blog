import searchImg from "../assets/images/search.svg";

export function Header() {
    return (
        <header className="flex flex-row max-w-[1200px] ml-auto mr-auto items-center justify-center lg:justify-between pt-12 mb-12">
            <h1 className="text-white font-bold text-4xl">
                The Blog<span className="text-green">.</span>
            </h1>

            <ul className="text-white font-bold space-x-10 hidden lg:block">
                <span className="span border-l border-green pl-1">Home</span>
                <span className="span opacity-90">Sobre</span>
                <span className="span opacity-90">Categorias</span>
                <span className="span opacity-90">Contato</span>
            </ul>

            <form className="hidden lg:flex text-center justify-between text-white">
                <input type="text" placeholder="Buscar" className="py-4 px-12 bg-dark-bg text-white rounded-md" />

                <button>
                    <img
                        src={searchImg}
                        alt="Imagem de uma lupa"
                        className="bg-button-bg py-4 px-8 rounded-sm"
                    />
                </button>
            </form>
        </header>
    )
}