import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS, Panel, PanelHeader, PanelHeaderButton } from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import session from '../img/SessionSchedule.jpg';
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
		<img className="SessionSchedule" src={session} alt="Session Schedule" />
	</Panel>
);

SessionSchedule.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default SessionSchedule;