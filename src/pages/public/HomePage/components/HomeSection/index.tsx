import homeSectionImage from '../../../../../assets/img/home_section_image.png';
import Button from '../../../../../components/Button';
import { LOGIN_PAGE_ROUTE } from '../../../../../utils/consts';
import styles from './HomeSection.module.scss';

const HomeSection: React.FC = () => {
  return (
    <section className={styles.home}>
      <div className={styles.part}>
        <h1 className={styles.title}>Халықаралық <span>жетістік тілін үйрену</span> - кең әлемге бір қадам!</h1>
        <p className="section-text">
          Қазақ тіл байлығы арқылы ағылшын тілін меңгеріп, кәсіби<br/>дамудың көкжиегін ашыңыз. Men’ger-мен бірге кәсіби<br/>жетістіктерге жете бер!
        </p>
        <Button
          isLink={true}
          link={LOGIN_PAGE_ROUTE}
          text="Бастау"
          marginTop={20}
        />
      </div>
      <div className={styles.part}>
        <img src={homeSectionImage} alt="Home Section" />
      </div>
    </section>
  );
}

export default HomeSection;