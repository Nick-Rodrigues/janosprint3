import github from "../img/github.png";
import instagram from "../img/instagram.png";

export default function Rodape() {
  return (

    <>

        <footer className="rodape">

            <a
            className="git-hub"
            href="https://github.com/Nick-Rodrigues/sprint-3-janos"
            target="_blank"
            rel="noreferrer"
            >
            <img src={github} />
            </a>

            <a
            className="instag"
            href="https://www.instagram.com/portoseguro/"
            target="_blank"
            rel="noreferrer"
            >
            <img src={instagram} />
            </a>

        </footer>

    </>

  )
}
