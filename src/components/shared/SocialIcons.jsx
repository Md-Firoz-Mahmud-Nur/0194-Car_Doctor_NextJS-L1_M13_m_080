import Image from "next/image";
import React from "react";

const SocialIcons = () => {
  return (
    <div className="flex items-center justify-center gap-4">
      <Image
        width={55}
        height={55}
        alt="Facebook"
        src="/assets/Facebook.svg"
        className="rounded-full bg-[#F5F5F8] p-3"
      ></Image>
      <Image
        width={55}
        height={55}
        alt="LinkedIn"
        src="/assets/LinkedIn.svg"
        className="rounded-full bg-[#F5F5F8] p-3"
      ></Image>
      <Image
        width={55}
        height={55}
        alt="Google"
        src="/assets/Google.svg"
        className="rounded-full bg-[#F5F5F8] p-3"
      ></Image>
    </div>
  );
};

export default SocialIcons;
