import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Button } from '@react-navigation/elements';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const status = [ // Array com status
	{
		id: '1', // Identificador único 
		nome: 'João Siles',
		foto: require('../../assets/images/contacts/siles.jpg'),
		status: require('../../assets/images/posts/imagem2.jpg'),
	},
	{
		id: '2',
		nome: 'enejota',
		foto: require('../../assets/images/contacts/neymar.jpg'),
		status: require('../../assets/images/posts/imagem3.jpg'),
	},
	{
		id: '3',
		nome: 'Japones yuji',
		foto: require('../../assets/images/contacts/yuji.jpeg'),
		status: require('../../assets/images/posts/imagem4.jpg'),
	},
	{
		id: '4', 
		nome: 'PH',
		foto: require('../../assets/images/contacts/ph.jpg'),
		status: require('../../assets/images/posts/imagem5.jpg'),
	},
	{
		id: '5', 
		nome: 'Gustavo lopes',
		foto: require('../../assets/images/contacts/lopez.jpg'),
		status: require('../../assets/images/posts/imagem6.jpg'),
	},
];

const canais = [ // Array com canais
	{
		id: '1', // Identificador único
		nome: 'UOL | Corinthians Agora',
		mensagem: 'UOL NEWS ESPORTE NO AR, T...',
		hora: '19:05',
		foto: require('../../assets/images/channels/corinthians.png'),
	},
	{
		id: '2',
		nome: 'Receitas',
		mensagem: 'Dúvidas sobre os fármacos para di...',
		hora: '17:24',
		foto: require('../../assets/images/channels/receitas.png'),
	},
	{
		id: '3',
		nome: 'Japones yuji',
		mensagem: 'https://olhardigital.com.br/2026/03/0...',
		hora: '17:01',
		foto: require('../../assets/images/channels/olhar-digital.jpg'),
	},
	{
		id: '4', 
		nome: 'Desimpedidos',
		mensagem: 'Ele apareceu mesmo kkkkkkkkkkk',
		hora: '14:16',
		foto: require('../../assets/images/channels/desimpedidos.jpg'),
	},
	{
		id: '5',
		nome: 'TNT Sports | Palmeiras',
		mensagem: 'EU SOU O PIOR TIME DE TODOS!!',
		hora: '12:38',
		foto: require('../../assets/images/channels/palmeiras.png'),
	},
	{
		id: '6',
		nome: 'O GLOBO - Vasco',
		mensagem: 'Volante: Em alto final de contrataçã...',
		hora: '09:12',
		foto: require('../../assets/images/channels/vasco.png'),
	},
	{
		id: '7',
		nome: 'WhatsApp',
		mensagem: 'Keep the heart going! While you have...',
		hora: 'Ontem',
		foto: require('../../assets/images/channels/whatsapp.jpg'),
	},
	{
		id: '8',
		nome: 'Netflix Brasil',
		mensagem: 'só posso sextar se entrarem nesse...',
		hora: '06/03/2026',
		foto: require('../../assets/images/channels/netflix.png'),
	},
];

