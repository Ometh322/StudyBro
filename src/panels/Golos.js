import React, {useState} from 'react';
// import PropTypes from 'prop-types';
import { platform, IOS, List, Cell } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import CellButton from '@vkontakte/vkui/dist/components/CellButton/CellButton';
import Icon16Add from '@vkontakte/icons/dist/16/add';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Header from '@vkontakte/vkui/dist/components/Header/Header';
import Textarea from '@vkontakte/vkui/dist/components/Textarea/Textarea';
import variants1 from "../components/vars.json"
import './Student.css';

function Golos(props) {
	let stat = {
		vote: false
	
	}
const [variants, setVariants] = React.useState(variants1)
const [state, setState] = React.useState(stat)
const osName = platform();

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
  }

const voted = (VarId) => {
    setState(state.vote,true);
	variants[VarId].count=variants[VarId].count+1;
	setVariants(variants)
	}

function addTodo(titleIn) {
    
	let inf = { //посмотреть что с ключами(id)
		id:   getRandomInt(30, 1000000),
		title: titleIn, 
		count: 0
	}
		setVariants(variants.concat([inf]))
  }

return (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={props.go} data-to="alena">
			{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			Назад
		</PanelHeaderButton>}
		>
			Проголосовать
		</PanelHeader>
		<div>
            <div>
			   <Header mode="tertiary">
                   <h2>Чтобы проголосовать, кликните на нужную фамилию</h2>
					<AddTodo onCreate={addTodo}/>
				</Header>
            </div>
            <List>
                {
                    variants.map((variant,index)=> (
                        <Cell
                        key={variant.id}
                        onClick={()=>{
                            if (state.vote==false) voted(index)}
                        }
                        >
                            <h2>{variant.title}</h2>
                           Проголосовали : {variant.count}
                        </Cell>
                    ))
                }
            </List>
        </div>
	</Panel>
);

function AddTodo({onCreate}) {
	const [value, setValue] = useState('')

	function submitHandler(event) {
		event.preventDefault()

		if (value.trim()) {
			onCreate(value)
		}
	}

    return (
		<Group>
			  
          <form style={{marginBottom: '1rem'}} onSubmit={submitHandler}>
			<Textarea size ='s'
			defaultValue="Сообщите нам что-то важное!"
            input value={value} onChange={event => setValue(event.target.value)} />
			<CellButton  before={<Icon16Add/>} > Добавить вариант</CellButton>
          </form>
		</Group>
    )
}

}

export default Golos;