"use client";

// // import { useActionState } from "react";

import { Input } from "@/components/ui/input";
// // import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export const NewsletterForm = () => {
  // // const [state, formAction, isPending] = useActionState();

  return (
    <form className="mt-8">
      {/* <form action={formAction} className="mt-8"> */}
      <div className="grid grid-cols-2 gap-8 max-w-5xl">
        <div className="flex flex-col gap-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input type="text" name="firstName" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input type="text" name="lastName" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input type="email" name="email" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="phone">Phone</Label>
          <Input type="tel" name="phone" />
        </div>
        <p className="text-xs text-neutral-300">
          {`By clicking sign up you are accepting the terms of Silverstone's
          privacy policy.`}
        </p>
        {/* <Button type="submit" className="w-fit" disabled={isPending}>
          Subscribe
        </Button> */}
      </div>
    </form>
  );
};
