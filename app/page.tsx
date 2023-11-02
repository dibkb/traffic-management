import Image from "next/image";
export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-[600px] flex-col gap-6">
      <h3 className="text-4xl mt-4">Traffic Management System</h3>
      <Image
        src="https://iiitl.ac.in/wp-content/uploads/2019/10/Final_Logo_IIITL.png"
        alt="iiitl logo"
        width={150}
        height={150}
      />
    </main>
  );
}
