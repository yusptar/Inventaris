"use client";

import { HTTP } from "../../services/NetworkServices";
import React, { useState, useEffect } from 'react';
import { Typography, Button, Card, CardBody } from "@material-tailwind/react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const ListResep = () => {
  // INIT DATA
  const [listResep, setListResep] = useState<{
    pasien: {
      no_rkm_medis: string;
      pasien : {
        nm_pasien : string;
      }
      poliklinik : {
        nm_poli: string;
      }
    }
    resep: string; 
    no_resep: string;
    nm_poli: string;
    status: string;
    nama_brng: string;
    tgl_peresepan: Date | string;
    }[]>([]);
    
  useEffect(() => {
    fetchResep();
  }, []);

  // FETCH DATA
  const fetchResep = async () => {
    const res = await HTTP.GET("/resep-obat");
    setListResep(res.data.result);
  };

  const handleCompleteButtonClick = (index: any) => {
    const newListResep = [...listResep];
    newListResep.splice(index, 1); // Hapus item yang sesuai dengan indeks
    setListResep(newListResep);
  };

  //  FILTER TANGGAL
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);

  const handleDateChange = (dates: [Date | null, Date | null]) => {
    setSelectedStartDate(dates[0]);
    setSelectedEndDate(dates[1]);
  };

  const filterByDateRange = (resep: {
    pasien: {
      no_rkm_medis: string;
      pasien : {
        nm_pasien : string;
      }
      poliklinik : {
        nm_poli: string;
      }
    }
    resep: string; 
    no_resep: string;
    nm_poli: string;
    status: string;
    nama_brng: string;
    tgl_peresepan: Date | string;
  }) => {
    if (!selectedStartDate || !selectedEndDate) return true;
    const tglPeresepan = typeof resep.tgl_peresepan === 'string' ? new Date(resep.tgl_peresepan) : resep.tgl_peresepan;
    return tglPeresepan >= selectedStartDate && tglPeresepan <= selectedEndDate;
  };

  console.log(listResep)

  return (
    <section className="px-8 mt-12">
      <div className="container mx-auto mb-24 text-center">
        <Typography placeholder onPointerEnterCapture onPointerLeaveCapture variant="h2" color="blue-gray">
          List Resep Obat Pasien
        </Typography>
        {/* <Typography
          placeholder
          variant="lead"
          className="mt-2 mx-auto w-full px-4 !text-gray-500 lg:w-6/12 lg:px-8"
        >
          Contoh list barang non medis. 
        </Typography> */}
        {/* DatePicker */}
        <div className="mt-5 text-black">
          <DatePicker
            selected={selectedStartDate}
            onChange={handleDateChange}
            startDate={selectedStartDate}
            endDate={selectedEndDate}
            selectsRange
            dateFormat="yyyy-MM-dd"
            placeholderText="Pilih Rentang Tanggal"
            className="border-2 border-solid border-gray-600 inline-block rounded-full text-center"
          />
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-2">
        {listResep.filter(filterByDateRange).map((result, index) => (
            <Card placeholder onPointerEnterCapture onPointerLeaveCapture className="border" key={index}>
              <CardBody  placeholder onPointerEnterCapture onPointerLeaveCapture >
                {/* <div className="flex items-center gap-2">
                  <Typography
                    placeholder
                    variant="small"
                    color="blue"
                    className="mb-2 font-normal text-gray-700"
                  >
                    {resep.kd_poli}
                  </Typography>
                </div> */}
                <Typography placeholder onPointerEnterCapture onPointerLeaveCapture variant="h5" className="mb-2 font-bold !text-black">
                  {result.pasien.pasien.nm_pasien} - {result.pasien.no_rkm_medis}
                </Typography>
                <Typography placeholder onPointerEnterCapture onPointerLeaveCapture className="mb-6 font-bold !text-black">
                  No.Resep : {result.no_resep}
                </Typography>
                <Typography  placeholder onPointerEnterCapture onPointerLeaveCapture className="mb-6 font-bold !text-black">
                  {result.pasien.poliklinik.nm_poli}
                </Typography>
                <Typography placeholder onPointerEnterCapture onPointerLeaveCapture className="mb-1 font-normal !text-gray-700">
                  {/* Non Racikan:<br></br> */}
                  {result.resep.map((item, index) => {
                    return (
                      <span key={index}>
                        {index + 1}. {item.nama_brng}
                        <br></br>
                        Jumlah : {item.jml && ` (${item.jml})`}
                        <br></br>
                        Signa : {item.signa && ` (${item.signa})`}
                        <br></br>
                        {index !== result.resep.length - 1}
                        <br></br>
                      </span>
                    );
                  })}
                </Typography>
                <br></br>
                {/* <Typography   placeholder onPointerEnterCapture onPointerLeaveCapture className="mb-1 font-normal !text-gray-700">
                  Non Racikan : {result.resep.map((item) => {return (item.nama_brng + "("+item.jml+") ")})}
                                {result.resep.jml}
                </Typography> */}
                {/* <Typography  placeholder onPointerEnterCapture onPointerLeaveCapture className="mb-6 font-normal !text-gray-700">
                  Racikan : {result.resep.nama_brng}
                </Typography> */}
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Button 
                    placeholder onPointerEnterCapture onPointerLeaveCapture
                    variant="outlined"
                    onClick={() => handleCompleteButtonClick(index)} // Panggil fungsi untuk menghapus item
                  >
                    Selesai
                  </Button>
                </div>
              </CardBody>
            </Card>
          ))}
      </div>
    </section>
  );
}

export default ListResep;
