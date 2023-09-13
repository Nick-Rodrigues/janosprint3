import nicolas from "../../img/omaisgato.jpg";
import luis from "../../img/luis.jpg";
import thiago from "../../img/thigaz.jpg";
import pedro from "../../img/pedro.jpg";
import denner from "../../img/denden.jpg";
import pamelo from "../../img/diciotech.jpg";

export default function Integrantes() {
  return (
    <div className="integrantes-main">
      <h1 className="subtitulo">Integrantes</h1>
      <div>
        <figure>
          <img src={nicolas} className="nicolas" alt="nicolas" />
          <figcaption>rm-551060 / 1TSPG</figcaption>
        </figure>
        <figure>
          <img src={pedro} className="pedro" alt="pedro" />
          <figcaption>rm-551409 / 1TSPG</figcaption>
        </figure>
        <figure>
          <img src={luis} className="luis" alt="luís" />
          <figcaption>rm-99433 / 1TSPG</figcaption>
        </figure>
        <figure>
          <img src={denner} className="denner" alt="denden" />
          <figcaption>rm-551938 / 1TDSR</figcaption>
        </figure>
        <figure>
          <img src={thiago} className="thiago" alt="thiago" />
          <figcaption>rm-99027 / 1TSPG</figcaption>
        </figure>
        <figure>
          <img src={pamelo} className="gabriel" alt="diciotech" />
          <figcaption>rm-98361' / 1TSPG'</figcaption>
        </figure>
      </div>
    </div>
  )
}
