// ===============================
// AUTHOR     : BIKASH KUMAR SAHU
// CREATE DATE     :28/11/2019
// PURPOSE     : Render Dashboard cell item 
// ===============================
// Change History:
//
//==================================

import React from 'react';
import { View, FlatList, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { saveData, getSavedData } from '../business/AsyncStorageDB';
import { _ } from 'lodash';
export default class DashboardCell extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            favClicked: false
        }
    }
    componentWillMount() {
        this.setState({
            favClicked: this.props.item.fev != undefined ? true : false
        })
    }
    async func_OnFevClick() {
        this.setState({
            favClicked: !this.state.favClicked
        })
        let savedFev = await getSavedData("FEV_DATA")
        var isPresent = _.findIndex(savedFev, (o) => { return o.id == this.props.item.id });
        if (isPresent >= 0) {
            savedFev.splice(isPresent, 1);
            await saveData("FEV_DATA", savedFev);
        } else {
            savedFev.push(this.props.item)
            await saveData("FEV_DATA", savedFev);
        }


    }
    render() {

        const { brewery_type, city, country, name, phone, postal_code, state, street } = this.props.item;
        return (
            <TouchableOpacity style={styles.container} onPress={() => Actions.Details({ item: this.props.item })}>

                <View style={styles.text_container}>
                    <TouchableOpacity style={{ position: 'absolute', right: 5, top: 5, width: 50, height: 50, alignItems: 'center', justifyContent: 'center' }}
                        onPress={() => this.func_OnFevClick()}
                    >
                        {!this.state.favClicked ? <Image
                            style={{ width: 20, height: 20, alignSelf: 'center' }}
                            source={require('../imgs/fav.png')}
                        /> : <Image
                                style={{ width: 20, height: 20, alignSelf: 'center' }}
                                source={require('../imgs/favred.png')}
                            />}
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            style={{ width: 20, height: 20, alignSelf: 'center' }}
                            source={require('../imgs/name.png')}
                        />
                        <Text style={styles.title}>{name}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            style={{ width: 20, height: 20, alignSelf: 'center' }}
                            source={require('../imgs/phone.png')}
                        />
                        <Text style={styles.sub_title}>{phone}</Text>
                    </View>
                </View>

            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: "100%", height: 80, flexDirection: 'row', marginBottom: 5, paddingLeft: 10, paddingRight: 10
    },
    text_container: {
        justifyContent: 'center',
        width: "100%", height: "100%", backgroundColor: '#fff', elevation: 5, alignSelf: 'flex-end', padding: 10
    },
    title: { color: '#323232', fontSize: 17, margin: 6 },
    sub_title: { color: '#323232', margin: 6 }
})