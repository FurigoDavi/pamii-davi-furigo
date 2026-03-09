import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const conversas = [ // Array com conversas
	{
		id: '1', // Identificador único
		nome: 'João Sifiles',
		mensagem: 'que tela perfeita, MB',
		hora: '07:45',
		foto: require('../../assets/images/siles.jpg'),
	},
	{
		id: '2',
		nome: 'enejota',
		mensagem: 'valeu pelas dicas pra bater penal...',
		hora: '05:27',
		foto: require('../../assets/images/neymar.jpg'),
	},
	{
		id: '3',
		nome: 'Japones yuji',
		mensagem: 'Eu sou mais louco que tod...',
		hora: '00:05',
		foto: require('../../assets/images/yuji.jpeg'),
	},
	{
		id: '4', 
		nome: 'PH',
		mensagem: 'Davi, o siles disse que quer...',
		hora: 'Ontem',
		foto: require('../../assets/images/ph.jpg'),
	},
	{
		id: '5',
		nome: 'Gustavo lopez',
		mensagem: 'fala q eu coloco la',
		hora: 'Ontem',
		foto: require('../../assets/images/lopez.jpg'),
	},
	{
		id: '6',
		nome: 'João Sifiles',
		mensagem: 'que tela perfeita, MB',
		hora: '07:45',
		foto: require('../../assets/images/siles.jpg'),
	},
	{
		id: '7',
		nome: 'enejota',
		mensagem: 'valeu pelas dicas pra bater penal...',
		hora: '05:27',
		foto: require('../../assets/images/neymar.jpg'),
	},
	{
		id: '8',
		nome: 'Japones yuji',
		mensagem: 'eu sou mais louco que tod...',
		hora: '00:05',
		foto: require('../../assets/images/yuji.jpeg'),
	},
	{
		id: '9', 
		nome: 'PH',
		mensagem: 'Davi, o siles disse que quer...',
		hora: 'Ontem',
		foto: require('../../assets/images/ph.jpg'),
	},
	{
		id: '10', 
		nome: 'Gustavo lopez',
		mensagem: 'fala q eu coloco la',
		hora: 'Ontem',
		foto: require('../../assets/images/lopez.jpg'),
	},
];

export default function HomeScreen() {

  	return (
    <View style={ styles.container }>
      	<View style={ styles.header }>
        	<View style={ styles.topo }>
          		<Text style={ styles.titulo }>WhatsApp</Text>
          		<View style={ styles.icones }>
            		<Ionicons name="camera" size={ 24 } color="white" /> 
            		<MaterialIcons name="more-vert" size={ 24 } color="white" />
          		</View>
        	</View>
			<View style={ styles.pesquisa }>
				<Ionicons name="search" size={ 24 } color="#9AA0A6" />
				<Text style={ styles.textoPesquisa }>Pergunte à Meta AI ou pesquise</Text>
			</View>
    	</View>
      	<FlatList // Para listas grandes
			style={ styles.conversas }
			contentContainerStyle={ styles.conversasItens }
        	data={ conversas } // Qual lista sera exibida
        	keyExtractor={ (item) => item.id } // Id único para cada item
        	renderItem={
				({ item }) => ( // Como cada conversa será desenhada na tela
					<View style={ styles.conversa }>
						<Image style={ styles.foto } source={ item.foto } resizeMode="contain"/>
						<View style={ styles.textos }>
							<Text style={ styles.nome }>{ item.nome }</Text>
							<Text style={ styles.mensagem }>{ item.mensagem }</Text>
						</View>
						<Text style={ styles.hora }>{ item.hora }</Text>
					</View>
        		)
			}
      	/>
      	<TouchableOpacity style={ styles.botao }> 
        	<Ionicons name="chatbubble" size={ 24 } color="black" />
      	</TouchableOpacity> { /*botao clicavel*/ }
    </View>
  	);
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center', // Coloca os itens no topo
		alignItems: 'flex-start',
		height: '100%',
		backgroundColor: '#0B1014',
	},

	header: {
		flexDirection: 'column',
		gap: 12,
		width: '100%',
		padding: 12,
	},

	topo: {
		flexDirection: 'row', // Coloca elementos lado a lado
		justifyContent: 'space-between', // Separa os elementos entre si
		alignItems: 'center',
	},

	titulo: {
		color: 'white',
		fontSize: 24,
		fontWeight: 'bold',
	},

	icones: {
		flexDirection: 'row',
		gap: 24, // Espaço entre ícones
	},

	pesquisa: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 12,
		borderRadius: 32,
		height: 48,
		backgroundColor: '#373E44',
		paddingHorizontal: 16,
	},

	textoPesquisa: {
		color: '#9AA0A6',
		fontSize: 15,
	},

	conversas: {
		width: '100%',
	},

	conversasItens: {
		gap: 8,
	},

	conversa: {
		flexDirection: 'row', // Itens lado a lado
		alignItems: 'flex-start',
		gap: 12,
		paddingVertical: 8,
		paddingHorizontal: 12,
	},

	foto: {
		width: 50,
		height: 50,
		borderRadius: '50%',
	},

	textos: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		height: '100%',
	},

	nome: {
		color: 'white',
		fontSize: 16,
	},

	mensagem: {
		color: '#9AA0A6',
		fontSize: 15,
	},

	hora: {
		color: '#9AA0A6',
		fontSize: 13,
	},

	botao: {
		position: 'absolute', // Botão flutuante
		justifyContent: 'center',
		alignItems: 'center',
		right: 16,
		bottom: 16,
		backgroundColor: '#25D366',
		width: 60,
		height: 60,
		borderRadius: 16,
	},
});