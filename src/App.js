import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Student from './panels/Student';
import Alena from './panels/Alena';
import HomeTasks from './panels/HomeTasks';
import Persik from './panels/Artem';
import Group from './panels/Group';
import AppInfo from './panels/AppInfo';
import Developers from './panels/Developers';

const App = () => {
	const [activePanel, setActivePanel] = useState('home');
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);
	//"deploy": "vk-miniapps-deploy"
	//npm install

	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			//setPopout(null);
		}
		fetchData();
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		<View activePanel={activePanel}>
			<Home id='home' fetchedUser={fetchedUser} go={go} />
			<Student id='student' go={go} />
			<Alena id='alena' go={go} />
			<HomeTasks id='HomeTasks' go={go} />
			<Persik id='persik' go={go} />
			<Group id='group' go={go}/>
			<AppInfo id='appinfo' go={go}/>
			<Developers id='developers' go={go}/>
		</View>
	);
}

export default App;