import React from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeader, Button, Group, Cell, Div, Avatar, Counter,usePlatform, ModalRoot, ModalPage, ModalPageHeader, PanelHeaderButton, IOS,Separator, MiniInfoCell, View } from '@vkontakte/vkui';
import {
	Icon28NewsfeedOutline,
	Icon28ListOutline,
	Icon28Users3Outline,
	Icon28PollSquareOutline,
	Icon28SchoolOutline,
	Icon28HomeOutline,
	Icon24Dismiss,
	Icon20CommunityName,
	Icon20Info
} from '@vkontakte/icons';
function Home(props) {
	const platform = usePlatform();
	const [activeModal, setActiveModal] = React.useState(null);
	
	const handleExtendedInfoClick = () => {
	  setActiveModal('extended_info');
	};
  
	const closeModal = () => {
	  setActiveModal(null);
	};
	//Всплывающие окно с информацией о приложении
	const modal = (
		    <ModalRoot activeModal={activeModal} onClose={closeModal}>
		      <ModalPage
		        header={
		          <ModalPageHeader
		           
		            right={platform === IOS && <PanelHeaderButton onClick={closeModal}><Icon24Dismiss /></PanelHeaderButton>}
		            noShadow
		          >
		            Подробнее
		          </ModalPageHeader>
		        }
		        id="extended_info"
		      >
		        <Separator style={{ marginBottom: 12 }} />
		
		        <MiniInfoCell
		          before={<Icon20CommunityName />}
		          textWrap="full"
		          textLevel="primary"
		        >
		          
					Приложение создано для помощи студентам и содержит в себе расписание, новости, домашние задания и т.д.
					Разработчики данного приложения не несут ответственности за выкладываемые пользователями материалы.
					Приложение находится в разработке.
		   		
		        </MiniInfoCell>
		
		        <div style={{ height: 24 }} />
		      </ModalPage>
		    </ModalRoot>
		  );
		
		 


return  (
	<View activePanel={props.id} modal={modal}>
	  <Panel id={props.id}>
	  <PanelHeader>StudyBro</PanelHeader>
	  {props.fetchedUser &&
			<Group title="User Data Fetched with VK Bridge">
				<Cell
					before={props.fetchedUser.photo_200 ? <Avatar src={props.fetchedUser.photo_200} /> : null}
					description={props.fetchedUser.city && props.fetchedUser.city.title ? props.fetchedUser.city.title : ''}
				>
					{`${props.fetchedUser.first_name} ${props.fetchedUser.last_name}`}
				</Cell>
			</Group>}

		<Group>
		
		<Div>
				<Div>
					<Button before={<Icon28NewsfeedOutline />} after={<Counter>2</Counter>} size="xl" mode="secondary" onClick={props.go} data-to="persik">
						Новости
					</Button>
				</Div>

				<Div>
					<Button before={<Icon28ListOutline />} size="xl" mode="secondary" onClick={props.go} data-to="student">
						Расписание занятий
					</Button>
				</Div>

				<Div>
					<Button before={<Icon28ListOutline />} size="xl" mode="secondary" onClick={props.go} data-to="sessionschedule">
						Расписание сессии
				  	</Button>
				</Div>

				<Div>
					<Button before={<Icon28HomeOutline />} size="xl" mode="secondary" onClick={props.go} data-to="HomeTasks">
						Домашние задания
				  	</Button>
				</Div>

				<Div>
					<Button before={<Icon28SchoolOutline />} size="xl" mode="secondary" onClick={props.go} data-to="lections">
						Лекции
				  	</Button>
				</Div>

				<Div>
					<Button before={<Icon28PollSquareOutline />} size="xl" mode="secondary" onClick={props.go} data-to="alena">
						Голосования
				  	</Button>
				</Div>

				<Div>
					<Button before={<Icon28Users3Outline />} size="xl" mode="secondary" onClick={props.go} data-to="groups">
						Информация об учебных группах
				  	</Button>
				</Div>


				<Div>
					<Button before={<Icon28UsersOutline />} size="xl" mode="secondary" onClick={go} data-to="teachers">
						Список преподавателей
				  	</Button>
				</Div>

				<Div>
					<Button before={<Icon28InfoOutline />} size="xl" mode="secondary" onClick={go} data-to="appinfo">
						О приложении
				  	</Button>
				</Div>

			</Div>

		  <MiniInfoCell
			before={<Icon20Info  />}
			mode="more"
			onClick={handleExtendedInfoClick}>
			О приложении
		  </MiniInfoCell>

		</Group>
	  </Panel>
	</View>
  );
}


// Home.propTypes = {
// 	id: PropTypes.string.isRequired,
// 	go: PropTypes.func.isRequired,
// 	fetchedUser: PropTypes.shape({
// 		photo_200: PropTypes.string,
// 		first_name: PropTypes.string,
// 		last_name: PropTypes.string,
// 		city: PropTypes.shape({
// 			title: PropTypes.string,
// 		}),
// 	}),
// };

export default Home