import React from "react";
import { StyleSheet, View, ScrollView, Text, TouchableOpacity } from "react-native";
import { DataTable } from 'react-native-paper'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Services = () => {
    const handlePress = (service:any) => {
        // Handle onPress event for the service
        console.log(`Selected service: ${service}`);
    };

    return(
        <View>
            <Text style={styles.heading}>Services</Text>
            <DataTable style={styles.table}>

                {/* row 1 */}
                <DataTable.Row style={styles.row}>
                    <DataTable.Cell style={styles.cell} >
                        <TouchableOpacity onPress={() => handlePress("Car Wash")}>
                        <MaterialCommunityIcons name="car-wash" size={24} color="white"style = {styles.icon} />
                            <Text style={styles.data}>Car Wash</Text>
                        </TouchableOpacity>
                    </DataTable.Cell>
                    <DataTable.Cell style={styles.cell}>
                        <TouchableOpacity onPress={() => handlePress("Brake Change")}>
                        <MaterialCommunityIcons name="car-brake-worn-linings" size={24} color="white" style = {styles.icon}/>
                            <Text style={styles.data}>Brake Change</Text>
                        </TouchableOpacity>
                    </DataTable.Cell>
                    <DataTable.Cell style={styles.cell}>
                        <TouchableOpacity onPress={() => handlePress("Oil Change")}>
                        <MaterialCommunityIcons name="oil" size={24} color="white"style = {styles.icon} />
                            <Text style={styles.data}>Oil Change</Text>
                        </TouchableOpacity>
                    </DataTable.Cell>
                    <DataTable.Cell style={styles.cell}>
                        <TouchableOpacity onPress={() => handlePress("Tire Change")}>
                        <MaterialCommunityIcons name="tire" size={24} color="white" style = {styles.icon} />
                            <Text style={styles.data}>Tire Change</Text>
                        </TouchableOpacity>
                    </DataTable.Cell>
                </DataTable.Row>

                {/* row 2 */}
                <DataTable.Row style={styles.row}>
                    <DataTable.Cell style={styles.cell}>
                        <TouchableOpacity onPress={() => handlePress("Car Wash")}>
                        <MaterialCommunityIcons name="car-battery" size={24} color="white" style = {styles.icon} />
                            <Text style={styles.data}>Battery Replace</Text>
                        </TouchableOpacity>
                    </DataTable.Cell>
                    <DataTable.Cell style={styles.cell}>
                        <TouchableOpacity onPress={() => handlePress("Brake Change")}>
                        <MaterialCommunityIcons name="power-plug-outline" size={24} color="white" style = {styles.icon} />
                            <Text style={styles.data}>Spark Plug Change</Text>
                        </TouchableOpacity>
                    </DataTable.Cell>
                    <DataTable.Cell style={styles.cell}>
                        <TouchableOpacity onPress={() => handlePress("Oil Change")}>
                        <MaterialCommunityIcons name="car" size={24} color="white" style = {styles.icon}/>
                            <Text style={styles.data}>Wax Vehicle</Text>
                        </TouchableOpacity>
                    </DataTable.Cell>
                    <DataTable.Cell style={styles.cell}>
                        <TouchableOpacity onPress={() => handlePress("Tire Change")}>
                        <MaterialCommunityIcons name="air-filter" size={24} color="white" style = {styles.icon}/>
                            <Text style={styles.data}>Air Filter Replace</Text>
                        </TouchableOpacity>
                    </DataTable.Cell>
                </DataTable.Row>

                {/* row 3 */}
                <DataTable.Row style={styles.row}>
                    <DataTable.Cell style={styles.cell}>
                        <TouchableOpacity onPress={() => handlePress("Car Wash")}>
                        <MaterialCommunityIcons name="current-dc" size={24} color="white" style = {styles.icon}/>
                            <Text style={styles.data}>Inspect Shocks & Struts</Text>
                        </TouchableOpacity>
                    </DataTable.Cell>
                    <DataTable.Cell style={styles.cell}>
                        <TouchableOpacity onPress={() => handlePress("Brake Change")}>
                        <MaterialCommunityIcons name="wiper" size={24} color="white" style = {styles.icon} />
                            <Text style={styles.data}>Replace Windshield Wipers</Text>
                        </TouchableOpacity>
                    </DataTable.Cell>
                    <DataTable.Cell style={styles.cell}>
                        <TouchableOpacity onPress={() => handlePress("Oil Change")}>
                        <MaterialCommunityIcons name="tire" size={24} color="white" style = {styles.icon} />
                            <Text style={styles.data}>Wheel Align</Text>
                        </TouchableOpacity>
                    </DataTable.Cell>
                    <DataTable.Cell style={styles.cell}>
                        <TouchableOpacity onPress={() => handlePress("Tire Change")}>
                        <MaterialCommunityIcons name="engine-outline" size={24} color="white" style = {styles.icon}/>
                            <Text style={styles.data}>Engine Diagnosis</Text>
                        </TouchableOpacity>
                    </DataTable.Cell>
                </DataTable.Row>


            </DataTable>

            <View style = {styles.suggestedService}>
                <Text style = {styles.heading}>Suggested Service: </Text>
                <View style = {styles.suggestionItems}>
                <TouchableOpacity style = {styles.suggestions}><Text style = {styles.heading}>Car Wash</Text></TouchableOpacity>
                <TouchableOpacity style = {styles.suggestions}><Text style = {styles.heading}>Oil Change</Text></TouchableOpacity>
                </View>
                
            </View>
        </View>
    );
};

export default Services;

const styles = StyleSheet.create({
    table:{
        width: '90%',
        borderColor: '#fff',
        
    },
    data:{
        color: '#fff',
        textAlign: 'center',
        marginTop: 5,
        alignItems: 'center',
        alignContent: 'center'
    },
    row:{
        height: 150,
        flex:1,
        
    },
    cell:{
        // backgroundColor: '#348EAC',
        height:150,
        width: 40,
        padding:10,
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
        
    },

    icon:{
        marginLeft: 12
    },

    heading: {
        color: '#fff',
        fontSize: 15,
        fontFamily: 'sans-serif',
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: 3
    },

    suggestions:{
        backgroundColor: '#3DBDFF',
        color: '#fff',
        width: 80,
        height: 40,
        textAlign: 'center',
        borderRadius: 6,
        justifyContent: 'center',
        marginRight: 10
        
    },

    suggestedService: {
        flex:1,
        marginBottom: 80,
        marginTop: 50,
        justifyContent: 'center'
    },
    suggestionItems:{
        flex:1,
        flexDirection: 'row',
        marginTop: 20
    }
    
});
