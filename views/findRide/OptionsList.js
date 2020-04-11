import LottieView from 'lottie-react-native';
import { Button, Card, CardItem, Icon, List } from 'native-base';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { HeeboText } from '../../components/HeeboText';
import OptionalRow from './OptionalRow';

const styles = StyleSheet.create({
    lottie: {
        width: 250,
        height: 250,
    },
    lottieContainer: {
        marginTop: 60,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flex: 1
    },
    notFound: {
        fontSize: 40,
        textAlign: 'center'
    },
    optionsCard: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 0,
        marginBottom: 0,
        marginLeft: 0,
        marginRight: 0,
        elevation: 0.001,
        backgroundColor: 'transparent',
    },
    refreshButton: {
        width: '100%',
        backgroundColor: 'black',
        elevation: 0,
        alignItems: 'center',
        justifyContent: 'center',
        height: '5.5%',
    },
    refreshText: {
        fontSize: 17,
        color: 'white'
    },
    cardItem: {
        width: '100%',
        opacity: 0.8,
        elevation: 0,
        height: '5%',
        paddingTop: 0,
        paddingBottom: 0,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
    },
});

const OptionsList = ({ optionalOffers, phoneNumber, refreshPage }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [optionsList, setOptionsList] = useState(undefined);
    const [isOptionsListReady, setOptionsListReady] = useState(false);

    const showNoOptionalRides = () => {
        return (
            <View style={styles.lottieContainer}>
                <LottieView
                    style={styles.lottie}
                    source={require('../../assets/lottie/no-rides-founded.json')}
                    autoPlay
                    loop={false}
                />
                <HeeboText style={styles.notFound}>לא מצאתי טרמפים רלוונטיים...</HeeboText>
                {showRefreshButton()}
            </View>
        )
    };

    const showRefreshButton = () => {
        <Button style={styles.refreshButton} onPress={() => refreshPage()}>
            <HeeboText style={styles.refreshText} isBold={true}>חפש מחדש</HeeboText>
            <Icon name="search1" type={'AntDesign'} />
        </Button>
    };

    const createRowsOfOptions = () => {
        if (isLoading && !isOptionsListReady) {
            var optionalOffersList = [];

            console.log(optionalOffers);
            if (optionalOffers.length !== 0) {
                optionalOffers.forEach(offer => {
                    optionalOffersList.push(<OptionalRow phoneNumber={phoneNumber} offerID={offer.offerID} offerData={offer.offerData} />)
                });
            }

            setOptionsList(optionalOffersList);
            setOptionsListReady(true);
            setIsLoading(false);
        }
    };

    if (isLoading) {
        if (!isOptionsListReady) {
            createRowsOfOptions();
        }

        return (
            <View style={styles.lottieContainer}>
                <LottieView
                    style={styles.lottie}
                    source={require('../../assets/lottie/4966-onboarding-car.json')}
                    autoPlay
                    loop={true}
                />
            </View>
        );
    } else if (isOptionsListReady && optionsList.length == 0) {
        return (showNoOptionalRides());
    }

    return (
        <Card style={styles.optionsCard}>
            <CardItem style={styles.cardItem}>
                <HeeboText style={styles.refreshText} isBold={true}>רשימת האופציות:</HeeboText>
            </CardItem>
            <ScrollView style={{ width: '100%' }}>
                <List>
                    {optionsList}
                </List>
            </ScrollView>
            {showRefreshButton()}
        </Card>
    );
};

export default OptionsList;