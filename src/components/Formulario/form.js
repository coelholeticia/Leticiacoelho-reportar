import React, {useState} from 'react';
import { View,CheckBox,TextInput,Text,Button } from "react-native";
import styleForm from './formstyle';


export default function Form(){
    const [isSelected, setSelection] = useState(false);
    return( 
      <View style={styleForm.containerMain}>
            <View style={styleForm.conatainerCheck}>
                <View style={styleForm.check}>
                    <CheckBox value={isSelected} onValueChange={setSelection}/>
                    <Text>O profissional não compareceu.</Text>
                </View>
                <View style={styleForm.check}>
                    <CheckBox   value={isSelected} onValueChange={setSelection}/>
                    <Text>O profissional não prestou um bom serviço.</Text>
                </View>
                <View style={styleForm.check}>
                    <CheckBox value={isSelected} onValueChange={setSelection}/>
                    <Text>Outro.</Text>

                </View>
            </View>
            <View style={styleForm.containerInput}>
                <TextInput placeholder="Titulo" style={styleForm.inputStyle} />
                <TextInput placeholder="Especifique o que houve" style={styleForm.inputStyle2}/>
            </View>
            <View style={styleForm.botao}>
                <Button title='Reportar' onPress= { () => ({nativeEvent: PressEvent })} />
            </View>
      </View>
    );
}
