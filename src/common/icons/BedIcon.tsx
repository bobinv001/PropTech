import * as React from 'react';

const BedIcon: React.FC<React.HtmlHTMLAttributes<SVGElement>> = (props) => {
    return (
        <svg {...props} viewBox="0 0 512 512">
            <g>
                <circle cx="45" cy="256" r="45" />
                <path d="m0 331h512v60h-512z" />
                <path d="m437 211h-272c-41.355 0-75 33.645-75 75v15h422v-15c0-41.355-33.645-75-75-75z" />
                <path d="m0 481h30v-30h452v30h30v-60h-512z" />
                <path d="m246.729 121h84.271v-30h-35.729l30-60h-84.271v30h35.729z" />
                <path d="m126.729 181h84.271v-30h-35.729l30-60h-84.271v30h35.729z" />
            </g>
        </svg>
    );
};

export { BedIcon };
