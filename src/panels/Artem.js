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
	const [valueInfo, setValueInfo] = React.useState()
	const osName = platform();


	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min)) + min;
	}


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
		//saveValue()
		incValue()
	}

	//добавление новости
	function addTodo(titleIn) {
		let inf = { //посмотреть что с ключами(id)
			id: getRandomInt(30, 1000000), date: "2021-01-27",
			title: titleIn,
			text: "Новость в разработке"
		}
		if (text === 'Сортировать: сначала новые') //новости в правильном порядке (добавление в конец)
		{
			let art = articles.concat([inf])
			setArticles(articles.concat([inf]))
			//добавление новости в хранилище
			addNewsStorage(art)
		}
		else //новости в неправильном порядке (добавление в начало)
		{
			let art = articles.reverse().concat([inf]).reverse()
			setArticles(articles.reverse().concat([inf]).reverse())
			//добавление новости в хранилище
			addNewsStorage(art)
		}
		//getValue()

		
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

		const valueInformation = await bridge.send('VKWebAppStorageGet', { keys: ['valueInfoStorage', 'arrayNews']});
		//setValueInfo(valueInformation);
		const data = {};
		let a
		let arrNews
		valueInformation.keys.forEach(({ key, value }) => {
			//data[key] = value;
			data[key] = value ? JSON.parse(value) : {};
						switch (key) {
							case 'valueInfoStorage':
								console.log(data['valueInfoStorage']);
								a = data['valueInfoStorage']
								setValueInfo(a);
								break;
							case 'arrayNews':
								if (data[key]) {
								console.log(data['arrayNews']);
								arrNews = data['arrayNews']
								console.log('массив Новостей:')
								// let art = JSON.parse(arrNews)
								let art = arrNews
								setArticles(art)
								console.log(art)
								}
								break;
							default:
								break;
						}
		});
	}

		fetchData();
	}, []);

	const getValue = async () => {
		const valueInformation = await bridge.send('VKWebAppStorageGet', { keys: ['valueInfoStorage']});
		//setValueInfo(valueInformation);
		const data = {};
		valueInformation.keys.forEach(({ key, value }) => {
			data[key] = value;
						switch (key) {
							case 'valueInfoStorage':
								console.log(data['valueInfoStorage']);
								setValueInfo(data['valueInfoStorage']);
								break;
							default:
								break;
						}
		});
		//console.log(valueInformation.keys)
	}

	const saveValue = async () => {
		await bridge.send('VKWebAppStorageSet', {
			key: 'valueInfoStorage',
			value: 66
		});
		console.log();
	}

	//добавление новости в хранилище
	const addNewsStorage = async (arr) => {
		await bridge.send('VKWebAppStorageSet', {
			key: 'arrayNews',
			value: JSON.stringify(arr)
		});
		console.log(JSON.stringify(arr));
	}

	const incValue = async () => {
		const valueInformation = await bridge.send('VKWebAppStorageGet', { keys: ['valueInfoStorage']});
		//setValueInfo(valueInformation);
		const data = {};
		let a
		valueInformation.keys.forEach(({ key, value }) => {
			data[key] = value;
						switch (key) {
							case 'valueInfoStorage':
								console.log(data['valueInfoStorage']);
								a = data['valueInfoStorage']
								//setValueInfo(data['valueInfoStorage']);
								break;
							default:
								break;
						}
		});

		a = Number.parseInt(a) + 1;
		a = a + ""
		setValueInfo(a)

		await bridge.send('VKWebAppStorageSet', {
			key: 'valueInfoStorage',
			value: a
		});
		console.log();
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
								<h6>Всего новостей - {valueInfo}</h6>
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