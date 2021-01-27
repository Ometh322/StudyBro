import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS, Panel, PanelHeader, PanelHeaderButton, List, Group, Cell, Header, Checkbox } from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import './Student.css';

const osName = platform();

const Student = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={props.go} data-to="home">
				{osName === IOS ? <Icon28ChevronBack /> : <Icon24Back />}
				Назад
			</PanelHeaderButton>}
		>
			Расписание занятий
		</PanelHeader>
		<Group header={<Header mode="secondary">неделя</Header>}>
			<Cell before={<Checkbox>Числитель</Checkbox>}>
				<Checkbox>Знаменатель</Checkbox>
			</Cell>
		</Group>
		<Group header={<Header mode="secondary">подгруппа</Header>}>
			<Cell before={<Checkbox>1ая подгруппа</Checkbox>}>
				<Checkbox>2ая подгруппа</Checkbox>
			</Cell>
		</Group>
		<Group header={<Header mode="secondary">группа по английскому</Header>}>
			<Cell before={<Checkbox>1ая</Checkbox>}>
				<Cell before={<Checkbox>2ая</Checkbox>}>
					<Cell before={<Checkbox>3ья</Checkbox>}>
						<Cell before={<Checkbox>4ая</Checkbox>}>
							<Cell before={<Checkbox>5ая</Checkbox>}>
								<Checkbox>6ая</Checkbox>
							</Cell>
						</Cell>
					</Cell>
				</Cell>
			</Cell>
		</Group>
		<Group header={<Header mode="secondary">понедельник</Header>}>
			<List>
				<Cell>
					| 08:20 - 09:50 | Физическая культура | Практика | стадион Локомотив |
				</Cell>
				<Cell>
					| 10:00 - 11:35 | Физическая культура | Практика | стадион Локомотив |
				</Cell>
				<Cell>
					| 12:05 - 13:40 | Теория графов | Лекция | Дистанционно |
				</Cell>
				<Cell>
					| 13:50 - 15:25 | Английский язык (перевод.) | Практика | ауд. 402 |
				</Cell>
				<Cell>
					| 15:35 - 17:10 | Английский язык (перевод.) | Лекция | Дистанционно |
				</Cell>
				<Cell>
					| 17:20 - 18:40 | --- | --- | --- |
				</Cell>
				<Cell>
					| 18:45 - 20:05 | --- | --- | --- |
				</Cell>
			</List>
		</Group>
		<Group header={<Header mode="secondary">вторник</Header>}>
			<List>
				<Cell>
					| 08:20 - 09:50 | --- | --- | --- |
				</Cell>
				<Cell>
					| 10:00 - 11:35 | --- | --- | --- |
				</Cell>
				<Cell>
					| 12:05 - 13:40 | --- | --- | --- |
				</Cell>
				<Cell>
					| 13:50 - 15:25 | Теория вероятностей | Лекция | Дистанционно |
				</Cell>
				<Cell>
					| 15:35 - 17:10 | Теория вероятностей | Практика | Дистанционно |
				</Cell>
				<Cell>
					| 17:20 - 18:40 | Методы вычислений | Практика | Дистанционно |
				</Cell>
				<Cell>
					| 18:45 - 20:05 | Прикладная универсальная алгебра | Лекция | Дистанционно |
				</Cell>
			</List>
		</Group>
		<Group header={<Header mode="secondary">среда</Header>}>
			<List>
				<Cell>
					| 08:20 - 09:50 | --- | --- | --- |
				</Cell>
				<Cell>
					| 10:00 - 11:35 | Базы данных | Практика | стадион Локомотив |
				</Cell>
				<Cell>
					| 12:05 - 13:40 | Языки программирования | Практика | Дистанционно |
				</Cell>
				<Cell>
					| 13:50 - 15:25 | Английский язык (перевод.) | Практика | ауд. 224 |
				</Cell>
				<Cell>
					| 15:35 - 17:10 | Введение в экономику | Лекция | Дистанционно |
				</Cell>
				<Cell>
					| 17:20 - 18:40 | --- | --- | --- |
				</Cell>
				<Cell>
					| 18:45 - 20:05 | --- | --- | --- |
				</Cell>
			</List>
		</Group>
		<Group header={<Header mode="secondary">четверг</Header>}>
			<List>
				<Cell>
					| 08:20 - 09:50 | --- | --- | --- |
				</Cell>
				<Cell>
					| 10:00 - 11:35 | Языки программирования | Лекция | ауд. 310 |
				</Cell>
				<Cell>
					| 12:05 - 13:40 | --- | --- | --- |
				</Cell>
				<Cell>
					| 13:50 - 15:25 | --- | --- | --- |
				</Cell>
				<Cell>
					| 15:35 - 17:10 | Базы данных | Лекция | ауд. 310 |
				</Cell>
				<Cell>
					| 17:20 - 18:40 | --- | --- | --- |
				</Cell>
				<Cell>
					| 18:45 - 20:05 | --- | --- | --- |
				</Cell>
			</List>
		</Group>
		<Group header={<Header mode="secondary">пятница</Header>}>
			<List>
				<Cell>
					| 08:20 - 09:50 | --- | --- | --- |
				</Cell>
				<Cell>
					| 10:00 - 11:35 | --- | --- | --- |
				</Cell>
				<Cell>
					| 12:05 - 13:40 | Методы вычислений | Лекция | Дистанционно |
				</Cell>
				<Cell>
					| 13:50 - 15:25 | Теория графов | Практика | Дистанционно |
				</Cell>
				<Cell>
					| 15:35 - 17:10 | --- | --- | --- |
				</Cell>
				<Cell>
					| 17:20 - 18:40 | --- | --- | --- |
				</Cell>
				<Cell>
					| 18:45 - 20:05 | --- | --- | --- |
				</Cell>
			</List>
		</Group>
		<Group header={<Header mode="secondary">суббота</Header>}>
			<List>
				<Cell>
					| 08:20 - 09:50 | --- | --- | --- |
				</Cell>
				<Cell>
					| 10:00 - 11:35 | Технологии программирования | Практика | Дистанционно |
				</Cell>
				<Cell>
					| 12:05 - 13:40 | Технологии программирования | Лекция | Дистанционно |
				</Cell>
				<Cell>
					| 13:50 - 15:25 | --- | --- | --- |
				</Cell>
				<Cell>
					| 15:35 - 17:10 | --- | --- | --- |
				</Cell>
				<Cell>
					| 17:20 - 18:40 | --- | --- | --- |
				</Cell>
				<Cell>
					| 18:45 - 20:05 | --- | --- | --- |
				</Cell>
			</List>
		</Group>
	</Panel>
);

Student.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Student;