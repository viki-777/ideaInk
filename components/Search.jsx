'use client'
import React, { useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { toast } from '@/hooks/use-toast'

// import { QueryDialog } from './QueryDialog'
import { useQueryContext } from '@/context/BusinessNameContext'
import { Hammer, Cog } from 'lucide-react'

const Search = () => {
    

    const [keyword, setKeyword] = useState()
    const [queryDialog, setQueryDialog] = useState(false)
    const handleKeyword = (e) => {
        setKeyword(e.target.value)
    }

    const showQueryDialog = () => {
        if (!keyword) {
            return toast({
                title: 'Failed to generate business name',
                description: 'Please enter keyword to generate business name.'
            })
        }

        updateQuery({ keyword })

        setQueryDialog(!queryDialog)

    }

    return (
        <div className='flex justify-center items-center pt-5'>
            <div className='w-[600px] flex items-center gap-5'>
                <Input onChange={handleKeyword} placeholder="Enter keyword..." className="h-14 text-white md:text-md border-primary rounded-full" />
                <Button onClick={showQueryDialog} className="h-14 rounded-full text-lg px-5">
                 <Cog className="hover:scale-150" size={100} /> 
                </Button>
            </div>
            
        </div>
    )
}

export default Search