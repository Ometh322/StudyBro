import React, {Component} from 'react'
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import IconDropDown from '@vkontakte/icons/dist/12/dropdown';

class TeachArticle extends Component {
    state = {
        isOpen: this.props.defaultOpen
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.defaultOpen !== this.props.defaultOpen) this.setState({
            isOpen: nextProps.defaultOpen
        })
    }

    render() {
        const {article} = this.props
        const style = {width: '85%'};
        const bodyArtticle = this.state.isOpen && <section>{article.text}</section>
        return (
          <div style={style}>
            <div> 
                <h2>
                    {article.title}
                    <Button before={<IconDropDown/>} mode="secondary" onClick={this.handleClick}>
                        {this.state.isOpen ? 'Скрыть преподавателя' : 'Показать преподавателя'}
                        </Button>
                </h2>
            </div>
            <div>
                {bodyArtticle}
            </div>
          </div>
        )
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default TeachArticle