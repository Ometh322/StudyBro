import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS, Panel, PanelHeader, PanelHeaderButton, List, Group, Cell } from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon28Users from '@vkontakte/icons/dist/28/users';
import Icon24Users from '@vkontakte/icons/dist/24/users';
import './Student.css';

const osName = platform();

const AppInfo = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={props.go} data-to="home">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
				Назад
			</PanelHeaderButton>}
			right={<PanelHeaderButton onClick={props.go} data-to="developers">
				{osName === IOS ? <Icon28Users/> : <Icon24Users/>}
				Авторы приложения
			</PanelHeaderButton>}
		>
			О приложении
		</PanelHeader>
		<Group>
			<List>
				<Cell>
		   			Приложение создано для помощи студентам и содержит в себе рассписания, новости, домашние задания и т.д.
		   		</Cell>
		   		<Cell>
		   			Разработчики данного приложения не несут ответственности за выкладываемые пользователями материалы.
		   		</Cell>
		   		<Cell>
		   			Приложение находится в разработке.
		   		</Cell>
	   		</List>
   		</Group>
	</Panel>
);

AppInfo.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default AppInfo;