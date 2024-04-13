"use client";

import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z
    .string()
    .min(1, {
      message: "Nama tidak boleh kosong",
    })
    .max(30),
  email: z.string().email({
    message: "Email tidak valid",
  }),
  message: z.string().min(10, {
    message: "Pesan tidak boleh kosong",
  }),
});
const FormContact = () => {
  const getItemName = localStorage.getItem("name");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors: errorsInput },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: getItemName || "",
      email: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = (values) => {
    console.log(values);

    localStorage.setItem("name", values.name);

    fetch("/api/form-contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        // Tambahkan logika untuk menangani sukses submit di sini
      })
      .catch((error) => {
        console.error("Error:", error);
        // Tambahkan logika untuk menangani error submit di sini
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
      <div className="flex flex-col gap-y-2">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          {...register("name")}
          className={cn(
            "rounded-lg border border-black px-3 py-1 outline-none focus:ring-2 focus:ring-black focus:ring-offset-2",
            errorsInput ? "focus:ring-rose-200" : "",
          )}
        />
        <div>{errorsInput && <p>{errorsInput.name?.message}</p>}</div>
      </div>
      <div className="flex flex-col gap-y-2">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          {...register("email")}
          className={cn(
            "rounded-lg border border-black px-3 py-1 outline-none focus:ring-2 focus:ring-black focus:ring-offset-2",
            errorsInput ? "ring-red-300" : "",
          )}
        />
        <div>{errorsInput && <p>{errorsInput.email?.message}</p>}</div>
      </div>
      <div className="flex flex-col gap-y-2">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          rows={10}
          {...register("message")}
          className="rounded-lg border border-black px-3 py-1 outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
        />
        <div>{errorsInput && <p>{errorsInput.message?.message}</p>}</div>
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="group flex items-center justify-center gap-x-1 overflow-hidden rounded-2xl bg-black px-4 py-2 text-white "
        >
          Send
          <Send
            size={16}
            className="transition-all group-hover:-translate-y-1/4 group-hover:translate-x-1 "
          />
        </button>
      </div>
    </form>
  );
};

export default FormContact;
