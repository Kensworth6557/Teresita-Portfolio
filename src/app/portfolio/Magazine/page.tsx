import WorkNavbar from "@/app/components/WorkNavbar";
import DialogCustom from "@/app/components/dialogcustom";

export default function Magazine() {
  return (
    <>
      <WorkNavbar current="magazine" />
      <div className="flex items-center justify-center">
        {/*Cien*/}
        <DialogCustom
          src="/cover/LatinxFashionCover.png"
          alt="Latinx Fashion Cover"
          correspondingPhotos={[
            {
              src: "/cover/LatinxFashionCover.png",
              alt: "Latinx Fashion Cover Photo",
            },
            {
              src: "/LatinxFashionPhotos/page1.png",
              alt: "Latinx Fashion Cover Photo 1",
            },
            {
              src: "/LatinxFashionPhotos/page2.png",
              alt: "Latinx Fashion Cover Photo 2",
            },
            {
              src: "/LatinxFashionPhotos/page3.png",
              alt: "Latinx Fashion Cover Photo 3",
            },
            {
              src: "/LatinxFashionPhotos/page4.png",
              alt: "Latinx Fashion Cover Photo 4",
            },
            {
              src: "/LatinxFashionPhotos/page5.png",
              alt: "Latinx Fashion Cover Photo 5",
            },
            {
              src: "/LatinxFashionPhotos/page6.png",
              alt: "Latinx Fashion Cover Photo 6",
            },
            {
              src: "/LatinxFashionPhotos/page7.png",
              alt: "Latinx Fashion Cover Photo 7",
            },
            {
              src: "/LatinxFashionPhotos/page8.png",
              alt: "Latinx Fashion Cover Photo 8",
            },
            {
              src: "/LatinxFashionPhotos/page9.png",
              alt: "Latinx Fashion Cover Photo 9",
            },
            {
              src: "/LatinxFashionPhotos/page10.png",
              alt: "Latinx Fashion Cover Photo 10",
            },
            {
              src: "/LatinxFashionPhotos/page11.png",
              alt: "Latinx Fashion Cover Photo 11",
            },
            {
              src: "/LatinxFashionPhotos/page12.png",
              alt: "Latinx Fashion Cover Photo 12",
            },
            {
              src: "/LatinxFashionPhotos/page13.png",
              alt: "Latinx Fashion Cover Photo 13",
            },
            {
              src: "/LatinxFashionPhotos/page14.png",
              alt: "Latinx Fashion Cover Photo 14",
            },
            {
              src: "/LatinxFashionPhotos/page15.png",
              alt: "Latinx Fashion Cover Photo 15",
            },
            {
              src: "/LatinxFashionPhotos/page16.png",
              alt: "Latinx Fashion Cover Photo 16",
            },
            {
              src: "/LatinxFashionPhotos/page17.png",
              alt: "Latinx Fashion Cover Photo 17",
            },
          ]}
          correspondingVideos={[]}
        />
      </div>
    </>
  );
}
