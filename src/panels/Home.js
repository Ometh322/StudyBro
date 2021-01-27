import React from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeader, Button, Group, Cell, Div, Avatar, Counter } from '@vkontakte/vkui';
import {
	Icon28NewsfeedOutline,
	Icon28ListOutline,
	Icon28Users3Outline,
	Icon28UsersOutline,
	Icon28InfoOutline,
	Icon28PollSquareOutline,
	Icon28SchoolOutline,
	Icon28HomeOutline
} from '@vkontakte/icons';

const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>StudyBro</PanelHeader>
		{fetchedUser &&
			<Group title="User Data Fetched with VK Bridge">
				<Cell
					before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200} /> : null}
					description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
				>
					{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
				</Cell>
			</Group>}

		<Group title="Navigation Example">
			<Div>
				<Div>
					<Button before={<Icon28NewsfeedOutline />} after={<Counter>2</Counter>} size="xl" mode="secondary" onClick={go} data-to="persik">
						Новости
					</Button>
				</Div>

				<Div>
					<Button before={<Icon28ListOutline />} size="xl" mode="secondary" onClick={go} data-to="student">
						Расписание занятий
					</Button>
				</Div>

				<Div>
					<Button before={<Icon28ListOutline />} size="xl" mode="secondary" onClick={go} data-to="sessionschedule">
						Расписание сессии
				  	</Button>
				</Div>

				<Div>
					<Button before={<Icon28HomeOutline />} size="xl" mode="secondary" onClick={go} data-to="HomeTasks">
						Домашние задания
				  	</Button>
				</Div>

				<Div>
					<Button before={<Icon28SchoolOutline />} size="xl" mode="secondary" onClick={go} data-to="lections">
						Лекции
				  	</Button>
				</Div>

				<Div>
					<Button before={<Icon28PollSquareOutline />} size="xl" mode="secondary" onClick={go} data-to="alena">
						Голосования
				  	</Button>
				</Div>

				<Div>
					<Button before={<Icon28Users3Outline />} size="xl" mode="secondary" onClick={go} data-to="groups">
						Информация об учебных группах
				  	</Button>
				</Div>

				<Div>
					<Button before={<Icon28UsersOutline />} size="xl" mode="secondary" onClick={go} data-to="teachers">
						Список преподавателей
				  	</Button>
				</Div>

				<Div>
					<Button before={<Icon28InfoOutline />} size="xl" mode="secondary" onClick={go} data-to="appinfo">
						О приложении
				  	</Button>
				</Div>
			</Div>
		</Group>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;