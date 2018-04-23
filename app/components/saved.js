import { default as React, Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    WebView
} from 'react-native';

import Header from './header';
import DB from '../src/db.js';
import styles from '../styles/styles';
import Button from 'react-native-button';

export default class Saved extends Component {
    constructor() {
        super();
        this.renderRow = this.renderRow.bind(this);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            data: {},
            loaded: false
        };
    }

    componentDidMount() {
        DB.articles.find().then((resp) => {
            console.log('resp', resp);
            if (resp) {
                var ds = this.state.dataSource.cloneWithRows(resp);
                this.setState({
                    data: ds,
                    loaded: true
                });
            }
        })
    }

    //deleteSearch(id) {
    //    DB.articles.removeById(id).then(() => {
    //        DB.article.find().then((resp) => {
    //            if (resp) {
    //                var ds = this.state.dataSource.cloneWithRows(resp);
    //                this.setState({
    //                    data: ds,
    //                    loaded: true
    //                });
    //            }
    //        })
    //    })
    //}

    renderRow(item) {
        return (
            <View style={styles.article_list}>
                <Text>Keyword: {item.searchObj.q}</Text>
                {
                    item.articles.map((article, i) =>
                        <View key={article._id}>
                            <Text>{i + 1}.) {article.headline.main}</Text>
                        </View>
                    )
                }
            </View>
        );
    }

    render(){
        return (
            <View style={styles.container}>
                <Header navigator={this.props.navigator} title="Saved"/>
                <View>
                    {
                        this.state.loaded &&
                        <ListView
                            initialListSize={1}
                            dataSource={this.state.data}
                            renderRow={this.renderRow}
                        ></ListView>
                    }
                </View>
            </View>
        );
    }
}

Saved.PropTypes = {

};