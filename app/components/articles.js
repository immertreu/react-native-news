import { default as React, Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    ListView,
    View,
    ScrollView,
    TouchableHighlight,
    AsyncStorage
} from 'react-native';
import Button from 'react-native-button';
import GiftedSpinner from 'react-native-gifted-spinner';
import SearchForm from './search';
import styles from '../styles/styles';
let moment = require('moment');

export default class Articles extends Component {
    constructor() {
        super();
        this.viewPage = this.viewPage.bind(this);
        this.renderNews = this.renderNews.bind(this);
        this.updateArticlesUI = this.updateArticlesUI.bind(this);
        this.state = {
            title: 'Articles',
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            articles: {},
            loaded: false
        };
    }

    updateArticlesUI(articles) {
        console.log('articles', articles);
        var ds = this.state.dataSource.cloneWithRows(articles);
        this.setState({
            'articles': ds,
            'loaded': true
        });
    }

    viewPage(comp, url) {
        this.props.navigator.push({name: comp, url: url});
    }

    renderNews(item) {
        return (
            <View style={styles.news_item}>
                <Text style={styles.news_item_text}>{item.headline.main}</Text>
                <Button style={{fontSize: 20, color: 'green'}} onPress={() => this.viewPage('page', item.web_url)}>Go</Button>
            </View>
        );
    }

    renderResultsTitle() {
        const articleRows = Object.keys(this.state.articles);
        if (articleRows.length) {
            return (
                <Text style={[styles.header_text, styles.results_header]}>Search Results</Text>
            );
        }

        return null;
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.header_item}>
                        <Text style={styles.header_text}>{this.state.title}</Text>
                    </View>
                </View>
                <View style={styles.right_align}>
                    <Button style={styles.secondary_color} onPress={() => this.viewPage('saved', '/saved')}>Go To Saved Articles</Button>
                </View>
                <SearchForm
                    updateArticlesUI={this.updateArticlesUI}
                />
                <View style={styles.body}>
                    {
                        this.renderResultsTitle()
                    }
                    <ScrollView ref="scrollView">
                        {
                            this.state.loaded &&
                            <ListView initialListSize={1} dataSource={this.state.articles} style={styles.news_item} renderRow={this.renderNews}></ListView>
                        }
                    </ScrollView>
                </View>
            </View>
        );
    }
}