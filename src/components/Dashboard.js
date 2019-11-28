// ===============================
// AUTHOR     : BIKASH KUMAR SAHU
// CREATE DATE     :28/11/2019
// PURPOSE     : Dashboard
// ===============================
// Change History:
//
//==================================
import React from 'react';
import { ActivityIndicator, Alert, TextInput, Picker, View, FlatList, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { dashboardData } from '../actions'
import DashboardCell from './DashboardCell';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            type: "",
            itemValue: "Select Filter Type",
            filter_input: ""
        }
    }
    componentDidMount() {
        this.props.dashboardData()
    }
    render_flatlist() {
        if (this.props.loading) {
            return <ActivityIndicator size="large" color="#0000ff" />
        } else if (this.props.dashData.length == 0) {
            return <Text style={{ fontSize: 17, alignSelf: 'center' }}> No Records found</Text>
        } else {
            return <FlatList
                style={{ backgroundColor: '#fff' }}
                data={this.props.dashData}
                renderItem={({ item }) => <DashboardCell item={item} />}
                keyExtractor={item => item.id}
            />
        }
    }
    render() {
        debugger;
        return (
            <SafeAreaView style={styles.container}>

                <View style={styles.navBar}>
                    <Text style={styles.navBarTitle}>Dashboard</Text>
                    <TouchableOpacity style={{ position: 'absolute', width: 50, height: 50, right: 5, justifyContent: 'center', alignItems: 'center' }} onPress={() => this.setState({ modalVisible: true })}>
                        <Image
                            style={{ width: 30, height: 30, }}
                            source={require('../imgs/filter.png')}
                        />
                    </TouchableOpacity>

                </View>

                {this.render_flatlist()}
                {this.state.modalVisible ? <TouchableOpacity activeOpacity={10} style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', alignItems: 'center', justifyContent: 'center' }}
                    onPress={() => this.setState({ modalVisible: true })}
                >

                    <View style={{ padding: 10, width: '80%', height: "50%", backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', width: 20, height: 20, backgroundColor: '#ccc', position: 'absolute', right: 5, top: 5, borderRadius: 50, borderColor: '#ccc' }}
                            onPress={() => this.setState({ modalVisible: false })}
                        >
                            <Text >X</Text>
                        </TouchableOpacity>
                        <View></View>
                        <Picker
                            selectedValue={this.state.itemValue}
                            style={{ height: 50, width: "100%" }}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({ type: itemValue, itemValue })
                            }>
                            <Picker.Item label="Select Filter Type" value="Select Filter Type" />

                            <Picker.Item label="By City" value="by_city" />
                            <Picker.Item label="By Name" value="by_name" />
                            <Picker.Item label="By State" value="by_state" />

                        </Picker>

                        <TextInput
                            value={this.state.filter_input}
                            onChangeText={text => this.setState({ filter_input: text })}
                            placeholder={this.state.type == "by_state" ? "Ex: new_york" : "Filter " + this.state.type}
                            style={{
                                width: "100%",
                                height: 44,
                                padding: 10,

                                borderWidth: 0.5,
                                borderColor: "#ddd",
                                borderRadius: 5,
                                //  marginBottom: 10,
                                marginTop: 6
                            }}
                        />
                        <TouchableOpacity style={{ width: '100%', alignItems: 'center', justifyContent: 'center', marginTop: 10 }} onPress={() => {
                            if (this.state.itemValue == "Select Filter Type") {
                                Alert.alert('', 'Select Filter Type')
                            } else if (this.state.filter_input == "") {
                                Alert.alert("", "Enter value of " + this.state.type)
                            } else {
                                let filterVal = "?" + this.state.type + "=" + this.state.filter_input
                                this.setState({ modalVisible: false })
                                this.props.dashboardData(filterVal);
                            }
                        }}>
                            <Text style={{ color: 'red' }}>Search</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: '100%', alignItems: 'center', justifyContent: 'center', marginTop: 10 }} onPress={() => {

                            this.setState({
                                itemValue: "Select Filter Type",
                                filter_input: "",
                                modalVisible: false
                            })

                            this.props.dashboardData(undefined);

                        }}>
                            <Text style={{ color: 'red' }}>Cleare</Text>
                        </TouchableOpacity>



                    </View>
                </TouchableOpacity> : null}
            </SafeAreaView>
        )
    }
}
const mapStateToProps = ({ auth }) => {
    // email:auth.state.email;
    const { loading, dashData } = auth;
    return { loading, dashData };
}

export default connect(mapStateToProps, {
    dashboardData
})(Dashboard);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    navBar: {
        width: '100%',
        height: 50,
        backgroundColor: '#af2e2f',
        justifyContent: 'center'
    },
    navBarTitle: {
        alignSelf: 'center',
        fontWeight: '400',
        color: '#fff',
        fontSize: 17
    }
})