import React from 'react';
import PropTypes from 'prop-types';

import '@vkontakte/vkui/dist/vkui.css';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import { IOS, platform } from '@vkontakte/vkui';
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

const osName = platform();

const thematics = [
    {id: 1, name: "Алгебра"},
    {id: 2, name: "История"},
    {id: 3, name: "Русский язык и культура речи"},
    {id: 4, name: "Философия"},
    {id: 5, name: "Введение в экономику"},
    {id: 6, name: "Математический анализ"},
    {id: 7, name: "Дифференциальные уравнения"},
    {id: 8, name: "Физика"},
    {id: 9, name: "Дискретная математика"},
    {id: 10, name: "Информатика и программирование"},
    {id: 11, name: "Операционные системы"},
    {id: 12, name: "Базы данных"},
    {id: 13, name: "Языки программирования"},
    {id: 14, name: "Компьютерные сети"},
    {id: 15, name: "Теоретическая иформатика"},
  ];


  class SimpleSearch extends React.Component {

    constructor (props) {
      super(props);
      this.state = {
        search: ''
      }
      this.onChange = this.onChange.bind(this);
    }

    onChange (e) { this.setState({ search: e.target.value }); }

    get thematics () {
      const search = this.state.search.toLowerCase();
      return thematics.filter(({name}) => name.toLowerCase().indexOf(search) > -1);
    }

    render() {
      return (
        <React.Fragment>
          <Group>
            <Search value={this.state.search} onChange={this.onChange} after={null}/>  
            {this.thematics.length > 0 && this.thematics.map(thematic => <Cell key={thematic.id}>{thematic.name}</Cell>)}
            {this.thematics.length === 0 && <Footer>Ничего не найдено</Footer>}
          </Group>
        </React.Fragment>
      );
    }
  }

const Groups = props => (
    <Panel id={props.id}>
        <PanelHeader
            left={<PanelHeaderButton onClick={props.go} data-to="home">
                {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
            </PanelHeaderButton>}>
            Лекции
        </PanelHeader>
        <Group header={<Header mode="secondary">Загрузите лекции</Header>}>
          <File before={<Icon24Document />} controlSize="m">
            Выберете файл
          </File>
        </Group>
        <SimpleSearch/>
    </Panel>
)




Groups.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Groups



