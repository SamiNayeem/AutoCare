import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { DataTable } from 'react-native-paper'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Services = (props: any) => {
    const [selectedServices, setSelectedServices] = useState<string[]>([]);

    const handlePress = (service:string) => {
        if (selectedServices.includes(service)) {
            setSelectedServices(selectedServices.filter(s => s !== service));
        } else {
            setSelectedServices([...selectedServices, service]);
        }
    };

    const ScheduleServiceBtn = ()  => {
        if(selectedServices.length > 0){
            alert("Your request has been sent to the vendor.");
        }else{
            alert("Please select at least one service.");
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
                    <DataTable.Cell style={[styles.cell, selectedServices.includes("Add Services") && styles.selectedCell]}>
                        <TouchableOpacity onPress={() => handlePress("Add Services")}>
                            <MaterialCommunityIcons name="car-wash" size={24} color="white" style={styles.icon} />
                            <Text style={styles.data}>Add Services</Text>
                        </TouchableOpacity>
                    </DataTable.Cell>
                    {/* Service 2 */}
                    <DataTable.Cell style={[styles.cell, selectedServices.includes("Modify Services") && styles.selectedCell]}>
                        <TouchableOpacity onPress={() => handlePress("Modify Services")}>
                            <MaterialCommunityIcons name="settings" size={24} color="white" style={styles.icon} />
                            <Text style={styles.data}>Modify Services</Text>
                        </TouchableOpacity>
                    </DataTable.Cell>
                </DataTable.Row>
                {/* Add other rows for services */}
                {/* Row 2 */}
                
            </DataTable>

            <View style={styles.TotalBillShow}>
                <Text style={styles.headingTotal}>Your Total Payable Bill Is: <Text style={styles.amountText}>USD $0</Text></Text>
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
        marginTop: 10
    },
    table: {
        width: '100%',
        borderColor: '#fff',
    },
    row: {
        height: 100,
        flex: 1,
    },
    cell: {
        height: 100,
        width: '50%',
        padding: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    icon: {
        marginRight: 10,
    },
    data: {
        color: '#fff',
        textAlign: 'center',
    },
    selectedCell: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
    },
    TotalBillShow: {
        marginBottom: 80,
        marginTop: 30,
        alignItems: 'center',
    },
    headingTotal: {
        color: '#fff',
        fontSize: 18,
    },
    payBtn: {
        marginTop: 10,
        backgroundColor: "#3DB7FF",
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
    },
    payNow: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
});
