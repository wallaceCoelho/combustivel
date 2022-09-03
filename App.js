import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

export default function App() {
  // CÓDIGO REACT
  const [valor1, setValor1] = useState('');
	const [valor2, setValor2] = useState('');
	const [resultado, setResultado] = useState('');
  let gas = 'Abastecer com Gasolina';
  let etanol = 'Abastecer com Etanol';

  // FUNÇÃO DIVISÃO
  dividir = () => {
    let res = parseFloat(valor1) / parseFloat(valor2);

    if (res > 0.7){
      setResultado(gas);
    }
    else {
      setResultado(etanol);
    }
  }

  return (
    <View style={styles.container}>

      {/* TÍTULO */}
      <View >
        <Text style={styles.titulo}>Cálculo de Combustível</Text>
      </View>
      
      {/* INPUT PARA RECEBER VALOR DA GASOLINA */}
      <View style={styles.section}>
      <Text style={styles.label}>Valor Gasolina</Text>
        <TextInput style={styles.input}
          value= {valor1}
          onChangeText={(valor) => setValor1(valor)}
          keyboardType="numeric"
          >  
        </TextInput>
      </View>

      {/* INPUT PARA RECEBER VALOR DO ETANOL */}
      <View style={styles.section}>
      <Text style={styles.label}>Valor Etanol</Text>
        <TextInput style={styles.input}
          value= {valor2}
          onChangeText={(valor) => setValor2(valor)}
          keyboardType="numeric"
          >  
        </TextInput>
      </View>

      {/* BOTÃO PARA GERAR RESPOSTA */}
      <TouchableOpacity 
        style={styles.botao}
        onPress = {dividir}>
      <Text style={styles.textoBotao}>Calcular</Text>
      </TouchableOpacity>

      {/* RESPOSTA */}
      <View style={styles.blocoRes}>
        <Text style={styles.resposta}>
          {resultado}
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  section:{
    position: 'relative',
    width: '100%',
    marginTop: 40
  },

  input: {
    borderWidth: 1.5,
    borderColor: "#20232a",
    marginTop: '2%',
    width: '80%',
    height: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 25,
    textAlign: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10
  },

  titulo: {
    fontSize: 30
  },

  botao: {
    marginTop: 50,
    width: '50%',
    height: 50,
    backgroundColor: '#CCC',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5
  },

  textoBotao: {
    textAlign: 'center',
    paddingTop: 3,
    fontSize: 30
  },

  label: {
    marginLeft: 40,
    fontSize: 18
  },

  blocoRes: {
    marginTop: 40
  },

  resposta: {
    fontSize: 30
  }
});
