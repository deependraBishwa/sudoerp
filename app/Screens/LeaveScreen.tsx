import React, { SetStateAction, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Colors from '@/colors/colors';
import ButtonGroup from '@/components/ButtonGroup';
import AllLeave from '@/components/leave/AllLeave';
import PendingLeave from '@/components/leave/PendingLeave';
import UpcomingLeave from '@/components/leave/UpcomingLeave';
import CompletedLeave from '@/components/leave/CompletedLeave';
import { PlusIcon } from 'lucide-react-native';

const LeaveScreen = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handlePress = (index: SetStateAction<number>) => {
    setSelectedIndex(index);
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.header} />
      <View style={styles.content}>
        <View style={styles.statsContainer}>
          <Text style={styles.statsTitle}>Leave Stats</Text>
          <View style={styles.stats}>
            <View style={styles.statItem}>
              <Text style={[styles.statValue, { color: Colors.main_color }]}>8</Text>
              <Text style={styles.statLabel}>Available</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={[styles.statValue, { color: 'green' }]}>8</Text>
              <Text style={styles.statLabel}>Approved</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={[styles.statValue, { color: Colors.dark_yellow }]}>8</Text>
              <Text style={styles.statLabel}>Pending</Text>
            </View>
          </View>
          <View style={styles.stats}>
            <View style={styles.statItem}>
              <Text style={[styles.statValue, { color: Colors.light_brand_color }]}>8</Text>
              <Text style={styles.statLabel}>Applied</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={[styles.statValue, { color: 'red' }]}>8</Text>
              <Text style={styles.statLabel}>Rejected</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={[styles.statValue, { color: 'black' }]}>25</Text>
              <Text style={styles.statLabel}>Total Leave</Text>
            </View>
          </View>
        </View>
        <View style={styles.buttonGroupContainer}>
          <ButtonGroup
            selectedIndex={selectedIndex}
            buttons={["All", "Pending", "Upcoming", "Completed"]}
            onSelect={handlePress}
          />
        </View>


        {selectedIndex === 0 && <AllLeave />}
        {selectedIndex === 1 && <PendingLeave />}
        {selectedIndex === 2 && <UpcomingLeave />}
        {selectedIndex === 3 && <CompletedLeave />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.very_light_main_color,
  },
  header: {
    backgroundColor: Colors.main_color,
    height: 200,
  },
  content: {
    flex: 1,
    width: '100%',
    marginTop: -150, // Adjust this value as needed
  },
  statsContainer: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 16,
  },
  statsTitle: {
    fontSize: 20,
    color: 'black',
    marginBottom: 16,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 18,
    color: 'blue',
  },
  statLabel: {
    fontSize: 14,
    color: 'gray',
  },
  buttonGroupContainer: {
    width: '90%',
    marginTop: 30,
    alignSelf: 'center',
  },
  listItem: {
    width: '100%',
    padding: 8,
    marginTop: 8,
    height: 200,
    borderRadius: 10,
    backgroundColor: 'white',
  },
});

export default LeaveScreen;
