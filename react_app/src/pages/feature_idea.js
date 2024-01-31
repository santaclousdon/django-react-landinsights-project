import React, { useEffect } from 'react';
import { Card } from "library";

export default function FeatureIdea() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "//embed.typeform.com/next/embed.js";
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <Card>
            <div className="card-body text-center">
            <h6 class="mb-0">Got A Killer Feature Idea?</h6>
            <p class="text-sm mb-0">Tell us about it now!</p>
            <hr class="horizontal dark my-3"></hr>
            <div data-tf-live="01HNGWTNFKF4K7JT4SPGND3AN6"></div>
            </div>
        </Card>
    );
}