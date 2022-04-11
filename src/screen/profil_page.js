
import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Button,
    TouchableOpacity
} from 'react-native';
import styles from '../style/profil_style';


const ProfilFarras = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.textScan}>
                ABDURRACHMAN FARRAS
            </Text>
            <Text style={styles.textScan}>
                119140052
            </Text>
        </View>
    )
}
export default ProfilFarras