export default function Updates() {

  	return (
    <View style={ styles.container }>
      	<View style={ styles.header }>
        	<View style={ styles.topo }>
          		<Text style={ styles.titulo }>Atualizações</Text>
          		<View style={ styles.icones }>
            		<MaterialIcons name="search" size={ 24 } color="white" /> 
            		<MaterialIcons name="more-vert" size={ 24 } color="white" />
          		</View>
        	</View>
    	</View>
		<View style={ styles.statusSecao }>
			<Text style={ styles.statusTitulo }>Status</Text>
		</View>
		<View>
			<FlatList // Para listas grandes
				style={ styles.status }
				contentContainerStyle={ styles.statusItens }
				data={ status } // Qual lista sera exibida
				keyExtractor={ (item) => item.id } // Id único para cada item
				ListHeaderComponent={ // Componente fixo no topo
					<View style={ styles.statusItem }>
						<Image style={ styles.statusPostagem } source={ require('../../assets/images/posts/imagem1.jpg') } resizeMode='cover'/>
						<Image style={ styles.statusFoto } source={ require('../../assets/images/contacts/davi.jpeg') } resizeMode='contain' />
						<View style={ styles.statusFotoBorda }></View>
						<Text style={ styles.statusNome }>Adicionar Status</Text>
					</View>
				}
				renderItem={
					({ item }) => ( // Como cada conversa será desenhada na tela
						<View style={ styles.statusItem }>
							<Image style={ styles.statusPostagem } source={ item.status } resizeMode='cover'/>
							<Image style={ styles.statusFoto } source={ item.foto } resizeMode='contain'/>
							<View style={ styles.statusFotoBorda }></View>
							<Text style={ styles.statusNome }>{ item.nome }</Text>
						</View>
					)
				}
			/>
		</View>
		<View style={ styles.canaisSecao }>
			<Text style={ styles.canaisTitulo }>Canais</Text>
			<Text style={ styles.canaisDescobrir }>Descobrir</Text>
		</View>
		<View style={ styles.ultimaView }>
			<FlatList
				style={ styles.canais }
				contentContainerStyle={ styles.canaisItens }
				data={ canais }
				keyExtractor={ (item) => item.id }
				renderItem={
					({ item }) => (
						<View style={ styles.canalItem }>
							<Image style={ styles.canalFoto } source={ item.foto } resizeMode="contain"/>
							<View style={ styles.canalTextos }>
								<Text style={ styles.canalNome }>{ item.nome }</Text>
								<Text style={ styles.canalMensagem }>{ item.mensagem }</Text>
							</View>
							<Text style={ styles.canalHora }>{ item.hora }</Text>
						</View>
					)
				}
			/>
		</View>
      	<TouchableOpacity style={ styles.botao }> 
        	<Ionicons name="camera" size={ 24 } color="black" />
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
	},

	icones: {
		flexDirection: 'row',
		gap: 24, // Espaço entre ícones
	},

	statusSecao: {
		marginTop: 60,
		paddingLeft: 12,
	},

	statusTitulo: {
		color: '#FFFFFF',
		fontSize: 24,
	},

	status: {
		width: '100%',
		flexDirection: 'row',
		overflowX: 'auto',
		paddingLeft: 12,
	},
	
	statusItens: {
		flexDirection: 'row',
		gap: 4,
		height: 140,
	},

	statusItem: {
		position: 'relative',
		height: 140,
		width: 80,
		borderRadius: 16,
		overflow: 'hidden',
	},

	statusPostagem: {
		height: '100%',
		width: '100%',
	},

	statusFoto: {
		position: 'absolute',
		width: 36,
		height: 36,
		top: 30,
		left: 30,
		transform: [
			{ translateX: '-50%' },
			{ translateY: '-50%' }
		],
		borderRadius: '50%',
	},

	statusFotoBorda: {
		position: 'absolute',
		width: 44,
		height: 44,
		top: 30,
		left: 30,
		transform: [
			{ translateX: '-50%' },
			{ translateY: '-50%' }
		],
		borderRadius: '50%',
		borderWidth: 2,
		borderColor: '#25D366'
	},

	statusNome: {
		position: 'absolute',
		textAlign: 'center',
		bottom: 3,
		left: '50%',
		transform: [
			{ translateX: '-50%' }
		],
		width: 65,
		color: 'white',
		fontSize: 13,
	},

	canaisSecao: {
		paddingHorizontal: 12,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},

	canaisTitulo: {
		color: '#FFFFFF',
		fontSize: 24,
	},

	canaisDescobrir: {
		color: '#FFFFFF',
		fontSize: 14,
		paddingVertical: 8,
		paddingHorizontal: 12,
		backgroundColor: '#252b2a',
		borderRadius: 24,
	},

	canais: {
		width: '100%',
	},

	canaisItens: {
		gap: 8,
	},

	canalItem: {
		flexDirection: 'row', // Itens lado a lado
		alignItems: 'flex-start',
		gap: 12,
		paddingVertical: 8,
		paddingHorizontal: 12,
	},

	canalFoto: {
		width: 50,
		height: 50,
		borderRadius: '50%',
		backgroundColor: '#000000',
	},

	canalTextos: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		height: '100%',
	},

	canalNome: {
		color: 'white',
		fontSize: 16,
	},

	canalMensagem: {
		color: '#9AA0A6',
		fontSize: 15,
	},

	canalHora: {
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