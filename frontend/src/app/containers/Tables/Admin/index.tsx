import * as React from 'react'
import * as style from '../style.scss';
import { BackButton } from 'app/components/BackButton';

interface Props {
}
interface State {
}

export class Admin extends React.Component<Props, State> {

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
                <h1>Admin Table</h1>
                <BackButton />
            </div>
        );
    }
}
