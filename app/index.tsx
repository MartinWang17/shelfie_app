import { StyleSheet, Text, View, Image } from 'react-native';
import { Link } from 'expo-router';

const Home = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/img/logo_light.png')} style={styles.img}/>
            
            <Text style={styles.title}>The Number One</Text>
            <Text style={{ marginTop: 10, marginBottom: 30 }}>
                market place app for students!
            </Text>

            <Link href="/about" style={styles.link}>About</Link>
            <Link href="/contact" style={styles.link}>Contact</Link>

        </View>
    )
}

export default Home;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    img: {
        marginVertical: 20,
    },
    link: {
        marginVertical: 10,
        borderBottomWidth: 1,
    },
})