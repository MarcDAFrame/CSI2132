import * as React from 'react'
import * as style from '../style.scss';
import { BackButton } from 'app/components/BackButton';

interface Props {
}
interface State {
}

export class User extends React.Component<Props, State> {

    clickUpload(){
        console.log('TODO');
    }
    clickAll(){
        console.log('TODO');
    }
    clickAvailable(){
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
                <h1>Guest/Host Table</h1>
                <BackButton />
                <br></br>
                <button className={style.button} onClick={ this.clickAll }>Display all properties</button>
                <button className={style.button} onClick={ this.clickAvailable }>Display available properties</button>
                <br></br>

                <p style={{marginTop: 10}}>To upload a new listing fill in all fields and then press "Upload new property listing", note: propertyID must be unique</p>

                <button className={style.button} onClick={ this.clickUpload }>Upload new property listing</button>

                <div style={{margin: 10}}>
                    
                    <p style={{marginTop: 10}}>propertyID (int):</p> <input type="number"></input>
                    <p style={{marginTop: 10}}>hostID (int): </p> <input type="number"></input>
                    <p style={{marginTop: 10}}>accommodationType (varchar(255)): </p> <input type="text"></input>
                    <p style={{marginTop: 10}}> roomType (varchar(255)): </p> <input type="text"></input>
                    <p style={{marginTop: 10}}>maxGuests (int): </p> <input type="number"></input>
                    <p style={{marginTop: 10}}>numBathrooms (int): </p> <input type="number"></input>
                    <p style={{marginTop: 10}}>numBedrooms (int): </p> <input type="number"></input>
                    <p style={{marginTop: 10}}>numBeds (int): </p> <input type="number"></input>
                    <p style={{marginTop: 10}}>pricing (float): </p> <input type="number"></input>
                    <p style={{marginTop: 10}}>isOccupied (boolean): </p> <select>
                    <option>FALSE</option>
                    <option>TRUE</option>
                    </select>
                    <p style={{marginTop: 10}}>rules (varchar(255)): </p> <input type="text"></input>
                </div>

            </div>
        );
    }
}
