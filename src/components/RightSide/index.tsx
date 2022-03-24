import { MainRightSide , Grid , RightBig , ArrowBack } from './styled';
import { Level, levels } from '../../Helpers/imc';
import Arrow from '../../assets/leftarrow.png';
import GridItem from '../GridItem';

type Props = {
    showItem:Level | null;
    FuncBack:any;
}


const RightSide = ({showItem, FuncBack}:Props) => {
    
    return(
        <MainRightSide>
            {!showItem &&
                <Grid>
                    {levels.map((val , key) => (
                        <GridItem
                        value={val}
                        key={key}
                        />
                    ))}
                </Grid>
            }

            {showItem &&
                <RightBig>
                    <ArrowBack onClick={FuncBack}>
                        <img src={Arrow} alt='ArrowBack' />
                    </ArrowBack>
                    
                    <GridItem value={showItem} />
                </RightBig>
            }
        
        </MainRightSide>
    );
}

export default RightSide;