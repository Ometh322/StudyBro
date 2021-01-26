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
// Список лекционных предметов
let students = [
    {id: 1, name: "Акчурин Артем"},
    {id: 2, name: "Андриянова Анастасия"},
    {id: 3, name: "Анохин Данила"},
    {id: 4, name: "Бахтин Егор"},
    {id: 5, name: "Гношева Алена"},
    {id: 6, name: "Горбачева Марина"},
    {id: 7, name: "Григорьев Максим"},
    {id: 8, name: "Громов Никита"},
    {id: 9, name: "Климов Алексей"},
    {id: 10, name: "Кобзырева Марина"},
    {id: 11, name: "Копытов Михаил"},
    {id: 12, name: "Кочемазов Василий"},
    {id: 13, name: "Лалов Сергей"},
    {id: 14, name: "Ларцев Александр"},
    {id: 15, name: "Морозов Андрей"},
    {id: 16, name: "Николаев Иван"},
    {id: 17, name: "Остроухов Даниил"},
    {id: 18, name: "Пантелеев Дмитрий"},
    {id: 19, name: "Пелипец Владислав"},
    {id: 20, name: "Растегаева Алина"},
    {id: 21, name: "Родичкин Павел"},
    {id: 22, name: "Слепов Илья"},
    {id: 23, name: "Филатова Ольга"},
    {id: 24, name: "Хмыров Артем"},
    {id: 25, name: "Шелухин Андрей"},
    {id: 26, name: "Юдин Павел"},
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

    get students () {
      const search = this.state.search.toLowerCase();
      return students.filter(({name}) => name.toLowerCase().indexOf(search) > -1);
    }

    render() {
      return (
        <React.Fragment>
          <Group>
            <Search value={this.state.search} onChange={this.onChange} after={null}/>  
            {this.students.length > 0 && this.students.map(students => <Cell key={students.id}>{students.name}</Cell>)}
            {this.students.length === 0 && <Footer>Студент не найден</Footer>}
          </Group>
        </React.Fragment>
      );
    }
  }

  const StudentsList = props => (
    <Panel id={props.id}>
        <PanelHeader
            left={<PanelHeaderButton onClick={props.go} data-to="groups">
                {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
            </PanelHeaderButton>}>
            Список студентов группы
        </PanelHeader>
        <Group header={<Header mode="secondary">Загрузить список студентов</Header>}> 
          <File before={<Icon24Document />} controlSize="m">
            Выберите файл
          </File>
          
        </Group>
        <SimpleSearch/>
    </Panel>
)




StudentsList.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default StudentsList
