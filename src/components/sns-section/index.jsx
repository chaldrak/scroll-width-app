import React from "react";
import ReactGA from "react-ga4";
import {
  FacebookShareButton,
  EmailShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import {
  AiOutlineTwitter,
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineReddit,
  AiOutlineMail,
} from "react-icons/ai";
import { FaWhatsapp, FaTelegram } from "react-icons/fa";

const SNS = () => {
  const shareUrl =
    "https://www.linkedin.com/feed/update/urn:li:activity:7053795712953643008/";
  const title = "When A Math Teacher Dive Into Code...";

  const handleGAEvents = () =>
    ReactGA.event({
      category: "your category",
      action: "your action",
      label: "your label",
    });
  return (
    <section className="my-10 sticky top-0">
      <div className="w-full h-[6px] bg-white dark:bg-black" />
      <div className="w-full h-[50px] border-b border-gray-500 bg-white dark:bg-black flex items-center space-x-2 md:space-x-4">
        <span>Partager sur : </span>
        {sns.map((item, index) => (
          <item.button
            key={index}
            title={title}
            url={shareUrl}
            quote={title}
            hashtag="react tailwind react-share scroll"
            description="When A Math Teacher Dive Into Code..."
            onClick={() => handleGAEvents}
          >
            <item.icon size={20} className="hover:text-gray-500" />
          </item.button>
        ))}
      </div>
    </section>
  );
};

export default SNS;

const sns = [
  { button: TwitterShareButton, icon: AiOutlineTwitter },
  { button: FacebookShareButton, icon: AiFillFacebook },
  { button: EmailShareButton, icon: AiOutlineMail },
  { button: TelegramShareButton, icon: FaTelegram },
  { button: LinkedinShareButton, icon: AiFillLinkedin },
  { button: RedditShareButton, icon: AiOutlineReddit },
  { button: WhatsappShareButton, icon: FaWhatsapp },
];
