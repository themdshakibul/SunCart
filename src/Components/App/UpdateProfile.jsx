"use client";

import { GrUpdate } from "react-icons/gr";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { authClient } from "@/lib/auth-client";

const UpdateProfile = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    const { data } = await authClient.updateUser({
      name: userData.name,
      image: userData.image,
    });
  };

  return (
    <Modal>
      <Button
        className="flex-1 bg-black text-white dark:bg-white dark:text-black font-semibold rounded-full"
        variant="solid"
      >
        Edit Profile
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md rounded-[2rem] bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
            <Modal.CloseTrigger className="text-black dark:text-white" />

            <Modal.Header className="flex flex-col items-center text-center">
              <Modal.Icon className="bg-black text-white dark:bg-white dark:text-black w-16 h-16 rounded-full flex items-center justify-center mb-2 shadow-sm">
                <GrUpdate className="size-8" />
              </Modal.Icon>

              <Modal.Heading className="text-xl font-bold text-black dark:text-white">
                Edit Profile
              </Modal.Heading>

              <p className="mt-1.5 text-sm leading-5 text-zinc-500 dark:text-zinc-400">
                Update your personal information below.
              </p>
            </Modal.Header>

            <Modal.Body className="p-6">
              <Surface variant="default" className="bg-transparent">
                <form onSubmit={onSubmit} className="flex flex-col gap-5">
                  <TextField className="w-full" name="name" type="text">
                    <Label className="ml-1 font-medium text-black">Name</Label>

                    <Input
                      name="name"
                      className="rounded-full border border-zinc-200 text-black"
                      placeholder="Enter your full name"
                    />
                  </TextField>

                  <TextField className="w-full" name="image" type="text">
                    <Label className="ml-1 font-medium text-black">
                      Photos
                    </Label>

                    <Input
                      name="image"
                      className="rounded-full border border-zinc-200 text-black"
                      placeholder="Paste photo URL"
                    />
                  </TextField>

                  <Modal.Footer className="flex gap-2 pt-4">
                    <Button
                      slot="close"
                      variant="bordered"
                      className="rounded-full flex-1 border-zinc-200 text-black font-medium"
                    >
                      Cancel
                    </Button>

                    <Button
                      type="submit"
                      slot="close"
                      className="rounded-full flex-1 bg-black text-white font-bold"
                    >
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default UpdateProfile;
