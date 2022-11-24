import { ScrollView, StyleSheet, Text, useColorScheme, View } from 'react-native';
import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Section from '@/components/section';

const Home = () => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
            <Header />
            <View
                style={{
                    backgroundColor: isDarkMode ? Colors.black : Colors.white,
                }}
            >
                <Section title="Step One">
                    Edit <Text style={styles.highlight}>App.tsx</Text> to change this screen and
                    then come back to see your edits.
                </Section>
                <Section title="See Your Changes">
                    <ReloadInstructions />
                </Section>
                <Section title="Debug">
                    <DebugInstructions />
                </Section>
                <Section title="Learn More">Read the docs to discover what to do next:</Section>
                <LearnMoreLinks />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    highlight: {
        fontWeight: '700',
    },
});

export default Home;