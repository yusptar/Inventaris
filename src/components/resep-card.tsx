import { Typography, Card, CardBody, CardHeader, Button } from "@material-tailwind/react";
import Image from "next/image";


interface CourseCardProps {
  img: string;
  tag: string;
  title: string;
  desc: string;
  label: string;
}

export function CourseCard({ tag, title, desc, label }: CourseCardProps) {
  return (
    <Card placeholder className="border">
      <CardBody placeholder>
        <div className="flex items-center gap-2">
          <Typography
            placeholder
            variant="small"
            color="blue"
            className="mb-2 font-normal text-gray-500"
          >
            {tag}
          </Typography>
        </div>
        <a
          href="#"
          className="text-blue-gray-900 transition-colors hover:text-gray-900"
        >
          <Typography placeholder variant="h5" className="mb-2 normal-case">
            {title}
          </Typography>
        </a>
        <Typography placeholder className="mb-6 font-normal !text-gray-500">
          {desc}
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Button placeholder variant="outlined">{label}</Button>
        </div>
      </CardBody>
    </Card>
  );
}

export default CourseCard;