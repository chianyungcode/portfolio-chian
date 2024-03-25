import styles from "./ButtonGlow.module.css";

interface ButtonGlowProps {
  href: string;
  children: React.ReactNode;
}

const ButtonGlow: React.FC<ButtonGlowProps> = ({
  href,
  children = "ButtonGlow",
}) => {
  return (
    <a className={styles.bn5} href={href}>
      {children}
    </a>
  );
};

export default ButtonGlow;
