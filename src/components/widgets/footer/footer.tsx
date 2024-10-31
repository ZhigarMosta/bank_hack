"use client";

import icon1 from "@/icon/11.svg";
import icon2 from "@/icon/plane.svg";
import Image from "next/image";
export const Footer = () => {
  return (
    <footer className="flex items-center gap-10 w-full h-36 px-5 bg-blue-500 shadow-xl absolute bottom-0">
      <div className="prikol">
        <Image id="plane" src={icon2} alt={icon2} />
        <Image id="eleven" src={icon1} alt={icon1} />
      </div>
      <marquee>
        ©Кондаков: Так как от вас все отказались / Вы просто ходячие мешки с
        деньгами / Дзынь$ Дзынь$ Дзынь$ / Вы ничего не сможете / ©Кондаков: Вас всех
        отчислят /  Вы цвет нации / Ботайте ботаны / Мне до звезды /
        Пойдете учиться в ЧЮК / Без физики вы – никто ©Кондаков
      </marquee>
    </footer>
  );
};
