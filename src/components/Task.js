import React, {Component} from 'react'
import { Header, Div, Group } from '@vkontakte/vkui'

class Task extends Component {
    state = {
        isOpen: this.props.defaultOpen
    }


    componentWillReceiveProps(nextProps) {
        if (nextProps.defaultOpen !== this.props.defaultOpen) this.setState({
            isOpen: nextProps.defaultOpen
        })
    }

    render() {
        const {task} = this.props
        const style = {width: '85%'};
       // const bodyTask = this.state.isOpen && <section>{task.text}</section>
        return (
            <div style={style}>
            {/* <div> 
                <h2>
                    {task.name}
                    <button onClick={this.handleClick}>
                        {this.state.isOpen ? 'Скрыть подробности' : 'Подробнее'}
                    </button>
                </h2>
            </div>
            <div>
                {bodyTask}
            </div> */}

            <Group>
					<Header>{task.name}</Header>
					<Div>{task.text}</Div>
			</Group>


          </div>
        )
    }
    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default Task