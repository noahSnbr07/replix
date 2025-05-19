import Image from "next/image";
import React from "react";
import { icon256 } from "../assets/assets";
import Link from "next/link";


export default async function page(): Promise<React.JSX.Element> {

  return (
    <div className="size-full flex flex-col items-center justify-center gap-12">
      <Image
        className="shadow-2xl shadow-black rounded-full"
        src={icon256}
        height={256}
        width={256}
        title="Replix Icon"
        alt="Replix Icon"
      />

      <div className="text-center">
        <h1 className="text-3xl font-bold"> Replix </h1>
        <i className="opacity-50"> comming soon ... </i>
      </div>

      <div className="text-center flex flex-col">
        <Link
          title="Instagram Contact"
          href={"https://instagram.com/noah.codes.stuff"}> Instagram </Link>

        <Link
          title="Instagram Contact"
          href={"https://discord.gg/HrWD78UR4v"}> Discord </Link>
      </div>

    </div>
  );
}