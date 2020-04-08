import * as React from 'react'
import * as style from '../style.scss';
import { BackButton } from 'app/components/BackButton';
import { AllPropertyTable } from 'app/components/AllPropertyTable';

interface Props {
}
interface State {
    form: {
        hostID: number
        accommodationType: string
        roomType: string
        maxGuests: number
        numBathrooms: number
        numBedrooms: number
        numBeds: number
        pricing: number
        isOccupied: string
        rules: string
    }
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
            form: {
                hostID: 0,
                accommodationType: "",
                roomType: "",
                maxGuests: 0,
                numBathrooms: 0,
                numBedrooms: 0,
                numBeds: 0,
                pricing: 0,
                isOccupied: "false",
                rules: "",
            },
            res: {
                ok: true,
                message: "",
                data: []
            }
        };
    }

    clickUpload = async () => {
        console.log('TODO');
        const obj = {
            ...this.state.form,
            isOccupied: this.state.form.isOccupied == "true"
        }
        console.log(obj)

        const response = await fetch("http://localhost:1234/uploadProperty", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'  
            },
            body: JSON.stringify(obj)
        });
        console.log(response)
        const d = await response.json()
        console.log(d)
        this.setState({ res: d })

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
        this.state.form[e.target.name] = e.target.value
        this.setState({ form: this.state.form } as any)
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
                {/* {JSON.stringify(this.state.res.data.slice(0, 10))} */}
                <AllPropertyTable rows={this.state.res.data}/>
                <p style={{ marginTop: 10 }}>To upload a new listing fill in all fields and then press "Upload new property listing", note: propertyID must be unique</p>

                <button className={style.button} onClick={this.clickUpload}>Upload new property listing</button>

                <div style={{ margin: 10 }}>

                    {/* <p style={{ marginTop: 10 }}>propertyID (int):</p> <input name="" type="number"></input> */}
                    <p style={{ marginTop: 10 }}>hostID (int): </p> <input name="hostID" onChange={this.onChange} value={this.state.form.hostID} type="number"></input>
                    <p style={{ marginTop: 10 }}>accommodationType (varchar(255)): </p> <input name="accommodationType" onChange={this.onChange} value={this.state.form.accommodationType} type="text"></input>
                    <p style={{ marginTop: 10 }}>roomType (varchar(255)): </p> <input name="roomType" onChange={this.onChange} value={this.state.form.roomType} type="text"></input>
                    <p style={{ marginTop: 10 }}>maxGuests (int): </p> <input name="maxGuests" onChange={this.onChange} value={this.state.form.maxGuests} type="number"></input>
                    <p style={{ marginTop: 10 }}>numBathrooms (int): </p> <input name="numBathrooms" onChange={this.onChange} value={this.state.form.numBathrooms} type="number"></input>
                    <p style={{ marginTop: 10 }}>numBedrooms (int): </p> <input name="numBedrooms" onChange={this.onChange} value={this.state.form.numBedrooms} type="number"></input>
                    <p style={{ marginTop: 10 }}>numBeds (int): </p> <input name="numBeds" onChange={this.onChange} value={this.state.form.numBeds} type="number"></input>
                    <p style={{ marginTop: 10 }}>pricing (float): </p> <input name="pricing" onChange={this.onChange} value={this.state.form.pricing} type="number"></input>
                    <p style={{ marginTop: 10 }}>isOccupied (boolean): </p> <select name="isOccupied" onChange={this.onChange} value={this.state.form.isOccupied}>
                        <option value={"false"}>FALSE</option>
                        <option value={"true"}>TRUE</option>
                    </select>
                    <p style={{ marginTop: 10 }}>rules (varchar(255)): </p> <input name="rules" onChange={this.onChange} value={this.state.form.rules} type="text"></input>
                </div>

            </div>
        );
    }
}
