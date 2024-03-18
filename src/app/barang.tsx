"use client";

import { Typography } from "@material-tailwind/react";
import CourseCard from "@/components/course-card";


const COURSES = [
  {
    img: "/image/blogs/blog4.svg",
    tag: "Beginner • 25 Classes • 200 Students",
    title: "Kertas HVS",
    label: "Selesai",
    desc: "Ini Kertas HVS",
  },
  {
    img: "/image/blogs/blog3.svg",
    tag: "Medium • 10 Classes • 150 Students",
    title: "Kertas A3",
    label: "Selesai",
    desc: "Ini Kertas A3",
  },
  {
    img: "/image/blogs/blog2.svg",
    tag: "Medium • 23 Classes • 590 Students",
    title: "Kertas A4",
    label: "Selesai",
    desc: "Ini Kertas A4",
  },
  {
    img: "/image/blogs/blog5.svg",
    tag: "Beginner • 35 Classes • 400 Students",
    title: "Ballpoint",
    label: "Selesai",
    desc: "Ini Ballpoint",
  },
  {
    img: "/image/blogs/blog6.svg",
    tag: "Medium • 10 Classes • 150 Students",
    title: "Pensil 2B",
    label: "Selesai",
    desc: "Ini Pensil",
  },
  {
    img: "/image/blogs/blog4.svg",
    tag: "Medium • 33 Classes • 690 Students",
    title: "Pensil 1B",
    label: "Selesai",
    desc: "Ini Pensil",
  },
  {
    img: "/image/blogs/blog4.svg",
    tag: "Beginner • 25 Classes • 200 Students",
    title: "Kertas HVS",
    label: "Selesai",
    desc: "Ini Kertas HVS",
  },
  {
    img: "/image/blogs/blog3.svg",
    tag: "Medium • 10 Classes • 150 Students",
    title: "Kertas A3",
    label: "Selesai",
    desc: "Ini Kertas A3",
  },
  {
    img: "/image/blogs/blog2.svg",
    tag: "Medium • 23 Classes • 590 Students",
    title: "Kertas A4",
    label: "Selesai",
    desc: "Ini Kertas A4",
  },
  {
    img: "/image/blogs/blog5.svg",
    tag: "Beginner • 35 Classes • 400 Students",
    title: "Ballpoint",
    label: "Selesai",
    desc: "Ini Ballpoint",
  },
  {
    img: "/image/blogs/blog6.svg",
    tag: "Medium • 10 Classes • 150 Students",
    title: "Pensil 2B",
    label: "Selesai",
    desc: "Ini Pensil",
  },
  {
    img: "/image/blogs/blog4.svg",
    tag: "Medium • 33 Classes • 690 Students",
    title: "Pensil 1B",
    label: "Selesai",
    desc: "Ini Pensil",
  },
];

export function ListBarang() {
  return (
    <section className="px-8 mt-12">
      <div className="container mx-auto mb-24 text-center">
        <Typography placeholder variant="h2" color="blue-gray">
          Barang Non Medis
        </Typography>
        <Typography
          placeholder
          variant="lead"
          className="mt-2 mx-auto w-full px-4 !text-gray-500 lg:w-6/12 lg:px-8"
        >
          Contoh list barang non medis. 
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-2">
        {COURSES.map((props, idx) => (
          <CourseCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default ListBarang;
