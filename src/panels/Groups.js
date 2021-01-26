import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS, Panel, PanelHeader, PanelHeaderButton, List, Group, Cell } from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import {Icon24Education} from '@vkontakte/icons';
import '@vkontakte/vkui/dist/vkui.css';

const osName = platform();

// Список учебных групп
  const Groups = props => (
    <Panel id={props.id}>
        <PanelHeader
            left={<PanelHeaderButton onClick={props.go} data-to="home">
              {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
              Назад
            </PanelHeaderButton>}>
            Список учебных групп
        </PanelHeader>
        <Group> 
            <List>
              <Cell>
                    <PanelHeaderButton onClick={props.go} data-to="studentsList">
				              {osName === IOS ? <Icon24Education/> : <Icon24Education/>}
				                311 группа
			              </PanelHeaderButton>
              </Cell>
              <Cell>
                      <PanelHeaderButton onClick={props.go} data-to="studentsList">
				              {osName === IOS ? <Icon24Education/> : <Icon24Education/>}
				                351 группа
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