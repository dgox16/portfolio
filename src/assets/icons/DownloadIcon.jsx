export const DownloadIcon = ({
    fill = "currentColor",
    filled,
    size,
    height,
    width,
    label,
    ...props
}) => {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" height="1.5em" width="1.5em" {...props}>
            <title>Download</title>
            <path d="M20 8.94a1.31 1.31 0 00-.06-.27v-.09a1.07 1.07 0 00-.19-.28l-6-6a1.07 1.07 0 00-.28-.19h-.1a1.1 1.1 0 00-.31-.11H7a3 3 0 00-3 3v14a3 3 0 003 3h10a3 3 0 003-3V9v-.06zm-6-3.53L16.59 8H15a1 1 0 01-1-1zM18 19a1 1 0 01-1 1H7a1 1 0 01-1-1V5a1 1 0 011-1h5v3a3 3 0 003 3h3zm-4.71-4.71l-.29.3V12a1 1 0 00-2 0v2.59l-.29-.3a1 1 0 00-1.42 1.42l2 2a1 1 0 00.33.21.94.94 0 00.76 0 1 1 0 00.33-.21l2-2a1 1 0 00-1.42-1.42z" />
        </svg>
    );
};
