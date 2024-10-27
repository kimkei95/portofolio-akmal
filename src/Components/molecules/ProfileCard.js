import Image from "next/image";
export default function ProfileCard() {
  return (
    <div className="ml-80 ">
      <Image
        src="/images/123_3.jpg"
        width={500}
        height={500}
        alt="Picture of the author"
        className="w-72 h-72 rounded-full object-cover border-4 border-white shadow-lg"
      />
    </div>
  );
}
