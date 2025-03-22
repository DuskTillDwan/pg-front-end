import Image from "next/image";
import UploadJson from "@/components/UploadJson"

export default function Home() {
  return (<div className="flex justify-center items-center min-h-screen">
                <UploadJson />
          </div>
         );
}
