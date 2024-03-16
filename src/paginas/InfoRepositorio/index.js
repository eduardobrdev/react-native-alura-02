import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import estilos from './estilos';
import { apagaRepositorio, atualizaRepositorio, buscaRepositorioById } from '../../servicos/requisicoes/repositorios';

export default function InfoRepositorio({ route, navigation }) {
    const [nome, setNome] = useState(route.params.item.name);
    const [data, setData] = useState(route.params.item.data);

    async function salvar() {
        const resultado = await atualizaRepositorio(
            route.params.item.postId,
            nome,
            data,
            route.params.item.id
        )

        if (resultado === 'Sucesso') {
            Alert.alert('Repositório Atualizado.')
            navigation.goBack()
        } else {
            Alert.alert(`Erro ao Atualizar o repositório ${nome}.`)
        }
    }

    async function deletar() {
        const resultado = await apagaRepositorio(route.params.item.id)
        if (resultado === 'Sucesso') {
            Alert.alert('Repositório Apagado.')
            navigation.goBack()
        }
        else {
            Alert.alert('Erro ao Apagar Repositório.')
        }
    }

    return (
        <View style={estilos.container}>
            <TextInput
                placeholder="Nome do repositório"
                autoCapitalize="none"
                style={estilos.entrada}
                value={nome}
                onChangeText={setNome}
            />
            <TextInput
                placeholder="Data de criação"
                autoCapitalize="none"
                style={estilos.entrada}
                value={data}
                onChangeText={setData}
            />
            <TouchableOpacity 
                style={estilos.botao}
                onPress={salvar}
            >
                <Text style={estilos.textoBotao}>
                    Salvar
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={deletar}
                style={[estilos.botao, {backgroundColor: '#DD2B2B', marginTop: 10}]} 
            >
                <Text style={estilos.textoBotao}>
                    Deletar
                </Text>
            </TouchableOpacity>
        </View>
    );
}
