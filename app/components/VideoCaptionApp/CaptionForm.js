"use client"

export default function CaptionForm({
    captionText,
    startTime,
    endTime,
    setCaptionText,
    setStartTime,
    setEndTime,
    handleAddCaption
}) {
    return (
        <form onSubmit={handleAddCaption} className="space-y-4 bg-gray-800 p-6 rounded-xl">
            <h2 className="text-2xl font-semibold">Add New Caption</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                    <input
                        type="text"
                        value={captionText}
                        onChange={(e) => setCaptionText(e.target.value)}
                        placeholder="Caption text"
                        className="w-full px-3 py-2 bg-gray-700 rounded-lg border border-gray-600 focus:ring-indigo-500 focus:border-indigo-500"
                        required
                    />
                </div>
                <div>
                    <input
                        type="number"
                        step="0.1"
                        value={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
                        placeholder="Start time (seconds)"
                        className="w-full px-3 py-2 bg-gray-700 rounded-lg border border-gray-600 focus:ring-indigo-500 focus:border-indigo-500"
                        required
                    />
                </div>
                <div>
                    <input
                        type="number"
                        step="0.1"
                        value={endTime}
                        onChange={(e) => setEndTime(e.target.value)}
                        placeholder="End time (seconds)"
                        className="w-full px-3 py-2 bg-gray-700 rounded-lg border border-gray-600 focus:ring-indigo-500 focus:border-indigo-500"
                        required
                    />
                </div>
            </div>
            <button
                type="submit"
                className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium transition-colors"
            >
                Add Caption
            </button>
        </form>
    );
}