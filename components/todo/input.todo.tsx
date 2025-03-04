import { useState } from "react";
import { Alert, Button, StyleSheet, TextInput, View } from "react-native"

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

    const handleNewTodo = () => {
        if (!name) {
            Alert.alert(
                "Thông tin không hợp lệ",
                "Tiêu đề không được để trống",
                [
                    {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                    },
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                ]
            )
            return;
        }
        addTodo(name);
        setName("")
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
                    onPress={handleNewTodo}
                />
            </View>
        </>
    )
}

export default InputTodo