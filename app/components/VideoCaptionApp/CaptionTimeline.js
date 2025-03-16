"use client"

export default function CaptionTimeline({ captions, currentTime }) {
    return (
        <div className="bg-gray-800 p-6 rounded-xl">
            <h2 className="text-2xl font-semibold mb-4">Captions Timeline</h2>
            <div className="space-y-2">
                {captions.map((caption, index) => (
                    <div
                        key={index}
                        className={`p-4 rounded-lg transition-all ${currentTime >= caption.start && currentTime <= caption.end
                            ? 'bg-indigo-600/30 border-l-4 border-indigo-400'
                            : 'bg-gray-700 hover:bg-gray-600'
                            }`}
                    >
                        <div className="flex justify-between items-center">
                            <span className="font-medium">{caption.text}</span>
                            <span className="text-sm text-gray-400">
                                {caption.start.toFixed(1)}s - {caption.end.toFixed(1)}s
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}