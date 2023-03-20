import React from 'react';
import css from '../Section/Section.module.css'

const Section = ({ title, children }) => {
    return (
    <>
        <h2>{title}</h2>
        {children}
    </>
    );
};

export default Section;