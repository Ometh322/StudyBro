import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS, List,Group, Cell } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

//import student from '../img/student.jpg';
//import './Student.css';

const osName = platform();

const HomeTasks = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={props.go} data-to="home">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderButton>}
		>
			Домашние задания 
		</PanelHeader>
   <Group>
	   <List>
		   <Cell>
			   ДЗ
		   </Cell>
	   </List>
   </Group>
	</Panel>
);
HomeTasks.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default HomeTasks;
