"use client"

export default function CurrentCaption({ currentCaption }) {
    return (
        <div className="space-y-2">
            <h1 className="text-xl font-bold">Caption :</h1>
            <div className="text-center p-4 bg-gray-800 rounded-lg min-h-[60px]">
                {currentCaption ? (
                    <div className="text-xl font-medium animate-fadeIn">
                        {currentCaption}
                    </div>
                ) : (
                    <div className="text-xl font-medium animate-fadeIn">
                        No Caption Available : Add Caption to see !!!
                    </div>
                )}
            </div>
        </div>
    );
}