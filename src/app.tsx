import styles from './styles.module.scss';
import image from './reactLogo.png';
import imageSvg from './reactLogo.svg';
import { ClickCounter } from './clickCounter';

export const App = () => {
  const name = 'Roman';
  return (
    <>
      <h1 className={styles.red}>
        React TypeScript Template -{process.env.NODE_ENV}.{process.env.name}.
        By: {name}!
      </h1>
      <img src={image} alt="react logo" width="100" height="100" />
      <img src={imageSvg} alt="react logo" width="100" />
      <ClickCounter />
    </>
  );
};
