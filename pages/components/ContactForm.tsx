import React from "react";
import config from "../index.json";
import Image from "next/image";

function ContactForm() {
  const contact = config.contact.contacts;

  return (
    <div className="w-full sm:w-full md:w-3/4 lg:w-1/2 mt-16 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
      {contact.map((item, index) => (
        <a href={item.url} key={index} className="flex items-center border border-gray-300 p-4 rounded-lg bg-gradient-to-r from-white to-white">
          <div>
            <h2 className="text-xl font-bold">{item.heading}</h2>
            <p className="text-sm">{item.subheading}</p>
          </div>
          <div className="ml-auto">
            <Image src={item.icon} alt={item.alt} className="h-8 w-8" width={50} height={50}/>
          </div>
        </a>
      ))}
    </div>
  );
}

export default ContactForm;
