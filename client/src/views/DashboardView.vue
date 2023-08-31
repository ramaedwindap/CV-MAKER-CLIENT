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

    <!-- MODAL Experience -->
    <TransitionRoot appear :show="isOpenModalExperience" as="template">
      <Dialog as="div" @close="closeModalExperience" class="relative z-10">
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
                <form v-on:submit.prevent="doSubmitExperience">
                  <div class="flex-col mt-2 space-y-3">
                    <div>
                      <label
                        class="flex items-center w-full text-sm font-semibold uppercase select-none drop-shadow-sm"
                      >
                        Title
                      </label>
                      <input
                        required
                        v-model="form.jobTitle"
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
                        v-model="form.jobDesc"
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
                        v-model="form.jobDateFrom"
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
                        v-model="form.jobDateTo"
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
                        v-model="form.jobAccomplishment"
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
          <div class="sticky inset-y-[120px]">
            <div class="w-full bg-white border-b rounded-xl drop-shadow">
              <div
                class="flex items-center justify-between px-4 py-2 border bg-gray-50 rounded-t-xl border-slate-50"
              >
                <div class="font-semibold">To-Do List:</div>
              </div>
              <hr />
              <!-- <p class="px-4 py-4 text-sm font-semibold text-center">
                34% done
              </p>
              <hr /> -->
              <div class="flex items-center px-4 py-4 text-sm font-semibold">
                <CheckCircleIcon :class="'w-5 h-5 mr-3'" />
                Create Account
              </div>
              <hr />
              <div class="flex items-center px-4 py-4 text-sm font-semibold">
                <CheckCircleIcon
                  :class="[
                    form.name &&
                    form.description &&
                    form.email &&
                    form.phoneNumber &&
                    form.address
                      ? ''
                      : 'text-slate-400',
                    'w-5 h-5 mr-3',
                  ]"
                />
                Complete Basic Info
              </div>
              <hr />
              <div class="flex items-center px-4 py-4 text-sm font-semibold">
                <CheckCircleIcon
                  :class="[
                    form.educationTitle &&
                    form.educationDesc &&
                    form.educationDateFrom &&
                    form.educationDateTo &&
                    form.educationAccomplishment
                      ? ''
                      : 'text-slate-400',
                    'w-5 h-5 mr-3',
                  ]"
                />
                Add Education
              </div>
              <hr />
              <div class="flex items-center px-4 py-4 text-sm font-semibold">
                <CheckCircleIcon
                  :class="[
                    form.jobTitle &&
                    form.jobDesc &&
                    form.jobDateFrom &&
                    form.jobDateTo &&
                    form.jobAccomplishment
                      ? ''
                      : 'text-slate-400',
                    'w-5 h-5 mr-3',
                  ]"
                />
                Add Experience
              </div>
              <hr />
              <div class="flex items-center px-4 py-4 text-sm font-semibold">
                <CheckCircleIcon
                  :class="[form.skills ? '' : 'text-slate-400', 'w-5 h-5 mr-3']"
                />
                Add Skills
              </div>
              <div
                v-if="
                  form.name &&
                  form.phoneNumber &&
                  form.email &&
                  form.address &&
                  form.description &&
                  form.educationTitle &&
                  form.educationDesc &&
                  form.educationDateFrom &&
                  form.educationDateTo &&
                  form.educationAccomplishment &&
                  form.skills &&
                  form.jobTitle &&
                  form.jobDesc &&
                  form.jobDateFrom &&
                  form.jobDateTo &&
                  form.jobAccomplishment
                "
              >
                <hr />
                <div
                  class="flex items-center justify-center px-4 py-4 text-sm font-semibold"
                >
                  <a
                    :href="'http://localhost:3000/generate-pdf/' + form.userId"
                    target="_blank"
                    class="inline-flex items-center justify-center w-full px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-800 border border-transparent rounded-lg hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 undefined sm:w-auto"
                    >Generate Resume</a
                  >
                </div>
              </div>
            </div>
          </div>
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
                v-on:click="openModalExperience"
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
          <!-- Skills -->
          <div class="w-full bg-white border-b rounded-xl drop-shadow">
            <div
              class="flex items-center justify-between px-4 py-2 border lg:px-6 bg-gray-50 rounded-t-xl border-slate-50"
            >
              <div class="font-semibold">Core Competencies</div>
              <button
                v-on:click="updateSkills"
                class="inline-flex items-center justify-center px-4 py-2 -mr-2 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-800 border border-transparent rounded-lg lg:-mr-4 hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 undefined"
              >
                Update
              </button>
            </div>
            <div class="p-4 lg:p-6">
              <div class="flex flex-col space-y-4">
                <div>
                  <label
                    class="flex items-center w-full text-sm font-semibold uppercase select-none drop-shadow-sm"
                    >Skills
                  </label>
                  <!-- <div
                    class="flex flex-wrap items-center gap-2 mt-2 text-xs text-blue-600"
                  >
                    <div
                      class="flex overflow-hidden bg-gray-100 rounded select-none group"
                    >
                      <span class="px-2 py-1 font-medium text-gray-900"
                        >Test</span
                      >
                    </div>
                  </div> -->
                  <input
                    required
                    v-model="form.skills"
                    :class="[
                      'w-full px-3 py-2 mt-2 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none',
                    ]"
                  />
                  <!-- <div class="relative w-full">
                    <Listbox v-model="form.skills">
                      <div class="relative mt-4">
                        <ListboxButton
                          class="relative w-full py-2 pl-3 pr-10 text-left bg-white border rounded-lg shadow-md cursor-default border-slate-100 focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
                        >
                          <span class="block truncate">
                            {{ "Add new skill" }}
                          </span>
                          <span
                            class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
                          >
                            <ChevronUpDownIcon
                              class="w-5 h-5 text-gray-400"
                              aria-hidden="true"
                            />
                          </span>
                        </ListboxButton>

                        <transition
                          leave-active-class="transition duration-100 ease-in"
                          leave-from-class="opacity-100"
                          leave-to-class="opacity-0"
                        >
                          <ListboxOptions
                            class="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-32 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                          >
                            <ListboxOption
                              v-slot="{ active, selected }"
                              v-for="skill in skills"
                              :key="skill.name"
                              :value="skill.name"
                              as="template"
                            >
                              <li
                                :class="[
                                  active
                                    ? 'bg-amber-100 text-amber-900'
                                    : 'text-gray-900',
                                  'relative cursor-default select-none py-2 pl-10 pr-4',
                                ]"
                              >
                                <span
                                  :class="[
                                    selected ? 'font-medium' : 'font-normal',
                                    'block truncate',
                                  ]"
                                  >{{ skill.name }}</span
                                >
                                <span
                                  v-if="selected"
                                  class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"
                                >
                                  <CheckIcon
                                    class="w-5 h-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              </li>
                            </ListboxOption>
                          </ListboxOptions>
                        </transition>
                      </div>
                    </Listbox>
                  </div> -->
                </div>
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
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";
import {
  CheckIcon,
  ChevronUpDownIcon,
  CheckCircleIcon,
} from "@heroicons/vue/20/solid";
import CustomButton from "../components/CustomButton.vue";

export default {
  data() {
    return {
      isOpenModalIdentity: false,
      isOpenModalEducation: false,
      isOpenModalExperience: false,
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
        userId: "",
      },
      skills: [
        { name: "Cloud Computing" },
        { name: "Data Analysis" },
        { name: "Network Security" },
        { name: "Database Management" },
        { name: "Web Design and Development" },
        { name: "IT Project Management" },
        { name: "DevOps Practices" },
        { name: "Linux Systems Administration" },
      ],
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

    closeModalExperience() {
      this.isOpenModalExperience = false;
    },
    openModalExperience() {
      this.isOpenModalExperience = true;
    },
    async doSubmitExperience() {
      //   console.log(this.form);
      //   console.log("click");
      const res = await this.handleSubmitResume(this.form);
      if (res) this.closeModalExperience();
      console.log(res);
    },

    async updateSkills() {
      const res = await this.handleSubmitResume(this.form);
      if (res) this.closeModalExperience();
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
    Listbox,
    ListboxLabel,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
    CheckIcon,
    ChevronUpDownIcon,
    CheckCircleIcon,
    CustomButton,
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
      userId: this.resume.userId,
    };
  },
};
</script>
