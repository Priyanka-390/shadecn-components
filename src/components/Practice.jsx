"use client";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { Calendar } from "lucide-react";
import React, { useState } from "react";
const myArray = [
  {
    title: "accordian-1",
    desc: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, distinctio?",
      "ddfLorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, distinctio?",
    ],
  },
  {
    title: "accordian-1",
    desc: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, distinctio?",
      "fseweLorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, distinctio?",
    ],
  },
  {
    title: "accordian-1",
    desc: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, distinctio?",
      "eeweLorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, distinctio?",
    ],
  },
];
export default function Practice() {
  return (
    <div className="min-h-[26vh] flex-col gap-20 flex justify-center items-center">
      <div className="max-w-[1140px] px-3 mx-auto w-full">
        <h2 className="text-black text-5xl py-4 text-center font-bold">
          ACCORDION
        </h2>
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-[600px] mx-auto "
        >
          {myArray.map((obj, i) => (
            <AccordionItem
              className="py-4 border-[2px] px-4 my-2 rounded-xl border-black w-full"
              value={`item-${i + 1}`}
            >
              <AccordionTrigger className="uppercase font-medium text-xl ">
                {obj.title}
              </AccordionTrigger>
              {obj.desc &&
                obj.desc.map((value, index) => (
                  <AccordionContent className="text-lg font-normal" key={index}>
                    {value}
                  </AccordionContent>
                ))}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <div>
        <h2 className="text-black text-5xl py-4 text-center font-bold">
         MY-CHECKBOX
        </h2>
        <Checkbox id="terms" className="mt-4" />
        <label
          htmlFor="terms"
          className="text-sm ps-4 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          MY-CHECKBOX
        </label>
      </div>
    </div>
  );
}