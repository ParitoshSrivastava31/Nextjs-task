import Image from "next/image";
import { Clock, Heart, Share, Card, Eye } from "iconsax-react";

import { comments } from "@/constants";

function Comments() {
  return (
    <div>
      {comments.map((items) => (
        <div
          className="border text-gray-500 w-full p-3 rounded-2xl mb-4"
          key={items.id}
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Image
                  src={items.image}
                  alt="loom"
                  height={36}
                  width={36}
                  className="rounded-full"
                />
                <div className="font-medium">
                  <p className="text-sm text-gray-800">{items.name}</p>
                  <p className="text-xs text-gray-500">{items.designation}</p>
                </div>
              </div>
              <div className="flex text-xxs font-medium items-center gap-1 pr-1.5 bg-orange-100 px-1 py-0.5 rounded-full text-orange-400">
                <Clock size={14} variant="Bold" />
                <span>15 min ago</span>
              </div>
            </div>
            <hr className="bg-gray-400" />
            {/* Comment */}
            <div className="space-y-3">
              <p>{items.comment}</p>
            </div>
            {/* Icons */}
            <div className="flex justify-between" style={{ padding: "0 50px" }}>
              <div className="flex items-center gap-1">
                <Heart size={18} variant="Outline" />
                <span>5k</span>
              </div>
              <div className="flex items-center gap-1">
                <Eye size={18} variant="Outline" />
                <span>5k</span>
              </div>
              <div className="flex items-center gap-1">
                <Card size={18} variant="Outline" />
                <span>5k Comments</span>
              </div>
              <div className="flex items-center gap-1">
                <Share size={18} variant="Outline" />
                <span>Share</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Comments;
