import Image from "next/image";

type Props = {
  image: string;
};

const Avatar = ({ image }: Props) => {
  return (
    <Image
      src={image}
      alt="user image"
      width={38}
      height={38}
      className="overflow-hidden rounded-full object-cover ring-2 ring-gray-300"
    />
  );
};

export default Avatar;
