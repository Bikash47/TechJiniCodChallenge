
import React, { Component } from 'react';
import { Image, Platform, StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

const DeviceWidth = Dimensions.get("window").width
const DeviceHeight = Dimensions.get("window").height

const TextColor = "rgba(0,0,0,0.6)"
export default class Details extends Component {
    render() {
        const { brewery_type, city, country, name, phone, postal_code, state, street } = this.props.item;

        return (
            <View style={styles.container}>
                <View style={{ height: 45, backgroundColor: "#af2e2f" }}>
                    <TouchableOpacity style={{ position: 'absolute', width: 20, height: 50, left: 5, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }} onPress={() => Actions.pop()}>
                        <Image
                            style={{ width: 20, height: 20, }}
                            source={require('../imgs/back.png')}
                        />
                    </TouchableOpacity>
                </View>


                <View style={{ flex: 1 }}>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                    >
                        <View style={{ height: 100, justifyContent: "center", alignItems: "center" }}>

                            <View style={{ height: 60, width: DeviceWidth / 2.5, backgroundColor: "#ddd", borderRadius: 50, justifyContent: "space-around", alignItems: "center" }}>
                                <Text style={styles.BottomDescTextStyle}>BREWERY TYPE</Text>
                                <Text>{brewery_type}</Text>
                            </View>
                        </View>
                        <View style={styles.BottomCellStyle}>
                            <View style={styles.BottomLeftViewStyle}>
                                <Text style={styles.BottomDescTextStyle}>NAME</Text>
                            </View>
                            <View style={{ flex: 1, justifyContent: "center" }}>
                                <Text>{name}</Text>
                            </View>
                        </View>
                        <View style={styles.BottomCellStyle}>
                            <View style={styles.BottomLeftViewStyle}>
                                <Text style={styles.BottomDescTextStyle}>PHONE</Text>
                            </View>
                            <View style={{ flex: 1, justifyContent: "center" }}>
                                <Text>{phone}</Text>
                            </View>
                        </View>
                        <View style={styles.BottomCellStyle}>
                            <View style={styles.BottomLeftViewStyle}>
                                <Text style={styles.BottomDescTextStyle}>STREET</Text>
                            </View>
                            <View style={{ flex: 1, justifyContent: "center" }}>
                                <Text>{street}</Text>
                            </View>
                        </View>
                        <View style={styles.BottomCellStyle}>
                            <View style={styles.BottomLeftViewStyle}>
                                <Text style={styles.BottomDescTextStyle}>STATE</Text>
                            </View>
                            <View style={{ flex: 1, justifyContent: "center" }}>
                                <Text>{state}</Text>
                            </View>
                        </View>
                        <View style={styles.BottomCellStyle}>
                            <View style={styles.BottomLeftViewStyle}>
                                <Text style={styles.BottomDescTextStyle}>CITY</Text>
                            </View>
                            <View style={{ flex: 1, justifyContent: "center" }}>
                                <Text>{city}</Text>
                            </View>
                        </View>
                        <View style={styles.BottomCellStyle}>
                            <View style={styles.BottomLeftViewStyle}>
                                <Text style={styles.BottomDescTextStyle}>POSTAL CODE</Text>
                            </View>
                            <View style={{ flex: 1, justifyContent: "center" }}>
                                <Text>{postal_code}</Text>
                            </View>
                        </View>
                        <View style={styles.BottomCellStyle}>
                            <View style={styles.BottomLeftViewStyle}>
                                <Text style={styles.BottomDescTextStyle}>COUNTRY</Text>
                            </View>
                            <View style={{ flex: 1, justifyContent: "center" }}>
                                <Text>{country}</Text>
                            </View>
                        </View>

                    </ScrollView>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    BottomDescTextStyle: { fontWeight: "bold", color: TextColor },
    BottomLeftViewStyle: { width: 140, justifyContent: "center" },
    BottomCellStyle: { height: 45, marginHorizontal: 10, backgroundColor: "#ddd", borderRadius: 8, flexDirection: "row", paddingHorizontal: 8, marginBottom: 10 },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});