import { useState } from 'react';
import MainHeader from '../../components/Header';
import LeftSide from '../../components/LeftSide';
import RightSide from '../../components/RightSide';
import { calculateImc, Level } from '../../Helpers/imc';
import { BoxMain , Container } from './styled';

const Main = () => {
    
    const [heightField , setHeightField] = useState<number>(0);
    const [weightField , setWeightField] = useState<number>(0);
    const [showItem , setShowItem] = useState<Level | null>(null);
    const [disabled , setDisabled] = useState<boolean>(false);

    const handleButton = () => {
        if(heightField && weightField){
            setShowItem(calculateImc(heightField , weightField));
            setDisabled(!disabled);
        }else{
            alert('Preencha Todos os valores');
        }
    }

    const handleBackButton = () => {
        setDisabled(!disabled);
        setShowItem(null);
        setHeightField(0);
        setWeightField(0);
    }
    
    return(
        <BoxMain>
            <MainHeader/>
            <Container>
                <LeftSide
                    heightField={heightField}
                    weightField={weightField}
                    disabled={disabled}
                    FuncShowItem={handleButton}
                    FuncWeight={setWeightField}
                    FuncHeight={setHeightField}
                />
                <RightSide
                    showItem={showItem}
                    FuncBack={handleBackButton}
                />
            </Container>
        </BoxMain>
    )
}

export default Main;
