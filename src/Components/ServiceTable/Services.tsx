import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { DataTable } from 'react-native-paper'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface ServicePrices {
    [key: string]: number;
}

const Services = (props: any) => {
    const [selectedServices, setSelectedServices] = useState<string[]>([]);
    const servicePrices: ServicePrices = {
        "Car Wash": 20,
        "Brake Change": 20,
        "Oil Change": 20,
        "Tire Change": 20,
        "Battery Replace": 20,
        "Spark Plug Change": 20,
        "Wax Vehicle": 20,
        "Air Filter Replace": 20,
        "Inspect Shocks and Struts": 20,
        "Replace Windshield Wipers": 20,
        "Wheel Align": 20,
        "Engine Diagnosis": 20,
    };

    const handlePress = (service:string) => {
        if (selectedServices.includes(service)) {
            setSelectedServices(selectedServices.filter(s => s !== service));
        } else {
            setSelectedServices([...selectedServices, service]);
        }
    };

    const total = selectedServices.reduce((acc, service) => {
        if (servicePrices.hasOwnProperty(service)) {
            return acc + servicePrices[service];
        }
        return acc;
    }, 0);

    const ScheduleServiceBtn = ()  => {
        if(total > 0){
        alert("Your Request has been sent to vendor. Your total bill will be  $ " + total); 
    }else{
        alert("Please select at least one service");
    }
}

    return(
        <View>
            <Text style={styles.heading}>Services</Text>
            <DataTable style={styles.table}>
                {/* Rows for services */}
                {/* Row 1 */}
                <DataTable.Row style={styles.row}>
                    {/* Service 1 */}
                    <DataTable.Cell style={[styles.cell, selectedServices.includes("Car Wash") && styles.selectedCell]}>
                        <TouchableOpacity onPress={() => handlePress("Car Wash")}>
                            <MaterialCommunityIcons name="car-wash" size={24} color="white" style={styles.icon} />
                            <Text style={styles.data}>Car Wash <Text style={styles.amountText}>USD ${servicePrices["Car Wash"]}</Text></Text>
                        </TouchableOpacity>
                    </DataTable.Cell>
                    {/* Service 2 */}
                    <DataTable.Cell style={[styles.cell, selectedServices.includes("Brake Change") && styles.selectedCell]}>
                        <TouchableOpacity onPress={() => handlePress("Brake Change")}>
                            <MaterialCommunityIcons name="car-brake-worn-linings" size={24} color="white" style={styles.icon} />
                            <Text style={styles.data}>Brake Change <Text style={styles.amountText}>USD ${servicePrices["Car Wash"]}</Text></Text>
                        </TouchableOpacity>
                    </DataTable.Cell>
                    {/* Service 3 */}
                    <DataTable.Cell style={[styles.cell, selectedServices.includes("Oil Change") && styles.selectedCell]}>
                        <TouchableOpacity onPress={() => handlePress("Oil Change")}>
                            <MaterialCommunityIcons name="oil" size={24} color="white" style={styles.icon} />
                            <Text style={styles.data}>Oil Change <Text style={styles.amountText}>USD ${servicePrices["Car Wash"]}</Text></Text>
                        </TouchableOpacity>
                    </DataTable.Cell>
                    {/* Service 4 */}
                    <DataTable.Cell style={[styles.cell, selectedServices.includes("Tire Change") && styles.selectedCell]}>
                        <TouchableOpacity onPress={() => handlePress("Tire Change")}>
                            <MaterialCommunityIcons name="tire" size={24} color="white" style={styles.icon} />
                            <Text style={styles.data}>Tire Change <Text style={styles.amountText}>USD ${servicePrices["Car Wash"]}</Text></Text>
                        </TouchableOpacity>
                    </DataTable.Cell>
                </DataTable.Row>
                {/* Add other rows for services */}
                {/* Row 2 */}
                <DataTable.Row style={styles.row}>
                    {/* Service 1 */}
                    <DataTable.Cell style={[styles.cell, selectedServices.includes("Inspect Shocks and Struts") && styles.selectedCell]}>
                        <TouchableOpacity onPress={() => handlePress("Inspect Shocks and Struts")}>
                            <MaterialCommunityIcons name="car-battery" size={24} color="white" style={styles.icon} />
                            <Text style={styles.data}>Battery Replace <Text style={styles.amountText}>USD ${servicePrices["Inspect Shocks and Struts"]}</Text></Text>
                        </TouchableOpacity>
                    </DataTable.Cell>
                    {/* Service 2 */}
                    <DataTable.Cell style={[styles.cell, selectedServices.includes("Replace Windshield Wipers") && styles.selectedCell]}>
                        <TouchableOpacity onPress={() => handlePress("Replace Windshield Wipers")}>
                            <MaterialCommunityIcons name="wiper" size={24} color="white" style={styles.icon} />
                            <Text style={styles.data}>Replace Windshield Wipers <Text style={styles.amountText}>USD ${servicePrices["Replace Windshield Wipers"]}</Text></Text>
                        </TouchableOpacity>
                    </DataTable.Cell>
                    {/* Service 3 */}
                    <DataTable.Cell style={[styles.cell, selectedServices.includes("Wheel Align") && styles.selectedCell]}>
                        <TouchableOpacity onPress={() => handlePress("Wheel Align")}>
                            <MaterialCommunityIcons name="tire" size={24} color="white" style={styles.icon} />
                            <Text style={styles.data}>Wheel Aligning <Text style={styles.amountText}>USD ${servicePrices["Wheel Align"]}</Text></Text>
                        </TouchableOpacity>
                    </DataTable.Cell>
                    {/* Service 4 */}
                    <DataTable.Cell style={[styles.cell, selectedServices.includes("Engine Diagnosis") && styles.selectedCell]}>
                        <TouchableOpacity onPress={() => handlePress("Engine Diagnosis")}>
                            <MaterialCommunityIcons name="engine-outline" size={24} color="white" style={styles.icon} />
                            <Text style={styles.data}>Engine Diagnosis <Text style={styles.amountText}>USD ${servicePrices["Engine Diagnosis"]}</Text></Text>
                        </TouchableOpacity>
                    </DataTable.Cell>
                </DataTable.Row>

                {/* Row 3 */}
                <DataTable.Row style={styles.row}>
                    {/* Service 1 */}
                    <DataTable.Cell style={[styles.cell, selectedServices.includes("Battery Replace") && styles.selectedCell]}>
                        <TouchableOpacity onPress={() => handlePress("Battery Replace")}>
                            <MaterialCommunityIcons name="current-dc" size={24} color="white" style={styles.icon} />
                            <Text style={styles.data}>Inspect Shock & Struts   <Text style={styles.amountText}>USD ${servicePrices["Battery Replace"]}</Text></Text>
                        </TouchableOpacity>
                    </DataTable.Cell>
                    {/* Service 2 */}
                    <DataTable.Cell style={[styles.cell, selectedServices.includes("Spark Plug Change") && styles.selectedCell]}>
                        <TouchableOpacity onPress={() => handlePress("Spark Plug Change")}>
                            <MaterialCommunityIcons name="power-plug-outline" size={24} color="white" style={styles.icon} />
                            <Text style={styles.data}>Spark Plug Change <Text style={styles.amountText}>USD ${servicePrices["Spark Plug Change"]}</Text></Text>
                        </TouchableOpacity>
                    </DataTable.Cell>
                    {/* Service 3 */}
                    <DataTable.Cell style={[styles.cell, selectedServices.includes("Air Filter Replace") && styles.selectedCell]}>
                        <TouchableOpacity onPress={() => handlePress("Air Filter Replace")}>
                            <MaterialCommunityIcons name="air-filter" size={24} color="white" style={styles.icon} />
                            <Text style={styles.data}>Air Filter Replace <Text style={styles.amountText}>USD ${servicePrices["Air Filter Replace"]}</Text></Text>
                        </TouchableOpacity>
                    </DataTable.Cell>
                    {/* Service 4 */}
                    <DataTable.Cell style={[styles.cell, selectedServices.includes("Wax Vehicle") && styles.selectedCell]}>
                        <TouchableOpacity onPress={() => handlePress("Wax Vehicle")}>
                            <MaterialCommunityIcons name="car" size={24} color="white" style={styles.icon} />
                            <Text style={styles.data}>Wax Vehicle <Text style={styles.amountText}>USD ${servicePrices["Wax Vehicle"]}</Text></Text>
                        </TouchableOpacity>
                    </DataTable.Cell>
                </DataTable.Row>
            </DataTable>

            <View style = {styles.suggestedService}>
                <Text style = {styles.heading}>Suggested Service: </Text>
                <View style = {styles.suggestionItems}>
                <TouchableOpacity style = {styles.suggestions} onPress={() => handlePress("Car Wash")}><Text style = {styles.heading}>Car Wash</Text></TouchableOpacity>
                <TouchableOpacity style = {styles.suggestions} onPress={() => handlePress("Oil Change")}><Text style = {styles.heading}>Oil Change</Text></TouchableOpacity>
                </View>
                
            </View>

            <View style={styles.TotalBillShow}>
                <Text style={styles.headingTotal}>Your Total Payable Bill Is: <Text style={styles.amountText}>USD ${total}</Text></Text>
                <TouchableOpacity style={styles.payBtn} onPress={ScheduleServiceBtn}><Text style={styles.payNow}>Schedule Servicing</Text></TouchableOpacity>
            </View>
        </View>
    );
};

