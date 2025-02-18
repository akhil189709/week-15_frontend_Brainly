import { ShareIcon } from "../Icons/ShareIcon";

interface CardProps {
  title: string;
  type: "youtube" | "tweeter";
  link: string;
}
export const Card = ({ title, type, link }: CardProps) => {
  return (
    <div>
      <div className="bg-white border border-gray-200 s rounded-md ml-5  p-4 max-w-80 min-h-50 min-w-80">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className=" text-gray-500">
              <ShareIcon />
            </div>
            <div className="text-md flex items-center">{title}</div>
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <a href={link} target="_blank">
              <ShareIcon />
            </a>
          </div>
        </div>
        <div>
          {type === "youtube" && (
            <iframe
              className="w-full"
              src={link.replace("watch", "embed").replace("?v=", "/")}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          )}
          {type === "tweeter" && (
            <blockquote className="twitter-tweet">
              <a href={link.replace("x.com", "twitter.com")}></a>
            </blockquote>
          )}
        </div>
      </div>
    </div>
  );
};
