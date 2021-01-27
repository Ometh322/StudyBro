import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { platform, IOS, Panel, PanelHeader, PanelHeaderButton, Group, Search, Header, Textarea, File, Cell, Footer } from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24Document from '@vkontakte/icons/dist/24/document';
import Icon24Home from '@vkontakte/icons/dist/24/home';
import Icon16Add from '@vkontakte/icons/dist/16/add';
import '@vkontakte/vkui/dist/vkui.css';

const osName = platform();

// Список студентов
let students = [
  { id: 1, name: "Акчурин Артем" },
  { id: 2, name: "Андриянова Анастасия" },
  { id: 3, name: "Анохин Данила" },
  { id: 4, name: "Бахтин Егор" },
  { id: 5, name: "Гношева Алена" },
  { id: 6, name: "Горбачева Марина" },
  { id: 7, name: "Григорьев Максим" },
  { id: 8, name: "Громов Никита" },
  { id: 9, name: "Климов Алексей" },
  { id: 10, name: "Кобзырева Марина" },
  { id: 11, name: "Копытов Михаил" },
  { id: 12, name: "Кочемазов Василий" },
  { id: 13, name: "Лалов Сергей" },
  { id: 14, name: "Ларцев Александр" },
  { id: 15, name: "Морозов Андрей" },
  { id: 16, name: "Николаев Иван" },
  { id: 17, name: "Остроухов Даниил" },
  { id: 18, name: "Пантелеев Дмитрий" },
  { id: 19, name: "Пелипец Владислав" },
  { id: 20, name: "Растегаева Алина" },
  { id: 21, name: "Родичкин Павел" },
  { id: 22, name: "Слепов Илья" },
  { id: 23, name: "Филатова Ольга" },
  { id: 24, name: "Хмыров Артем" },
  { id: 25, name: "Шелухин Андрей" },
  { id: 26, name: "Юдин Павел" },
];

class SimpleSearch extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) { this.setState({ search: e.target.value }); }

  get students() {
    const search = this.state.search.toLowerCase();
    return students.filter(({ name }) => name.toLowerCase().indexOf(search) > -1);
  }
  render() {
    return (
      <React.Fragment>
        <Group>
          <Search value={this.state.search} onChange={this.onChange} after={null} />
          {this.students.length > 0 && this.students.map(students => <Cell key={students.id}>{students.name}</Cell>)}
          {this.students.length === 0 && <Footer>Студент не найден</Footer>}
        </Group>
      </React.Fragment>
    );
  }
}

class StudentAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      student: ''
    }
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) { this.setState({ student: e.target.value }); }
  addStudent(nameIn) {
    let inf = {
      id: students.length + 1,
      name: nameIn
    }
    students = students.concat([inf])
    console.log(students)
  }

  submitHandler(e) {
    e.preventDefault()
  }

  get students() {
    return students;
  }

  render() {
    return (
      <React.Fragment>
        <Group>
          <form style={{ marginBottom: '1rem' }}>
            <Textarea size='s'
              value={this.state.student} after={null} onChange={this.onChange} />
          </form>
            <PanelHeaderButton onMouseUp={this.addStudent(this.state.student), console.log("Тыкнули на кнопку")} > {<Icon16Add />} Добавить студента</PanelHeaderButton>
            {/* {this.students.map(students => <Cell key={students.id}>{students.name}</Cell>)} */}
        </Group>
      </React.Fragment>
    );
  }
}

const StudentsList = props => (
  <Panel id={props.id}>
    <PanelHeader
      left={<PanelHeaderButton onClick={props.go} data-to="groups">
        {osName === IOS ? <Icon28ChevronBack /> : <Icon24Back />}
        Назад
      </PanelHeaderButton>}
      right={<PanelHeaderButton onClick={props.go} data-to="home">
        {<Icon24Home />}
        На стартовую страницу
      </PanelHeaderButton>}
    >
      Список студентов группы
    </PanelHeader>
    <Group header={<Header mode="secondary">Загрузить список студентов</Header>}>
      <File before={<Icon24Document />} controlSize="m">
        Выберите файл
      </File>
    </Group>
    <StudentAdd />
    <SimpleSearch />
  </Panel>
)
StudentsList.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
};

export default StudentsList