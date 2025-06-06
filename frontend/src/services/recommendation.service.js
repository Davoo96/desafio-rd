// getRecommendations.js

const getRecommendations = (
  formData = {
    selectedPreferences: [],
    selectedFeatures: [],
    selectedRecommendationType: 'MultipleProducts',
  },
  products
) => {
  const {
    selectedPreferences = [],
    selectedFeatures = [],
    selectedRecommendationType = 'MultipleProducts',
  } = formData;

  const scoredProducts = products
    .map((product, index) => {
      const preferenceMatches = selectedPreferences.filter((pref) =>
        product.preferences.includes(pref)
      ).length;

      const featureMatches = selectedFeatures.filter((feat) =>
        product.features.includes(feat)
      ).length;

      const score = preferenceMatches + featureMatches;

      return {
        product,
        score,
        index,
      };
    })
    .filter((entry) => entry.score > 0);

  if (scoredProducts.length === 0) return [];

  scoredProducts.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return b.index - a.index;
  });

  if (selectedRecommendationType === 'SingleProduct') {
    return [scoredProducts[0].product];
  }

  return scoredProducts.map((entry) => entry.product);
};

const recommendationService = { getRecommendations };

export default recommendationService;
