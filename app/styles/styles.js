import {
    StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    inner_container: {
        padding: 10
    },
    header: {
        backgroundColor: '#136fd8',
        padding: 10,
        maxHeight: 60,
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    body: {
        flex: 9,
        backgroundColor: '#F6F6EF'
    },
    header_item: {
        justifyContent: 'center'
    },
    header_text: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 20
    },
    results_header: {
        margin: 10,
        color: '#575757',
    },
    button: {
        backgroundColor: '#136fd8',
        color: 'white',
        marginTop: 10,
        marginBottom: 10,
        padding: 5,
        width: 100
    },
    right_align: {
        marginTop: 10,
        marginRight: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    secondary_color: {
        color: '#d8136c'
    },
    button_wrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    news_item: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 15,
        paddingBottom: 15,
        marginBottom: 5
    },
    news_item_text: {
        color: '#575757',
        fontSize: 18
    },
    article_list: {
        borderBottomWidth: 1,
        borderBottomColor: '#96989b'
    },
    label: {
      marginBottom: 5,
    },
    form_field: {
        borderWidth: 1,
        borderColor: '#96989b',
        height: 35,
        marginBottom: 10,
        padding: 5
    }
});

export default styles;