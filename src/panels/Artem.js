import React, {useState} from 'react';
import { platform, IOS} from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import ArticleList from "../components/ArticleList"
import CellButton from '@vkontakte/vkui/dist/components/CellButton/CellButton';
import Icon16Add from '@vkontakte/icons/dist/16/add';
import Separator from '@vkontakte/vkui/dist/components/Separator/Separator';



import articles1 from "../components/fixtures.json"


import './Student.css';


function Persik(props) {
const [articles, setArticles] = React.useState(articles1)
const [copyArticles, setCopyArticles] = React.useState(articles)
const [text, setText] = React.useState('Сортировать: сначала новые')
const osName = platform();

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
  }

const handleClick = () => {
	console.log('---', 'clicked')
	let inf = { //посмотреть что с ключами(id)
		id:   getRandomInt(30, 1000000), date: "2020-12-06", 
		title: "Практическая работа", 
		text: "Практическая работа по экономике"
	}	
	if (text === 'Сортировать: сначала новые') {
		setArticles(
			articles.concat([inf])
		  )
	}
	else {
		setArticles(
			articles.reverse().concat([inf]).reverse()
	  )
	}
};

//состояние (реверса)
let state = {
	reverted: false,
	textOpen: 'open',
	textClose: 'close'
	// text: 'op'
}


//реверс списка
const revert = () => {
	setArticles(articles.reverse().concat())
	// state.text = state.reverted ? state.textOpen : state.textClose
	state.reverted = !state.reverted;
	text === 'Сортировать: сначала старые' ? setText('Сортировать: сначала новые') : setText('Сортировать: сначала старые')
	console.log(state.reverted)
	// console.log(state.text)
	}

//добавление новости
function addTodo(titleIn) {
	let inf = { //посмотреть что с ключами(id)
		id:   getRandomInt(30, 1000000), date: "2020-12-05", 
		title: titleIn, 
		text: "Новость в разработке"
	}
	if (text === 'Сортировать: сначала новые') //новости в правильном порядке (добавление в конец)
	{
		setArticles(articles.concat([inf]))
	} 
	else //новости в неправильном порядке (добавление в начало)
	{
		setArticles(articles.reverse().concat([inf]).reverse())
	}
  }

  
//поиск новости
function searchTodo(titleIn) {
	setCopyArticles(articles);
	setArticles(copyArticles.filter(function(x) {
		return x.title.toLowerCase().includes(titleIn.toLowerCase()) ;
	  }));
	  console.log("search")
  }




return (

	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={props.go} data-to="home">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderButton>}
		>
			Новости
		</PanelHeader>
		<div>
            <div>
                <h1>
                    Последние 
					<AddTodo onCreate={addTodo}/>
					<SearchTodo onCreate={searchTodo}/>
                    <CellButton  before={<Icon16Add/>} onClick={handleClick}>
                        Добавить новость
                    </CellButton>
					<button className="btn btn-primary" onClick = {revert}>
					    {text}
        			</button>
                    <Separator />
                </h1>
            </div>
            <ArticleList articles={state.reverted ? articles.reverse() : articles} />
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
        <form style={{marginBottom: '1rem'}} onSubmit={submitHandler}>
            <input value={value} onChange={event => setValue(event.target.value)}/>
            <button type="submit">Добавить свою новость</button>
        </form>
    )
}

function SearchTodo({onCreate}) {
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
            <button type="submit">Найти новость</button>
        </form>
    )
}

}

export default Persik;