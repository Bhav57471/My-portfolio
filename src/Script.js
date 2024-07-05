import React, { useEffect } from 'react';
import Typed from 'typed.js'; // Import Typed.js library if not already done

function Script() {
    useEffect(() => {
        <script src="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js"></script>

        // Initialize Typed.js when component mounts
        var typed = new Typed('#element', {
            strings: ['Frontend Developer'],
            typeSpeed: 50,
        });

        // Clean up Typed.js instance when component unmounts
        return () => {
            typed.destroy();
        };
    }, []); // Empty dependency array ensures this effect runs only once on mount

    return null; // Since this component is for running a script, it doesn't render any JSX
}

export default Script;
