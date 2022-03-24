import { MainLeftSide } from './styled';
import { calculateImc} from '../../Helpers/imc';

type Props = {
    heightField:number
    weightField:number
    disabled:boolean
    FuncWeight:any
    FuncHeight:any
    FuncShowItem:any
}

const LeftSide = ({heightField , weightField , FuncWeight , FuncHeight , FuncShowItem  , disabled}:Props) => {

    return(
        <MainLeftSide>
            <h1>Calcule seu IMC</h1>
            <p>
                O índice de massa corporal é uma medida internacional 
                usada para calcular se uma pessoa está no peso ideal.
            </p>

            <input 
            type='number' 
            placeholder='Digite sua altura. Ex: 1.8 (Em Metros)'
            value={heightField > 0 ? heightField : ''}
            onChange={(e) => FuncHeight(parseFloat(e.target.value))} 
            disabled={disabled}
            />

            <input 
            type='number' 
            placeholder='Digite seu peso. Ex: 80.5 (Em Kg)'
            value={weightField > 0 ? weightField : ''}
            onChange={(e) => FuncWeight(parseFloat(e.target.value))} 
            disabled={disabled}
            />

            <button onClick={FuncShowItem} disabled={disabled}>Calcular</button>

        </MainLeftSide>
    );
}

export default LeftSide;