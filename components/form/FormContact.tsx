"use client";

import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(3, {
    message: "Nama tidak boleh kosong",
  }),
  email: z.string().email({
    message: "Email tidak valid",
  }),
  message: z.string().min(10, {
    message: "Pesan tidak boleh kosong",
  }),
});
const FormContact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = (values) => {
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
      <div className="flex flex-col gap-y-2">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          {...register("name")}
          className="py-1 px-3 rounded-lg border border-gray-100 focus:ring-2 focus:ring-black focus:ring-offset-2 outline-none"
        />
      </div>
      <div className="flex flex-col gap-y-2">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          {...register("email")}
          className="py-1 px-3 rounded-lg border border-gray-100 focus:ring-2 focus:ring-black focus:ring-offset-2 outline-none"
        />
      </div>
      <div className="flex flex-col gap-y-2">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          rows={10}
          {...register("message")}
          className="py-1 px-3 rounded-lg border border-gray-100 focus:ring-2 focus:ring-black focus:ring-offset-2 outline-none"
        />
      </div>
      <div className="justify-end flex">
        <button
          type="submit"
          className="flex gap-x-1 px-4 py-2 rounded-2xl bg-black text-white items-center justify-center overflow-hidden group "
        >
          Send
          <Send
            size={16}
            className="group-hover:-translate-y-1/4 group-hover:translate-x-1 transition-all "
          />
        </button>
      </div>
    </form>
  );
};

export default FormContact;
