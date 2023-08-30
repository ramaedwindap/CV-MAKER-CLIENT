<template>
  <header
    className="sticky top-0 z-40 w-full bg-white border-b shadow-sm border-slate-200"
  >
    <div className="mx-auto max-w-[90rem] xl:px-8">
      <div
        className="flex items-center justify-between w-full px-4 py-3 sm:px-6 lg:px-8 xl:px-0"
      >
        <div className="flex items-center drop-shadow-md">Title</div>
        <div>
          <div class="relative">
            <Menu as="div" class="relative inline-block text-left">
              <div>
                <MenuButton
                  class="inline-flex items-center justify-center transition duration-300 bg-white hover:bg-slate-50 hover:bg-opacity-50 border hover:border-slate-300 text-slate-900 font-medium hover:shadow gap-x-2 px-3 lg:py-2 py-[0.4rem] rounded-lg [&>svg]:w-5 [&>svg]:h-5 border-slate-400"
                >
                  <Bars3Icon
                    class="w-5 h-5 text-slate-700 hover:text-slate-800"
                    aria-hidden="true"
                  />
                </MenuButton>
              </div>

              <transition
                enter-active-class="transition duration-100 ease-out"
                enter-from-class="transform scale-95 opacity-0"
                enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-in"
                leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0"
              >
                <MenuItems
                  class="absolute right-0 w-40 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  <div class="px-1 py-1">
                    <MenuItem v-slot="{ active }">
                      <div
                        :class="[
                          active
                            ? 'bg-slate-100 text-slate-800'
                            : 'text-slate-700',
                          'group font-medium flex w-full items-center rounded-md px-2 py-2 text-sm',
                        ]"
                      >
                        <CommandLineIcon
                          :active="active"
                          class="w-4 h-4 mr-2"
                          aria-hidden="true"
                        />
                        Dashboard
                      </div>
                    </MenuItem>
                    <div class="px-2.5" role="none">
                      <div
                        class="h-px w-full] my-1 block bg-gradient-to-r from-slate-400 via-slate-300"
                        role="none"
                      ></div>
                    </div>
                    <div>
                      <MenuItem v-slot="{ active }">
                        <div
                          :class="[
                            active
                              ? 'bg-slate-100 text-slate-800'
                              : 'text-slate-700',
                            'group font-medium flex w-full items-center rounded-md px-2 py-2 text-sm',
                          ]"
                        >
                          <ArrowRightOnRectangleIcon
                            :active="active"
                            class="w-4 h-4 mr-2"
                            aria-hidden="true"
                          />
                          Login
                        </div>
                      </MenuItem>
                      <MenuItem v-slot="{ active }">
                        <div
                          :class="[
                            active
                              ? 'bg-slate-100 text-slate-800'
                              : 'text-slate-700',
                            'group font-medium flex w-full items-center rounded-md px-2 py-2 text-sm',
                          ]"
                        >
                          <NewspaperIcon
                            :active="active"
                            class="w-4 h-4 mr-2"
                            aria-hidden="true"
                          />
                          Register
                        </div>
                      </MenuItem>
                    </div>
                    <div>
                      <MenuItem v-slot="{ active }">
                        <button
                          :class="[
                            active
                              ? 'bg-slate-100 text-slate-800'
                              : 'text-slate-700',
                            'group font-medium flex w-full items-center rounded-md px-2 py-2 text-sm',
                          ]"
                        >
                          <ArrowLeftOnRectangleIcon
                            :active="active"
                            class="w-4 h-4 mr-2"
                            aria-hidden="true"
                          />
                          Logout
                        </button>
                      </MenuItem>
                    </div>
                  </div>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import {
  ChevronDownIcon,
  Bars3Icon,
  ArrowLeftOnRectangleIcon,
  NewspaperIcon,
  HomeIcon,
  ArrowRightOnRectangleIcon,
  CommandLineIcon,
} from "@heroicons/vue/20/solid";
export default {
  components: {
    Menu,
    MenuButton,
    ArrowRightOnRectangleIcon,
    MenuItems,
    MenuItem,
    ChevronDownIcon,
    Bars3Icon,
    HomeIcon,
    ArrowLeftOnRectangleIcon,
    NewspaperIcon,
    CommandLineIcon,
  },
  data() {
    return {};
  },
};
</script>
