const resolvers = {
  Query: {
    latestReviews: (_, __, { dataSources }) => {
      return dataSources.reviewsAPI.getLatestReviews();
    },
  },
  Mutation: {
    submitReview: (_, { locationReview }, { dataSources }) => {
      const newReview =
        dataSources.reviewsAPI.submitReviewForLocation(locationReview);
      return {
        code: 200,
        success: true,
        message: "success",
        locationReview: newReview,
      };
    },
  },
  Review: {
    location: ({ locationId }) => {
      return { id: locationId };
    },
  },
  Location: {
    //It's not necessary to define a reference resolver here,
    //as GraphQL automatically defines one for us in this case,
    //but I'll be writitng one for my own understanding
    __resolveReference: (location) => {
      return location;
    },
    overallRating: ({ id }, _, { dataSources }) => {
      return dataSources.reviewsAPI.getOverallRatingForLocation(id);
    },
    reviewsForLocation: ({ id }, _, { dataSources }) => {
      return dataSources.reviewsAPI.getReviewsForLocation(id);
    },
  },
};

module.exports = resolvers;
