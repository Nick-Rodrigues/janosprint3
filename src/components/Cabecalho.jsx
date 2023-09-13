import logo from "../img/logo jano.jpg";

export default function Cabecalho() {
  return (

    <>

        <header className="cabecalho">           
            <img className="logo" src={logo} />

            <nav>
                <a className="home" href="./">
                <p>home</p>
                </a>
                <a className="etapas" href="./etapas">
                <p>etapas</p>
                </a>
                <a className="integrantes" href="./integrantes">
                <p>integrantes</p>
                </a>
            </nav>

        </header>

    </>

  )
}
