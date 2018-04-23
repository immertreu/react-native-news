import { default as React, Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import Button from 'react-native-button';
import styles from '../styles/styles';

export default class Header extends Component {
    constructor() {
        super();
        this.back = this.back.bind(this);
    }

    back() {
        this.props.navigator.pop();
    }

    render() {
        return (
            <View style={styles.header}>
                <View style={styles.header_item}>
                    <Button style={styles.button} onPress={this.back}>Back</Button>
                </View>
                <View style={styles.header_item}>
                    <Text style={styles.page_title}>{this.props.title}</Text>
                </View>
            </View>
        );
    }
};

//<View style={[styles.header_item, styles.spinner]}>
//    { this.state.isLoading && <GiftedSpinner /> }
//</View>