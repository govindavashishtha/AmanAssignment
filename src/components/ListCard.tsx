import React from 'react';
import {View, Text} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet';
import { IListItem } from '../screens/ListScreen';
import ExtendedLine from './ExtendedLine';

interface IProps {
    item: IListItem;
}

const ListCard = ({item}: IProps): JSX.Element => {
    return (
        <View style={styles.container}>
            <View style={{flex:1 }}>
                <View>
                    <Text style={styles.title}>{item?.title}</Text>
                </View>
                <View style={styles.marginVertical}>
                    <ExtendedLine />
                </View>
                <View>
                    <Text style={styles.description}>{item?.description}</Text>
                </View>
            </View>

        </View>
    )
};

const styles = EStyleSheet.create({
    title: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center'
    },
    description: {
        fontSize: '1rem',
        color: "red",
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "red",
        marginHorizontal: '.93rem',
        marginVertical: '.5rem',
        borderRadius: '.5rem',
        padding: '.8rem',
        shadowColor: "red",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: .8,
        shadowRadius: 10,
        elevation: 6,
    },
    marginVertical: {
        marginVertical: '.5rem'
    }
})


export default ListCard;
