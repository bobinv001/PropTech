import React from 'react';
import { Box } from '../../common/Box';
import { Text } from '../../common/Text';
import { BedIcon } from '../../common/icons/BedIcon';
import { BathIcon } from '../../common/icons/BathIcon';
import { LoungeIcon } from '../../common/icons/LoungeIcon';
import { Listing } from '../../services/listings/types';

const ICON_WIDTH = { width: 12 };

export const PropertyDetails: React.FC<Listing> = (props) => {
    const roomText = props.beds > 1 ? 'beds' : 'bed';

    return (
        <Box px={[3, 3, 3]} py={[3, 3, 3]} position="relative" width={['100%', '100%', '60%']}>
            <Box position="absolute" right={3} top={3}>
                <img src={props.agentDetails.logo} alt={props?.agentDetails?.displayName} width="80" />
            </Box>
            <Box mb={1}>
                <Text color="brand-color" fontWeight={5} fontSize={1}>
                    {props.priceDescription}
                </Text>
            </Box>
            <Box mb={2}>
                <Text color="brand-color" fontWeight={8} fontSize={4}>
                    {props.currency}
                    {props.price}
                </Text>
            </Box>
            <Box mb={2}>
                <RoomDetails value={props.beds}>
                    <BedIcon style={ICON_WIDTH} />
                </RoomDetails>
                <RoomDetails value={props.bathrooms}>
                    <BathIcon style={ICON_WIDTH} />
                </RoomDetails>
                <RoomDetails value={props.lounge}>
                    <LoungeIcon style={ICON_WIDTH} />
                </RoomDetails>
            </Box>
            <Box>
                <Text fontSize={1} fontWeight={5} color="dark-gray">
                    {props.beds} {roomText} {props.propertyType} for sale
                </Text>
            </Box>
            <Box>
                <Text fontSize={0}>{props.address}</Text>
            </Box>
        </Box>
    );
};

const RoomDetails: React.FC<React.PropsWithChildren<{ value: number }>> = (props) => {
    return (
        <Box mr={3} display="inline-block">
            {props.children}
            <Text as="span" p={2} fontSize={1}>
                {props.value}
            </Text>
        </Box>
    );
};
