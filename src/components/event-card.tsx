import React from "react";
import Image from "next/image";
import {
  Typography,
  Card,
  CardBody,
  CardHeader,
  Button,
} from "@material-tailwind/react";

interface EventCardProps {
  img: string;
  title: string;
  desc: string;
  buttonLabel: string;
}

export function EventCard({ img, title, desc, buttonLabel }: EventCardProps) {
  return (
    <Card placeholder color="transparent" shadow={false}>
      <CardHeader placeholder floated={false} className="mx-0 mt-0 mb-6 h-48">
        <Image
          width={768}
          height={768}
          src={img}
          alt={title}
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody placeholder className="p-0">
        <a
          href="#"
          className="text-blue-gray-900 transition-colors hover:text-gray-800"
        >
          <Typography placeholder variant="h5" className="mb-2">
            {title}
          </Typography>
        </a>
        <Typography placeholder className="mb-6 font-normal !text-gray-500">
          {desc}
        </Typography>
        <Button placeholder color="gray" size="sm">
          {buttonLabel}
        </Button>
      </CardBody>
    </Card>
  );
}

export default EventCard;
