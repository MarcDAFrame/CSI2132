import * as React from 'react'
import * as style from '../style.scss';
import { BackButton } from 'app/components/BackButton';

interface Props {
}
interface State {
    hostID: number
    accommodationType: string
    roomType: string
    maxGuests: string
    numBathrooms: string
    numBedrooms: string
    numBeds: string
    pricing: string
    isOccupied: string
    rules: string
    res: {
        message: string,
        ok: boolean,
        data: []
    }
}

export class User extends React.Component<Props, State> {




    constructor(props: Props, context: any) {
        super(props, context);

        this.state = {
            hostID: 0,
            accommodationType: "",
            roomType: "",
            maxGuests: "",
            numBathrooms: "",
            numBedrooms: "",
            numBeds: "",
            pricing: "",
            isOccupied: "",
            rules: "",
            res: {
                ok: true,
                message: "",
                data: []
            }
        };
    }

    clickUpload() {
        console.log('TODO');
        /**
        "accommodationType" : fake.text()[0:100],
        "roomType" : fake.text()[0:50],
        "maxGuests" : randomNum(2, 15),
        "numBathrooms" : randomNum(1, 5),
        "numBedrooms" : randomNum(1, 10),
        "numBeds" : randomNum(1, 20),
        "pricing" : randomNum(80, 550),
        "isOccupied" : randomPick([True, False]),
        "rules" : fake.text()[0:150],
         */
        const obj = {...this.state}

    }
    clickAll = async () => {
        const response = await fetch("http://localhost:1234/getProperties", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        console.log(response)
        const d = await response.json()
        console.log(d)
        this.setState({ res: d })
    }

    clickAvailable = async () => {
        const response = await fetch("http://localhost:1234/getAvailableProperties", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        console.log(response)
        const d = await response.json()
        console.log(d)
        this.setState({ res: d })
    }
    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value} as any)
    }
    render() {
        return (
            <div style={{ margin: 10 }}
                className={style.normal}
            >
                <h1>Guest/Host Table</h1>
                <BackButton />
                <br></br>
                <button className={style.button} onClick={this.clickAll}>Display all properties</button>
                <button className={style.button} onClick={this.clickAvailable}>Display available properties</button>
                <br></br>

                <p style={{ marginTop: 10 }}>To upload a new listing fill in all fields and then press "Upload new property listing", note: propertyID must be unique</p>

                <button className={style.button} onClick={this.clickUpload}>Upload new property listing</button>

                <div style={{ margin: 10 }}>

                    {/* <p style={{ marginTop: 10 }}>propertyID (int):</p> <input name="" type="number"></input> */}
                    <p style={{ marginTop: 10 }}>hostID (int): </p> <input name="hostID" onChange={this.onChange} value={this.state.hostID} type="number"></input>
                    <p style={{ marginTop: 10 }}>accommodationType (varchar(255)): </p> <input type="text"></input>
                    <p style={{ marginTop: 10 }}> roomType (varchar(255)): </p> <input type="text"></input>
                    <p style={{ marginTop: 10 }}>maxGuests (int): </p> <input type="number"></input>
                    <p style={{ marginTop: 10 }}>numBathrooms (int): </p> <input type="number"></input>
                    <p style={{ marginTop: 10 }}>numBedrooms (int): </p> <input type="number"></input>
                    <p style={{ marginTop: 10 }}>numBeds (int): </p> <input type="number"></input>
                    <p style={{ marginTop: 10 }}>pricing (float): </p> <input type="number"></input>
                    <p style={{ marginTop: 10 }}>isOccupied (boolean): </p> <select>
                        <option>FALSE</option>
                        <option>TRUE</option>
                    </select>
                    <p style={{ marginTop: 10 }}>rules (varchar(255)): </p> <input type="text"></input>
                </div>

            </div>
        );
    }
}
