import { ApiResponseShape } from '../types';

export type Listing = {
    id: string;
    priceDescription: string;
    propertyType: string;
    images: string[];
    price: number;
    beds: number;
    bathrooms: number;
    lounge: number;
    currency: string;
    address: string;
    postcode: string;
    description: string;
    agentDetails: {
        displayName: string;
        logo: string;
    };
    listedOn: string;
    isFavourite: boolean;
    isNew: boolean;
    hasFloorMap: boolean;
    isSaved: boolean;
};

export enum ListingTypes {
    ACTIVE,
    FAVOURITE,
}

export type GroupedListings = Record<ListingTypes, Listing[]>;

export type ListingsResponse = ApiResponseShape<Record<ListingTypes, Listing[]>>;

export type ListingFavouriteResponse = ApiResponseShape<Listing>;
