import React from 'react';

interface TechIconProps {
  name: string;
  className?: string;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, className = "w-5 h-5" }) => {
  const normalized = name.toLowerCase().trim();

  switch (normalized) {
    case 'react':
      return (
        <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" fill="none" stroke="currentColor">
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
          <g stroke="#61DAFB" strokeWidth="1">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );

    case 'javascript':
    case 'js':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#F7DF1E" />
          <path
            d="M7 16.5c.5.8 1.2 1.3 2.2 1.3 1.2 0 1.9-.7 1.9-2.1v-5.2h-1.8v5.1c0 .5-.2.8-.6.8-.3 0-.6-.2-.8-.6L7 16.5zm7.3-3.2c.7-.4 1.4-.7 2.2-.7.9 0 1.5.4 1.5 1.1 0 .7-.5 1-1.3 1.3l-.7.3c-1.3.5-2.2 1.2-2.2 2.6 0 1.6 1.3 2.7 3.3 2.7 1.2 0 2.2-.4 2.8-1l-.7-1.3c-.5.4-1.2.7-2.1.7-.8 0-1.4-.4-1.4-1 0-.6.4-.9 1.2-1.2l.7-.3c1.5-.6 2.3-1.3 2.3-2.7 0-1.5-1.2-2.5-3-2.5-1.1 0-2.1.3-2.8.8l.5 1.4z"
            fill="#000000"
          />
        </svg>
      );

    case 'html':
    case 'html5':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M3 2l1.6 18.2L12 22.4l7.4-2.2L21 2H3z" fill="#E34F26" />
          <path d="M12 3.8v16.7l5.9-1.7L19.4 3.8H12z" fill="#EF652A" />
          <path d="M12 8.3H8.3l.3 3h3.4v2.7H8.8l.2 2.7 3 1v0l3-.8.4-4.5h-3.4" fill="#EBEBEB" />
          <path d="M12 8.3v2.8h3.5l-.3 3.4-3.2.9v2.8l5.2-1.4.7-8.5H12z" fill="#FFFFFF" />
        </svg>
      );

    case 'css':
    case 'css3':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M3 2l1.6 18.2L12 22.4l7.4-2.2L21 2H3z" fill="#1572B6" />
          <path d="M12 3.8v16.7l5.9-1.7L19.4 3.8H12z" fill="#33A9DC" />
          <path d="M12 8.3H7.8l.3 2.9h3.9v2.8H8.3l.2 2.6 3.5 1v0l3.5-1 .4-4.5h-3.9" fill="#EBEBEB" />
          <path d="M12 8.3v2.8h3.8l-.3 3.5-3.5 1v2.8l5.5-1.5.7-8.6H12z" fill="#FFFFFF" />
        </svg>
      );

    case 'python':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path
            d="M11.9 2c-3.1 0-2.9 1.3-2.9 1.3l.01 1.4h3v.4H6.2S3.3 4.8 3.3 8.3c0 3.5 2.5 3.4 2.5 3.4h1.5v-2.1s-.1-2.5 2.5-2.5h4.3s2.4.1 2.4-2.4c0-2.5-2.6-2.7-4.6-2.7zm-1.7 1.3a.7.7 0 110 1.4.7.7 0 010-1.4z"
            fill="#3776AB"
          />
          <path
            d="M12.1 22c3.1 0 2.9-1.3 2.9-1.3l-.01-1.4h-3v-.4h5.8s2.9.3 2.9-3.2c0-3.5-2.5-3.4-2.5-3.4h-1.5v2.1s.1 2.5-2.5 2.5H9.9s-2.4-.1-2.4 2.4c0 2.5 2.6 2.7 4.6 2.7zm1.7-1.3a.7.7 0 110-1.4.7.7 0 010 1.4z"
            fill="#FFD438"
          />
        </svg>
      );

    case 'git':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path
            d="M21.6 10.9L13.1 2.4a1.6 1.6 0 00-2.2 0L8.6 4.7l2.8 2.8a1.9 1.9 0 012.4 2.4l2.7 2.7a1.9 1.9 0 11-1.2 1.2l-2.6-2.6v4.6a1.9 1.9 0 11-1.6 0V11a1.9 1.9 0 01-1-2.5L7.4 5.8 2.4 10.8a1.6 1.6 0 000 2.2l8.5 8.5a1.6 1.6 0 002.2 0l8.5-8.5a1.6 1.6 0 000-2.1z"
            fill="#F05032"
          />
        </svg>
      );

    case 'github':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          />
        </svg>
      );

    case 'vscode':
    case 'vs code':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path
            d="M17.5 2.2a1.5 1.5 0 011.8.4l4.2 4.1a1.5 1.5 0 01.5 1.1v8.4a1.5 1.5 0 01-.5 1.1l-4.2 4.1a1.5 1.5 0 01-1.8.4L8.7 17.2 4.2 20.6a1 1 0 01-1.4-.2l-2-2.7a1 1 0 01.2-1.4l5.3-4.3L1 7.7a1 1 0 01-.2-1.4l2-2.7a1 1 0 011.4-.2l4.5 3.4L17.5 2.2z"
            fill="#007ACC"
          />
          <path d="M17.5 5.5L8.2 12l9.3 6.5V5.5z" fill="#FFFFFF" fillOpacity="0.4" />
        </svg>
      );

    case 'figma':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M8 2h4v5H8a2.5 2.5 0 110-5z" fill="#F24E1E" />
          <path d="M12 2h4a2.5 2.5 0 010 5h-4V2z" fill="#FF7262" />
          <path d="M8 7h4v5H8a2.5 2.5 0 110-5z" fill="#A259FF" />
          <path d="M12 7h4a2.5 2.5 0 110 5h-4V7z" fill="#1ABCFE" />
          <path d="M8 12h4v4.5a2.5 2.5 0 11-4-2v-2.5z" fill="#0ACF83" />
        </svg>
      );

    default:
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
        </svg>
      );
  }
};
