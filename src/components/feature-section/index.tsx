import { FeatureSectionProps } from "@/types";
import Image from "next/image";
import styles from "./style.module.css";

export default function FeatureSection({
  item,
}: {
  item: FeatureSectionProps;
}) {
  return (
    <div className={`${styles.card}`}>
      <Image
        className={`${styles.cardImage}`}
        src={item.image}
        alt={item.title}
      />
      <div className={`${styles.cardDetail}`}>
        <h2 className="text-3xl mb-6">{item.title}</h2>
        <div>{item.description}</div>
      </div>
    </div>
  );
}
