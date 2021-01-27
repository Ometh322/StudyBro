import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS, Panel, PanelHeader, PanelHeaderButton, Group, Header, File, Select, Div, ScreenSpinner, View, CellButton, Input } from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24Document from '@vkontakte/icons/dist/24/document';
import Icon24Home from '@vkontakte/icons/dist/24/home';
import './Student.css';

const osName = platform();
class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popout: null
    }
  }

  onClick() {
    this.setState({ popout: <ScreenSpinner /> });
    setTimeout(() => { this.setState({ popout: null }) }, 2000);
  }

  render() {
    return (
      <View popout={this.state.popout} activePanel="spinner">
        <Panel id="spinner">
          <Group header={<Header mode="secondary">Загрузите домашние задания</Header>}>
            <Div>
              <File before={<Icon24Document />} controlSize="m">
                Выберите файл
              </File>
            </Div>
            <Div>
              <Input type="text" defaultValue="Введите ФИО" />
            </Div>
            <Div>
              <Select placeholder="Выберите предмет" >
                <option value="1">Алгебра</option>
                <option value="2">Базы данных</option>
                <option value="3">Введение в экономику</option>
                <option value="4">Дискретная математика</option>
                <option value="5">Дифференциальные уравнения</option>
                <option value="6">Информатика и программирование</option>
                <option value="7">История</option>
                <option value="8">Компьютерная графика</option>
                <option value="9">Компьютерные сети</option>
                <option value="10">Математический анализ</option>
                <option value="11">Методы вычислений</option>
                <option value="12">Операционные системы</option>
                <option value="13">Педагокика и психология</option>
                <option value="14">Теория графов</option>
                <option value="15">Физика</option>
                <option value="16">Философия</option>
              </Select>
            </Div>
            <CellButton onClick={this.onClick.bind(this)}>Загрузить</CellButton>
          </Group>
        </Panel>
      </View>
    )
  }
}

const NewHomeTask = props => (
  <Panel id={props.id}>
    <PanelHeader
      left={<PanelHeaderButton onClick={props.go} data-to="HomeTasks">
        {osName === IOS ? <Icon28ChevronBack /> : <Icon24Back />}
				Назад
			</PanelHeaderButton>}
      right={<PanelHeaderButton onClick={props.go} data-to="home">
        {<Icon24Home />}
        На стартовую страницу
      </PanelHeaderButton>}
    >
      Новые домашние задания
		</PanelHeader>
    <Loading />
  </Panel>
);

NewHomeTask.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
};

export default NewHomeTask