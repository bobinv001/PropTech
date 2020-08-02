import React from 'react';
import styled from 'styled-components';
import { Box } from '../../common/Box';
import { Text } from '../../common/Text';
import { PropertyDetails } from './PropertyDetails';
import { Listing } from '../../services/listings/types';
import { isToday } from '../../common/utils';
import ImageCover from './ImageCover';

type Props = {
    listing: Listing;
    favouriteListing: (id: string) => void;
};

const StyledFavouriteButton = styled.button`
    text-decoration: none;
    border: 0px none;
    background: ${(props) => props.theme.colors['brand-color']};
    padding: ${(props) => props.theme.space[2]}px;
    color: ${(props) => props.theme.colors.white};
    cursor: pointer;
`;

const ListingCard: React.FC<Props> = (props) => {
    const onFavouriteListing = () => {
        props.favouriteListing(props.listing.id);
    };

    const listedOnDate = new Date(props.listing.listedOn);
    const isNew = isToday(listedOnDate);

    return (
        <Box data-testid="listing-card" bg="white" color="black" border={1} borderColor="blacks.3" borderRadius={2} position="relative">
            <Box display="flex" flexWrap={['wrap', 'wrap', 'nowrap']} pb={3}>
                <Box width={['100%', '100%', '40%']} overflow="hidden" position="relative">
                    {isNew && <JustAddedBadge />}
                    <ImageCover imageUrl={props.listing.images[0]} imageDescription={props.listing.description} />
                </Box>
                <PropertyDetails {...props.listing} />
            </Box>
            <Box display="flex" justifyContent="space-between" alignItems="center" borderTop={1} borderColor="light-gray" p={3}>
                <Text fontSize={0}>Listed on: {listedOnDate.toDateString()}</Text>
                {props.listing.isFavourite ? (
                    <Text fontSize={0} color="light-silver">
                        Favourite
                    </Text>
                ) : (
                    <StyledFavouriteButton onClick={onFavouriteListing}>Favourite Listing?</StyledFavouriteButton>
                )}
            </Box>
        </Box>
    );
};

export const JustAddedBadge: React.FC = () => {
    return (
        <Box position="absolute" bg="steel-gray" color="white" borderRadius={1} top={2} left={2} px={2} pb={1} zIndex={1}>
            <Text fontSize={0} fontWeight={8}>
                Just added
            </Text>
        </Box>
    );
};

export default ListingCard;
