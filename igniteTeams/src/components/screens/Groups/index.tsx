import {Header} from '../../Header';
import { Highlight } from '../../HighLight';
import { GroupCard } from '../../GroupCard';
import  * as S  from './styles';

export function Groups() {
  return (
	<S.Container>
    <Header />
    <Highlight  
    title="Squads"
    subTitle= "Jogue com seu squad!"
    
    />

    <GroupCard title="Call of Duty"/>
	  
	</S.Container>
    

    
  );
}

