import { useState } from 'react';

export function SkipLink() {
    const [isFocused, setIsFocused] = useState(false);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
            mainContent.tabIndex = -1;
            mainContent.focus();
            mainContent.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <a
            href="#main-content"
            className={`fixed top-4 left-4 z-[100] px-6 py-3 bg-white text-[#1D857E] font-medium rounded-lg shadow-lg border border-[rgba(29,133,126,0.2)] transition-transform duration-200 ${isFocused ? 'translate-y-0' : '-translate-y-[150%]'
                }`}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onClick={handleClick}
        >
            Skip to main content
        </a>
    );
}
