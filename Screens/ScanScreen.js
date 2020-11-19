import * as React from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import * as Permissions from "expo-permissions";
import { BarCodeScanner } from "expo-barcode-scanner";

export default class ScanScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      hasCameraPermissions: null,
      scanned: false,
      scannedData: "",
      buttonState: "normal",
    };
  }
  getCameraPermissions = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);

    this.setState({
      /*status === "granted" is true when user has granted permission
          status === "granted" is false when user has not granted the permission
        */
      hasCameraPermissions: status === "granted",
      buttonState: clicked,
      scanned: false,
    });
  };

  handleBarCodeScanned = async ({ type, data }) => {
    this.setState({
      scanned: true,
      buttonState: "normal",
    });
  };

  render() {
    const hasCameraPermissions = this.state.hasCameraPermissions;
    const scanned = this.state.scanned;
    const buttonState = this.state.buttonState;

    if (buttonState !== "normal" && hasCameraPermissions) {
      return (
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
        />
      );
    } else if (buttonState === "normal") {
      return (
        <View>
          <View>
            <Image
              source={require("../assets/barCode.jpg")}
              style={{
                width: 100,
                height: 100,
                marginTop: 250,
                marginLeft: 250,
              }}
            />
          </View>
          <TouchableOpacity
            style={styles.scanButton}
            onPress={() => {
              this.getCameraPermissions();
            }}
          >
            <Text style={styles.buttonText}>QR Code Scan</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  scanButton: {
    marginTop: 50,
    marginLeft: 250,
    backgroundColor: "#66BB6A",
    width: 100,
    borderWidth: 1.5,
    height: 100,
  },
  buttonText: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 22,
  },
});
