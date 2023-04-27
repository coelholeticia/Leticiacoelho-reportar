import React from "react";
import { View,Text,StatusBar,} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import style from "./styleheader";

export default function Header(){
    return( 
        <View>
            <StatusBar backgroundColor="#006557"/>
            <View style={style.Header}>
                <Icon name="arrow-left" size={20} color="#fff" />
                <Text style={style.textTitle}>Reportar</Text>
            </View>
            
        </View>
    );
}

