import Image from "next/image";
import MapImage from "../../public/carte.jpg";

export default function Home() {
  return (
    <>
      <div className="p-2 sm:p-8 sm:mx-8">
        <div className="sm:float-left sm:max-w-3/10">
          <InfoCard />
        </div>
        <p className="text-3xl my-4">
          Notre envie est de vous accompagner dans l'éducation de votre chien.<br />
          En utilisant des méthodes respectueuses.
        </p>
        <p className="text-xl my-4">
          Nous avons plusieurs cours pour vous et votre compagnon à 4 pattes.
        </p>
        <p className="my-4 text-center">
          Laurence Robert<br />
          Téléphone: 032 497 98 04, Natel: 078 659 66 85<br />
          Adresse Mail: <a href="mailto:info@nomd1chien.ch" className="text-blue-500">info@nomd1chien.ch</a>
        </p>
      </div>
      <div className="clear-both p-2 sm:py-8 sm:mx-8">
        <Image className="rounded-md sm:mx-6 sm:w-1/2 sm:float-left" src={MapImage} alt="Carte de la zone" />
        <p className="mb-8">
          Court, commune située à côté de la ville de Moutier. A 20 kilomètres de la ville de Delémont et 12 kilomètre de Tavannes.
        </p>
        <p className="mb-8">
          <b className="font-bold">Depuis Moutier:</b> à la sortie de l'autoroute, prendre la route sur la gauche en direction de Chaluet. Arrivé dans le rond-point, prendre la première sortie, direction zone industrielle ZI du Chaluet. Au bout de la rue, parc devant l'usine MPS, grande usine noire en face du terrain.
        </p>
        <p className="mt-8">
          <b className="font-bold">Depuis Tavannes:</b> à la sortie de Court, prendre la deuxième sortie du rond-point, direction autoroute et Chaluet. Prendre la route sur la droite en direction de Chaluet. Arrivé dans le rond-point, prendre la première sortie, direction zone industrielle ZI du Chaluet. Au bout de la rue, parc devant l'usine MPS, grande usine noire en face du terrain.
        </p>
      </div>
    </>
  );
}

function InfoCard() {
  return (
    <aside className="mr-8 shadow-lg">
      <div className="bg-primary p-2 text-center text-xl rounded-t-md">Informations</div>
      <div className="bg-white p-2 rounded-b-md">
        <p className="my-4">
          Printemps jusqu'à l'automne<br />
          Cours en situation réelle (à la gare, dans un marché, ...)
        </p>
        <p className="my-4">
          But: travailler le comportement et l'obéissance dans différents milieux.
        </p>
        <p className="my-4">
          Début: dès que vous le désirez, vous décidez des dates des rencontres.
        </p>
      </div>
    </aside>
  );
}
