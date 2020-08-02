import { Listing, ListingTypes, GroupedListings, ListingsResponse, ListingFavouriteResponse } from './types';
import { handleError } from '../error';
import { HEADERS } from '../constants';
import { ResponseType, GenericErrorResponse } from '../types';

export class Listings {
    private static LISTINGS_API = '/listings';

    private static groupListings(listings: Listing[]) {
        return listings.reduce(
            (acc, listing) => {
                if (listing.isFavourite) {
                    acc[ListingTypes.FAVOURITE].push(listing);
                } else {
                    acc[ListingTypes.ACTIVE].push(listing);
                }
                return acc;
            },
            {
                [ListingTypes.FAVOURITE]: [],
                [ListingTypes.ACTIVE]: [],
            } as GroupedListings
        );
    }

    public static async getListings(): Promise<ListingsResponse | GenericErrorResponse> {
        try {
            const response = await fetch(Listings.LISTINGS_API);
            const data = Listings.groupListings(await response.json());
            return {
                data,
                responseType: ResponseType.API_SUCCESS,
            };
        } catch (error) {
            return handleError(error);
        }
    }

    public static async favouriteListing(id: string): Promise<ListingFavouriteResponse | GenericErrorResponse> {
        try {
            const response = await fetch(`${Listings.LISTINGS_API}/${id}`, {
                ...HEADERS,
                body: JSON.stringify({
                    isFavourite: true,
                }),
                method: 'PATCH',
            });
            const data = await response.json();
            return {
                data,
                responseType: ResponseType.API_SUCCESS,
            };
        } catch (error) {
            return handleError(error);
        }
    }
}
