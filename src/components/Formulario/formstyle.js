import { StyleSheet } from "react-native";


const styleForm = StyleSheet.create({
    containerMain:{
        flex: 1,
        justifyContent: "center",  
        alignItems:"center"  
    },
    check:{
       
        flexDirection: "row",
        justifyContent: "flex-start",
        margin: 30,
        gap: 10
        
    },
    containerInput:{
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: 50

    },

    inputStyle:{
        backgroundColor: "#fff",
        color: "#d9d9d9",
        paddingVertical: 10,
        paddingHorizontal: 70
    },

    
    inputStyle2:{
        backgroundColor: "#fff",
        color: "#d9d9d9",
        paddingVertical: 30,
        paddingHorizontal: 70
    },

    botao:{
        justifyContent: "center",
        alignItems: "center",
        margin: 50,
        backgroundColor: "#07689f" 
    },

   
    

});

export default styleForm;