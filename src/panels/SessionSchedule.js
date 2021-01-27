import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS, Panel, PanelHeader, PanelHeaderButton, List, Group, Cell, Header } from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import './Student.css';

const osName = platform();

const SessionSchedule = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={props.go} data-to="home">
				{osName === IOS ? <Icon28ChevronBack /> : <Icon24Back />}
				Назад
			</PanelHeaderButton>}
		>
			Расписание сессии
		</PanelHeader>
		<Group header={<Header mode="secondary">зачёты</Header>}>
			<List>
				<Cell>
					| 22 декабря 2020г. | 12:00 | Введение в экономику | Дистанционно |
				</Cell>
				<Cell>
					| 24 декабря 2020г. | 10:00 | Теория графов | Дистанционно |
				</Cell>
				<Cell>
					| 25 декабря 2020г. | 11:00 | Физическая культура | Дистанционно |
				</Cell>
				<Cell>
					| 26 декабря 2020г. | 12:00 | Технологии программирования | Дистанционно |
				</Cell>
				<Cell>
					| 30 декабря 2020г. | 10:00 | Прикладная универсальная алгебра | Дистанционно |
				</Cell>
			</List>
		</Group>
		<Group header={<Header mode="secondary">консультации</Header>}>
			<List>
				<Cell>
					| 9 января 2021г. | 10:00 | Языки программирования | ауд. 416 |
				</Cell>
				<Cell>
					| 16 января 2021г. | 14:00 | Методы вычислений | Дистанционно |
				</Cell>
				<Cell>
					| 21 января 2021г. | 14:00 | Теория вероятностей | Дистанционно |
				</Cell>
				<Cell>
					| 28 января 2021г. | 15:00 | Базы данных | ауд. 424 |
				</Cell>
			</List>
		</Group>
		<Group header={<Header mode="secondary">экзамены</Header>}>
			<List>
				<Cell>
					| 11 января 2021г. | 14:00 | Языки программирования | ауд. 416 |
				</Cell>
				<Cell>
					| 18 января 2021г. | 10:00 | Методы вычислений | Дистанционно |
				</Cell>
				<Cell>
					| 22 января 2021г. | 10:00 | Теория вероятностей | ауд. 424 |
				</Cell>
				<Cell>
					| 29 января 2021г. | 14:00 | Базы данных | ауд. 424 |
				</Cell>
			</List>
		</Group>
	</Panel>
);

SessionSchedule.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default SessionSchedule;