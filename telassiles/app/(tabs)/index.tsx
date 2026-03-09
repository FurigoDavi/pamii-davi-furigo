import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const conversas = [ // Array com conversas
	{
		id: '1', // Identificador único
		nome: 'João Siles',
		mensagem: 'que tela perfeita, MB',
		hora: '07:45',
		foto: require('../../assets/images/contacts/siles.jpg'),
	},
	{
		id: '2',
		nome: 'enejota',
		mensagem: 'valeu pelas dicas pra bater penal...',
		hora: '05:27',
		foto: require('../../assets/images/contacts/neymar.jpg'),
	},
	{
		id: '3',
		nome: 'Japones yuji',
		mensagem: 'Eu sou mais louco que tod...',
		hora: '00:05',
		foto: require('../../assets/images/contacts/yuji.jpeg'),
	},
	{
		id: '4', 
		nome: 'PH',
		mensagem: 'Davi, o siles disse que quer...',
		hora: 'Ontem',
		foto: require('../../assets/images/contacts/ph.jpg'),
	},
	{
		id: '5',
		nome: 'Gustavo lopez',
		mensagem: 'fala q eu coloco la',
		hora: 'Ontem',
		foto: require('../../assets/images/contacts/lopez.jpg'),
	},
	{
		id: '6',
		nome: 'Carol',
		mensagem: 'sim',
		hora: 'Ontem',
		foto: require('../../assets/images/contacts/carol.jpg'),
	},
	{
		id: '7',
		nome: 'Markinho',
		mensagem: 'Sua ajuda foi ótima para a Meta, aqu...',
		hora: 'Ontem',
		foto: require('../../assets/images/contacts/mark.jpg'),
	},
	{
		id: '8',
		nome: 'Bill Portões',
		mensagem: 'Quer trabalhar para mim? Eu ofereç...',
		hora: 'Ontem',
		foto: require('../../assets/images/contacts/bill.jpg'),
	},
	{
		id: '9', 
		nome: 'Moska',
		mensagem: 'Gostaria de uma viagem grátis para Marte?',
		hora: 'Ontem',
		foto: require('../../assets/images/contacts/elon.jpg'),
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
		<View style={ styles.ultimaView }>
			<FlatList // Para listas grandes
				style={ styles.conversas }
				contentContainerStyle={ styles.conversasItens }
				data={ conversas } // Qual lista será exibida
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
		</View>
      	<TouchableOpacity style={ styles.botao }> 
        	<Ionicons name="chatbubble" size={ 24 } color="black" />
      	</TouchableOpacity> { /*botao clicavel*/ }
    </View>
  	);
}

const styles = StyleSheet.create({
	container: {
		height: '100%',
		gap: 20,
		overflowY: 'scroll',
		backgroundColor: '#0B1014',
	},

	header: {
		position: 'fixed',
		top: 0,
		flexDirection: 'column',
		gap: 12,
		width: '100%',
		padding: 12,
		backgroundColor: '#0B1014',
		zIndex: 1,
	},

	topo: {
		flexDirection: 'row', // Coloca elementos lado a lado
		justifyContent: 'space-between', // Separa os elementos entre si
		alignItems: 'center',
	},

	titulo: {
		flexGrow: 1,
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
		marginTop: 120,
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

	ultimaView: {
		paddingBottom: 80,
	},

	botao: {
		position: 'fixed', // Botão flutuante
		justifyContent: 'center',
		alignItems: 'center',
		right: 16,
		bottom: 86,
		backgroundColor: '#25D366',
		width: 60,
		height: 60,
		borderRadius: 16,
	},
});