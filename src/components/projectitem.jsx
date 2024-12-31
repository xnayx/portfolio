import { BentoItem } from "@/components/bentoitem";
import styles from "@/css/pages/home.module.css";

const ProjectItem = ({ columns, url, imgSrc, altText, projectName, description, highlights }) => (
    <BentoItem columns={columns} url={url}>
        {imgSrc && <img src={imgSrc} alt={altText} className={styles.bentoItem_image} />}
        <div className={styles.webDescription}>
            <h3 className={styles.nameProject}>{projectName}</h3>
            <p>
                {description.split(" ").map((word, index) => {
                    const wordData = highlights.find(e => `{${e.key}}` == word);

                    if(wordData) {
                        return <span key={index} className={styles.enfasis} style={{ color: wordData.color }}>{wordData.text} </span>
                    }

                    return word+" ";
                })}
            </p>
        </div>
    </BentoItem>
);

export default ProjectItem;
