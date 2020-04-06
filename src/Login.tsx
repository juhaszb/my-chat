import React, { Component, ChangeEvent } from 'react';
import { proxy } from './chat.d';
import { TextInput } from './TextInput';


/*

<button type="button" onClick={ () => this.onClick() }>
{ this.state.register ? "Register" : "Login" }
</button>
*/
//this.setState({ email: e.target.value})
export class Login extends Component {
    render() {
        return (
            <div className="login">
                <img src="logo512.png" width="256" />

                <TextInput type="email" placeholder="Email (someone@example.com)" value={this.state.email} onChange={e => this.email(e)} autofocus={true} onEnter={() => this.onClick()} />
                <TextInput type="password" placeholder="Password" value={this.state.password} onChange={e => this.setState({ password: e })} onEnter={() => this.onClick()} />

                {this.state.register &&
                    <TextInput type="text" ref={this.textInput} placeholder="Display Name (Agent Smith)" value={this.state.displayName}
                        onChange={e => this.setState({ displayName: e })} onEnter={() => this.onClick()} />}


                <button type="button" onClick={() => this.onClick()}>
                    {this.state.register ? "Register" : "Login"}
                </button>

                <p>{this.state.register ? "Switch back to " : "Have no account yet? Go and "}
                    <a href="" onClick={e => { e.preventDefault(); this.setState({ register: !this.state.register }); }}>
                        {this.state.register ? "Login" : "Register"}
                    </a>
                </p>

                <button type="button" onClick={() => this.onClick()}>Login</button>
                <a href="https://www.google.hu/search?q=privacy">Privacy Policy</a>

            </div>);
    }
    state = { email: "", password: "", displayName: "", register: false };

    textInput = React.createRef<TextInput>();


    email(e: string) {
        if (this.state.register)
            if (e === "BI3ULX") {
                this.textInput.current?.setState({ value: "Balázs" });
                this.setState({ ...this.state, displayName: "Balázs" });
            }
        this.setState({ email: e });
    }

    onClick() {

        if (this.state.register)
            proxy.sendPacket({
                type: "register", email: this.state.email, password: this.state.password,
                displayName: this.state.displayName, staySignedIn: false
            });
        else
            proxy.sendPacket({
                type: "login", email: this.state.email, password: this.state.password,
                staySignedIn: false
            });
    }


}