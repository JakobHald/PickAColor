import styles from "./boxCreator.module.css"

const BoxCreator = ({ onCreateBox }) => {
    
    return (
        <div>
            <button className={styles.box} onClick={onCreateBox}>Create Box</button>
        </div>
    )
}

export default BoxCreator;
