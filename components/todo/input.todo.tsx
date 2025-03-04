import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native"

const styles = StyleSheet.create({
    todoInput: {
        borderColor: "violet",
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        marginBottom: 20,

    }
})

const InputTodo = () => {
    const [name, setName] = useState<string>("");
    return (
        <>
            <View>
                <TextInput
                    onChangeText={v => setName(v)}
                    autoCapitalize='none'
                    autoCorrect={false}
                    style={styles.todoInput} />

                <Button
                    title='add new'
                    onPress={() => alert("tap me")}
                />
            </View>
        </>
    )
}

export default InputTodo