import {BoxHeader , Header} from './styled';
import PowerImg from '../../assets/powered.png';

const MainHeader = () => {
    return(
        <BoxHeader>
            <Header>
                <img src={PowerImg} alt='Pedro A.' />
            </Header>
        </BoxHeader>
    );
}

export default MainHeader;