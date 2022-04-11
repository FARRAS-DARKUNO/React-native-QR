
import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Button,
    TouchableOpacity
} from 'react-native';
import styles from '../style/main_style';
import { BarCodeScanner } from 'expo-barcode-scanner';

const MainPage = () => {

    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [text, setText] = useState('Belum Ada data ')

    const cameraCkeck = () => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })()
    }

    useEffect(() => {
        cameraCkeck();
    }, []);


    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        setText(data)
        console.log('Type: ' + type + '\nData: ' + data)
    };
    if (hasPermission === null) {
        return (
            <View style={styles.container}>
                <Text style={styles.textIzin} >Perlu Izin Camera</Text>
            </View>)
    }
    if (hasPermission === false) {
        return (
            <View style={styles.container}>
                <Text style={styles.textIzin}>Anda Tidak Mengizinkan Camrea</Text>
                <TouchableOpacity
                    style={styles.Touch}
                    onPress={() => cameraCkeck()}
                >
                    <Text style={styles.textScan}>
                        Izinkan
                    </Text>
                </TouchableOpacity>

            </View>)
    }

    return (
        <View style={styles.container}>
            <View style={styles.scaner}>
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style={{ height: 600, width: 600 }} />
            </View>
            <View style={styles.enter30} />
            {scanned &&
                <TouchableOpacity
                    style={styles.Touch}
                    onPress={() => setScanned(false)}
                >
                    <Text style={styles.textScan}>
                        SCAN ULANG
                    </Text>
                </TouchableOpacity>
            }
            <View style={styles.ViewText}>
                <Text style={styles.checkText}>Hasil Scan : </Text>
                <View style={styles.enter10} />
                <Text style={styles.checkText}>{text}</Text>
            </View>

        </View>
    )
}
export default MainPage

