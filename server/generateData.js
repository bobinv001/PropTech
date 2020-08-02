var faker = require('faker');

const priceWithCommas = (price) => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const getFakeListing = () => {
    // Note: image takes a bit of time to laod
    const images = [
        `${faker.image.city()}?random=${Date.now()}`,
        `${faker.image.city()}?random=${Date.now()}`,
        `${faker.image.city()}?random=${Date.now()}`,
    ];
    return {
        id: faker.random.uuid(),
        priceDescription: faker.random.arrayElement(['Guide Price', 'Offers excess of', 'Fixed Price', 'Best Offer']), // todo: use enums
        propertyType: faker.random.arrayElement(['mid terraced house', 'flat', 'detached house', 'apartment']), // todo: use enums
        images: images,
        price: priceWithCommas(faker.random.number({ min: 100000, max: 1000000 })),
        beds: faker.random.number({ min: 1, max: 6 }),
        bathrooms: faker.random.number({ min: 1, max: 3 }),
        lounge: faker.random.number({ min: 1, max: 3 }),
        currency: '£',
        address: `${faker.address.streetName()}, ${faker.address.city()}`,
        postcode: faker.address.zipCode(),
        description: faker.lorem.words(100),
        isFavourite: faker.random.boolean(),
        listedOn: faker.date.recent(0),
        agentDetails: faker.random.arrayElement([
            {
                displayName: 'Purplebricks, Head Office',
                logo: 'https://www.estateagenttoday.co.uk/upload/PurplebricksLogo2020-400x310.jpg',
            },
            {
                displayName: 'Foxton',
                logo: 'https://www.estateagenttoday.co.uk/upload/Foxtons-logo400x310.png',
            },
        ]),
    };
};

const getListings = () => {
    return {
        listings: Array.from({ length: 10 }, getFakeListing),
    };
};

module.exports = getListings;
