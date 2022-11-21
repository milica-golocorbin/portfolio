import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaDev } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";

const MyInfo = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <p className="text-base md:text-xl">Email: milicagolocorbin@gmail.com</p>
      <p className="text-base md:text-xl">Phone: +381 063 123 65 51</p>
      <div className="flex items-center justify-center text-3xl gap-x-3">
        {/* GITHUB */}
        <a
          target="_blank"
          aria-label="milica golocorbin github link"
          href="https://github.com/milica-golocorbin"
          rel="noopener noreferrer"
        >
          <FaGithub className="cursor-pointer hover:scale-110" />
        </a>
        {/* INSTAGRAM */}
        <a
          target="_blank"
          aria-label="milica golocorbin instagram link"
          href="https://www.instagram.com/milicagolocorbin"
          rel="noopener noreferrer"
        >
          <FaInstagram className="cursor-pointer hover:scale-110" />
        </a>
        {/* TWITTER */}
        <a
          target="_blank"
          aria-label="milica golocorbin instagram link"
          href="https://twitter.com/micagolocorbin"
          rel="noopener noreferrer"
        >
          <FaTwitter className="cursor-pointer hover:scale-110" />
        </a>
        {/* DEV */}
        <a
          target="_blank"
          aria-label="milica golocorbin instagram link"
          href="https://dev.to/milicagolocorbin"
          rel="noopener noreferrer"
        >
          <FaDev className="cursor-pointer hover:scale-110" />
        </a>
        {/* YOUTUBE */}
        <a
          target="_blank"
          aria-label="milica golocorbin instagram link"
          href="https://www.youtube.com/channel/UCvUxkka6v725zFX-v2SJmtQ"
          rel="noopener noreferrer"
        >
          <FaYoutubeSquare className="cursor-pointer hover:scale-110" />
        </a>
      </div>
    </div>
  );
};

export default MyInfo;
