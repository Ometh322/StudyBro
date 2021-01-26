import React, {Component} from 'react'
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import IconDropDown from '@vkontakte/icons/dist/12/dropdown';

class Variant extends Component {
    render() {
        const {variant} = this.props
        const style = {width: '85%'};
        return (
          <div style={style}>
            <div> 
                <h2>
                    {variant.title}
                </h2>
            </div>
            <div>
                <h6>
                    Проголосовали: {variant.count}
                </h6>
            </div>
          </div>
        )
    }
}

export default Variant