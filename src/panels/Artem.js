import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
// import Button from '@vkontakte/vkui/dist/components/Button/Button';
import ArticleList from "../components/ArticleList"
import articles from "../components/fixtures"
import CellButton from '@vkontakte/vkui/dist/components/CellButton/CellButton';
import Icon16Add from '@vkontakte/icons/dist/16/add';
// import IconNews from '@vkontakte/icons/dist/20/newsfeed_outline';
import Separator from '@vkontakte/vkui/dist/components/Separator/Separator';
// import View from '@vkontakte/vkui/dist/components/View/View';
// import Group from '@vkontakte/vkui/dist/components/Group/Group';
// import Header from '@vkontakte/vkui/dist/components/Header/Header';
// import Div from '@vkontakte/vkui/dist/components/Div/Div';
// import WriteBar from '@vkontakte/vkui/dist/components/WriteBar/WriteBar';
// import WriteBarIcon from '@vkontakte/vkui/dist/components/WriteBarIcon/WriteBarIcon';
// import FixedLayout from '@vkontakte/vkui/dist/components/FixedLayout/FixedLayout';


import './Student.css';

const osName = platform();

const handleClick = () => {
	console.log('---', 'clicked')
};



const Persik = props => (
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
                    <CellButton  before={<Icon16Add/>} onClick={handleClick}>
                        Добавить новость
                    </CellButton>
					<Separator />
            </div>
            <ArticleList articles={articles} />
        </div>

	</Panel>
);

Persik.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};



  


export default Persik;