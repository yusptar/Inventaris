"use client";

import { WEBSERVICE } from "../../services/NetworkServices";
import React, { useState, useEffect } from 'react';
import { Typography, Button, Card, CardBody } from "@material-tailwind/react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const ListResep = () => {
  // GET DATA
  const [listResep, setListResep] = useState<{ no_resep: string; status: string }[]>([]);
  useEffect(() => {
    fetchResep();
  }, []);

  const fetchResep = async () => {
    const res = await WEBSERVICE.GET("/resep-obat");
    setListResep(res.data.result);
  };

  //  FILTET TANGGAL
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
      setSelectedDate(date);
  };

  return (
    <section className="px-8 mt-12">
      <div className="container mx-auto mb-24 text-center">
        <Typography placeholder variant="h2" color="blue-gray">
          List Resep Dokter
        </Typography>
        {/* <Typography
          placeholder
          variant="lead"
          className="mt-2 mx-auto w-full px-4 !text-gray-500 lg:w-6/12 lg:px-8"
        >
          Contoh list barang non medis. 
        </Typography> */}
        {/* DatePicker */}
        <div className="mt-5 !text-black">
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="dd-MM-yyyy"
            placeholderText="Pilih Tanggal"
            className="border-2 border-solid border-gray-600 inline-block rounded-full text-center"
          />
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-2">
        {listResep?.map((resep, index) => (
            <Card placeholder className="border" key={index}>
              <CardBody placeholder>
                <div className="flex items-center gap-2">
                  <Typography
                    placeholder
                    variant="small"
                    color="blue"
                    className="mb-2 font-normal text-gray-500"
                  >
                    {resep.no_resep}
                  </Typography>
                </div>
                <a
                  href="#"
                  className="text-blue-gray-900 transition-colors hover:text-gray-900"
                >
                  <Typography placeholder variant="h5" className="mb-2 normal-case">
                    {resep.status}
                  </Typography>
                </a>
                <Typography placeholder className="mb-6 font-normal !text-gray-500">
                  ...
                </Typography>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Button placeholder variant="outlined">Selesai</Button>
                </div>
              </CardBody>
            </Card>
          ))}
      </div>
    </section>
  );
}

export default ListResep;
