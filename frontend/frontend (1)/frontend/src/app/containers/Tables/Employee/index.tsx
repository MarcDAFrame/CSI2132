import * as React from 'react'
import * as style from '../style.scss';
import { BackButton } from 'app/components/BackButton';

interface Props {
}
interface State {
}

export class Employee extends React.Component<Props, State> {

    clickAll(){
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
                <h1>Employee Table</h1>
                <BackButton />
                <br></br>
                <button className={style.button} onClick={ this.clickAll }>Display all properties</button>
            </div>
        );
    }
}
