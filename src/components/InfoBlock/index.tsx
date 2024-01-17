import cn from "classnames";
import { useMemo } from "react";

import styles from "./InfoBlock.module.scss";

enum InfoBlockStatus {
  Error = "error",
  Warning = "warning",
  Success = "success",
}

interface InfoBlockProps {
  className?: string;
  text: string;
  count: number;
  title: string;
}

const getStatusByCount = (count: number): InfoBlockStatus => {
  if (count > 93) {
    return InfoBlockStatus.Error;
  }

  if (count < 50) {
    return InfoBlockStatus.Warning;
  }

  return InfoBlockStatus.Success;
};

const InfoBlock: React.FC<InfoBlockProps> = ({
  className,
  title,
  text,
  count,
}) => {
  const status = useMemo(() => getStatusByCount(count), [count]);

  return (
    <div className={cn(styles.root, className, styles[status])}>
      <h2 className={styles.title}>
        <span className={styles.titleText}>{title}</span>{" "}
        <span className={styles.count}>{count}</span>
      </h2>
      <div className={styles.text}>{text}</div>
    </div>
  );
};

export default InfoBlock;
