export const formatTime = (seconds) => {
    const date = new Date(0);
    date.setSeconds(seconds);
    return date.toISOString().substr(11, 12).replace('.', ',');
};

export const generateWebVTT = (captions) => {
    const vttContent = captions
        .sort((a, b) => a.start - b.start)
        .map((caption, index) =>
            `${index + 1}\n` +
            `${formatTime(caption.start)} --> ${formatTime(caption.end)}\n` +
            `${caption.text}\n`
        )
        .join('\n');

    return `WEBVTT\n\n${vttContent}`;
};