import React, { PureComponent } from 'react';
import '../../../../scss/component/catalogItem.scss';
import CanvasTool from '../canvasTool';

import Upload from '../../../../img/cloud-backup-up-arrow.svg';
import Text from '../../../../img/text.svg';
import Shapes from '../../../../img/shapes.svg';
import ClipArts from '../../../../img/art.svg';
import Emojis from '../../../../img/emojis.svg';
import Draw from '../../../../img/draw.svg';

class ToolImages extends PureComponent {
    
    render() {
        return (
            <div className="tools-canvas-container">
                <CanvasTool source={Upload} name={'UPLOAD'} height={24} />
                <div onClick={this.props.addText}><CanvasTool source={Text} name={'TEXT'} height={24} /></div>
                <div ><CanvasTool source={Shapes} name={'SHAPES'} height={24} /></div>
                <CanvasTool source={ClipArts} name={'CLIPARTS'} height={24} />
                <CanvasTool source={Emojis} name={'EMOJIS'} height={24} />
                <CanvasTool source={Draw} name={'DRAW'} height={24} />
            </div>

        );
    }
}

export default ToolImages;