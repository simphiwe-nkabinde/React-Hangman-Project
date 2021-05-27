// importing all Hangman images, stage0 - stage11
import stage0 from "../images/stage0.png";
import stage1 from "../images/stage1.png";
import stage2 from "../images/stage2.png";
import stage3 from "../images/stage3.png";
import stage4 from "../images/stage4.png";
import stage5 from "../images/stage5.png";
import stage6 from "../images/stage6.png";
import stage7 from "../images/stage7.png";
import stage8 from "../images/stage8.png";
import stage9 from "../images/stage9.png";
import stage10 from "../images/stage10.png";
import stage11 from "../images/stage11.png";

function Diagram(props) {
    let stageImage = 0;
//assigns an imported image-path to {stageImage} based on integer=> props.stage
    switch (props.stage) {
        case 0:
            stageImage = stage0;
            break;
        case 1:
            stageImage = stage1;
            break;
        case 2:
            stageImage = stage2;
            break;
        case 3:
            stageImage = stage3;
            break;
        case 4:
            stageImage = stage4;
            break;
        case 5:
            stageImage = stage5;
            break;
        case 6:
            stageImage = stage6;
            break;
        case 7:
            stageImage = stage7;
            break;
        case 8:
            stageImage = stage8;
            break;
        case 9:
            stageImage = stage9;
            break;
        case 10:
            stageImage = stage10;
            break;
        case 11:
            stageImage = stage11;
            break;
    }
    
    return (
        <div className="diagram">
            <img src={stageImage} alt="hangman"/>
        </div>
    )
}

export default Diagram