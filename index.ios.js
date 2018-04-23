/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, Text, View, Navigator } from 'react-native';
import Articles from './app/components/articles.js';
import Page from './app/components/page.js';
import Saved from './app/components/saved.js';

let Routes = {
    articles: Articles,
    page: Page,
    saved: Saved
};

class news extends Component {
    renderScene(route, navigator) {
        let Component = Routes[route.name];
        return (
            <Component route={route} navigator={navigator} url={route.url} />
        )
    }
    render() {
        return (
            <Navigator
                initialRoute={{name: 'articles', url: ''}}
                renderScene={this.renderScene}
                configureScene={() => { return Navigator.SceneConfigs.FloatFromRight; }}
            />
        );
    }
}

AppRegistry.registerComponent('news', () => news);