import { ShareIcon } from "../Icons/ShareIcon";

export const Card = () => {
  return (
    <div>
      <div className="bg-white border border-gray-200 s rounded-md ml-5  p-4 max-w-80">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className=" text-gray-500">
              <ShareIcon />
            </div>
            <div className="text-md flex items-center">Project Ideas</div>
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <ShareIcon />
            <ShareIcon />
          </div>
        </div>
        <iframe
          className="max-w-70"
          src="https://www.youtube.com/embed/e6Qcos30Wt4?si=GXGKp7_X073ds4fZ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};
