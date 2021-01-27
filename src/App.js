import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
//import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';
import Home from './panels/Home';
import Persik from './panels/Artem';
import Student from './panels/Student';
import SessionSchedule from './panels/SessionSchedule';
import HomeTasks from './panels/HomeTasks';
import NewHomeTask from './panels/NewHomeTask';
import Lections from './panels/Lections';
import NewLection from './panels/NewLection';
import Alena from './panels/Alena';
import Golos from './panels/Golos';
import Groups from './panels/Groups';
import StudentsList from './panels/StudentsList';
import Teachers from './panels/Teachers';
import AppInfo from './panels/AppInfo';
import Developers from './panels/Developers';

const App = () => {
	const [activePanel, setActivePanel] = useState('home');
	const [fetchedUser, setUser] = useState(null);

	useEffect(() => {
		bridge.subscribe(({ detail: { type, data } }) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
		}
		fetchData();
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		<View activePanel={activePanel}>
			<Home id='home' fetchedUser={fetchedUser} go={go} />
			<Persik id='persik' go={go} />
			<Student id='student' go={go} />
			<SessionSchedule id='sessionschedule' go={go} />
			<HomeTasks id='HomeTasks' go={go} />
			<NewHomeTask id='newHomeTask' go={go} />
			<Lections id='lections' go={go} />
			<NewLection id='newLection' go={go} />
			<Alena id='alena' go={go} />
			<Golos id='golos' go={go} />
			<Groups id='groups' go={go} />
			<StudentsList id='studentsList' go={go} />
			<Teachers id='teachers' go={go} />
			<AppInfo id='appinfo' go={go} />
			<Developers id='developers' go={go} />
		</View>
	);
}

export default App;