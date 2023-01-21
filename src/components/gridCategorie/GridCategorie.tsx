import "./GridCategorie.scss";

const GridCategorie: React.FC = () => {
  return (
    <main className="categorie-grid">
      <article className="categorie grid-col-span-2">
        <img
          src="https://journal-electricite.com/wp-content/uploads/2021/10/schema-de-cablage-tableau-electrique.jpg"
          alt="Le câblage d'armoire électrique"
        />
        <p>Le câblage d'armoire électrique</p>
      </article>
      <article className="categorie">
        <img
          src="https://www.allnews.ch/sites/default/files/images/Poignee_Main_CS_Barings_384043599_Keystone_RS.jpg"
          alt="L'accompagnement aux choix de matériels industriels"
        />
        <p>L'accompagnement aux choix de matériels industriels</p>
      </article>
      <article className="categorie">
        <img
          src="https://www.automatisme-vision-service.com/oktThemes/ra160-s/images/integ/image2.jpg"
          alt="L'installation de matériels"
        />
        <p>L'installation de matériels</p>
      </article>
      <article className="categorie">
        <img
          src="https://www.alternance-professionnelle.fr/wp-content/uploads/2017/09/emploi-secteur-BTP.jpg"
          alt="Autre"
        />
        <p>Autre</p>
      </article>
    </main>
  );
};
export default GridCategorie;
