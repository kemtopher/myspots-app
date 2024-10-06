export const SpotRepository = (apiAdapter) => ({
    getAllSpots: async () => {
        return await apiAdapter.get('/spots');
    },
    getSpotById: async (id) => {
        return await apiAdapter.get(`/spots/${id}`);
    },
    createNewSpot: async (data) => {
        return await apiAdapter.post('/spots', data)
    },
    updateSpot: async (id) => {
        return await apiAdapter.put(`/spots/${id}`)
    },
    deleteSpot: async (id) => {
        return await apiAdapter.delete(`/spots/${id}`)
    }
})

export default SpotRepository;