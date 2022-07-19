<template>
  <div
    class="
      overflow-hidden overflow-x-auto
      min-w-full
      align-middle
      sm:rounded-md
    "
  >

    <v-table>
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Email</th>
          <th class="text-left">Address</th>
          <th class="text-left">Website</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in allCompanies" :key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.address }}</td>
          <td>{{ item.website }}</td>
          <td>
           <router-link
            :to="{ name: 'edit', params: { id: item.id } }"
            class="mr-2 ..."
            >Edit</router-link
          >
          </td>
          <td>
           <v-btn @click="deleteCompany(item.id)">Delete</v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>

  </div>
</template>

<script>
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useMainStore } from "../store/useMainStore";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const store = useMainStore();
    const { allCompanies } = storeToRefs(store);

    const { fetchAllCompanies, destroyByIdCompany, getCompanyById } =
      useMainStore();

    const deleteCompany = async (id) => {
      await destroyByIdCompany(id);
      await router.push({ name: "home" });
      await fetchAllCompanies();
    };

    onMounted(fetchAllCompanies);

    return {
      deleteCompany,
      allCompanies,
    };
  },
};
</script>

