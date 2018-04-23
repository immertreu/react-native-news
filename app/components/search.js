import { default as React, Component } from 'react';
import {
    AsyncStorage,
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native';
import Button from 'react-native-button';
import API from '../src/api.js';
import _ from 'lodash';
import DB from '../src/db.js';
import styles from '../styles/styles';
let update = require('react-addons-update');
let url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
url += '?api-key=2f80eac2b811464cb8887c2da1ab3321';

let emptySearchObj = {
    q: '',
    begin_date: '',
    end_date: '',
};



export default class SearchForm extends Component {
    constructor() {
        super();
        this.getNews = this.getNews.bind(this);
        this.clearSearch = this.clearSearch.bind(this);
        this.saveArticles = this.saveArticles.bind(this);
        this.state = {
            search: emptySearchObj,
            articles: []
        };
    }

    buildQuery(url, searchObj) {
        let queriesArray = Object.keys(searchObj);
        let completeUrl = url;
        let queryString;
        queriesArray.filter((item) => searchObj[item].length > 0).forEach((item) => {
            queryString = `&&${item}=${searchObj[item].trim()}`;
            completeUrl += queryString;
        });
        return completeUrl;
    }

    updateArticlesDb(articles) {
        DB.articles.add({
            searchObj: this.state.search,
            articles: articles
        });
    }

    getNews() {
        let articles = [];
        API(this.buildQuery(url, this.state.search)).then(
            (response) => {
                response.response.docs.forEach((article) => {
                    articles.push(article);
                });

                this.setState({articles: articles}, () => {
                    console.log(this.state.articles);
                    this.props.updateArticlesUI(articles);
                });
            }
        )

    }

    saveArticles() {
        this.updateArticlesDb(this.state.articles);
    }

    clearSearch() {
        this.setState({
            search: emptySearchObj
        });

        this.props.updateArticlesUI([]);
    }

    render(){
        return (
            <View style={styles.inner_container}>
                <Text style={styles.label}>Keywords</Text>
                <TextInput
                    style={styles.form_field}
                    onChangeText={(text) => this.setState(update(this.state, { search: {
                        q: { $set: text }
                    }}))}
                    value={this.state.search.q}
                />
                <Text style={styles.label}>Begin Date</Text>
                <TextInput
                    style={styles.form_field}
                    onChangeText={(text) => this.setState(update(this.state, { search: {
                        begin_date: { $set: text }
                    }}))}
                    value={this.state.search.begin_date}
                />
                <Text style={styles.label}>End Date</Text>
                <TextInput
                    style={styles.form_field}
                    onChangeText={(text) => this.setState(update(this.state, { search: {
                        end_date: { $set: text }
                    }}))}
                    value={this.state.search.end_date}
                />
                <View style={styles.button_wrapper}>
                    <Button style={styles.button} onPress={this.getNews}>Search</Button>
                    <Button style={styles.button} onPress={this.clearSearch}>Clear</Button>
                    <Button style={styles.button} onPress={this.saveArticles}>Save</Button>
                </View>
            </View>
        );
    }
}