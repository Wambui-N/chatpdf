'use client'

import { Inbox } from 'lucide-react'
import React from 'react'
import { useDropzone } from 'react-dropzone'

type Props = {}

const FileUpload = (props: Props) => {

    const { getRootProps, getInputProps } = useDropzone(
        {
            accept: {'application/pdf':['.pdf']},
            maxFiles: 1,
            onDrop: (acceptedFiles) => {
                console.log(acceptedFiles)
            }
        }
    )

  return (
    <div className='p-2 bg-white rounded-xl'>
        <div {...getRootProps()} className='border-dashed rounded-xl border-2 cursor-pointer bg-gray-50 p-8 flex flex-col justify-center items-center '>
            <input className='' {...getInputProps()} />
            <>
            <Inbox className='w-10 h-10 text-blue-500' />
            <p className='mt-2 text-sm text-slate-400'>Drop PDF Here</p>
            </>
        </div>
    </div>
  )
}

export default FileUpload