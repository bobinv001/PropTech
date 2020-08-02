import React from 'react';
import ListingCard from '../../components/ListingCard';
import { Grid } from '../../common/Grid';
import { Box } from '../../common/Box';
import { Text } from '../../common/Text';
import { Listings as service } from '../../services/listings';
import { Tab, Tabs, TabPanel } from '../../common/Tabs';
import { GroupedListings, ListingTypes } from '../../services/listings/types';
import { ResponseType } from '../../services/types';

const ListingsContainer: React.FC = () => {
    const [listings, setListings] = React.useState<GroupedListings>();
    const [error, setError] = React.useState<{ title: string; message: string }>();
    const [tab, setTab] = React.useState<ListingTypes>(ListingTypes.ACTIVE);

    React.useEffect(() => {
        getUpdatedListings();
    }, []);

    const getUpdatedListings = async () => {
        const response = await service.getListings();
        if (response.responseType === ResponseType.API_SUCCESS) {
            setListings(response.data);
        } else {
            setError(response.data);
        }
    };

    const handleClick = (tab: ListingTypes) => () => {
        setTab(tab);
    };

    const handleFavouriteListing = async (id: string) => {
        // todo: show confirm modal
        const response = await service.favouriteListing(id);
        if (response.responseType === ResponseType.API_SUCCESS) {
            getUpdatedListings();
        } else {
            setError(response.data);
        }
    };

    const listingsToShow = listings?.[tab] ?? [];

    return (
        <Box p={3} bg="near-white">
            <Box py={3}>
                <Text color="brand-color" fontSize={5} fontWeight={3}>
                    Favourite Listings
                </Text>
            </Box>
            {error && (
                <Box as="p" role="alert" bg="error" color="white" p={3} m={3} display="flex" flexDirection="column">
                    <Text fontSize={3} fontWeight={8}>
                        {error.title}
                    </Text>
                    <Text>{error.message}</Text>
                </Box>
            )}
            {/* todo: move tabs to its own component */}
            <Tabs>
                <Tab index={ListingTypes.ACTIVE} onClick={handleClick(ListingTypes.ACTIVE)} isActive={tab === ListingTypes.ACTIVE}>
                    All
                </Tab>
                <Tab index={ListingTypes.ACTIVE} onClick={handleClick(ListingTypes.FAVOURITE)} isActive={tab === ListingTypes.FAVOURITE}>
                    Favourite
                </Tab>
            </Tabs>
            <TabPanel index={tab}>
                <Grid gridTemplateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(auto-fill, minmax(30em, 1fr))']} gridGap={[3]}>
                    {listingsToShow.map((listing) => (
                        <ListingCard key={listing.id} listing={listing} favouriteListing={handleFavouriteListing} />
                    ))}

                    {!error && !listingsToShow.length && <Text>No listings to show</Text>}
                </Grid>
            </TabPanel>
        </Box>
    );
};

export default ListingsContainer;
