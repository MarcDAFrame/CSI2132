import * as React from 'react'
import * as style from '../style.scss';
import { BackButton } from 'app/components/BackButton';

interface Props {
}
interface State {
}

export class Admin extends React.Component<Props, State> {

    clickRun(){
        console.log('TODO');
    }

    constructor(props: Props, context: any) {
        super(props, context);

        this.state = {
        };
    }
    render() {
        return (
            <div style={{margin: 10}}
                className={style.normal}
            >
                <h1>Admin Table</h1>
                <BackButton />
                <br></br>
                <p style={{marginTop: 10}}>Enter SQL commands here:</p>
                <button className={style.button} onClick={ this.clickRun }>Run query</button>
                <input type="text" style={{width: 700}}></input>
            </div>
        );
    }
}
