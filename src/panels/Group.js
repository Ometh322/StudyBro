import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import { IOS, platform } from '@vkontakte/vkui';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24Document from '@vkontakte/icons/dist/24/document';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Header from '@vkontakte/vkui/dist/components/Header/Header';
import File from '@vkontakte/vkui/dist/components/File/File';

const osName = platform();

const Groups = props => (
    <Panel id={props.id}>
        <PanelHeader
            left={<PanelHeaderButton onClick={props.go} data-to="home">
                {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
            </PanelHeaderButton>}>
            Лекции
        </PanelHeader>
        <Group header={<Header mode="secondary">Загрузите лекции</Header>}>
          <File before={<Icon24Document  />} controlSize="m">
            Выберете файл
          </File>
        </Group>
    </Panel>
)

Groups.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Groups