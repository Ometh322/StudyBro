import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS, Panel, PanelHeader, PanelHeaderButton, List, Group, Cell } from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import './Student.css';

const osName = platform();

const Alena = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={props.go} data-to="home">
				{osName === IOS ? <Icon28ChevronBack /> : <Icon24Back />}
				Назад
			</PanelHeaderButton>}
		>
			Голосование
		</PanelHeader>
		<Group>
			<List>
				<Cell>
					Предстоящих голосований пока нет
				</Cell>
			</List>
		</Group>
	</Panel>
);

Alena.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Alena;