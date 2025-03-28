import { APP_COLOR } from "@/utils/constant";
import { StyleSheet, Text, View } from "react-native";
import EvilIcons from '@expo/vector-icons/EvilIcons';

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: APP_COLOR.GREY,
        gap: 5,
        margin: 5,
        paddingHorizontal: 3,
        paddingVertical: 7,
        borderRadius: 3,
    },
});

const SearchHome = () => {
    return (
        <View style={styles.container}>
            <EvilIcons name="search" size={20} color="black" />
            <Text style={{ color: "#707070" }}>Deal Hot Hôm Nay Từ 0đ...</Text>
        </View >
    );
}

export default SearchHome;