import { View, Text, StyleSheet, Platform, Pressable, TextInput, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Calendar1Icon, CameraIcon, DockIcon, FileIcon, FilePlus, FolderClosedIcon, ImageIcon } from 'lucide-react-native';
import ExpoCheckbox from 'expo-checkbox/build/ExpoCheckbox';
import Colors from '@/colors/colors';

const LeaveForm = () => {
    const [date, setDate] = useState(new Date());
    const [showStartDatePicker, setShowStartDatePicker] = useState(false);
    const [showEndDatePicker, setShowEndDatePicker] = useState(false);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [openApprovedBy, setOpenApprovedBy] = useState(false);
    const [valueApprovedBy, setValueApprovedBy] = useState(null);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [isChecked, setIsChecked] = useState(false);
    const [items, setItems] = useState([
        { label: '2021', value: '2021' },
        { label: '2022', value: '2022' },
        { label: '2023', value: '2023' },
        { label: '2024', value: '2024' },
    ]);
    const [appropedByItems, setApprovedByItems] = useState([
        { label: 'hari', value: 'hari' },
        { label: 'shyam', value: 'shyam' },
        { label: 'gita', value: 'gita' },
        { label: 'sita', value: 'sita' },])

    const formatDate = (date: Date) => {
        return new Intl.DateTimeFormat('en-GB').format(date); // 'en-GB' gives dd/mm/yyyy format
    };

    const onStartDateChange = (event, selectedDate) => {
        if (event.type === 'set') {
            const currentDate = selectedDate || date;
            setStartDate(formatDate(currentDate));
            setDate(currentDate);
        }
        setShowStartDatePicker(false);
    };

    const onEndDateChange = (event, selectedDate) => {
        if (event.type === 'set') {
            const currentDate = selectedDate || date;
            setEndDate(formatDate(currentDate));
            setDate(currentDate);
        }
        setShowEndDatePicker(false);
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.label}>Leave Type</Text>
            <DropDownPicker
                style={styles.dropdown}
                open={open}
                placeholder={items[0].label}
                placeholderStyle={{ color: 'gray' }}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                dropDownContainerStyle={{
                    outlineColor: 'gray',
                    borderColor: 'gray',
                }}
            />

            {/* Start Date */}
            <Text style={styles.label}>Start Date</Text>
            {showStartDatePicker && (
                <DateTimePicker
                    style={styles.datepicker}
                    testID="dateTimePicker"
                    value={date}
                    mode="date"
                    is24Hour={true}
                    display="default"
                    onChange={onStartDateChange}
                />
            )}
            {!showStartDatePicker && (
                <Pressable onPress={() => setShowStartDatePicker(true)}>
                    <View style={styles.dateInputContainer}>
                        <TextInput
                            style={styles.datepicker}
                            value={startDate}
                            placeholder="Select Start Date"
                            editable={false}
                        />
                        <Calendar1Icon size={24} color="gray" />
                    </View>
                </Pressable>
            )}

            {/* End Date */}
            <Text style={styles.label}>End Date</Text>
            {showEndDatePicker && (
                <DateTimePicker
                    style={styles.datepicker}
                    testID="dateTimePicker"
                    value={date}
                    mode="date"
                    is24Hour={true}
                    display="default"
                    onChange={onEndDateChange}
                />
            )}
            {!showEndDatePicker && (
                <Pressable onPress={() => setShowEndDatePicker(true)}>
                    <View style={styles.dateInputContainer}>
                        <TextInput
                            style={styles.datepicker}
                            value={endDate}
                            placeholder="Select End Date"
                            editable={false}
                        />
                        <Calendar1Icon size={24} color="gray" />
                    </View>
                </Pressable>
            )}
            <View style={styles.checkbox_container}>
                <ExpoCheckbox value={isChecked} onValueChange={setIsChecked} />
                <Text>Half Day</Text>
            </View>
            <Text>Approved By</Text>
            <DropDownPicker
                style={styles.dropdown}
                open={openApprovedBy}
                placeholder={appropedByItems[0].label}
                placeholderStyle={{ color: 'gray' }}
                value={valueApprovedBy}
                items={appropedByItems}
                setOpen={setOpenApprovedBy}
                setValue={setValueApprovedBy}
                dropDownContainerStyle={{
                    outlineColor: 'gray',
                    borderColor: 'gray',
                }} >

            </DropDownPicker>

            <Text style={styles.label}>Description</Text>
            <TextInput
                style={[styles.text_input, { minHeight: 100 , textAlignVertical: 'top', textAlign: 'justify', fontSize: 16}]}
                multiline={true}
                numberOfLines={4}
                placeholder="Enter Description"/>

            <Text style={styles.label}>Attach Documents</Text>
            <View style={{
                width: '100%',
                height: 100,
                gap: 8,
                flexDirection: 'row',
               
            }}>
               <TouchableOpacity style={{flex: 1}}>
               <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                   
                }}>
                    <View style={{
                        display: 'flex',
                        backgroundColor: Colors.very_light_main_color,
                        width: '60%',
                        borderRadius: '50%',
                        height: '60%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <CameraIcon size={24} color={Colors.main_color} />
                        
                    </View>
                    <Text style={{textAlign: 'center'}}>Camera</Text>
                </View>

               </TouchableOpacity>
               <TouchableOpacity style={{flex: 1}}>
               <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  
                }}>
                    <View style={{
                       
                        display: 'flex',
                        backgroundColor: Colors.very_light_main_color,
                        width: '60%',
                        borderRadius: '50%',
                        height: '60%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <ImageIcon size={24} color={Colors.main_color} />
                        
                    </View>
                    <Text style={{textAlign: 'center'}}>Add Photo</Text>
                </View>
               </TouchableOpacity>
                <TouchableOpacity style={{flex: 1}}>
                    
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                   
                }}>
                    <View style={{
                       
                        display: 'flex',
                        backgroundColor: Colors.very_light_main_color,
                        width: '60%',
                        borderRadius: '50%',
                        height: '60%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <FilePlus size={24} color={Colors.main_color} />
                        
                    </View>
                    <Text style={{textAlign: 'center'}}>Add Document</Text>
                </View>
                </TouchableOpacity>
               
            </View>
            <FlatList 
                data={["1", "2", "3", "4", "5"]}
                renderItem={({item}) => (
                    <View style={{
                        marginTop: 8,
                        width: '100%',
                        flexDirection: 'row',
                        height: 75,
                       
                        alignItems: 'center',
                        paddingLeft: 8,
                    }}>
                        <View
                        style={{
                            width: 60,
                            height: 60,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: '50%',
                            backgroundColor: Colors.very_light_main_color,
                        }}>
                            <FileIcon size={24} color={Colors.main_color} />
                        </View>
                        <View>
                            <Text style={{marginLeft: 8}}>File Name</Text>
                            <Text style={{marginLeft: 8, color: 'gray'}}>File Size</Text>
                        </View>
                        
                    </View>
                )}/>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    checkbox_container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 16,
        gap: 8,
    }, text_input: {
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 8,
        padding: 16,
        marginVertical: 8,
    }
    ,
    datepicker: {
        flex: 1,
    },
    container: {
        flex: 1,
        width: '90%',
        marginHorizontal: 16,
        marginTop: 16,
        padding: 16,
        alignSelf: 'center',
        borderTopStartRadius: 8,
        borderTopEndRadius: 8,
        backgroundColor: 'white',
    },
    label: {
        marginTop: 8,
    },
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
    },
    dateInputContainer: {
        padding: 8,
        flexDirection: 'row',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 8,
        alignItems: 'center',
    },
});

export default LeaveForm;
