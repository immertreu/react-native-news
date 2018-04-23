import { default as React, Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    WebView
} from 'react-native';

import Header from './header';
import Button from 'react-native-button';
import GiftedSpinner from 'react-native-gifted-spinner';

export default class Page extends Component {
    constructor() {
        super();
        this.onNavigationStateChange = this.onNavigationStateChange.bind(this);
    }

    onNavigationStateChange(navState) {
        if(!navState.loading){
            this.setState({
                isLoading: false,
                pageTitle: navState.title
            });
        }
    }

    render(){
        return (
            <View style={styles.container}>
                <Header navigator={this.props.navigator} title="Page"/>
                <View style={styles.webview_body}>
                    <WebView
                        source={{ url: this.props.url}}
                        onNavigationStateChange={this.onNavigationStateChange}

                    />
                </View>
            </View>
        );
    }
}

let styles = StyleSheet.create({
    container: {
        flex: 1
    },
    webview_header: {
        paddingLeft: 10,
        backgroundColor: '#FF6600',
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    header_item: {
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: 'center'
    },
    webview_body: {
        flex: 9
    },
    button: {
        textAlign: 'left',
        color: '#FFF'
    },
    page_title: {
        color: '#FFF'
    },
    spinner: {

        alignItems: 'flex-end'
    }
});