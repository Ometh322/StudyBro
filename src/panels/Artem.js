import React, {useState} from 'react';
// import PropTypes from 'prop-types';
import { platform, IOS } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

import ArticleList from "../components/ArticleList"
import articles1 from "../components/fixtures.json"

import './Student.css';
// import { render } from 'react-dom';

function Persik(props) {
const [articles, setArticles] = React.useState(articles1)
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
	setArticles(
		articles.concat([{ //посмотреть что с ключами(id)
				id:   getRandomInt(30, 1000000), date: "2020-12-01", 
				title: "Практическая работа", 
				text: "Практическая работа по экономике"
			}])
	  )

};

//добавление новости
function addTodo(titleIn) {
    setArticles(
		articles.concat([{ //посмотреть что с ключами(id)
				id:   getRandomInt(30, 1000000), date: "2020-12-05", 
				title: titleIn, 
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
			Новости
		</PanelHeader>
		<div>
            <div>
                <h1>
                    Последние 
					<AddTodo onCreate={addTodo}/>
                    <button onClick={handleClick}>
                        Добавить новость
                    </button>
                </h1>
            </div>
            <ArticleList articles={articles} />
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

export default Persik;