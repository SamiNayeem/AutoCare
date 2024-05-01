import React, { useState } from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { DataTable } from 'react-native-paper';

import ActionBtn from "../../Components/ActionButtons/ActionButtons";

const RequestedServices = () => {
    const [page, setPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(5); // Changed to 5 items per page
    const [items] = useState([
        {
            key: 1,
            name: 'Car Wash',
            phone: '+880 123456789',
        },
        {
            key: 2,
            name: 'Oil Change',
            phone: '+880 1552380163',
        },
        {
            key: 3,
            name: 'Car Wash',
            phone: '+880 1602441585',
        },
        {
            key: 4,
            name: 'Car Wash',
            phone: '+880 1602441585',
        },
        {
            key: 5,
            name: 'Car Wash',
            phone: '+880 1602441585',
        },
        {
            key: 4,
            name: 'Car Wash',
            phone: '+880 1602441585',
        },
        {
            key: 5,
            name: 'Car Wash',
            phone: '+880 1602441585',
        },
        {
            key: 6,
            name: 'Car Wash',
            phone: '+880 1602441585',
        },
        {
            key: 7,
            name: 'Car Wash',
            phone: '+880 1602441585',
        },
        // Add more items here
    ]);

    const from = page * itemsPerPage;
    const to = Math.min((page + 1) * itemsPerPage, items.length);

    return (
        <ImageBackground source={require('../../../assets/bgimage.jpg')} style={styles.background}>
            <ScrollView style={styles.overlay}>
                <Text style={styles.title}>Pending Requests</Text>
                <DataTable style={styles.dataTable}>
                    <DataTable.Header style={styles.dataTableHeader}>
                        <DataTable.Title style={[styles.cell, { width: '20%', backgroundColor: 'red' }]}><Text style={styles.dataTableTitle}>Services</Text></DataTable.Title>
                        <DataTable.Title style={[styles.cell, { width: '30%' }]}><Text style={styles.dataTableTitle}>Phone Number</Text></DataTable.Title>
                        <DataTable.Title style={[styles.cell, { width: '40%' }]}><Text style={styles.dataTableTitle}>Actions</Text></DataTable.Title>
                    </DataTable.Header>
                    {items.slice(from, to).map((item) => (
                        <DataTable.Row key={item.key}>
                            <DataTable.Cell style={[styles.cell, { width: '20%' }]}><Text style={styles.text}>{item.name}</Text></DataTable.Cell>
                            <DataTable.Cell style={[styles.cell, { width: '30%' }]}><Text style={styles.text}>{item.phone}</Text></DataTable.Cell>
                            <DataTable.Cell style={[styles.cell, { width: '40%' }]}><ActionBtn /></DataTable.Cell>
                        </DataTable.Row>
                    ))}
                </DataTable>
                <DataTable.Pagination
                    page={page}
                    numberOfPages={Math.ceil(items.length / itemsPerPage)}
                    onPageChange={page => setPage(page)}
                    label={`${from + 1}-${to} of ${items.length}`}
                    numberOfItemsPerPageList={[5,10]} // Added 5 as an option
                    numberOfItemsPerPage={itemsPerPage}
                    onItemsPerPageChange={value => {
                        setItemsPerPage(value);
                        setPage(0);
                    }}
                    showFastPaginationControls
                    selectPageDropdownLabel={'Rows per page'}
                    theme={{
                        colors: {
                            primary: '#fff',
                            text: '#fff',
                            background: '#000',
                            surface: '#fff', // background color of the pagination component
                            placeholder: '#fff', // color of the placeholder text in the dropdown
                            accent: '#fff', // color of the dropdown icon
                        },
                    }}
                />
            </ScrollView>
        </ImageBackground>
    );
};

export default RequestedServices;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        width: '100%',
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.9)', // Adjust opacity here (0.5 = 50% opacity)
        height: '100%',
        width: '100%',
        paddingTop: 20,
        paddingLeft: 0,
    },
    title: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
        marginBottom: 10
    },
    dataTable: {
        width: '100%',
        justifyContent: 'center'
    },
    dataTableHeader: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    dataTableTitle: {
        color: '#fff',
        textAlign: 'center',
    },
    cell: {
        alignItems: 'center',
        alignContent: 'center',
    },
    text: {
        color: '#fff'
    }
});
