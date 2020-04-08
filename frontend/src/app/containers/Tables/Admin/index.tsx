import * as React from 'react'
import * as style from '../style.scss';
import { BackButton } from 'app/components/BackButton';

interface Props {
}
interface State {
    statement: string
    res: {
        message: string,
        ok: boolean,
        data: []
    }
}

export class Admin extends React.Component<Props, State> {
    constructor(props: Props, context: any) {
        super(props, context);

        this.state = {
            statement: "",
            res: {
                ok: true,
                message: "",
                data: []
            }
        };
    }

    onClick = async () => {
        console.log('TODO');
        const response = await fetch("http://localhost:1234/admin/runSQL", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                statement: this.state.statement,
            })
        });
        console.log(response)
        const d = await response.json()
        console.log(d)
        this.setState({res: d})
    }

    onChange = (e) => {
        this.setState({statement: e.target.value})
    }

    render() {
        return (
            <div style={{ margin: 10 }}
                className={style.normal}
            >
                <h1>Admin Table</h1>
                <BackButton />
                <br></br>
                <p style={{ marginTop: 10 }}>Enter SQL commands here:</p>
                <button className={style.button} onClick={this.onClick}>Run query</button>
                <input type="text" style={{ width: 700 }} value={this.state.statement} onChange={this.onChange}></input>
                <span style={{color: "green", fontSize: "18px"}}>
                    {JSON.stringify(this.state.res.data)}
                </span>
                <span style={{color: "red", fontSize: "24px"}}>
                    {this.state.res.message}
                </span>
            </div>
        );
    }
}
