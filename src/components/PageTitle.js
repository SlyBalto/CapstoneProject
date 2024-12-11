import React from 'react';
import { Link } from 'react-router-dom';
import PageTitleButton from './PageTitle-Button';

function PageTitle({ titleText, onClick, link }) {
    return (
        <div className='page-title' style={{ color: "black", width: "100%", position: "relative"}}>
            {(onClick || link) && (
                link ? (
                    <Link className='page-title' to={link}>
                        <PageTitleButton />
                    </Link>
                ) : (
                    <PageTitleButton onClick={onClick} />
                )
            )}
            <h1>{titleText}</h1>
        </div>
    );
}

export default PageTitle;
