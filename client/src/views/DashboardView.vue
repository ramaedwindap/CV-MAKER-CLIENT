<template>
  <div
    class="relative grid grid-cols-12 mx-auto max-w-[90rem] px-4 py-12 sm:px-6 md:py-14 lg:px-8 lg:py-16"
  >
    <!-- MODAL IDENTITY -->
    <TransitionRoot appear :show="isOpenModalIdentity" as="template">
      <Dialog as="div" @close="closeModalIdentity" class="relative z-10">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div
            class="flex items-center justify-center min-h-full p-4 text-center"
          >
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <DialogPanel
                class="w-full max-w-md p-4 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-xl"
              >
                <form v-on:submit.prevent="doSubmitIdentity">
                  <div class="flex-col mt-2 space-y-3">
                    <div>
                      <label
                        class="flex items-center w-full text-sm font-semibold uppercase select-none drop-shadow-sm"
                      >
                        Name
                      </label>
                      <input
                        required
                        v-model="form.name"
                        :class="[
                          'w-full px-3 py-2 mt-2 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none',
                        ]"
                      />
                    </div>
                    <div>
                      <label
                        class="flex items-center w-full text-sm font-semibold uppercase select-none drop-shadow-sm"
                      >
                        Description
                      </label>
                      <input
                        required
                        v-model="form.description"
                        :class="[
                          'w-full px-3 py-2 mt-2 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none',
                        ]"
                      />
                    </div>
                    <div>
                      <label
                        class="flex items-center w-full text-sm font-semibold uppercase select-none drop-shadow-sm"
                      >
                        Address
                      </label>
                      <input
                        required
                        v-model="form.address"
                        :class="[
                          'w-full px-3 py-2 mt-2 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none',
                        ]"
                      />
                    </div>
                    <div>
                      <label
                        class="flex items-center w-full text-sm font-semibold uppercase select-none drop-shadow-sm"
                      >
                        Email
                      </label>
                      <input
                        required
                        v-model="form.email"
                        :class="[
                          'w-full px-3 py-2 mt-2 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none',
                        ]"
                      />
                    </div>
                    <div>
                      <label
                        class="flex items-center w-full text-sm font-semibold uppercase select-none drop-shadow-sm"
                      >
                        Phone Number
                      </label>
                      <input
                        required
                        v-model="form.phoneNumber"
                        :class="[
                          'w-full px-3 py-2 mt-2 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none',
                        ]"
                      />
                    </div>
                  </div>
                  <div class="flex justify-end mt-4">
                    <button
                      type="submit"
                      class="inline-flex justify-center px-4 py-2 text-sm font-medium text-white uppercase border border-transparent rounded-lg drop-shadow-sm bg-slate-900 hover:bg-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2"
                    >
                      update
                    </button>
                  </div>
                </form>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- MODAL Education -->
    <TransitionRoot appear :show="isOpenModalEducation" as="template">
      <Dialog as="div" @close="closeModalEducation" class="relative z-10">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div
            class="flex items-center justify-center min-h-full p-4 text-center"
          >
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <DialogPanel
                class="w-full max-w-md p-4 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-xl"
              >
                <form v-on:submit.prevent="doSubmitEducation">
                  <div class="flex-col mt-2 space-y-3">
                    <div>
                      <label
                        class="flex items-center w-full text-sm font-semibold uppercase select-none drop-shadow-sm"
                      >
                        School / University
                      </label>
                      <input
                        required
                        v-model="form.educationTitle"
                        :class="[
                          'w-full px-3 py-2 mt-2 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none',
                        ]"
                      />
                    </div>
                    <div>
                      <label
                        class="flex items-center w-full text-sm font-semibold uppercase select-none drop-shadow-sm"
                      >
                        Description
                      </label>
                      <input
                        required
                        v-model="form.educationDesc"
                        :class="[
                          'w-full px-3 py-2 mt-2 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none',
                        ]"
                      />
                    </div>
                    <div>
                      <label
                        class="flex items-center w-full text-sm font-semibold uppercase select-none drop-shadow-sm"
                      >
                        Date From
                      </label>
                      <input
                        required
                        v-model="form.educationDateFrom"
                        :class="[
                          'w-full px-3 py-2 mt-2 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none',
                        ]"
                      />
                    </div>
                    <div>
                      <label
                        class="flex items-center w-full text-sm font-semibold uppercase select-none drop-shadow-sm"
                      >
                        Date To
                      </label>
                      <input
                        required
                        v-model="form.educationDateTo"
                        :class="[
                          'w-full px-3 py-2 mt-2 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none',
                        ]"
                      />
                    </div>
                    <div>
                      <label
                        class="flex items-center w-full text-sm font-semibold uppercase select-none drop-shadow-sm"
                      >
                        Accomplishment
                      </label>
                      <input
                        required
                        v-model="form.educationAccomplishment"
                        :class="[
                          'w-full px-3 py-2 mt-2 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none',
                        ]"
                      />
                    </div>
                  </div>
                  <div class="flex justify-end mt-4">
                    <button
                      type="submit"
                      class="inline-flex justify-center px-4 py-2 text-sm font-medium text-white uppercase border border-transparent rounded-lg drop-shadow-sm bg-slate-900 hover:bg-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2"
                    >
                      update
                    </button>
                  </div>
                </form>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>

    <div class="col-span-12 col-start-0">
      <div class="flex flex-col py-12 md:flex-row space-y-7 md:space-y-0">
        <!-- SIDEBAR -->
        <div class="md:w-[300px] shrink-0 md:pr-8">
          <div class="sticky inset-y-[120px]">asd</div>
        </div>
        <!-- HOME -->
        <div class="flex flex-col md:w-[70%] lg:w-[50%] space-y-8">
          <!-- Identity -->
          <div class="w-full bg-white border-b rounded-xl drop-shadow">
            <div
              class="flex items-center justify-between px-4 py-2 border lg:px-6 bg-gray-50 rounded-t-xl border-slate-50"
            >
              <div class="font-semibold">Basic Information</div>
              <button
                v-on:click="openModalIdentity"
                class="inline-flex items-center justify-center px-4 py-2 -mr-2 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-800 border border-transparent rounded-lg lg:-mr-4 hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 undefined"
              >
                Edit
              </button>
            </div>
            <div class="p-4 lg:p-6">
              <div class="flex flex-col space-y-4">
                <LabelValue
                  v-bind:label="'Name'"
                  v-bind:value="resume.identity?.name"
                />
                <LabelValue
                  v-bind:label="'Description'"
                  v-bind:value="resume.identity?.description"
                />
                <LabelValue
                  v-bind:label="'Adress'"
                  v-bind:value="resume.identity?.address"
                />
                <LabelValue
                  v-bind:label="'Email'"
                  v-bind:value="resume.identity?.email"
                />
                <LabelValue
                  v-bind:label="'Phone Number'"
                  v-bind:value="resume.identity?.phoneNumber"
                />
              </div>
            </div>
          </div>

          <!-- Education -->
          <div class="w-full bg-white border-b rounded-xl drop-shadow">
            <div
              class="flex items-center justify-between px-4 py-2 border lg:px-6 bg-gray-50 rounded-t-xl border-slate-50"
            >
              <div class="font-semibold">Education Information</div>
              <button
                v-on:click="openModalEducation"
                class="inline-flex items-center justify-center px-4 py-2 -mr-2 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-800 border border-transparent rounded-lg lg:-mr-4 hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 undefined"
              >
                Edit
              </button>
            </div>
            <div class="p-4 lg:p-6">
              <div class="flex flex-col space-y-4">
                <LabelValue
                  v-bind:label="'School / University'"
                  v-bind:value="resume.education?.title"
                />
                <LabelValue
                  v-bind:label="'Description'"
                  v-bind:value="resume.education?.desc"
                />
                <div
                  class="flex flex-col w-full space-x-0 space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4"
                >
                  <div class="w-full">
                    <LabelValue
                      v-bind:label="'Date from'"
                      v-bind:value="resume.education?.dateFrom"
                    />
                  </div>
                  <div class="w-full">
                    <LabelValue
                      v-bind:label="'Date to'"
                      v-bind:value="resume.education?.dateTo"
                    />
                  </div>
                </div>
                <LabelValue
                  v-bind:label="'Accomplishment'"
                  v-bind:value="resume.education?.accomplishment"
                  v-bind:justify="'text-justify'"
                />
              </div>
            </div>
          </div>

          <!-- Experience -->
          <div class="w-full bg-white border-b rounded-xl drop-shadow">
            <div
              class="flex items-center justify-between px-4 py-2 border lg:px-6 bg-gray-50 rounded-t-xl border-slate-50"
            >
              <div class="font-semibold">Professional Experience</div>
              <button
                class="inline-flex items-center justify-center px-4 py-2 -mr-2 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-800 border border-transparent rounded-lg lg:-mr-4 hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 undefined"
              >
                Edit
              </button>
            </div>
            <div class="p-4 lg:p-6">
              <div class="flex flex-col space-y-4">
                <LabelValue
                  v-bind:label="'Title'"
                  v-bind:value="resume.experience?.title"
                />
                <LabelValue
                  v-bind:label="'Description'"
                  v-bind:value="resume.experience?.desc"
                />
                <div
                  class="flex flex-col w-full space-x-0 space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4"
                >
                  <div class="w-full">
                    <LabelValue
                      v-bind:label="'Date from'"
                      v-bind:value="resume.experience?.dateFrom"
                    />
                  </div>
                  <div class="w-full">
                    <LabelValue
                      v-bind:label="'Date to'"
                      v-bind:value="resume.experience?.dateTo"
                    />
                  </div>
                </div>
                <LabelValue
                  v-bind:label="'Accomplishment'"
                  v-bind:value="resume.experience?.accomplishment"
                  v-bind:justify="'text-justify'"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRootStore } from "../stores/root";
