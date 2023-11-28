import React, { useState } from 'react'
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai';

const CommentCard = () => {
    const [isCommentLikes, setIsCommentLiked] = useState();

    const handleLikeComment=()=>{
        setIsCommentLiked(!isCommentLikes);
    }


  return (
    <div>
      <div className='flex items-center justify-between py-5'>
        <div className='flex items-center'>
            <div>
                <img className='w-9 h-9 rounded-full' src="https://cdn.pixabay.com/photo/2023/10/26/14/06/couple-8342763_640.jpg" alt="" />
            </div>
            <div className='ml-3'>
                <p>
                    <span className='font-semibold'>
                        username
                    </span>
                    <span className='ml-2'>
                        nice post
                    </span>
                </p>
                <div className='flex items-center space-x-3 text-xs opacity-60 pt-2'>
                    <span>1 min ago</span>
                    <span>15 likes</span>
                </div>
            </div>
        </div>

        {isCommentLikes?<AiFillHeart onClick={handleLikeComment} className="text-xs hover:opcity-50 cursor-pointer text-red-600"/>:
        <AiOutlineHeart onClick={handleLikeComment} className="text-xs hover:opcity-50 cursor-pointer"/>}
      </div>
    </div>
  )
}

export default CommentCard
