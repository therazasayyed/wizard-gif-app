import React from 'react';

const WizardGif = () => {
    const gifUrl = 'https://www.wizard.financial/static/media/wizaart-img.56787174.gif';



    return (
        <div className='wizard-container'>
            <img
                src={gifUrl}
                alt="Wizard"
                className='wizard-image'
            />
        </div>
    );
};

export default WizardGif;
