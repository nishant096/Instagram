import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalOverlay } from '@chakra-ui/react'
import React from 'react'
import { BsBookmark, BsBookmarkFill, BsEmojiSmile, BsThreeDots } from 'react-icons/bs'
import CommentCard from './CommentCard'
import { FaRegComment } from 'react-icons/fa'
import { RiSendPlaneLine } from 'react-icons/ri'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import "./CommentModel.css"

const CommentModel = ({ onClose, isOpen, isSaved, isPostLiked, handlePostLike, handledSaved }) => {
    return (
        <div>
            <Modal size={"4xl"} onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalBody>
                        <div className='flex h-[75vh] relative'>
                            <div className='w-[45%] flex flex-col justify-center'>
                                <img className='max-h-full w-full' src="https://cdn.pixabay.com/photo/2023/10/18/15/31/wind-8324507_640.jpg" alt="" />
                            </div>
                            <div className='w-[55%] pl-10'>
                                <div className='flex justify-between items-center py-5'>
                                    <div className='flex items-center'>
                                        <div>
                                            <img className='w-9 h-9 rounded-full' src="https://cdn.pixabay.com/photo/2023/11/02/11/32/woman-8360355_640.jpg" alt="" />
                                        </div>
                                        <div className='ml-2'>
                                            <p>username</p>
                                        </div>
                                    </div>
                                    <BsThreeDots />
                                </div>
                                <hr />
                                <div className='comment'>
                                    {[1, 1, 1, 1].map(() => <CommentCard />)}
                                </div>
                                <div className='absolute bottom-0 w-[50%]'>
                                    <div className='flex justify-between items-center w-full py-4'>
                                        <div className='flex items-center space-x-2'>
                                            {isPostLiked ? <AiFillHeart className='text-xl hover:opacity-50 cursor-pointer text-red-600' onClick={handlePostLike} /> : <AiOutlineHeart className='text-xl hover:opacity-100 cursor-pointer' onClick={handlePostLike} />}
                                            <FaRegComment className='text-xl hover:opacity-50 cursor-pointer' />
                                            <RiSendPlaneLine className='text-xl hover:opacity-50 cursor-pointer' />
                                        </div>
                                        <div className='cursor-pointer'>
                                            {isSaved ? <BsBookmarkFill onClick={handledSaved} className='text-xl hover:opacity-50 cursor-pointer' /> : <BsBookmark onClick={handledSaved} className='text-xl hover:opacity-50 cursor-pointer' />}
                                        </div>
                                    </div>
                                    <div className='w-full py-2'>
                                        <p>10 likes</p>
                                        <p className='opacity-50 text-sm'>1 day ago</p>
                                    </div>
                                    <div className='border-top w-full'>
                                        <div className='flex w-full items-center'>
                                            <BsEmojiSmile />
                                            <input className='commentInput' type="text" placeholder='Add a comment...' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ModalBody>
                    {/* <ModalFooter>
                        <Button onClick={onClose}>Close</Button>
                    </ModalFooter> */}
                </ModalContent>
            </Modal>
        </div>
    )
}

export default CommentModel
