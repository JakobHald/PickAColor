import { useState } from 'react';
import styles from './pickAColorPage.module.css';
import BoxCreator from '../../components/boxCreator/BoxCreator';

const PickAColorPage = ( { }) => {

    const [colorClass, setColorClass] = useState(styles.silver)
    const [boxes, setBoxes] = useState(
        [
            {
                id : 0,
                name : "Box 1",
            },
            {
                id : 1,
                name : "Box 2"
            },
            {
                id : 2,
                name : "Box 3"
            },
            {
                id : 3,
                name : "Box 4"
            },
            {
                id : 4,
                name : "Box 5"
            },
            {
                id : 5,
                name : "Box 6"
            },
            {
                id : 6,
                name : "Box 7"
            },
            {
                id : 7,
                name : "Box 8"
            },
            {
                id : 8,
                name : "Box 9"
            },
            {
                id : 9,
                name : "Box 10"
            }
        ]
    );

    const selectColor = (color) => {
        setColorClass(color)
    }


    const handleBoxClick = (id) => {
        setBoxes(boxes.map(box => 
            box.id === id ? {...box, colorClass: colorClass} : box
        ));
    };

    const createBox = () => {
        const newBox = {
            id: boxes.length,
            name: `Box ${boxes.length + 1}`
        }
        setBoxes([...boxes, newBox]);
    }
    

    return (
        <div className={styles.pickAColorPage}>

            <h1>Box Color Stage</h1>
            <div className={styles.pickAColorStage}>

               {boxes.map( (box) => {
                    return <div key={box.id} className={`${styles.box} ${box.colorClass}`}
                        onClick={() => handleBoxClick(box.id)}>
                        {box.name}
                    </div>
               })}

            </div>

            <h1>Box Color Picker</h1>
            <div className={styles.colorPicker}>
                
                <div className={`${styles.box} ${styles.red}`}
                onClick={() => selectColor(styles.red)}>
                    RED
                </div>
                <div className={`${styles.box} ${styles.blue}`}
                onClick={() => selectColor(styles.blue)}>
                    BLUE
                </div>
                <div className={`${styles.box} ${styles.green}`}
                onClick={() => selectColor(styles.green)}>
                    GREEN
                </div>

                <BoxCreator onCreateBox={createBox}></BoxCreator>

            </div>

        </div>
    );
};
export default PickAColorPage;