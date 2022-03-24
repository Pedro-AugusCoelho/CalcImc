import { Icon, Info, MainItem, Title } from './styled';
import {Level} from '../../Helpers/imc';
import downImage from '../../assets/down.png';
import upImage from '../../assets/up.png';

type Props = {
    value:Level
}

const GridItem = ({value}:Props) => {
    
    const {title, color, icon, imc, yourImc} = value;
    
    return(
        <MainItem color={color}>
            
            <Icon>
                {icon === 'up' && <img src={upImage} alt='upImage' />}
                {icon === 'down' && <img src={downImage} alt='downImage' />}
            </Icon>
            
            <Title>{title}</Title>

            {yourImc &&
                <h3>Seu IMC é {yourImc} Kg/m²</h3>
            }
            
            <Info>
                <>
                    IMC está entre <strong>{imc[0]}</strong> e <strong>{imc[1]}</strong>
                </>
            </Info>
        
        </MainItem>
    )
}

export default GridItem;