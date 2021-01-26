import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS, Panel, PanelHeader, PanelHeaderButton } from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24Home from '@vkontakte/icons/dist/24/home';
import DevelopersList from '../img/Developers.jpg';
import './Student.css';

const osName = platform();

const Developers = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={props.go} data-to="appinfo">
				{osName === IOS ? <Icon28ChevronBack /> : <Icon24Back />}
				Назад
			</PanelHeaderButton>}
			right={<PanelHeaderButton onClick={props.go} data-to="home">
				{<Icon24Home />}
				На стартовую страницу
			</PanelHeaderButton>}
		>
			Авторы приложения
		</PanelHeader>
		<img className="Developers" src={DevelopersList} alt="Developers" />
	</Panel>
);

Developers.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Developers;