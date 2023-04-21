import { CheckBox } from "react-native-elements";
import { Switch } from "react-native";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled7 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><Switch style={styles.GTyQwltE} value="false"></Switch><CheckBox style={styles.OjUnWXoK} title="Checkbox Title" checked="false"></CheckBox></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  GTyQwltE: {
    width: 50,
    height: 25
  },
  OjUnWXoK: {
    width: 183,
    height: 69
  }
});
export default Untitled7;