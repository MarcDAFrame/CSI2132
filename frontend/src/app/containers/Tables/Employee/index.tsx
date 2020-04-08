import * as React from 'react'
import * as style from '../style.scss';
import { BackButton } from 'app/components/BackButton';
import { AllPropertyTable } from 'app/components/AllPropertyTable';

interface Props {
}
interface State {
    res: {
        message: string,
        ok: boolean,
        data: []
    }
}

export class Employee extends React.Component<Props, State> {
    constructor(props: Props, context: any) {
        super(props, context);

        this.state = {
            res: {
                ok: true,
                message: "",
                data: []
            }
        };
    }

    onClick = async () => {
        console.log('TODO');
        const response = await fetch("http://localhost:1234/getProperties", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        console.log(response)
        const d = await response.json()
        console.log(d)
        this.setState({res: d})
    }
    render() {
        return (
            <div style={{margin: 10}}
                className={style.normal}
            >
                <h1>Employee Table</h1>
                <BackButton />
                <br></br>
                <button className={style.button} onClick={ this.onClick }>Display all properties</button>
                <AllPropertyTable rows={this.state.res.data} />
            </div>
        );
    }
}
