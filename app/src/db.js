import Store from 'react-native-store';

const DB = {
    articles: Store.model({
        searchObj: {},
        articles: []
    })
};

export default DB;