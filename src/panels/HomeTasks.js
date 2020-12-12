import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS, List,Group,Div, Cell } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';

// import React, {useState} from 'react';
// // import PropTypes from 'prop-types';
// import { Panel, Search, FixedLayout, platform, IOS } from '@vkontakte/vkui'

import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

import Tasks from "../components/Tasks"
import taskslist from "../components/taski"
//


//import './Student.css';
// import { render } from 'react-dom';
// class HomeTasks extends React.Component{
// 	constructor(props) {
// 		super(props)
// 		this.state={
// 			tasks : [ 
// 				{	
// 					id : 1,
// 					name : 'Домашнее задание',
// 					text : 'Сделать математику к школе'
// 				},
// 				{
// 					id : 2,
// 					name : 'Выпить воду',
// 					text : 'Буду пить воду каждый час'
// 				},
// 				{
// 					id : 3,
// 					name : 'Написать Васе',
// 					text : 'Надо написать Васе, чтобы он написал Свете'
// 				}
// 			],
// 			search : ''
// 		}
// 	}
// 	onChangeSearch = (search) => { 
// 		this.setState({ search })
// 	}
// 	render() {
// 		const osName = platform()
// 		return(
// 			<Panel id='tasks'>
// 				<PanelHeader
// 			left={<PanelHeaderButton onClick={'tasks'} data-to="home">
// 				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
// 			</PanelHeaderButton>}
// 		>
// 			Домашки
// 		</PanelHeader>
// 				<FixedLayout vertical='top'>
// 					<Search value={this.state.search} onChange={this.onChangeSearch}/>
// 				</FixedLayout>
// 				<Tasks tasklist={this.tasks} />
				
// 			</Panel>
// 		)
// 	}
	
// }





function HomeTasks(props) {
const [tasklist, setTask] = React.useState(taskslist)
const osName = platform();

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
  }

const handleClick = () => {
	console.log('---', 'clicked')
	// setArticles([{
	// 	id: 6, date: "2020-12-01", 
	// 	title: "Практическая работа", 
	// 	text: "Практическая работа по экономике"
	// }])
	setTask(
		tasklist.concat([{ //посмотреть что с ключами(id)
				id:   getRandomInt(30, 1000000),
				name: "Практическая работа", 
				text: "Практическая работа по экономике"
			}])
	  )

};

//добавление новости
function addTodo(titleIn) {
    setTask(
		tasklist.concat([{ //посмотреть что с ключами(id)
				id:   getRandomInt(30, 1000000),
				name: titleIn, 
				text: "Новость в разработке"
			}])
	  )
  }

return (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={props.go} data-to="home">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderButton>}
		>
			Домашки
		</PanelHeader>
		<div>
            <div>
                <h1>
					<AddTodo onCreate={addTodo}/>
                    <button onClick={handleClick}>
                        Добавить дз
                    </button>
                </h1>
            </div>
            <Tasks tasklist={tasklist} />
        </div>
	</Panel>
);

// Persik.propTypes = {
// 	id: PropTypes.string.isRequired,
// 	go: PropTypes.func.isRequired,
// };

function AddTodo({onCreate}) {
	const [value, setValue] = useState('')

	function submitHandler(event) {
		event.preventDefault()

		if (value.trim()) {
			onCreate(value)
		}
	}

    return (
        <form style={{marginBottom: '1rem'}} onSubmit={submitHandler}>
            <input value={value} onChange={event => setValue(event.target.value)}/>
            <button type="submit">Добавить свою новость</button>
        </form>
    )
}
}

export default HomeTasks;