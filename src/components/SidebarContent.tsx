"use client";
import { LogIn, Plus, Sparkles } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { Card, CardContent } from './ui/card';


const isAnonymous = true;

const handleNewChat = () => {};

const SidebarContent = () => {
  return (
    <div>
        <div className="flex h-full flex-col">
            <div className="p-4">
                <Link href={"/"} className="flex items-center space-x-2 mb-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg
                    bg-linear-to-r from-purple-500 to-pink-500">
                        <Sparkles className="h-4 w-4 text-white"/>
                    </div>
            
                    <span className="font-semibold">AI Chat Hub</span>
                </Link>
                <Button onClick={handleNewChat} className="w-full" variant={"outline"}>
                    <Plus />
                    New Chat 
                </Button>
            </div>
            <Separator />
            {/* Anonymous User Notice*/}
            {
                isAnonymous && 
                (
                    <div className='p-4'>
                        <Card className="border">
                            <CardContent className='p-3'>
                                <p className='text-sm mb-2 text-destructive'>
                                    💡 You&apos;re Chatting anonymously
                                </p>
                                <p className='text-sm mb-3'>
                                    Sign in to save your chat history
                                </p>
                                <Button className='w-full' variant={"outline"} size={"sm"}>
                                    <LogIn />
                                    Sign In
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                )
            }


        </div>        
    </div>
  )
}

export default SidebarContent
