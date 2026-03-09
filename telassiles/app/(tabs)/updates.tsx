import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const status = [ // Array com status
	{
		id: '1', // Identificador único 
		nome: 'João Siles',
		foto: require('../../assets/images/siles.jpg'),
		status: require('../../assets/images/imagem.jpg'),
	},
	{
		id: '2',
		nome: 'enejota',
		foto: require('../../assets/images/neymar.jpg'),
		status: require('../../assets/images/imagem.jpg'),
	},
	{
		id: '3',
		nome: 'Japones yuji',
		foto: require('../../assets/images/yuji.jpeg'),
		status: require('../../assets/images/imagem.jpg'),
	},
	{
		id: '4', 
		nome: 'PH',
		foto: require('../../assets/images/ph.jpg'),
		status: require('../../assets/images/imagem.jpg'),
	},
	{
		id: '5', 
		nome: 'Gustavo lopes',
		foto: require('../../assets/images/lopez.jpg'),
		status: require('../../assets/images/imagem.jpg'),
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
      	<FlatList // Para listas grandes
			style={ styles.status }
			contentContainerStyle={ styles.statusItens }
        	data={ status } // Qual lista sera exibida
        	keyExtractor={ (item) => item.id } // Id único para cada item
			ListHeaderComponent={ // Componente fixo no topo
				<View style={ styles.novoStatus }>
					<View style={styles.novoStatusFundo}></View>
					<Image style={styles.novoStatusFoto} /* source={} */ />
					<Text style={ styles.novoStatusNome }>Adicionar Status</Text>
				</View>
  			}
        	renderItem={
				({ item }) => ( // Como cada conversa será desenhada na tela
					<View style={styles.statusItem}>
						<Image style={styles.statusPostagem} source={item.status} />
						<Image style={styles.foto} source={item.foto} />
						<View style={styles.fotoBorda}></View>
						<Text style={styles.nome}>{item.nome}</Text>
					</View>
        		)
			}
      	/>
      	{/* <FlatList // Para listas grandes
			style={ styles.conversas }
			contentContainerStyle={ styles.conversasItens }
        	data={ conversas } // Qual lista sera exibida
        	keyExtractor={ (item) => item.id } // Id único para cada item
        	renderItem={
				({ item }) => ( // Como cada conversa será desenhada na tela
					<View style={ styles.conversa }>
						<Image style={ styles.foto } source={ item.foto }/>
						<View style={ styles.textos }>
							<Text style={ styles.nome }>{ item.nome }</Text>
							<Text style={ styles.mensagem }>{ item.mensagem }</Text>
						</View>
						<Text style={ styles.hora }>{ item.hora }</Text>
					</View>
        		)
			}
      	/> */}
      	<TouchableOpacity style={ styles.botao }> 
        	<Ionicons name="camera" size={ 24 } color="black" />
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
	},

	icones: {
		flexDirection: 'row',
		gap: 24, // Espaço entre ícones
	},

	statusTitulo: {
		color: '#FFFFFF'
	},

	status: {
		width: '100%',
		backgroundColor: '#faf',
		flexDirection: 'row',
		overflowX: 'auto',
	},
	
	statusItens: {
		flexDirection: 'row',
		gap: 4,
		overflowX: 'auto',
	},

	statusItem: {
		position: 'relative',
		height: 150,
		width: 80,
		borderRadius: 16,
		overflow: 'hidden',
	},

	statusPostagem: {
		height: '100%',
		width: '100%',
	},

	foto: {
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

	fotoBorda: {
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