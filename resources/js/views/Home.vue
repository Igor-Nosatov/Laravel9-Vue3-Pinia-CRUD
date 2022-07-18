<template>
  <div
    class="
      overflow-hidden overflow-x-auto
      min-w-full
      align-middle
      sm:rounded-md
    "
  >
    <div class="flex place-content-end mb-4">
      <div
        class="
          px-4
          py-2
          text-white
          bg-indigo-600
          hover:bg-indigo-700
          cursor-pointer
        "
      >
        <router-link :to="{ name: 'new' }" class="text-sm font-medium"
          >Create company</router-link
        >
      </div>
    </div>
    <table class="min-w-full border divide-y divide-gray-200">
      <thead>
        <tr>
          <th class="px-6 py-3 bg-gray-50">
            <span
              class="
                text-xs
                font-medium
                tracking-wider
                leading-4
                text-left text-gray-500
                uppercase
              "
              >Name</span
            >
          </th>
          <th class="px-6 py-3 bg-gray-50">
            <span
              class="
                text-xs
                font-medium
                tracking-wider
                leading-4
                text-left text-gray-500
                uppercase
              "
              >Email</span
            >
          </th>
          <th class="px-6 py-3 bg-gray-50">
            <span
              class="
                text-xs
                font-medium
                tracking-wider
                leading-4
                text-left text-gray-500
                uppercase
              "
              >Address</span
            >
          </th>
          <th class="px-6 py-3 bg-gray-50">
            <span
              class="
                text-xs
                font-medium
                tracking-wider
                leading-4
                text-left text-gray-500
                uppercase
              "
              >Website</span
            >
          </th>
        </tr>
      </thead>

      <tbody class="bg-white divide-y divide-gray-200 divide-solid">
        <template v-for="item in allCompanies" :key="item.id">
          <tr class="bg-white">
            <td
              class="
                px-6
                py-4
                text-sm
                leading-5
                text-gray-900
                whitespace-no-wrap
              "
            >
              {{ item.name }}
            </td>
            <td
              class="
                px-6
                py-4
                text-sm
                leading-5
                text-gray-900
                whitespace-no-wrap
              "
            >
              {{ item.email }}
            </td>
            <td
              class="
                px-6
                py-4
                text-sm
                leading-5
                text-gray-900
                whitespace-no-wrap
              "
            >
              {{ item.address }}
            </td>
            <td
              class="
                px-6
                py-4
                text-sm
                leading-5
                text-gray-900
                whitespace-no-wrap
              "
            >
              {{ item.website }}
            </td>
            <td
              class="
                px-6
                py-4
                text-sm text-center
                leading-5
                text-gray-900
                whitespace-no-wrap
              "
            >
              <router-link
                :to="{ name: 'edit', params: { id: item.id }}"
                class="mr-2 ..."
                >Edit</router-link
              >
              <button
                @click="deleteCompany(item.id)"
                class="
                  inline-flex
                  items-center
                  px-4
                  py-2
                  bg-gray-800
                  border border-transparent
                  rounded-md
                  font-semibold
                  text-xs text-white
                  uppercase
                  tracking-widest
                  hover:bg-gray-700
                  active:bg-gray-900
                  focus:outline-none focus:border-gray-900 focus:ring
                  ring-gray-300
                  disabled:opacity-25
                  transition
                  ease-in-out
                  duration-150
                "
              >
                Delete
              </button>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
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

    const { fetchAllCompanies, destroyByIdCompany, getCompanyById, } = useMainStore();

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

