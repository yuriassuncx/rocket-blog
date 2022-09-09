interface CardProps {
    image: string,
    title: string,
    text: string
}

export function Card({ image, title, text }: CardProps) {
    return (
        <div className="flex flex-col text-start items-start justify-center mb-[68px]">
            <img
                src={image}
                alt="Imagem Tecnológica"
                className="pb-4"
            />

            <span className="pt-1 font-normal leading-4">Janeiro 04, 2022</span>

            <h2 className="text-purple-bg leading-9 font-bold pt-3 pb-4 text-2xl">
                {title}
            </h2>

            <p className="font-normal text-sm leading-6">
                {text}
            </p>
        </div>
    )
}