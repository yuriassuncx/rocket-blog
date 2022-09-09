import { Card } from "./components/Card";
import { Content } from "./components/Content";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

import cardImage from "./assets/images/post-2.png";
import secondCardImage from "./assets/images/post-3.png";
import thirdCardImage from "./assets/images/post-4.png";

export function App() {
  return (
    <div className="w-full ml-auto mr-auto">
      <div className="bg-purple-bg">
        <Header />
        <Main />
      </div>

      <Content />
      <div className="max-w-[1200px] px-2 xl:px-0 ml-auto mr-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Card
          image={cardImage}
          title="10 dicas para conseguir a vaga desejada"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. "
        />

        <Card
          image={secondCardImage}
          title="Deixe seu código mais semântico com essas dicas"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. "
        />

        <Card
          image={thirdCardImage}
          title="Use essas dicas nas suas aplicações mobile"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. "
        />
      </div>
    </div>
  )
}
