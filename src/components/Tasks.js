import React from 'react'
import { List, Cell,PanelHeader} from '@vkontakte/vkui'
import Task from './Task'

export default function Tasks({tasklist}) {
return(
<div>


    
                 {/* <PanelHeader>
                     Домашки
                 </PanelHeader> */}
                 <List>
                     {
                        tasklist.map((task, index) => (
                            <Cell
                                multiline
                                expandable
                                key={index}
                            >
                                {task.name}
                                
                                {task.text}
                            </Cell>
                        ))
                    }
                </List>
            </div>
)




    // const tasksElements = tasklist.map((task, index) =>
    //     // <li key = {task.id}>
    //     //     <Task task = {task}/>
    //     // </li>
    //     <Cell
    //              multiline
    //              expandable
    //              key={index}
    //             >
    //              {task.name}
    //          </Cell>
    // )
    // // const newArticleElements = articleElements.concat([{
    // //     id: 6,
    // //     text: "Собрание старост в 310 кабинете"
    // //   }])
    // return (
    //     // <ul>
    //     //     {tasksElements}
    //     // </ul>
    //     <List>
    //     {tasksElements}
    //     </List>
    // )
}

// class Tasks extends React.Component {
// 	render() {

//         let {
//             tasks
//         } = this.props

// 		return (
// 			<div>
//                 <PanelHeader>
//                     Домашки
//                 </PanelHeader>
//                 <List>
//                     {
//                         tasks.map((task, index) => (
//                             <Cell
//                                 multiline
//                                 expandable
//                                 key={index}
//                             >
//                                 {task.name}
//                             </Cell>
//                         ))
//                     }
//                 </List>
//             </div>
// 		);
// 	}
// }

// export default Tasks;
