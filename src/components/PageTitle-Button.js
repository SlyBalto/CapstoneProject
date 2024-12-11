import React from 'react';

function PageTitleButton({ onClick }) {
    return (
        <button
            onClick={onClick}
            style={{
                height: "30px",
                width: "30px",
                position: "absolute",
                left: "15px",
                cursor: "pointer",
                backgroundColor: "transparent",
                border: "none", // Removes default button styles
                padding: 0, // Ensures size matches the image
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
            aria-label="Go back"
        >
            <img
                src='./UI/UI_Arrow.svg'
                alt=""
                style={{ height: "100%" }}
            />
        </button>
    );
}

export default PageTitleButton;
