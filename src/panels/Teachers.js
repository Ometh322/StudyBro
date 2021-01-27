import React, { useState } from 'react';
import { platform, IOS, Panel, PanelHeader, PanelHeaderButton, Header, Textarea, Separator, CellButton } from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon16Search from '@vkontakte/icons/dist/16/search';
import TeachArticleList from "../components/TeachArticleList"
import articles1 from "../components/teachers.json"
import './Student.css';

function Teachers(props) {
    const [articles, setArticles] = React.useState(articles1)
    const [copyArticles, setCopyArticles] = React.useState(articles)
    const osName = platform();

    //поиск преподавателя
    function searchTodo(titleIn) {
        setCopyArticles(articles);
        setArticles(copyArticles.filter(function (x) {
            return x.title.toLowerCase().includes(titleIn.toLowerCase());
        }));
        console.log("search")
    }

    return (
        <Panel id={props.id}>
            <PanelHeader
                left={<PanelHeaderButton onClick={props.go} data-to="home">
                    {osName === IOS ? <Icon28ChevronBack /> : <Icon24Back />}
			Назад
		</PanelHeaderButton>}
            >
                Список преподавателей
		</PanelHeader>
            <div>
                <div>
                    <Header mode="tertiary">
                        <SearchTodo onCreate={searchTodo} />
                        <Separator />
                    </Header>
                </div>
                <TeachArticleList articles={articles} />
            </div>
        </Panel>
    );

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
                <CellButton before={<Icon16Search />} size="l">Найти преподавателя по дисциплине (вводить название дисциплины)</CellButton>
            </form>
        )
    }
}

export default Teachers;