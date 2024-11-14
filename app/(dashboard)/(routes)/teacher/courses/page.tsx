import React from 'react'
import Link from "next/link"
import { Button } from '@/components/ui/button'

const TeacherCourses = () => {
  return (
    <div className='p-6'>
        <Link href={"/teacher/create"}>
        <Button>
            Create
        </Button>
        </Link>
    </div>
  )
}

export default TeacherCourses