import {
  faEarthAmericas,
  faFlask,
  faLightbulb,
  faUserDoctor,
} from "@fortawesome/free-solid-svg-icons";
import ForWhomItem from "./ForWhomItem";
import styles from "./ForWhomSection.module.scss";

const ForWhomSection: React.FC = () => {
  return (
    <section className={styles.forwhom}>
      <div>
        <h2 className="section-title">
          Men'ger кімге
          <br />
          келеді?
        </h2>
        <p className="section-text">
          Біздің курстар кәсіби ағылшын тілін үйренуге ұмтылатын көптеген
          адамдар үшін ажырамас әдістеме. Біздің курстар әсіресе кімге пайдалы
          болуы мүмкін?
        </p>
      </div>
      <div className={styles.grid}>
        <ForWhomItem
          title="Туризм мамандары"
          text="Күн сайын көп тілді қызмет көрсету ортасында жұмыс істей отырып, қонақ үй қызметкерлері біздің мамандандырылған оқыту жүйемізбен ағылшын тілін және тиісті терминологияны сапалы меңгеруін қамтамасыз етеміз"
          iconColor="#1CAC78"
          bgColor="#D5E9F6"
          icon={faEarthAmericas}
        />
        <ForWhomItem
          title="Медицина мамандары"
          text="Кәсіби курстар дәрігерлер мен медбикелерге қажетті лексика мен терминологияны қамтамасыз етеміз, бұл көпұлтты медициналық ортада тиімді өзара әрекеттесудің кепілдігі."
          iconColor="#3E98D4"
          bgColor="#D5E9F6"
          icon={faUserDoctor}
        />
        <ForWhomItem
          title="Маркетологтар мен жарнама мамандары"
          text="Қазақ тілі арқылы кәсіби ағылшын тілін үйрену мақсатты аудиторияға туған тілдік ерекшеліктерін көрсете отырып, әлемдік нарықта өнімдер мен қызметтерді тиімді таныстыруға мүмкіндік береді."
          iconColor="#FFB800"
          bgColor="#FFF1CC"
          icon={faLightbulb}
        />
        <ForWhomItem
          title="Білім және ғылым қызметкерлері"
          text="Курстар тәрбиешілер мен зерттеушілерге халықаралық білім беру жобаларына қатысуға және жаһандық деңгейде тәжірибе алмасуға мүмкіндік береді."
          iconColor="#E42125"
          bgColor="#FAD3D3"
          icon={faFlask}
        />
      </div>
    </section>
  );
};

export default ForWhomSection;
