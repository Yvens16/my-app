import React from 'react'
import LoginView from './LoginView'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.ui = this.props.firebaseClass.getFirebaseUi();
    }
    componentDidMount() {
      const { firebase } = this.props.firebaseClass;
        this.ui.start('#firebaseui-auth-container', {
            signInOptions: [
                firebase.auth.EmailAuthProvider.PROVIDER_ID
            ],
            // Other config options...
        });
    }
    render() {
        return (
        <>
            <LoginView />
            {/* {this.ui && <div id='firebaseui-auth-container'></div> } */}
        </>
        )
    }
}

export default Login