export default Services;

const styles = StyleSheet.create({
    heading: {
        color: '#fff',
        fontSize: 15,
        textAlign: 'center',
        marginTop: 3
    },
    table: {
        width: '100%',
        borderColor: '#fff',
    },
    row: {
        height: 150,
        flex: 1,
    },
    cell: {
        height: 150,
        width: 100,
        padding: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        
    },
    icon: {
        marginLeft: 18
    },
    data: {
        color: '#fff',
        textAlign: 'center',
        marginTop: 5,
        alignItems: 'center',
        alignContent: 'center'
    },
    selectedCell: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)', // Change the background color to a light white with some transparency
    },
    suggestionItems: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 20
    },
    suggestedService: {
        flex: 1,
        marginBottom: 0,
        marginTop: 50,
        justifyContent: 'center'
    },
    amountText: {
        color: '#3DBDFF',
        fontStyle: 'italic',
        fontWeight: 'bold'
    },
    TotalBillShow: {
        marginBottom: 80,
        marginTop: 30,
    },
    headingTotal: {
        color: '#fff',
        fontSize: 18,
    },
    payBtn: {
        marginTop: 10,
        backgroundColor: "#3DB7FF",
        height: 50,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    payNow: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff'
    },
    tick: {
        position: 'absolute',
        top: 0,
        left: 5,
    },
    suggestions:{
        backgroundColor: '#3DBDFF',
        color: '#fff',
        width: 100,
        height: 40,
        textAlign: 'center',
        borderRadius: 20,
        justifyContent: 'center',
        marginRight: 10
        
    },
});
