import Image from "next/image"
/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return (
    <div>
      {/* remote image that does not set Cache-Control header */}
      <Image src="https://renderapi.s3.amazonaws.com/D5DH7jDhj.png" alt="" width="96" height="96" />
    </div>
  )
}
