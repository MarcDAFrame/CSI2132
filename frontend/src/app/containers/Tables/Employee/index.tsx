import * as React from 'react'
import * as style from '../style.scss';
import { BackButton } from 'app/components/BackButton';

interface Props {
}
interface State {
}

export class Employee extends React.Component<Props, State> {

    constructor(props: Props, context: any) {
        super(props, context);

        this.state = {
        };
    }
    render() {
        return (
            <div
                className={style.normal}
            >
                <h1>Employee Table</h1>
                <BackButton />
            </div>
        );
    }
}
