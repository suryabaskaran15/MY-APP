import React from "react";
import MainLogIn from "./MainLogIn"

class CreateNew extends React.Component {
    constructor() {
        super();
        this.state = ({
            usrId: undefined,
            password: undefined,
            email: undefined,
            phoneNo: undefined,
            createNew : true,
            flag: false,
            backbtnFlag : false
        });
    }
    created = async() => {
        await this.setState({
            usrId: document.getElementById('usrid').value,
            password: document.getElementById('passWord').value,
            email: document.getElementById('email').value,
            phoneNo: document.getElementById('phoneNo').value,
            flag: true
            })
            this.userDetail.push(this.state);
            console.log(this.userDetail);
    }
    userDetail = [];
    render() {
        return (
            <div>
            { this.state.createNew &&
                <div>
                <h1>Enter Your details</h1>
                <br />
                <label>User Id : </label>
                <input id="usrid" type={'number'} />
                <br />
                <label>Password : </label>
                <input id="passWord" type={'number'} />
                <br />
                <label>Email Id : </label>
                <input id="email" type={'text'} />
                <br />
                <label>Phone No : </label>
                <input id="phoneNo" type={'tel'} /> <br />
                <button onClick={this.created}>Create</button>
                <button onClick={
                    ()=>{
                        this.setState({
                            backbtnFlag : true,
                            createNew : false,
                            flag : false
                        });
                    }
                }>Back</button>
                </div>
                            }

                {this.state.flag &&
                 <>
                    <h1>Account created successfully.....!</h1>
                    <h3>
                    user Id : {this.state.usrId}
                    <br />
                    Password : {this.state.password}
                    <br />
                    Email Id : {this.state.email}
                    <br />
                    Phone No : {this.state.phoneNo}
                    </h3>
                </>
                }
                {
                    this.state.backbtnFlag &&
                    <MainLogIn />
                }
            </div>
        );
    }
}

export default CreateNew;