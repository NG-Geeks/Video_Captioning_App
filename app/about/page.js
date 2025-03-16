import React from 'react'
export const metadata = {
    title: 'About Us - CaptionStudio',
    description: 'Learn more about us',
};
const page = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-800 to-indigo-700 text-white flex flex-col justify-center items-center p-8">
            <h1 className="text-4xl font-bold mb-4">About Video Caption Studio</h1>
            <p className="text-lg max-w-2xl text-center">
                Video Caption Studio allows you to add and sync captions to your videos easily.
                Create precise captions and make your content more accessible to a wider audience.
            </p>
        </div>
    )
}

export default page
