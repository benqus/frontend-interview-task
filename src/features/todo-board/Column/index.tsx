import type { ReactNode } from "react";

import styles from "./styles.module.css";

type Props = { children?: ReactNode, name: string, };

export function Column({ children, name }: Props) {
  return (
    <div className={styles.column}>
      <h3 className={styles.name}>{name}</h3>
      <div className={styles.container}>{children}</div>
    </div>
  );
}
