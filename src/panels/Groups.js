import React from 'react';
import PropTypes from 'prop-types';
import '@vkontakte/vkui/dist/vkui.css';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import { IOS, List, platform } from '@vkontakte/vkui';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24Document from '@vkontakte/icons/dist/24/document';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Search from '@vkontakte/vkui/dist/components/Search/Search';
import Header from '@vkontakte/vkui/dist/components/Header/Header';
import File from '@vkontakte/vkui/dist/components/File/File';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Footer from '@vkontakte/vkui/dist/components/Footer/Footer';
import {Icon24Education} from '@vkontakte/icons';
const osName = platform();
// Список лекционных предметов
  

  const Groups = props => (
    <Panel id={props.id}>
        <PanelHeader
            left={<PanelHeaderButton onClick={props.go} data-to="home">
                {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
            </PanelHeaderButton>}>
            Список доступных к управлению учебных групп
        </PanelHeader>
        <Group> 
            <List>
              <Cell>
                    <PanelHeaderButton onClick={props.go} data-to="studentsList">
				              {osName === IOS ? <Icon24Education/> : <Icon24Education/>}
				                311 группа
			              </PanelHeaderButton>
              </Cell>
            </List>
        </Group>
    </Panel>
)




Groups.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Groups
