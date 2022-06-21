import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

type Props = {
  isOpen: boolean;
  closeModal: () => void;
  convId: string;
  handleDelete: () => void;
};

const DelPopUp = (props: Props) => {
  return (
    <Transition appear show={props.isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={props.closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 backdrop-blur-2xl bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-black p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-zinc-900 dark:text-zinc-100"
                >
                  Delete Chat
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-md md:text-lg text-zinc-800 dark:text-zinc-200">
                    Are you sure you want to delete this chat?
                  </p>
                </div>

                <div className="mt-4 flex justify-start items-center gap-4">
                  <button
                    type="button"
                    className="inline-flex transition-all duration-300 justify-center rounded-2xl active:scale-90 border border-transparent bg-black dark:bg-white px-4 py-2 text-sm font-medium text-zinc-100 dark:text-zinc-900  "
                    onClick={props.closeModal}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={props.handleDelete}
                    className="inline-flex transition-all duration-300 justify-center rounded-2xl active:scale-90 border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-black hover:bg-red-700   "
                  >
                    Delete
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default DelPopUp;
