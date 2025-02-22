import { FeatureSectionProps } from "@/types";
import Image from "next/image";
import styles from "./style.module.css";

export default function FeatureSection({
  item,
}: {
  item: FeatureSectionProps;
}) {
  return (
    <div className={`${styles.card} relative overflow-hidden`}>
      <Image
        className={`${styles.cardImage}`}
        src={item.image}
        alt={item.title}
      />
      <div className={`${styles.cardDetail} py-6 px-4`}>
        <h2 className="text-2xl mb-3">{item.title}</h2>
        <div>{item.description}</div>
      </div>
    </div>
  );
}
