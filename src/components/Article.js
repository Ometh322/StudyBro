import React, {Component} from 'react'

class Article extends Component {
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
                    <button onClick={this.handleClick}>
                        {this.state.isOpen ? 'Скрыть подробности' : 'Подробнее'}
                    </button>
                </h2>
            </div>
            <div>
                {bodyArtticle}
                <h6>
                    Дата публикации: {article.date}
                </h6>
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

export default Article