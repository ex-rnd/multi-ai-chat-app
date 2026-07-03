import Link from "next/link";
import { Sparkles } from "lucide-react";
import React from 'react';

const ChatSidebar = () => {
  return (
    <div className="flex h-full flex-col">
        <div className="p-4">
            <Link href={"/"} className="flex items-center space-x-2 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg
                bg-linear-to-r from-purple-500 to-pink-500">
                    <Sparkles />
                </div>
        
                <span>AI Chat Hub</span>

            </Link>
        </div>
    </div>
  )
}

export default ChatSidebar;
