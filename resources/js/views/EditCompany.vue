<template>
  <div>
    <form class="space-y-6" v-on:submit.prevent="saveCompany">
      <div class="space-y-4 rounded-md shadow-sm">
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700"
            >Name</label
          >
          <div class="mt-1">
            <input
              type="text"
              name="name"
              id="name"
              class="
                block
                mt-1
                w-full
                rounded-md
                border-gray-300
                shadow-sm
                focus:border-indigo-300
                focus:ring
                focus:ring-indigo-200
                focus:ring-opacity-50
              "
              v-model="store.companyById.name"
            />
          </div>
        </div>

        <div>
          <label for="email" class="block text-sm font-medium text-gray-700"
            >Email</label
          >
          <div class="mt-1">
            <input
              type="text"
              name="email"
              id="email"
              class="
                block
                mt-1
                w-full
                rounded-md
                border-gray-300
                shadow-sm
                focus:border-indigo-300
                focus:ring
                focus:ring-indigo-200
                focus:ring-opacity-50
              "
              v-model="store.companyById.email"
            />
          </div>
        </div>

        <div>
          <label for="address" class="block text-sm font-medium text-gray-700"
            >Address</label
          >
          <div class="mt-1">
            <input
              type="text"
              name="address"
              id="address"
              class="
                block
                mt-1
                w-full
                rounded-md
                border-gray-300
                shadow-sm
                focus:border-indigo-300
                focus:ring
                focus:ring-indigo-200
                focus:ring-opacity-50
              "
              v-model="store.companyById.address"
            />
          </div>
        </div>

        <div>
          <label for="website" class="block text-sm font-medium text-gray-700"
            >Website</label
          >
          <div class="mt-1">
            <input
              type="text"
              name="website"
              id="website"
              class="
                block
                mt-1
                w-full
                rounded-md
                border-gray-300
                shadow-sm
                focus:border-indigo-300
                focus:ring
                focus:ring-indigo-200
                focus:ring-opacity-50
              "
              v-model="store.companyById.website"
            />
          </div>
        </div>
      </div>

      <button
        type="submit"
        class="
          inline-flex
          items-center
          px-4
          py-2
          text-xs
          font-semibold
          tracking-widest
          text-white
          uppercase
          bg-gray-800
          rounded-md
          border border-transparent
          ring-gray-300
          transition
          duration-150
          ease-in-out
          hover:bg-gray-700
          active:bg-gray-900
          focus:outline-none focus:border-gray-900 focus:ring
          disabled:opacity-25
        "
      >
        Save
      </button>

    </form>
  </div>
</template>

<script>
import { onMounted } from "vue";
import { useMainStore } from "../store/useMainStore";
import { useRouter } from "vue-router";

export default {
  props: {
    id: {
      required: true,
      type: String,
    },
  },

  setup(props) {
    const router = useRouter();
    const store = useMainStore();
    const {
      fetchAllCompanies,
      getCompanyById,
      updateCurrentCompany,
    } = useMainStore();

    onMounted(() => getCompanyById(props.id));

    const saveCompany = async () => {
      await updateCurrentCompany(props.id, store.companyById);
      await router.push({ name: "home" });
      await fetchAllCompanies();
    };

    return {
      saveCompany,
      store,
    };
  },
};
</script>
