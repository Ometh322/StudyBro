import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS, Panel, PanelHeader, PanelHeaderButton, Group, Search, Header, Cell, Footer, CellButton} from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24Add from '@vkontakte/icons/dist/24/add';
import '@vkontakte/vkui/dist/vkui.css';

const osName = platform();

// Список домашних заданий
const thematics = [
  { id: 1, name: "Алгебра" },
  { id: 2, name: "Базы данных" },
  { id: 3, name: "Введение в экономику" },
  { id: 4, name: "Дискретная математика" },
  { id: 5, name: "Дифференциальные уравнения" },
  { id: 6, name: "Информатика и программирование" },
  { id: 7, name: "История" },
  { id: 8, name: "Компьютерная графика" },
  { id: 9, name: "Компьютерные сети" },
  { id: 10, name: "Математические основы искусственного интеллекта" },
  { id: 11, name: "Математический анализ" },
  { id: 12, name: "Методы вычислений" },
  { id: 13, name: "Операционные системы" },
  { id: 14, name: "Педагокика и психология" },
  { id: 15, name: "Прикладная универсальная алгебра" },
  { id: 16, name: "Русский язык и культура речи" },
  { id: 17, name: "Системы и сети пердачи информации" },
  { id: 18, name: "Системы искуссвтенного интеллекта" },
  { id: 19, name: "Структуры данных и алгоритмы" },
  { id: 20, name: "Теория графов" },
  { id: 21, name: "Технологии программирования" },
  { id: 22, name: "Физика" },
  { id: 23, name: "Физические основы построения ЭВМ" },
  { id: 24, name: "Философия" },
  { id: 25, name: "Формальные языки и грамматики" },
  { id: 26, name: "Языки программирования" },
];

// Поиск по предметам
class SimpleSearch extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) { this.setState({ search: e.target.value }); }

  get thematics() {
    const search = this.state.search.toLowerCase();
    return thematics.filter(({ name }) => name.toLowerCase().indexOf(search) > -1);
  }

  render() {
    return (
      <React.Fragment>
        <Group>
          <Search value={this.state.search} onChange={this.onChange} after={null} />
          {this.thematics.length > 0 && this.thematics.map(thematic => <Cell key={thematic.id}>{thematic.name}</Cell>)}
          {this.thematics.length === 0 && <Footer>Ничего не найдено</Footer>}
        </Group>
      </React.Fragment>
    );
  }
}

const HomeTasks = props => (
  <Panel id={props.id}>
    <PanelHeader
      left={<PanelHeaderButton onClick={props.go} data-to="home">
        {osName === IOS ? <Icon28ChevronBack /> : <Icon24Back />}
        Назад
      </PanelHeaderButton>}
    >
      Домашние задания
    </PanelHeader>
    <Group header={<Header mode="secondary">Новые домашние задания</Header>}>
      <CellButton centered before={<Icon24Add />} onClick={props.go} data-to="newHomeTask">Добавить домашнее задание</CellButton>
    </Group>
    <SimpleSearch />
  </Panel>
)

HomeTasks.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
};

export default HomeTasks