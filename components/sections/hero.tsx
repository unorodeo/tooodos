import { DoorOpenIcon, HeartIcon } from "lucide-react";

import { Button } from "../ui/button";
import { Icons } from "../ui/icons";
import { Input } from "../ui/input";
import React from "react";

export const Hero: React.FC = () => {
  return (
    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
      <div className="max-w-2xl text-center mx-auto md:mt-20">
        <div className="max-w-2xl">
          <h1 className="block font-semibold text-4xl md:text-5xl lg:text-6xl">
            The Tooodos App
          </h1>
        </div>

        <div className="mt-5 max-w-3xl">
          <p className="lead">
            Create, Plan, Manage and Analyze your daily task in a simple,
            effective, and productive manner.
          </p>
        </div>

        <div className="mt-10 max-w-lg mx-auto grid md:grid-cols-3 gap-2 items-center">
          <Input
            type="email"
            placeholder="Enter email address"
            className="md:col-span-2"
          />
          <Button className="text-base">Send magic link</Button>
          <div className="muted font-medium md:col-span-3">
            A unique code will be sent to your email address&apos;s inbox.
          </div>
        </div>
      </div>
    </div>
  );
};
