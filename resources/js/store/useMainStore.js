import { defineStore } from "pinia";

export const useMainStore = defineStore("mainStore", {
    state: () => {
        return {
            allCompanies:[],
            companyById: {},
        };
    },
    getters: {},
    actions: {
        async fetchAllCompanies() {
            this.allCompanies = await axios
                .get("/api/companies")
                .then((response) => response.data.data);
        },
        async getCompanyById(id) {
            this.companyById = await axios
                .get(`/api/companies/${id}`)
                .then((response) => response.data.data);
        },
        async storeNewCompany(data){
            await axios.post('/api/companies', data)
        },
        async updateCurrentCompany(id, companyById){
            await axios.patch(`/api/companies/${id}`, companyById)
        },
        async destroyByIdCompany(id) {
            await axios.delete(`/api/companies/${id}`);
        },
    },
});

