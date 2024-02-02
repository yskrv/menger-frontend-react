import PricingItem from "./PricingItem";
import styles from "./PricingSection.module.scss";

const PricingSection: React.FC = () => {
  return (
    <section>
      <h2 className="section-title">Тариф түрлері</h2>
      <p className="section-text">Біздің тарифтер оқу материалдарының толықтай мүмкіндік беріп, жекелендірілген оқу жоспары мен бірегей тілдік тәжірибені ескере отырып, қол жеткізуді баға тұрғыда және қолайлықты қамтамасыз етіп жасалған. Тіл жолын дәл қазір бастаңыз және сізге сәйкес келетін тарифті таңдап, өз кәсібініңіздің қызмет сапасын арттырыңыз!</p>
      <div className={styles.list}>
        <PricingItem
          name="Start"
          price="39.990"
          color="#FFB800"
          bgColor="#FFF1CC"
        />
        <PricingItem
          name="Plus"
          price="79.990"
          color="#1CAC78"
          bgColor="#D5E9F6"
        />
        <PricingItem
          name="Pro"
          price="99.990"
          color="#E42125"
          bgColor="#FAD3D3"
        />
      </div>
    </section>
  )
}

export default PricingSection;