import { mapActions, mapState } from "pinia";
import LabelValue from "../components/LabelValue.vue";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";

export default {
  data() {
    return {
      isOpenModalIdentity: false,
      isOpenModalEducation: false,
      form: {
        name: "",
        phoneNumber: "",
        email: "",
        address: "",
        description: "",
        educationTitle: "",
        educationDesc: "",
        educationDateFrom: "",
        educationDateTo: "",
        educationAccomplishment: "",
        skills: "",
        jobTitle: "",
        jobDesc: "",
        jobDateFrom: "",
        jobDateTo: "",
        jobAccomplishment: "",
      },
    };
  },
  methods: {
    ...mapActions(useRootStore, ["fetchResume", "handleSubmitResume"]),
    closeModalIdentity() {
      this.isOpenModalIdentity = false;
    },
    openModalIdentity() {
      this.isOpenModalIdentity = true;
    },
    async doSubmitIdentity() {
      //   console.log(this.form);
      //   console.log("click");
      const res = await this.handleSubmitResume(this.form);
      if (res) this.closeModalIdentity();
      console.log(res);
    },

    closeModalEducation() {
      this.isOpenModalEducation = false;
    },
    openModalEducation() {
      this.isOpenModalEducation = true;
    },
    async doSubmitEducation() {
      //   console.log(this.form);
      //   console.log("click");
      const res = await this.handleSubmitResume(this.form);
      if (res) this.closeModalEducation();
      console.log(res);
    },
  },
  computed: {
    ...mapState(useRootStore, ["resume"]),
  },
  components: {
    LabelValue,
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
  },
  async created() {
    await this.fetchResume();
    this.form = {
      name: this.resume.identity?.name,
      phoneNumber: this.resume.identity?.phoneNumber,
      email: this.resume.identity?.email,
      address: this.resume.identity?.address,
      description: this.resume.identity?.description,
      educationTitle: this.resume.education?.title,
      educationDesc: this.resume.education?.desc,
      educationDateFrom: this.resume.education?.dateFrom,
      educationDateTo: this.resume.education?.dateTo,
      educationAccomplishment: this.resume.education?.accomplishment,
      jobTitle: this.resume.experience?.title,
      jobDesc: this.resume.experience?.desc,
      jobDateFrom: this.resume.experience?.dateFrom,
      jobDateTo: this.resume.experience?.dateTo,
      jobAccomplishment: this.resume.experience?.accomplishment,
      skills: this.resume.skills,
    };
  },
};
</script>
