import classNames from "classnames";
import { useState } from "react";
import { HeaderRoute } from "../../../../../utils/interfaces/general";
import styles from "./Header.module.scss";

interface CoursesHeaderProps {
  routes: HeaderRoute[];
}

const CoursesHeader: React.FC<CoursesHeaderProps> = ({ routes }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const ActiveComponent = routes[activeIndex].component;
  const props = routes[activeIndex].props;

  return (
    <>
      <div className={styles.flex}>
        {routes.map((route, index) => (
          <div
            className={
              activeIndex === index
                ? classNames(styles.item, styles.item__active)
                : styles.item
            }
            onClick={() => setActiveIndex(index)}
          >
            {route.name}
          </div>
        ))}
      </div>
      <ActiveComponent {...props} />
    </>
  );
};

export default CoursesHeader;
