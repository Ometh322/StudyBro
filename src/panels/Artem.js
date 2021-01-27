import React, { useState, useEffect, Fragment } from 'react';
// import PropTypes from 'prop-types';
import { platform, IOS, Panel, PanelHeader, PanelHeaderButton, Group, Header, Textarea, Checkbox, Separator, CellButton } from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import ArticleList from "../components/ArticleList"
// import articles from "../components/fixtures"
import Icon16Add from '@vkontakte/icons/dist/16/add';
import Icon16Search from '@vkontakte/icons/dist/16/search';
// import IconNews from '@vkontakte/icons/dist/20/newsfeed_outline';
// import View from '@vkontakte/vkui/dist/components/View/View';
// import Div from '@vkontakte/vkui/dist/components/Div/Div';
// import FixedLayout from '@vkontakte/vkui/dist/components/FixedLayout/FixedLayout';

import articles1 from "../components/fixtures.json"
import bridge from '@vkontakte/vk-bridge';
import Div from '@vkontakte/vkui/dist/components/Div/Div';

import './Student.css';

let STORAGE_KEYS = {
	VALUE: 11
}

function Persik(props) {

	const [articles, setArticles] = React.useState(articles1)
	const [copyArticles, setCopyArticles] = React.useState(articles)
	const [text, setText] = React.useState('Сортировать: сначала новые')
	const [valueInfo, setValueInfo] = React.useState(1)
	const osName = platform();


	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min)) + min;
	}

	//Чье это?? у меня не запустилось с этой штучкой

	// const handleClick = () => {
	// 	console.log('---', 'clicked')
	// 	// setArticles([{
	// 	// 	id: 6, date: "2020-12-01", 
	// 	// 	title: "Практическая работа", 
	// 	// 	text: "Практическая работа по экономике"
	// 	// }])
	// 	let inf = { //посмотреть что с ключами(id)
	// 		id:   getRandomInt(30, 1000000), date: "2020-12-06", 
	// 		title: "Практическая работа", 
	// 		text: "Практическая работа по экономике"
	// 	}	
	// 	if (text === 'Сортировать: сначала новые') {
	// 		setArticles(
	// 			articles.concat([inf])
	// 		  )
	// 	}
	// 	else {
	// 		setArticles(
	// 			articles.reverse().concat([inf]).reverse()
	// 	  )
	// 	}
	// };

	const handleClick = () => {
		console.log('---', 'clicked')
		let inf = { //посмотреть что с ключами(id)
			id: getRandomInt(30, 1000000), date: "2020-12-06",
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
		//console.log(state.reverted)
		// console.log(state.text)
		saveValue()
	}

	//добавление новости
	function addTodo(titleIn) {
		let inf = { //посмотреть что с ключами(id)
			id: getRandomInt(30, 1000000), date: "2020-12-05",
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
		getValue()
	}

	//поиск новости
	function searchTodo(titleIn) {
		setCopyArticles(articles);
		setArticles(copyArticles.filter(function (x) {
			return x.title.toLowerCase().includes(titleIn.toLowerCase());
		}));
		console.log("search")
	}

	//поиск новости
	function searchTodo(titleIn) {
		setCopyArticles(articles);
		setArticles(copyArticles.filter(function (x) {
			return x.title.toLowerCase().includes(titleIn.toLowerCase());
		}));
		console.log("search")
	}

	useEffect(() => {
		async function fetchData() {
			//const user = await bridge.send('VKWebAppGetUserInfo');
			//setValueInfo(user);
			const valueInformation = await bridge.send('VKWebAppStorageGet', { keys: STORAGE_KEYS.VALUE });
			setValueInfo(valueInformation);
		}
		fetchData();
	}, []);

	const getValue = async () => {
		// const valueInformation = await bridge.send('VKWebAppStorageGet', { keys: [valueInfoStorage]});
		// setValueInfo(valueInformation);
		// console.log(valueInformation)
	}

	const saveValue = async () => {
		// await bridge.send('VKWebAppStorageSet', {
		// 	key: valueInfoStorage,
		// 	value: 66
		// });
	}

	return (
		<Panel id={props.id}>
			<PanelHeader
				left={<PanelHeaderButton onClick={props.go} data-to="home">
					{osName === IOS ? <Icon28ChevronBack /> : <Icon24Back />}
			Назад
		</PanelHeaderButton>}
			>
				Новости
		</PanelHeader>
			<div>
				<div>
					<Header mode="tertiary">
						Последние
					<AddTodo onCreate={addTodo} />
						<SearchTodo onCreate={searchTodo} />
						<button className="btn btn-primary" onClick={revert}>
							{text}
						</button>
						<Separator />
					</Header>
				</div>
				{(valueInfo) &&
					<Fragment>
						<Group>
							{/* <Div className='User'>
						<h2>Привет, {valueInfo.first_name}</h2>
					</Div> */}
							<Div>
								<h2>Значение, {valueInfo}</h2>
							</Div>
						</Group>
					</Fragment>
				}
				<ArticleList articles={state.reverted ? articles.reverse() : articles} />
				<Checkbox>Закрепить сообщение с запросом</Checkbox>
			</div>
		</Panel>
	);

	function AddTodo({ onCreate }) {
		const [value, setValue] = useState('')
		function submitHandler(event) {
			event.preventDefault()
			if (value.trim()) {
				onCreate(value)
			}
		}
		return (
			<Group>
				<form style={{ marginBottom: '1rem' }} onSubmit={submitHandler}>
					<Textarea size='s'
						defaultValue="Сообщите нам что-то важное!"
						input value={value} onChange={event => setValue(event.target.value)} />
					<CellButton before={<Icon16Add />} > Добавить новость</CellButton>
				</form>
			</Group>
		)
	}

	function SearchTodo({ onCreate }) {
		const [value, setValue] = useState('')
		function submitHandler(event) {
			event.preventDefault()
			if (value.trim()) {
				onCreate(value)
			}
		}
		return (
			<form style={{ marginBottom: '1rem' }} onSubmit={submitHandler}>
				<Textarea
					input value={value} onChange={event => setValue(event.target.value)}
				/>
				<CellButton before={<Icon16Search />} size="l">Найти новость</CellButton>

			</form>
		)
	}
}

export default Persik;