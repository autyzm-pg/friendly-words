import React from 'react';
import {View, Text} from 'react-native'
import {Layout} from "./Game";

const SCREEN_TIMEOUT = 4000;
const NEXT_SCREEN = "Home";

class SplashScreen extends React.Component {
	constructor(props){
		super(props);
		this.timeoutId = null;
	}

	componentDidMount(){
		const {navigation} = this.props;
		this.timeoutId = setTimeout(() => navigation.navigate(NEXT_SCREEN), SCREEN_TIMEOUT)
	}

	componentWillUnmount(){
		clearTimeout(this.timeoutId);
	}

	render(){
		return <Layout>
            <Text>splash screen</Text>
        </Layout>;

    }
}

export default SplashScreen;