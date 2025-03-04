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

interface IProps {
    addTodo: (V: string) => void;
}

const InputTodo = (props: IProps) => {

    const { addTodo } = props

    const [name, setName] = useState<string>("");

    const handleOnPress = () => {
        addTodo(name);
    }



    return (
        <>
            <View>
                <TextInput
                    onChangeText={v => setName(v)}
                    value={name}
                    autoCapitalize='none'
                    autoCorrect={false}
                    style={styles.todoInput} />

                <Button
                    title='add new'
                    onPress={handleOnPress}
                />
            </View>
        </>
    )
}

export default InputTodo