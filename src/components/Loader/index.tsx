import styles from "./Loader.module.scss";

interface LoaderProps {
  isLarge?: boolean;
}

const Loader: React.FC<LoaderProps> = ({ isLarge }) => {
  return isLarge ? (
    <div className={styles.container}>
      <span className={styles.loader}></span>
    </div>
  ) : (
    <span className={styles.small}></span>
  );
};

export default Loader;
